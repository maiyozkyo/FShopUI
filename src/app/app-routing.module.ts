import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fruits',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../../projects/auth/src/lib/auth-routing.module').then(
        (module) => module.AuthRoutingModule
      ),
  },
  {
    path: 'fruits',
    loadChildren: () =>
      import('../../projects/fruit/src/lib/fruits-routing.module').then(
        (module) => module.FruitsRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
