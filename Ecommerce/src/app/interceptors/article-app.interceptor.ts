import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { UserStoreService } from '../services/user-store.service';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';


export const articleAppInterceptor: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {

  const userStore = inject(UserStoreService);
  const router = inject(Router);
  
  if(userStore.isLoggedIn()) {return true};
  
  console.log('User not logged');
  window.confirm('User not logged');

  router.navigate(['login']);
  return false;
};