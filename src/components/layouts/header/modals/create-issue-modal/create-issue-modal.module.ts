import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateIssueModalComponent } from './create-issue-modal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DialogHeaderModule } from 'src/components/shared/dialog-header/dialog-header.module';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { UploadFileDirective } from './upload-file.directive';



@NgModule({
  declarations: [
    CreateIssueModalComponent,
    UploadFileDirective
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    DialogHeaderModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatDividerModule
  ],
  exports: [
    CreateIssueModalComponent
  ]
})
export class CreateIssueModalModule { }
