import { Component, OnInit } from '@angular/core';
import { NavbarService } from "../../services/navbar.service";

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsListComponent implements OnInit {
  notifications: Notification;
  constructor(
    private navbarService: NavbarService
  ) { }

  ngOnInit() {
    this.navbarService.getNotifications().subscribe((notifications: Notification) => {
      if (notifications) {
        this.notifications = notifications;
      }
    });
  }
}
