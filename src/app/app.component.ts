import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserRepository } from 'src/components/shared/state/user.repository';
import { User } from 'src/models/user';
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
  public ishelpSidenavExpanded: boolean = false

  @ViewChild("drawer", {static: false})
  private drawer: any | undefined;

  constructor(
    private readonly _sideBarService: SideBarService,
    private readonly _userRepository :UserRepository
    ) {}
  // refactoring all from approot
  ngOnInit(): void {
    this._sideBarService.sidebarMenu$.subscribe((condition) => this.isSidebarExpanded = condition);

    //temperory get current user, cause the login page doesn't implement.
    this._userRepository.UpdateUser(this.user)
  }

  helpButtonEvent(){
    this.drawer.toggle();
    this.ishelpSidenavExpanded = !this.ishelpSidenavExpanded;
  }

  private user = {
    id : 2,
    projectsId:[1,2],
    name: "Dzmitry Holub",
    ticketsId: [4]
  }
}
