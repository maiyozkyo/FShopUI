import { NgModule } from '@angular/core';
import { ShareComponent } from './share.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ShareComponent, HeaderComponent],
  imports: [],
  exports: [ShareComponent, HeaderComponent],
})
export class ShareModule {}
