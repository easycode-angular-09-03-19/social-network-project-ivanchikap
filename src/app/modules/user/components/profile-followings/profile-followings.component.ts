import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../common/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { FollowersFollowingsAnswer } from "../../../../common/interfaces/FollowersFollowingsAnswer";
import { MyFollowersFollowings } from "../../../../common/interfaces/MyFollowersFollowings";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-profile-followings',
  templateUrl: './profile-followings.component.html',
  styleUrls: ['./profile-followings.component.css']
})
export class ProfileFollowingsComponent implements OnInit {
  followings: MyFollowersFollowings[];
  isItFollowings = true;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userService.getFollowings(id).subscribe((data: FollowersFollowingsAnswer) => {
      this.followings = data.users;
    }, (err) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    });
  }
}
