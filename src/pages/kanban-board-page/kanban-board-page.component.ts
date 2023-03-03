
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { BaseComponent } from 'src/utils/base-component/base.component';
import { ProjectsRepository } from 'src/components/shared/state/projects.repository';
import { Project } from 'src/models/project';
import { Column } from 'src/models/column';

@Component({
  selector: 'app-kanban-board-page',
  templateUrl: './kanban-board-page.component.html',
  styleUrls: ['./kanban-board-page.component.scss']
})
export class KanbanBoardPageComponent
  extends BaseComponent
  implements OnInit {

    public projectColumsData!: Column[];
    public projectName!:string | null;
    public showProgressSpinner : boolean = true;
    public currentProjectId! : number | 0;

    private state! : Project | null;

  constructor(
    private readonly _apiService: ApiService,
    private readonly _projectsRepository :ProjectsRepository) {
    super();
  }

  ngOnInit(): void {
  this._apiService.GetProjectTicketsKanbangBoard(1,1) // pass user id and project id
    .subscribe((data) => {
      this.showProgressSpinner = false;
      this._projectsRepository.UpdateProject(data);

      this._projectsRepository.state$.subscribe((state) =>{
        this.projectColumsData = state.Columns;
        this.projectName = state.name;
        this.currentProjectId = state.id;
      })


    })
  }

  drop(event: CdkDragDrop<any>) {

    this._apiService.updateProjectColumns([event.container.data,event.previousContainer.data],this.currentProjectId ).
    subscribe(() => console.log())

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,

      );
    }
  }
  // this.subs = this._projectsRepository.state$.subscribe((data?:Project[]) => {
  //   var currentproject = data?.find(x => x.id = this.currentProjectId);
  //   this.projectColumsData = currentproject?.Columns ?? []
  //   this.projectName = currentproject?.name ?? ""
  //   if
  // })

}

