import { Component, Input, OnInit } from '@angular/core';
import { MyFollowersFollowings } from "../../../../common/interfaces/MyFollowersFollowings";
import { UserService } from "../../../../common/services/user.service";
import { DefaultServerAnswer } from "../../../../common/interfaces/DefaultServerAnswer";
import { ActivatedRoute } from "@angular/router";
import { FollowersFollowingsAnswer } from "../../../../common/interfaces/FollowersFollowingsAnswer";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-profile-follows',
  templateUrl: './profile-follows.component.html',
  styleUrls: ['./profile-follows.component.css']
})
export class ProfileFollowsComponent implements OnInit {
  @Input() follower: MyFollowersFollowings;
  @Input() isItFollowings: boolean;
  amIFollow: boolean;
  buttonText = '';
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    if (!this.isItFollowings) {
      this.userService.getFollowings(id).subscribe((followingsAnswer: FollowersFollowingsAnswer) => {
        for (let user of followingsAnswer.users) {
          if (user._id === this.follower._id) {
            this.amIFollow = true;
            this.buttonText = 'Followings'
          }
        }
      }, (err) => {
        this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
      });
    }
    this.amIFollow = this.isItFollowings;
    this.buttonText = this.amIFollow ? 'Following' : 'Follow';
  }
  onFollowClick(id: string) {
    this.userService.followUnFollow(id).subscribe((data: DefaultServerAnswer) => {
      if(!data.error) {
        this.amIFollow = !this.amIFollow;
        this.buttonText = this.amIFollow ? 'Following' : 'Follow';
      }
    }, (err) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    });
  }
}
