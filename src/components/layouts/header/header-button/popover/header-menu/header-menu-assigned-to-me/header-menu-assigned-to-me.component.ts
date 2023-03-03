import { Component, OnInit } from '@angular/core';
import { ProjectsRepository } from 'src/components/shared/state/projects.repository';
import { UserRepository } from 'src/components/shared/state/user.repository';
import { Ticket } from 'src/models/ticket';
import { User } from 'src/models/user';
import { ApiService } from 'src/services/api.service';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-header-menu-assigned-to-me',
  templateUrl: './header-menu-assigned-to-me.component.html',
  styleUrls: ['./header-menu-assigned-to-me.component.scss']
})
export class HeaderMenuAssignedToMeComponent extends BaseComponent implements OnInit {

  public ticketsAssignedToMe: any[]  = [];
  public currentUser!: User | null

  constructor(
    private readonly _apiService: ApiService,
    private readonly _userRepository :UserRepository
    ) {
    super();
  }


    //try to get only name
  ngOnInit(): void {
    this._userRepository.state$.subscribe((user) =>  this.currentUser = user);

    this._apiService.GetTicketsAssignedToUSer(this.currentUser!.id).subscribe((data:any) =>{
      this.ticketsAssignedToMe = data
    }  );
  }

  public GoTOWorkPage(){

  }
}
