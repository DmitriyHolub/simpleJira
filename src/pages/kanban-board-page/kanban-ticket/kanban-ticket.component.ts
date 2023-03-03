
import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TicketModalComponent } from 'src/pages/modals/ticket-modal/ticket-modal.component';
import { ApiService } from 'src/services/api.service';
import { Ticket } from 'src/models/ticket';

@Component({
  selector: 'app-kanban-ticket',
  templateUrl: './kanban-ticket.component.html',
  styleUrls: ['./kanban-ticket.component.scss']
})
export class KanbanTicketComponent implements OnInit {

  public isTicketDisabled: boolean = false;
  constructor(
    private readonly _dialog: MatDialog,
    private readonly _apiService: ApiService,
  ) { }

  @Input() ticket! : Ticket | null;
  ngOnInit(): void {
  }

  openModal(tickedId:number ){

    if(!this.isTicketDisabled){
      this.isTicketDisabled = true;

      let data = this._apiService.GetDataTicketInformation(1, tickedId).subscribe((data) =>{

        this._dialog.open(TicketModalComponent, {
          data: data,
          panelClass: 'create-issue-modal-project-select',
          height: '80%',
          width: '60%',
        })
      })

    }
    this.isTicketDisabled = false;
  }
}
