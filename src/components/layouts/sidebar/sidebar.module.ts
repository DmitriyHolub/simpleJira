import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar.component';



@NgModule({
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class SidebarModule { }
