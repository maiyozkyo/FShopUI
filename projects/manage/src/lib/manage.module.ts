import { NgModule } from '@angular/core';
import { ManageComponent } from './manage.component';
import { ShareModule } from 'projects/share/src/public-api';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagementsComponent } from './managements/managements.component';
@NgModule({
  declarations: [ManageComponent, ManagementsComponent],
  imports: [ShareModule, CommonModule, ReactiveFormsModule],
  exports: [ManageComponent],
})
export class ManageModule {}
