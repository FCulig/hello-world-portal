import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.authenticationService.isLoggedIn()) {
        for(let i = 0; i < route.data.roles.length; i++){
          if (route.data.roles[i] === this.authenticationService.getRole()) {
            return true;
          }
        }     

        this.router.navigate(['/']);
        return false;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
}
