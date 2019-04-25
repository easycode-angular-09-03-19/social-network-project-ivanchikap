import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { MyUser } from "../../../../common/interfaces/MyUser";
import {ActivatedRoute} from "@angular/router";
import {ImagesAnswer} from "../../../../common/interfaces/ImagesAnswer";

@Component({
  selector: 'app-profile-selfies',
  templateUrl: './profile-selfies.component.html',
  styleUrls: ['./profile-selfies.component.css']
})
export class ProfileSelfiesComponent implements OnInit {
  images;
  id: string;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.userService.getImages(this.id).subscribe((images: ImagesAnswer) => {
      if(images) {
        this.images = images.images;
      }
    })
  }
}
