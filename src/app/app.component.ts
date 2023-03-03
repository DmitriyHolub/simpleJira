import { Component } from '@angular/core';
import { SideBarService } from 'src/services/side-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// const _apiRoot: string = "localhost";
export class AppComponent {
  title = 'simpleJira';
  public isSidebarExpanded :boolean = false;

  constructor(private readonly _sideBarService: SideBarService) {}
  // refactoring all from approot
  ngOnInit(): void {
    this._sideBarService.sidebarMenu$.subscribe((condition) => this.isSidebarExpanded = condition);
  }
}
