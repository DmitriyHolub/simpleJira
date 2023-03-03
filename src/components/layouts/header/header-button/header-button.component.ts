import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.scss']
})
export class HeaderButtonComponent implements OnInit {

  constructor() { }

  @Input() button: any;
  ngOnInit(): void {
  }

}
