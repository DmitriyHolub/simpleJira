import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
import { Observable } from 'rxjs';
import { Project } from 'src/models/project';

//mock
interface projectState {
  project: Project
}

const initialState: projectState = {
  project: {} as  Project
} as projectState;

const store = createStore(
  { name: 'project' },
  withProps<projectState>(initialState)
);

@Injectable({
  providedIn: 'root',
})

//TODO how to solve
export class ProjectsRepository {
  public projectName$: Observable<string> = store.pipe(
    select((state) => state.project.name)
  );
  // public projectId$: Observable<number> = store.pipe(
  //   select((state) => state.id)
  // );

  public UpdateProject(project: Project,clearSearchResult = false): void{


      if (clearSearchResult) {
        project = project ?? ({} as Project);
        this._shallowUpdate({project});
      } else {
        this._shallowUpdate({ project });
      }

    this._shallowUpdate({project});
  }
  public state$: Observable<Project> = store.pipe(
    select((state) => state.project)
  );

  //what to do with this
  public name$: Observable<string> = store.pipe(select((state) => state.project.name));

  private _shallowUpdate(newState: Partial<projectState>): void {
    store.update((state) => ({ ...state, ...newState }));
  }

  constructor() {}
}
