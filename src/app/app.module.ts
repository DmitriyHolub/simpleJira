import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../components/app-routes/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/layouts/header/header.component';
import { SidebarComponent } from '../components/layouts/sidebar/sidebar.component';
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
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
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
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import { KanbanBoardPageModule } from 'src/pages/kanban-board-page/kanban-board-page.module';
import { LoginModule } from 'src/pages/login/login.module';
import { CreateIssueModalModule } from 'src/components/layouts/header/modals/create-issue-modal/create-issue-modal.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
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
    MatTooltipModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    DialogHeaderModule,
    MatTabsModule,
    MatBadgeModule,
    LoginModule,
    CreateIssueModalModule
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
    console.log("start");
    svgIconService.initialise();
  }
 }
