import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareModule } from 'projects/share/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ShareModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
