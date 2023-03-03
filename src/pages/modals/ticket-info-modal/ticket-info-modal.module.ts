import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketInfoModalComponent } from './ticket-info-modal.component';



@NgModule({
  exports: [
    TicketInfoModalComponent
  ],
  declarations: [
    TicketInfoModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketInfoModalModule { }
