import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { NavbarService } from "./services/navbar.service";
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { NotificationsListComponent } from './components/notifications-list/notifications-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NotificationItemComponent,
    NotificationsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule
  ],
  providers: [
    NavbarService
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
