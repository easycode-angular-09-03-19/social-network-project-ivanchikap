import { Component, Input, OnInit } from '@angular/core';
import { MyUser } from "../../../../common/interfaces/MyUser";

@Component({
  selector: 'app-profile-tabs-container',
  templateUrl: './profile-tabs-container.component.html',
  styleUrls: ['./profile-tabs-container.component.css']
})
export class ProfileTabsContainerComponent implements OnInit {
  @Input() activeTab;
  @Input() user: MyUser;

  constructor() { }

  ngOnInit() {
  }

}
