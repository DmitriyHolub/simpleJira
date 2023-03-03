import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketInfoMainContentComponent } from './ticket-info-main-content.component';



@NgModule({
  exports: [
    TicketInfoMainContentComponent
  ],
  declarations: [
    TicketInfoMainContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TicketInfoMainContentModule { }
