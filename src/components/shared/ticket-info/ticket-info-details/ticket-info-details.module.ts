import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketInfoDetailsComponent } from './ticket-info-details.component';



@NgModule({
  exports: [
    TicketInfoDetailsComponent
  ],
  declarations: [
    TicketInfoDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketInfoDetailsModule { }
