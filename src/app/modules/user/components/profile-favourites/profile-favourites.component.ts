import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { MyImages } from "../../../../common/interfaces/MyImages";
import { DefaultServerAnswer } from "../../../../common/interfaces/DefaultServerAnswer";
import { MessageService } from "primeng/api";
import { ImagesAnswer } from "../../../../common/interfaces/ImagesAnswer";

@Component({
  selector: 'app-profile-favourites',
  templateUrl: './profile-favourites.component.html',
  styleUrls: ['./profile-favourites.component.css']
})
export class ProfileFavouritesComponent implements OnInit {
  favourites: MyImages[];
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userService.getFavourites(id).subscribe((data: ImagesAnswer) => {
      this.favourites = data.images;
    }, (err: DefaultServerAnswer) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    });
  }
}
