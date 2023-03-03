import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-header-menu-recent',
  templateUrl: './header-menu-recent.component.html',
  styleUrls: ['./header-menu-recent.component.scss']
})
export class HeaderMenuRecentComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
