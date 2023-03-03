import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BaseComponent } from 'src/utils/base-component/base.component';
import { ProjectsRepository } from 'src/components/shared/state/projects.repository';
import { Project } from 'src/models/project';
import { Column } from 'src/models/column';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserRepository } from 'src/components/shared/state/user.repository';
import { User } from 'src/models/user';

@Component({
  selector: 'app-kanban-board-page',
  templateUrl: './kanban-board-page.component.html',
  styleUrls: ['./kanban-board-page.component.scss'],
})
export class KanbanBoardPageComponent extends BaseComponent implements OnInit {
  public projectColumsData!: Column[];
  public projectName!: string | null;
  public showProgressSpinner: boolean = true;
  public currentProjectId!: number | 0;
  public user!: User | null;

  private state!: Project | null;
  private querySubscription: Subscription;

  constructor(
    private readonly router: Router,
    private readonly _apiService: ApiService,
    private readonly _projectsRepository: ProjectsRepository,
    private readonly _userRepository: UserRepository,
    private route: ActivatedRoute
  ) {
    super();
    this.querySubscription = route.params.subscribe(
      (params) => (this.currentProjectId = params['id'])
    );
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._userRepository.state$.subscribe(user => this.user = user);

    this._apiService
      .GetProjectTicketsKanbangBoard(this.user!.id, this.currentProjectId)
      .subscribe((data) => {
        this.showProgressSpinner = false;
        this._projectsRepository.UpdateProject(data);

        this._projectsRepository.state$.subscribe((state) => {
          this.projectColumsData = state.Columns;
          this.projectName = state.name;
          this.currentProjectId = state.id;
        });
      });
  }

  drop(event: CdkDragDrop<any>) {
    this._apiService
      .updateProjectColumns(
        [event.container.data, event.previousContainer.data],
        this.currentProjectId
      )
      .subscribe(() => console.log());

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
