import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { ProfileControlsComponent } from './components/profile-controls/profile-controls.component';
import { ProfileTabsContainerComponent } from './components/profile-tabs-container/profile-tabs-container.component';
import { ProfileSelfiesComponent } from './components/profile-selfies/profile-selfies.component';
import {PicturePreviewComponent} from "../../common/components/picture-preview/picture-preview.component";
import { ProfileFavouritesComponent } from './components/profile-favourites/profile-favourites.component';
import { ProfileGloriesComponent } from './components/profile-glories/profile-glories.component';
import { ProfileFollowersComponent } from './components/profile-followers/profile-followers.component';
import { ProfileFollowingsComponent } from './components/profile-followings/profile-followings.component';
import { ProfileFollowsComponent } from './components/profile-follows/profile-follows.component';

@NgModule({
  declarations: [ProfileComponent, SettingsComponent, ProfileCoverComponent, ProfileControlsComponent, ProfileTabsContainerComponent, ProfileSelfiesComponent, PicturePreviewComponent, ProfileFavouritesComponent, ProfileGloriesComponent, ProfileFollowersComponent, ProfileFollowingsComponent, ProfileFollowsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,

  ]
})
export class UserModule { }
