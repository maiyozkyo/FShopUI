import { NgModule } from '@angular/core';
import { ShareComponent } from './share.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShareComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [ShareComponent, HeaderComponent],
})
export class ShareModule {}
