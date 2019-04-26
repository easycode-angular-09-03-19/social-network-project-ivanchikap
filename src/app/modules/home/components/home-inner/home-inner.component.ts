import { Component, Input, OnInit } from '@angular/core';
import { HomePageInfo } from "../../interfaces/HomePageInfo";

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {
  @Input() data: HomePageInfo;

  constructor() { }
  ngOnInit() {
  }
}
