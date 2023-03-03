import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuRecentComponent } from './header-menu-recent.component';


@NgModule({
  exports:[
    HeaderMenuRecentComponent
  ],
  declarations: [
    HeaderMenuRecentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderMenuRecentModule { }
