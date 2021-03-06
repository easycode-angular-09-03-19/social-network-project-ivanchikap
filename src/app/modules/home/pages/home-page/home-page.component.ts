import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/home.service";
import { HomePageInfo } from "../../interfaces/HomePageInfo";
import { MyChallenges } from "../../interfaces/MyChallenges";
import { zip } from "rxjs/internal/observable/zip";
import { HttpErrorResponse } from "../../../../common-interfaces/HttpErrorResponse";
import { MessageService } from "primeng/api";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  homePageData: HomePageInfo;
  challenges: MyChallenges;
  constructor(
    private homeService: HomeService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    zip(
      this.homeService.getHomePage(),
      this.homeService.getActiveChallenges()
    )
      .subscribe(([homePageData, {challenges}
      ]: any) => {
        this.homePageData = homePageData;
        this.challenges = challenges;
    }, (err: HttpErrorResponse) => {
        this.messageService.add({
          severity: err.error, summary: err.message, detail: err.message
        });
      });
  }
}
