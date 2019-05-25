import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MyImages } from "../../interfaces/MyImages";
import {MyNews} from "../../interfaces/MyNews";

@Component({
  selector: 'app-preview-img',
  templateUrl: './preview-img.component.html',
  styleUrls: ['./preview-img.component.css']
})
export class PreviewImgComponent implements OnInit, OnChanges {
  @Input() item: MyImages;
  @Input() imagesOfOwner: MyNews;
  @Input() imagesOfOwnerFromWinners: MyImages;
  showModal = false;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  }
  onGridItemClick() {
    this.showModal = true;
  }
  onOutputEvent(msg) {
    this.showModal = !msg;
  }
}
