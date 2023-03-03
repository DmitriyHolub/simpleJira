import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { map, tap } from 'rxjs';
import { ProjectsRepository } from 'src/components/shared/state/projects.repository';
import { IssueType } from 'src/models/issueType';
import { Project } from 'src/models/project';
import { Ticket } from 'src/models/ticket';
import { TicketPriority } from 'src/models/ticketPriority';
import { ApiService } from 'src/services/api.service';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-create-issue-modal',
  templateUrl: './create-issue-modal.component.html',
  styleUrls: ['./create-issue-modal.component.scss'],
})
export class CreateIssueModalComponent
  extends BaseComponent
  implements OnInit
{
  title: string = 'Create issue';
  projectList: Project[] = [];
  issueTypesList: IssueType[] = [];
  issuePriorityList: TicketPriority[] = [];
  public createIssueForm!: FormGroup;

  constructor(
    public readonly dialogRef: MatDialogRef<CreateIssueModalComponent>,
    private readonly _projectsRepository: ProjectsRepository,
    private readonly _apiService: ApiService
  ) {
    super();
  }

  ngOnInit(): void {
    this.createIssueForm = new FormGroup({
      project: new FormControl('', [Validators.required]),
      issueName: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      issueType: new FormControl('', [Validators.required]),
      issuePriority: new FormControl('', [Validators.required]),
    });

    this._apiService.GetProjects().subscribe((data) => {
      this.projectList = data;
    });
    this._apiService.GetIssueTypes().subscribe((data) => {
      this.issueTypesList = data;
    });

    if(true){
      this._apiService.GetTicketPriorities().subscribe((data) => {
        this.issuePriorityList = data;
      });
    }

  }

  close() {
    this.dialogRef.close();
  }

  additionalOptions() {
    console.log('additionalOptions');
  }

  importIssue() {
    console.log('importIssue');
  }

  submit() {
    if (this.createIssueForm.valid) {
console.log(this.createIssueForm)

      this._projectsRepository.state$.subscribe((state) =>{

        // id: number;
        // name:string,
        // type: string,
        // priority: string,
        // code:string,
        // assignee: string,
        // dateCreated : Date

        var ticket = {} as Ticket;
        ticket.id= Math.floor(Math.random() * (250 - 20 + 1)) + 20;
        ticket.name = this.createIssueForm.value['issueName'];
        ticket.priority = this.createIssueForm.value['issuePriority'];
        ticket.type = this.createIssueForm.value['issueType'];
        ticket.dateCreated = new Date();
        ticket.code = `DCSS - ${(Math.random() * (250 - 20 + 1)) + 20}`;
        state.Columns[0].tickets.push(ticket);

      })
      // this._apiService.addNewTicketToProject(this.createIssueForm.value).pipe(
      //   map(() => {
      //     // name: this.createIssueForm.value.projectName;
      //     // tickets: [this.createIssueForm.value.projectTicket];
      //   }),
      //   tap((data) => {
      //     console.log("data");
      //     console.log(data);
      //   })
      // )




    } else {
      console.log('disabled');
    }

    this.dialogRef.close();
  }

  cancelCreatingIssue() {
    this.dialogRef.close();
  }
}
