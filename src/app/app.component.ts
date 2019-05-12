import { Component } from '@angular/core';
import { CurrentUserStoreService } from "./common/services/current-user-store.service";
import { GlobalAuthService } from "./common/services/global-auth.service";
import {RouteConfigLoadStart, Router} from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadingRouteConfig: Observable<boolean>;

  constructor(
    private currentUser: CurrentUserStoreService,
    private globalAuth: GlobalAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    if (this.globalAuth.token) {
      this.currentUser.initCurrentUser();
    }
    this.router.events.subscribe((event) => {
      this.loadingRouteConfig = this.router.events.pipe(map(event => {
        return event instanceof RouteConfigLoadStart;
      }));
    });
  }
}
