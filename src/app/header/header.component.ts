import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FirebaseAuthService} from '../auth/firebase-auth.service';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../state/app.state';
import {Observable} from 'rxjs';
import * as fromUser from '../auth/state';
import * as fromApp from '../state';
import * as appActions from '../state/app.actions';
import {User} from '../auth/user';
import {ThemeService} from '../theme.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isComponentActive = true;
  isLoggedIn$: Observable<boolean>;
  user$: Observable<User>;
  themeOptions = this.themeService.themeOptions;
  currentTheme$: Observable<string>;
  constructor(public translate: TranslateService,
              public auth: FirebaseAuthService,
              private router: Router,
              private store: Store<fromRoot.State>,
              private themeService: ThemeService) { }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'zh']);
    this.translate.setDefaultLang('en');
    this.isLoggedIn$ = this.store.pipe(select(fromUser.getUserStatus));
    this.user$ = this.store.pipe(select(fromUser.getCurrentUser));
    this.currentTheme$ = this.store.pipe(
      select(fromApp.getTheme),
      tap(theme => {
        this.themeOptions.forEach((opt) => {
          if (opt.theme === theme) {
            this.themeService.setTheme(opt.value);
          }
        });
      })
    );
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
  changeTheme(themeToSet) {
    this.store.dispatch(new appActions.SetTheme(themeToSet));
  }
}
