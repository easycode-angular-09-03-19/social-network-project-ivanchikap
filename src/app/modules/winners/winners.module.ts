import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WinnersRoutingModule } from './winners-routing.module';
import { WinnersComponent } from './pages/winners/winners.component';
import {NewsModule} from "../news/news.module";
import { WinnersListComponent } from './components/winners-list/winners-list.component';
import { WinnersItemComponent } from './components/winners-item/winners-item.component';
import { ImgLoaderDirective } from "../../directives/img-loader.directive";
import { ScrollDispatchModule } from "@angular/cdk/scrolling";
import {SliderDirective} from "../slider-directive/directives/slider.directive";
import {ImgInfoModalModule} from "../img-info-modal/img-info-modal.module";
// import {PreviewImgComponent} from "../../common/components/preview-img/preview-img.component";


@NgModule({
  declarations: [
    WinnersComponent,
    WinnersListComponent,
    WinnersItemComponent
  ],
  imports: [
    CommonModule,
    WinnersRoutingModule,
    NewsModule,
    ScrollDispatchModule,
    ImgInfoModalModule
  ],
})
export class WinnersModule { }
