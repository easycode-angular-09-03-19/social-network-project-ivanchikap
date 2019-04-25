import { Component, Input, OnInit } from '@angular/core';
import { MyUser } from "../../../../common/interfaces/MyUser";

@Component({
  selector: 'app-profile-controls',
  templateUrl: './profile-controls.component.html',
  styleUrls: ['./profile-controls.component.css']
})
export class ProfileControlsComponent implements OnInit {
  @Input() user: MyUser;

  constructor() { }

  ngOnInit() {
  }

}
