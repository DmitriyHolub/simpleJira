import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketInfoComponent } from './ticket-info.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddressBarModule } from 'src/components/shared/address-bar/address-bar.module';
import { TicketInfoMainContentModule } from 'src/components/shared/ticket-info/ticket-info-main-content/ticket-info-main-content.module';
import { TicketInfoDetailsModule } from 'src/components/shared/ticket-info/ticket-info-details/ticket-info-details.module';



@NgModule({
  exports:[
    TicketInfoComponent
  ],
  declarations: [
    TicketInfoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    AddressBarModule,
    TicketInfoMainContentModule,
    TicketInfoDetailsModule,
  ]
})
export class TicketInfoModule { }
