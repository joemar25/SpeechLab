// src/app/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {

  constructor(private supabaseService: SupabaseService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const expectedRole = route.data['expectedRole'];
    const userRole = localStorage.getItem('userRole');

    if (userRole && expectedRole.includes(userRole)) {
      return true;
    } else {
      // Redirect to unauthorized or login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}
