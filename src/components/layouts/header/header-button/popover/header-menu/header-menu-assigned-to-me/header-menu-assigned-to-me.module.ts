import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuAssignedToMeComponent } from './header-menu-assigned-to-me.component';
import { BriefInfoModule } from 'src/components/shared/brief-info/brief-info.module';



@NgModule({
  exports: [
    HeaderMenuAssignedToMeComponent
  ],
  declarations: [
    HeaderMenuAssignedToMeComponent
  ],
  imports: [
    CommonModule,
    BriefInfoModule
  ]
})
export class HeaderMenuAssignedToMeModule { }
