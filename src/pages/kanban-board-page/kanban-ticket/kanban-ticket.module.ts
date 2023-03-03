import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanTicketComponent } from './kanban-ticket.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TicketPriorityPipe } from 'src/utils/Pipes/ticket-priority.pipe';
import {MatIconModule} from '@angular/material/icon';
import { InitialsPipe } from 'src/utils/Pipes/initials.pipe';


@NgModule({
  declarations: [
    KanbanTicketComponent,
    TicketPriorityPipe,
    InitialsPipe
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatIconModule,
  ],
  exports: [
    KanbanTicketComponent
  ]
})
export class KanbanTicketModule { }
