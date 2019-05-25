import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderDirective} from "./directives/slider.directive";

@NgModule({
  declarations: [SliderDirective],
  imports: [
    CommonModule
  ],
  exports: [
    SliderDirective
  ]
})
export class SliderDirectiveModule { }
