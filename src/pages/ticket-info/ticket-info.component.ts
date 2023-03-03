import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRepository } from 'src/components/shared/state/user.repository';
import { Ticket } from 'src/models/ticket';
import { User } from 'src/models/user';
import { ApiService } from 'src/services/api.service';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.scss'],
})
export class TicketInfoComponent extends BaseComponent implements OnInit {
  public currentTicketId!: number | 0;
  public ticketInfo!: Ticket;
  public user!: User | null;

  constructor(
    private route: ActivatedRoute,
    private readonly _apiService: ApiService,
    private readonly _userRepository: UserRepository,
    private readonly router: Router
  ) {
    super();
    route.params.subscribe((params) => (this.currentTicketId = params['id']));
  }
  ngOnInit(): void {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this._userRepository.state$.subscribe((user) => (this.user = user));
    this._apiService
      .GetFullTicketInfo(this.user!.id, this.currentTicketId)
      .subscribe((ticket) => (this.ticketInfo = ticket));
  }
}
