import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-profile-tabs-container',
  templateUrl: './profile-tabs-container.component.html',
  styleUrls: ['./profile-tabs-container.component.css']
})
export class ProfileTabsContainerComponent implements OnInit {
  activeTab: Observable<string>;
  constructor(
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.activeTab = this.route.queryParams.pipe(map((params) => params.tab));
  }
}
