import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'projects/auth/src/public-api';

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (!!authService.getAuth()) {
    return true;
  } else {
    router.navigate(['./auth']);
    return false;
  }
};
