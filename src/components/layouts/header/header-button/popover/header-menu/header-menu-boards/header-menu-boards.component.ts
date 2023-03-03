import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-header-menu-boards',
  templateUrl: './header-menu-boards.component.html',
  styleUrls: ['./header-menu-boards.component.scss']
})
export class HeaderMenuBoardsComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
