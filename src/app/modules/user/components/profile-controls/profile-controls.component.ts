import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { map} from "rxjs/operators";
import { Observable } from "rxjs";
import {MyUser} from "../../../../common/interfaces/MyUser";

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit {
  @Input() user: MyUser;
  activeTab: Observable<string>;
  tabList = [
    {
      tab: 'selfies',
      text: 'SELFIES',
      type: 'my_images'
    },
    {
      tab: 'glories',
      text: 'MY GLORIES',
      type: 'glories'
    },
    {
      tab: 'favourites',
      text: 'FAVOURITES',
      type: 'favourites'
    },
    {
      tab: 'followers',
      text: 'FOLLOWERS',
      type: 'followers'
    },
    {
      tab: 'followings',
      text: 'FOLLOWINGS',
      type: 'followings'
    }
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activeTab = this.route.queryParams.pipe(map((params) => params.tab));

    this.route.queryParams.subscribe((params) => {
      const isValidTab = this.tabList.some((item) => item.tab === params.tab);
      if (!params.tab || !isValidTab) {
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { tab: 'selfies' }
        });
      }
    });
  }
}
