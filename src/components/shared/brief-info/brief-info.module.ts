import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BriefInfoComponent } from './brief-info.component';



@NgModule({
  exports:[
    BriefInfoComponent
  ],
  declarations: [
    BriefInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BriefInfoModule { }
