
import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/services/api.service';
import { Ticket } from 'src/models/ticket';
import { TicketInfoComponent } from 'src/pages/ticket-info/ticket-info.component';
import { User } from 'src/models/user';
import { UserRepository } from 'src/components/shared/state/user.repository';
import { TicketInfoModalComponent } from 'src/pages/modals/ticket-info-modal/ticket-info-modal.component';

@Component({
  selector: 'app-kanban-ticket',
  templateUrl: './kanban-ticket.component.html',
  styleUrls: ['./kanban-ticket.component.scss']
})
export class KanbanTicketComponent implements OnInit {

  public isTicketDisabled: boolean = false;
  public currentUser!: User | null;
  constructor(
    private readonly _dialog: MatDialog,
    private readonly _apiService: ApiService,
    private readonly _userRepository: UserRepository
  ) { }

  @Input() ticket : any = {};
  ngOnInit(): void {
  }

  openModal(tickedId:number ){

    if(!this.isTicketDisabled){
      this.isTicketDisabled = true;

      this._userRepository.state$.subscribe((user) => this.currentUser = user);
      let data = this._apiService.GetDataTicketInformation(this.currentUser!.id, tickedId).subscribe((data) =>{

        this._dialog.open(TicketInfoModalComponent, {
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
