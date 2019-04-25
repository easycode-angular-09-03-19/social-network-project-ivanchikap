import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-picture-preview',
  templateUrl: './picture-preview.component.html',
  styleUrls: ['./picture-preview.component.css']
})
export class PicturePreviewComponent implements OnInit {
  @Input() img;
  constructor() { }

  ngOnInit() {
    console.log(this.img);
  }

}
