import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { MatProgressSpinnerModule } from "@angular/material";

@NgModule({
  declarations: [LoaderComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderComponent
  ]
})
export class LoaderModule { }
