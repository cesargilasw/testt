import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class LoggedInAuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            this.redirectByRole(currentUser.role);
            // not authenticated so return false
            return false;
        }

        return true;
    }

    /**
    * Method to identify the route to redirect if the user tries to enter a route only allowed for unauthenticated users
    * @param role - role of the current user
    */
    redirectByRole(role: string) {
        // Es requerido manejar validacion de acceo a: Modulo (admin), Componente (componente compartido)
        if (role === 'Admin') {
            this.router.navigate(['/admin-panel']);
        } else if(role === 'User') {
            this.router.navigate(['/user-panel']);
        }else {
            this.router.navigate(['/']);
        }
    }

}
