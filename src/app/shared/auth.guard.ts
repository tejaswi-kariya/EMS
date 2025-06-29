import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '../feature/data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

 constructor(private dataservice: DataService, private router: Router) {}

  canActivate(): boolean {
    if (this.dataservice.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/home'])
      return false;
    }
  }
  
}
