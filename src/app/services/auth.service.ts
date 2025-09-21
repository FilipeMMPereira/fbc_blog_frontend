import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate, CanActivateChild {

  constructor(private router: Router) {}

  private checkAuth(): boolean {
    const token = localStorage.getItem('token'); // ou sessionStorage
    if (!token) {
      this.router.navigate(['/login']); // redireciona se não houver token
      return false;
    }
    return true;
  }

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }
}
