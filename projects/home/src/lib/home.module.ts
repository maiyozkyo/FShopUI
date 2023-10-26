import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShareModule } from 'projects/share/src/public-api';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent, HomePageComponent],
  imports: [ShareModule, CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
