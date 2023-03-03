import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from 'src/pages/backlog/backlog.component';
import { ComponentsComponent } from 'src/pages/components/components.component';
import { IssuesComponent } from 'src/pages/issues/issues.component';
import { KanbanBoardPageComponent } from 'src/pages/kanban-board-page/kanban-board-page.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { ReportsComponent } from 'src/pages/reports/reports.component';
import { RoadmapComponent } from 'src/pages/roadmap/roadmap.component';
import { TicketInfoComponent } from 'src/pages/ticket-info/ticket-info.component';

const routes: Routes = [
  {path: '', component: KanbanBoardPageComponent},
  { path: 'KanbanBoard', component: KanbanBoardPageComponent},
  { path: 'KanbanBoard/:id', component: KanbanBoardPageComponent},
  //{ path: 'backlog', component: BacklogComponent},
  { path: 'ticket/:id', component: TicketInfoComponent},
  { path: 'components', component: ComponentsComponent},
  { path: 'issues', component: IssuesComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'backlog', component: BacklogComponent},
  { path: 'roadmap', component: RoadmapComponent},
  { path: 'login', component: LoginComponent},
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
