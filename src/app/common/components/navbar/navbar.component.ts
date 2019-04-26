import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavbarService } from "../../../common-services/navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHidden = true;
  showNotifications = false;
  notifications: Notification;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navbarService: NavbarService
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd)
    )
      .subscribe((event) => {
        this.activatedRoute.firstChild.data.subscribe((value) => {
          this.isHidden = value.withoutHeader;
        });
      });

    this.navbarService.getNotifications(localStorage.getItem('sn_app_token')).subscribe((notifications: Notification) => {
      if (notifications) {
        this.notifications = notifications;
      }
    });
  }
}
