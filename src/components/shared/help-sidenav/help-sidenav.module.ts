import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpSidenavComponent } from './help-sidenav.component';



@NgModule({
  exports: [
    HelpSidenavComponent
  ],
  declarations: [
    HelpSidenavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HelpSidenavModule { }
