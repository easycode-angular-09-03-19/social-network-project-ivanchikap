import { Component, Input, OnInit } from '@angular/core';
import { MyWinners } from "../../../../common/interfaces/MyWinners";

@Component({
  selector: 'app-winners-item',
  templateUrl: './winners-item.component.html',
  styleUrls: ['./winners-item.component.css']
})
export class WinnersItemComponent implements OnInit {
  @Input() item: MyWinners[];
  constructor() { }

  ngOnInit() {
  }

}
