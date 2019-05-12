import { Component, OnInit } from '@angular/core';
import { HomeService } from "../../services/home.service";
import { HomePageInfo } from "../../interfaces/HomePageInfo";
import { MyChallenges } from "../../interfaces/MyChallenges";
import { zip } from "rxjs/internal/observable/zip";
import { MessageService } from "primeng/api";
import { DefaultServerAnswer } from "../../../../common/interfaces/DefaultServerAnswer";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLoading = true;
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
      .subscribe(([homePageData, {challenges}]: any) => {
        this.homePageData = homePageData;
        this.challenges = challenges;
    }, (err: DefaultServerAnswer) => {
        this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
      }, () => {
        this.isLoading = false;
      });
  }
}
