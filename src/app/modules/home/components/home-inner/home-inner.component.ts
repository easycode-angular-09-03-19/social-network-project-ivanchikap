import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {
  @Input() data;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via Message Service'});
  }
}
