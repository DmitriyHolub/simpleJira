import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/models/ticket';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-ticket-info-main-content',
  templateUrl: './ticket-info-main-content.component.html',
  styleUrls: ['./ticket-info-main-content.component.scss']
})
export class TicketInfoMainContentComponent extends BaseComponent implements OnInit {

  @Input() public ticketInfo! : Ticket;
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
