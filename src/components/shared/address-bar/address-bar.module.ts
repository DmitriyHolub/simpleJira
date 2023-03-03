import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBarComponent } from './address-bar.component';



@NgModule({
  exports:[
    AddressBarComponent
  ],
  declarations: [
    AddressBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AddressBarModule { }
