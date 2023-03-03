import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, debounceTime, map } from 'rxjs';
import { SideBarService } from 'src/services/side-bar.service';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent
extends BaseComponent
implements OnInit {
  public isSidebarMenuExpanded: boolean = false;
  public isSidebarMenuHovered: boolean = false;
  public projecName!: string | null;
  public activeButtonName: string = "Kanban board";

  constructor(
    private _sideBarService: SideBarService,
    private _router: Router,
    private renderer: Renderer2,
    private eRef: ElementRef
  ) {
    super();
  }
  // @HostListener('document:click', ['$event'])
  // clickout(event) {
  //   if(this.eRef.nativeElement.contains(event.target)) {
  //   } else {
  //   }
  // }
  //Get data from Api
  ngOnInit(): void {
    this.projecName = 'Get project from API';
  }
  ngAfterViewInit() {
    const sidebarMouseenter = fromEvent(
      document.getElementsByClassName('sidebarMenuHover'),
      'mouseenter'
    )
      .pipe(debounceTime(300))
      .subscribe(() => {
        if (!this.isSidebarMenuExpanded) this.isSidebarMenuHovered = true;
      });

    const sidebarMousleave = fromEvent(
      document.getElementsByClassName('sideBarLeave'),
      'mouseleave'
    )
      .pipe(debounceTime(300))
      .subscribe(() => {
        this.isSidebarMenuHovered = false;
      });
  }

  expandMenu() {
    this.isSidebarMenuExpanded = !this.isSidebarMenuExpanded;
    if (this.isSidebarMenuHovered) this.isSidebarMenuHovered = false;

    this._sideBarService.sideBarExpandEvent(this.isSidebarMenuExpanded);
  }
  expandPlanningMenu(){

  }
  clickSideBarButton(item:any){


    this.activeButtonName = item.name;


    this._router.navigate([item.route]);

  }

  public readonly sidebarPlanningMenu = [
    {
      name:'Roadmap',
      svgIcon:'simpleJira:anchor',
      translateKey: 'ROADMAP',
      route: 'roadmap'
    },
    {
      name:'Backlog',
      svgIcon:'simpleJira:filter',
      translateKey: 'BACKLOG',
      route: 'backlog'
    },
    {
      name:'Kanban board',
      svgIcon:'simpleJira:free',
      translateKey: 'KANBAN_BOARD',
      route: ''
    },
    {
      name:'Reports',
      svgIcon:'simpleJira:github',
      translateKey: 'REPORTS',
      route: 'reports'
    },
    {
      name:'Issues',
      svgIcon:'simpleJira:meh',
      translateKey: 'ISSUES',
      route: 'issues'
    },
    {
      name:'Components',
      link:'',
      svgIcon:'simpleJira:save',
      translateKey: 'COMPONENTS',
      route: 'components'
    }

  ]
}
