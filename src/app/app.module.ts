import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShareModule } from 'projects/share/src/public-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from 'projects/auth/src/public-api';
import { FruitModule } from 'projects/fruit/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ShareModule,
    AuthModule,
    FruitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
