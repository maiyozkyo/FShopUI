import { NgModule } from '@angular/core';
import { ShareComponent } from './share.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FshopListComponent } from './fshop-list/fshop-list.component';

@NgModule({
  declarations: [ShareComponent, HeaderComponent, FshopListComponent],
  imports: [CommonModule],
  exports: [ShareComponent, HeaderComponent, FshopListComponent],
})
export class ShareModule {}
