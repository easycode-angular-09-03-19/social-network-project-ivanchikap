import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgInfoComponent } from "./components/img-info/img-info.component";
import {SliderDirectiveModule} from "../slider-directive/slider-directive.module";


@NgModule({
  declarations: [
    ImgInfoComponent

  ],
  imports: [
    CommonModule,
    SliderDirectiveModule
  ],
  providers: [

  ],
  exports: [
    ImgInfoComponent
  ]
})
export class ImgInfoModalModule { }
