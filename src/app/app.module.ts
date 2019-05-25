import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { NavbarModule } from "./modules/navbar/navbar.module";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { MatProgressBarModule } from "@angular/material";
import { NewsModule } from "./modules/news/news.module";
import { WinnersModule } from "./modules/winners/winners.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    NavbarModule,
    MatProgressBarModule,
    NewsModule,
    WinnersModule
  ],
  providers: [
    MessageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
