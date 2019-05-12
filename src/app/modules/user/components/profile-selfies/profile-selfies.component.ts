import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { ImagesAnswer } from "../../../../common/interfaces/ImagesAnswer";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";
import { UploadPhotosAnswer } from "../../../../common/interfaces/UploadPhotosAnswer";
import {MessageService} from "primeng/api";
import {DefaultServerAnswer} from "../../../../common/interfaces/DefaultServerAnswer";
import {MyImages} from "../../../../common/interfaces/MyImages";

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images: MyImages[];
  id: string;
  authUserId: string;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private globalAuth: GlobalAuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.authUserId = this.globalAuth.userId;
    this.getPhotos();
  }
  getPhotos() {
    this.userService.getImages(this.id).subscribe((images: ImagesAnswer) => {
      this.images = images.images;
    }, (err: DefaultServerAnswer) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    })
  }

  loadPhotos(input) {
    const files = Array.from(input.files);
    this.userService.uploadPhotos(files).subscribe((data: UploadPhotosAnswer) => {
      if (!data.error) {
        this.getPhotos();
        this.messageService.add({severity: 'success', summary: data.message, detail: 'Success'});
      }
    }, (err: DefaultServerAnswer) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    });
  }
}
