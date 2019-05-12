import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../../../common/services/user.service";
import { MyFollowersFollowings } from "../../../../common/interfaces/MyFollowersFollowings";
import { FollowersFollowingsAnswer } from "../../../../common/interfaces/FollowersFollowingsAnswer";
import { MessageService } from "primeng/api";


@Component({
  selector: 'app-profile-followers',
  templateUrl: './profile-followers.component.html',
  styleUrls: ['./profile-followers.component.css']
})
export class ProfileFollowersComponent implements OnInit {
  followers: MyFollowersFollowings[];
  isItFollowingsTab = false;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userService.getFollowers(id).subscribe((data: FollowersFollowingsAnswer) => {
      this.followers = data.users;
    }, (err) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    });
  }
}
