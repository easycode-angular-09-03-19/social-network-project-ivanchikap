import { Component } from '@angular/core';
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson7';
  constructor(
    private messageService: MessageService
  ) {}

  // onClick() {
  //   this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
  // }
}
