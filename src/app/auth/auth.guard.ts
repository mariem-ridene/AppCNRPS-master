import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';  // Import the AuthService

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userRole = this.authService.getUserRole();
    if (userRole === 'admin' && route.routeConfig?.path === 'admin') {
      return true;
    }
    // Add similar checks for other roles if needed
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
