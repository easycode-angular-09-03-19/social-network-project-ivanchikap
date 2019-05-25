import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { MyNews } from "../../../../common/interfaces/MyNews";
import { FollowersFollowingsAnswer } from "../../../../common/interfaces/FollowersFollowingsAnswer";
import { DefaultServerAnswer } from "../../../../common/interfaces/DefaultServerAnswer";
import { ActivatedRoute } from "@angular/router";
import { GlobalAuthService } from "../../../../common/services/global-auth.service";
import { UserService } from "../../../../common/services/user.service";
import  {MessageService } from "primeng/api";



@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit, OnChanges {
  @Input() item: MyNews;
  amIFollow = false;
  buttonText = '';
  constructor(
    private userService: UserService,
    private globalAuth: GlobalAuthService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.buttonText = this.amIFollow ? 'Following' : 'Follow';
  }

  ngOnChanges(changes: SimpleChanges) {
    const id = this.globalAuth.userId;
    this.userService.getFollowings(id).subscribe((followingsAnswer: FollowersFollowingsAnswer) => {
      for (let user of followingsAnswer.users) {
        if (user._id === this.item.owner._id) {
          this.amIFollow = true;
          this.buttonText = 'Followings';
        }
      }
    }, (err: DefaultServerAnswer) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    });
  }
  onFollowClick(id: string) {
    this.userService.followUnFollow(id).subscribe((data: DefaultServerAnswer) => {
      if(!data.error) {
        this.amIFollow = !this.amIFollow;
        this.buttonText = this.amIFollow ? 'Following' : 'Follow';
      }
    }, (err: DefaultServerAnswer) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    });
  }
}
