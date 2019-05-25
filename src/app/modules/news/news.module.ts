import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './pages/news/news.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsRoutingModule } from "./news-routing.module";
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ImgLoaderDirective } from "../../directives/img-loader.directive";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import { MessageService } from "primeng/api";
import { AuthService } from "../auth/services/auth.service";
import { GlobalAuthService } from "../../common/services/global-auth.service";
import { PreviewImgComponent } from "../../common/components/preview-img/preview-img.component";
import { ImgInfoModalModule } from "../img-info-modal/img-info-modal.module";


@NgModule({
  declarations: [
    NewsComponent,
    NewsListComponent,
    NewsItemComponent,
    ImgLoaderDirective,
    PreviewImgComponent,
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ScrollDispatchModule,
    ImgInfoModalModule
  ],
  providers: [
    AuthService,
    GlobalAuthService,
    MessageService
  ],
  exports: [
    PreviewImgComponent,
    ImgLoaderDirective
  ]
})
export class NewsModule { }
