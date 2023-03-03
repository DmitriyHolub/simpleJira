import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogComponent } from './backlog.component';
import {MatSidenavModule,MatSidenavContent,MatSidenav} from '@angular/material/sidenav';


@NgModule({
  exports:[
    BacklogComponent
  ],
  declarations: [
    BacklogComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
  ]
})
export class BacklogModule { }
