import { Component, ElementRef, EventEmitter, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/services/api.service';
import { CreateIssueModalComponent } from './modals/create-issue-modal/create-issue-modal.component';
import { BaseComponent } from 'src/utils/base-component/base.component';
import { HeaderService } from 'src/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent
extends BaseComponent
implements OnInit {

  public readonly buttonName:string = "Create";
  public yourWorkTabMenu:string = "Assigned to me";
  public allProjects:any[] = [];

  constructor(
    private headerService: HeaderService,
     private readonly _dialog: MatDialog,
     private readonly _apiService: ApiService,) {
    super();
  }

  @Output() helpButtonEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
  }
  change(){
  }
  Do(){
  }
  public showYourWorkButtonPopover(){
  }
  public showFiltersButtonPopover(){
  }
  public showDashboardsButtonPopover(){
  }
  public showPeopleButtonPopover(){
  }
  public showAppsButtonPopover(){
  }
  public showNotificationsButtonPopover(){
  }
  public showHelpButtonPopover(){
    this.helpButtonEvent.emit();

  }
  public showFProjectsButtonPopover(){
    this._apiService.GetProjects().subscribe((data) => this.allProjects = data)
  }
  public showSettingsButtonPopover(){
    this.headerService.toggle();
  }
  public ViewAllProjects(){
  }
  public CreateProject() {
  }

  public switchYourWorkTab (event:any){

    this.yourWorkTabMenu = event.textLabel;

  }
  public createIssueButton(){
    // take all required data for creating issue or tale it from state
    // let data = this._apiService.GetDataToCreateIssue();

    this._dialog.open(CreateIssueModalComponent, {
      data: {},
      panelClass: 'create-issue-modal-project-select',
      height: '80%',
      width: '60%',
    })
  }

  // header buttons data
  public readonly buttons = [
    {
      name : 'Your work',
      translateKey: 'YOUR_WORK',
      action: this.showYourWorkButtonPopover.bind(this),
      hide: false,
      template: "yourWork",
      svgIcon: 'simpleJira:chevron'
    },
    {
      name : 'Projects',
      translateKey: 'PROJECTS',
      action: this.showFProjectsButtonPopover.bind(this),
      hide: false,
      template: "projects",
      svgIcon: "simpleJira:chevron"
    },
    {
      name : 'Filters',
      translateKey: 'FILTERS',
      action: this.showFiltersButtonPopover.bind(this),
      hide: false,
      template: "filters",
      svgIcon: "simpleJira:chevron"
    },
    {
      name : 'Dashboards',
      translateKey: 'DASHBOARDS',
      action: this.showDashboardsButtonPopover.bind(this),
      hide: false,
      template: "dashboards",
      svgIcon: "simpleJira:chevron"
    },
    {
      name : 'People',
      translateKey: 'PEOPLE',
      action: this.showPeopleButtonPopover.bind(this),
      hide: false,
      template: "people",
      svgIcon: "simpleJira:chevron"
    },
    {
      name : 'Apps',
      translateKey: 'APPS',
      action: this.showAppsButtonPopover.bind(this),
      hide: false,
      template: "apps",
      svgIcon: "simpleJira:chevron"
    }
  ];
  // public readonly tabLinks = [
  //   {
  //     name: "Assigned to me"
  //   },
  //   {
  //     name: "Recent"
  //   },
  //   {
  //     name: "Boards"
  //   }
  // ]
  public readonly iconButtons = [
    {
      tooltip : 'Notifications',
      translateKey: 'NOTIFICATIONS',
      action: this.showNotificationsButtonPopover.bind(this),
      hide: false,
      template: "Notifications",
      svgIcon: 'simpleJira:notifications',
      // notifications get from user state
      notifications: 7
    },
    {
      tooltip : 'Help',
      translateKey: 'HELP',
      action: this.showHelpButtonPopover.bind(this),
      hide: false,
      template: "iconButton",
      svgIcon: "simpleJira:help"
    },
    {
      tooltip : 'Settings',
      translateKey: 'SETTINGS',
      action: this.showSettingsButtonPopover.bind(this),
      hide: false,
      template: "iconButton",
      svgIcon: "simpleJira:settings"
    },
  ];
}
