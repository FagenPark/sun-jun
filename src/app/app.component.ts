import { Component, OnDestroy, OnInit} from '@angular/core';
import {stepper} from './animation-config';
import {Router, RouterOutlet} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {select, Store} from '@ngrx/store';

import * as fromRoot from './state/app.state';
import * as fromUser from './auth/state/';
import {Observable} from 'rxjs';
import {FirebaseAuthService} from './auth/firebase-auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    stepper
  ]
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'sun-jun test';
  isComponentActive = true;
  isLoggedIn$: Observable<boolean>;
  constructor(public translate: TranslateService,
              public auth: FirebaseAuthService,
              private router: Router,
              private store: Store<fromRoot.State>) {
  }
  ngOnInit(): void {
    this.translate.addLangs(['en', 'zh']);
    this.translate.setDefaultLang('en');
    this.isLoggedIn$ = this.store.pipe(select(fromUser.getUserStatus));
  }

  prepareRoute(outlet: RouterOutlet) {
    const animation = 'animation';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[animation];
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }

  gotoLogIn() {
    this.router.navigate(['login']);
  }
}
