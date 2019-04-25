import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavbarService } from "../../services/navbar.service";
import { CurrentUserStoreService } from "../../../../common/services/current-user-store.service";
import { MyUser } from "../../../../common/interfaces/MyUser";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dropdownVisible = false;
  userAvatar: string;
  userId: string;
  isHidden = true;
  showNotifications = false;
  notifications: Notification;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private navbarService: NavbarService,
    private currentUser: CurrentUserStoreService
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

    this.navbarService.getNotifications().subscribe((notifications: Notification) => {
      if (notifications) {
        this.notifications = notifications;
      }
    });

    this.currentUser.userWatcher.subscribe(({avatar, _id }: {avatar: string, _id: string}) => {
      if (_id) {
        this.userAvatar = avatar;
        this.userId = _id;
      }
    });
  }
  signOut() {
    localStorage.removeItem('sn_app_token');
    this.userId = null;
  }
}
