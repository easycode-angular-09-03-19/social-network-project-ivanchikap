import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from "../../services/news.service";
import { NewsAnswer } from "../../../../common/interfaces/NewsAnswer";
import { MyNews } from "../../../../common/interfaces/MyNews";
import { MessageService } from "primeng/api";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { DefaultServerAnswer } from "../../../../common/interfaces/DefaultServerAnswer";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  news: MyNews[];
  part = 2;
  constructor(
    private newsService: NewsService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.newsService.getNews().subscribe((data: NewsAnswer) => {
      this.news = data.news;
    }, (err: DefaultServerAnswer) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    })
  }
  onScrollChange() {
    if (this.viewport.getDataLength() - this.viewport.getRenderedRange().end === 3 && this.viewport.getRenderedRange().end) {
      this.newsService.getNews(this.part).subscribe((data: NewsAnswer) => {
        this.news = this.news.concat(data.news);
        this.part++;
      }, (err: DefaultServerAnswer) => {
        this.messageService.add({severity: 'error', summary: err.message, detail: 'News is not downloaded'});
      });
    }
  }
  trackByIndex(i) {
    return i;
  }
}
