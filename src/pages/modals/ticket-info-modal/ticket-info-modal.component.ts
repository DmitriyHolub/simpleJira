import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-ticket-info-modal',
  templateUrl: './ticket-info-modal.component.html',
  styleUrls: ['./ticket-info-modal.component.scss']
})
export class TicketInfoModalComponent extends BaseComponent implements OnInit {

  @Input() ticket! : any | null;
  constructor(
    private _dialogRef: MatDialogRef<TicketInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super();
    this.ticket = data
   }

  ngOnInit(): void {
  }

}
