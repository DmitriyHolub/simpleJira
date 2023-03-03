import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/utils/base-component/base.component';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent
  extends BaseComponent
  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
