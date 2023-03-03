import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../components/app-routes/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderButtonComponent } from '../components/layouts/header/header-button/header-button.component';
import { ButtonComponent } from '../components/shared/button/button.component';
import { ModalWrapperComponent } from '../components/shared/modals/modal-wrapper/modal-wrapper.component';
import { ModalLoginComponent } from '../components/shared/modals/modal-login/modal-login.component';
import { ApiService } from '../services/api.service';
import { InterceptorService } from '../services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from '../components/layouts/header/search/search.component';
import { EnvironmentConfigService } from 'src/libs/environment/environment-config.service';
import { SideBarService } from 'src/services/side-bar.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_SELECT_CONFIG} from '@angular/material/select';

import { HeaderButtonPopoverYourWorkComponent } from '../components/layouts/header/header-button/popover/header-button-popover-your-work/header-button-popover-your-work.component';
import { HeaderButtonPopoverFiltersComponent } from '../components/layouts/header/header-button/popover/header-button-popover-filters/header-button-popover-filters.component';
import { DialogHeaderModule } from 'src/components/shared/dialog-header/dialog-header.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SvgIconService } from 'src/utils/icons/svg-icon.service';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { getBaseHrefFactory } from 'src/utils/get-base-href/get-base-href.factory';
import { MockInterceptorService } from 'src/services/mock-interceptor.service';
import { ProjectsRepository } from 'src/components/shared/state/projects.repository';
import { KanbanBoardPageModule } from 'src/pages/kanban-board-page/kanban-board-page.module';
import { LoginModule } from 'src/pages/login/login.module';
import { CreateIssueModalModule } from 'src/components/layouts/header/modals/create-issue-modal/create-issue-modal.module';
import { BacklogModule } from 'src/pages/backlog/backlog.module';
import { HeaderModule } from 'src/components/layouts/header/header.module';
import { SidebarModule } from 'src/components/layouts/sidebar/sidebar.module';
import { HelpSidenavModule } from 'src/components/shared/help-sidenav/help-sidenav.module';
import { TicketInfoModule } from 'src/pages/ticket-info/ticket-info.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderButtonComponent,
    ButtonComponent,
    ModalWrapperComponent,
    ModalLoginComponent,
    SearchComponent,
    HeaderButtonPopoverYourWorkComponent,
    HeaderButtonPopoverFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KanbanBoardPageModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    DialogHeaderModule,
    LoginModule,
    CreateIssueModalModule,
    BacklogModule,
    HeaderModule,
    SidebarModule,
    HelpSidenavModule,
    TicketInfoModule,

  ],
  providers: [
    ApiService,
    InterceptorService,
    EnvironmentConfigService,
    SideBarService,
    SvgIconService,
    ProjectsRepository,
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayPanelClass: 'customClass' }
    },
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHrefFactory,
      deps: [PlatformLocation]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MockInterceptorService,
      multi:true
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory:
    //     (envConfigService: EnvironmentConfigService) =>
    //     async (): Promise<EnvironmentConfig> =>{
    //       const result$ = envConfigService.load()
    //       return await firstValueFrom(result$); //TODO recheck
    //     },
    //   deps: [EnvironmentConfigService],
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(svgIconService: SvgIconService){
    svgIconService.initialise();
  }
 }
