import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardPageComponent } from './kanban-board-page.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanTicketModule } from './kanban-ticket/kanban-ticket.module';


@NgModule({
  declarations: [
    KanbanBoardPageComponent,
  ],
  imports: [
    CommonModule,
    KanbanTicketModule,
    MatProgressSpinnerModule,
    DragDropModule,
    KanbanTicketModule

  ]
})
export class KanbanBoardPageModule {}
