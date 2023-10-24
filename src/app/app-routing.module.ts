import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'projects/share/src/lib/guards/auth.guard';

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
    canActivate: [authGuard],
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
