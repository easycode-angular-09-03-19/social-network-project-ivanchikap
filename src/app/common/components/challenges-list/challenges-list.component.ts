import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.css']
})
export class ChallengesListComponent implements OnInit {
  @Input() challenges;
  constructor() { }

  ngOnInit() {
  }

}
