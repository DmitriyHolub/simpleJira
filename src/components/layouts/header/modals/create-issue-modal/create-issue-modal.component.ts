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
import { UserRepository } from 'src/components/shared/state/user.repository';
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
  userId: number = 0 ;
  issueTypesList: IssueType[] = [];
  issuePriorityList: TicketPriority[] = [];
  public createIssueForm!: FormGroup;
  files: any[] = [];

  constructor(
    public readonly dialogRef: MatDialogRef<CreateIssueModalComponent>,
    private readonly _projectsRepository: ProjectsRepository,
    private readonly _apiService: ApiService,
    private readonly _userRepository: UserRepository
  ) {
    super();
    _userRepository.userId$.subscribe((id) => this.userId = id);
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
      uploadedFile: new FormControl(),
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

  }

  importIssue() {

  }

  submit() {
    if (this.createIssueForm.valid) {

      this._projectsRepository.state$.subscribe((state) =>{

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

    }

    this.dialogRef.close();
  }

  cancelCreatingIssue() {
    this.dialogRef.close();
  }


  //directive methods
  /**
   * handle file from multi
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    this.prepareFilesList(files.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      const reader = new FileReader();

      var url: any;
      reader.readAsDataURL(item);
      reader.onload = (_event) => {
        url = reader.result;
        this.files.push( {url, item});
      }


    }
  }
}
