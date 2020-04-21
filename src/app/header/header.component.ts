import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FirebaseAuthService} from '../auth/firebase-auth.service';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../state/app.state';
import {Observable} from 'rxjs';
import * as fromUser from '../auth/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isComponentActive = true;
  isLoggedIn$: Observable<boolean>;
  constructor(public translate: TranslateService,
              public auth: FirebaseAuthService,
              private router: Router,
              private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.translate.addLangs(['en', 'zh']);
    this.translate.setDefaultLang('en');
    this.isLoggedIn$ = this.store.pipe(select(fromUser.getUserStatus));
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
