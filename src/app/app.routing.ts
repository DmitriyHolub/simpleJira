import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanBoardPageComponent } from 'src/pages/kanban-board-page/kanban-board-page.component';

// import { NetworkAwarePreloadStrategy } from '@ktx/core/utils';
// import { KlpAuthLandingPageModule } from '@ktx/klp-auth/landing-page';

// import { AuthInaccessibleGuard } from './auth-inaccessible.guard';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: (): Type<any> => KanbanBoardPageComponent,
        // canActivate: [AppComponent]
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
      // preloadingStrategy: NetworkAwarePreloadStrategy
    })
  ],
  exports: [RouterModule],
  // providers: [AuthInaccessibleGuard]
})
export class AppRoutingModule {}
