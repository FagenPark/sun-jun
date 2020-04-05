import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {stepper} from './animation-config';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {map, takeWhile} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from './auth/auth.service';
import {select, Store} from '@ngrx/store';

import * as fromRoot from './state/app.state';
import * as userActions from './auth/state/user.actions';
import * as fromUser from './auth/state/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    stepper
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sun-jun';
  isComponentActive = true;
  isAuthenticated = false;
  constructor(private route: ActivatedRoute,
              public translate: TranslateService,
              public auth: AuthService,
              private store: Store<fromRoot.State>) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
  }
  ngOnInit(): void {

    // this.auth.isAuthenticated$
    //   .pipe(takeWhile( () => this.isComponentActive)).
    // subscribe(
    //
    //   authenticated => {
    //     this.store.dispatch(new userActions.ToggleUserStatus(authenticated));
    //
    //   },
    // );
    // this.auth.getUser$().pipe(takeWhile( () => this.isComponentActive)).
    // subscribe(
    //   user => this.store.dispatch(new userActions.SetUserProfile(user))
    // );
    // this.store.pipe(
    //   select(fromUser.getUserStatus)
    // ).subscribe(authenticated => {
    //   this.isAuthenticated = authenticated;  } );
  }

  prepareRoute(outlet: RouterOutlet) {
    const animation = 'animation';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[animation];
  }

  switchLang(lang: string) {
    console.log('logedin', this.auth.loggedIn);
    this.translate.use(lang);
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
}
