import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketModalComponent } from './ticket-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    TicketModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule
  ]
})
export class TicketModalModule { }
