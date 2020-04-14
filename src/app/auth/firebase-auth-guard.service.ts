import { Injectable } from '@angular/core';
import {FirebaseAuthService} from './firebase-auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthGuardService implements CanActivate {

  constructor(public firebaseAuthService: FirebaseAuthService,
              public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.firebaseAuthService.isLoggedIn !== true) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
