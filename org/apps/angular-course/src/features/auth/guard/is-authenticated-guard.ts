import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateUser } from '../services/authenticate-user';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticateUser);
  const router = inject(Router);

  if (!authService.isAuthenticated) {
    router.navigate(['/login']);

    return false;
  }

  return true;
};
