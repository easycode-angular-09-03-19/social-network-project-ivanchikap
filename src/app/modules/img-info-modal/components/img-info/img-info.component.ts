import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { ModalImageAnswer } from "../../../../common/interfaces/ModalImageAnswer";
import { MyImages } from "../../../../common/interfaces/MyImages";
import { MyNews } from "../../../../common/interfaces/MyNews";

@Component({
  selector: 'app-img-info',
  templateUrl: './img-info.component.html',
  styleUrls: ['./img-info.component.css']
})
export class ImgInfoComponent implements OnInit {
  @Input() imagesOfOwner: MyNews;
  @Input() imagesOfOwnerFromWinners: MyImages;
  @Output() modalClose = new EventEmitter();
  imgInfo = [];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    if(this.imagesOfOwner) {
      this.imagesOfOwner.pictures.forEach((picture) => {
        return this.userService.getImg(picture._id).subscribe((data: ModalImageAnswer) => {
          this.imgInfo.push(data);
        })
      });
    } else {
      this.userService.getImg(this.imagesOfOwnerFromWinners._id).subscribe((data: ModalImageAnswer) => {
          this.imgInfo.push(data);
      });
    }
  }
  onCloseClick() {
    this.modalClose.emit(true);
  }
}
