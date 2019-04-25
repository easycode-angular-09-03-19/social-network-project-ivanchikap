import { Component, Input, OnInit } from '@angular/core';
import { MyImages } from "../../interfaces/MyImages";

@Component({
  selector: 'app-picture-preview',
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.css']
})
export class PicturePreviewComponent implements OnInit {
  @Input() img: MyImages;
  constructor() { }

  ngOnInit() {
  }

}
