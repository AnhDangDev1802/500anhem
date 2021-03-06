import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService:AuthService, private router:Router) {
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
        if (this.authService.getAuth()) {
            return true;
        }
        console.log(route.url);
        this.router.navigate(['/login']);
        return null;
    }
}