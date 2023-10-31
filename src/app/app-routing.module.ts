import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'projects/share/src/lib/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
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
    path: 'home',
    loadChildren: () =>
      import('../../projects/home/src/lib/home-routing.module').then(
        (module) => module.HomeRoutingModule
      ),
  },
  {
    path: 'management',
    loadChildren: () =>
      import('../../projects/manage/src/lib/manage-routing.module').then(
        (module) => module.ManageRoutingModule
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
