import { Component, OnInit, ViewChild } from '@angular/core';
import { WinnersService } from "../../services/winners.service";
import { MessageService } from "primeng/api";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { DefaultServerAnswer } from "../../../../common/interfaces/DefaultServerAnswer";
import { MyWinners } from "../../../../common/interfaces/MyWinners";
import { WinnersAnswer } from "../../../../common/interfaces/WinnersAnswer";

@Component({
  selector: 'app-winners-list',
  templateUrl: './winners-list.component.html',
  styleUrls: ['./winners-list.component.css']
})
export class WinnersListComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  winners: MyWinners[];
  part = 2;
  constructor(
    private winnersService: WinnersService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.winnersService.getWinners().subscribe((data: WinnersAnswer) => {
      let newWinners = [];
      data.winners.forEach((winner) => {
        if (winner.member_id.images[0]) {
          newWinners.push(winner);
        }
      });
      this.winners = newWinners;
    }, (err: DefaultServerAnswer) => {
      this.messageService.add({severity: 'error', summary: err.message, detail: 'Bad request'});
    });
  }
  onScrollChange() {
    if (this.viewport.getDataLength() - this.viewport.getRenderedRange().end === 3 && this.viewport.getRenderedRange().end) {
      this.winnersService.getWinners(this.part).subscribe((data: WinnersAnswer) => {
        let newWinners = [];
        data.winners.forEach((winner) => {
          if (winner.member_id.images[0]) {
            newWinners.push(winner);
          }
        });
        this.winners = this.winners.concat(newWinners);
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
