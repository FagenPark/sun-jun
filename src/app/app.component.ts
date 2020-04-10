import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {stepper} from './animation-config';
import {RouterOutlet} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from './auth/auth.service';
import {Store} from '@ngrx/store';

import * as fromRoot from './state/app.state';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    stepper
  ]
})
export class AppComponent implements OnDestroy {
  title = 'sun-jun test';
  isComponentActive = true;
  isAuthenticated = false;
  constructor(public translate: TranslateService,
              public auth: AuthService) {
    translate.addLangs(['en', 'zh']);
    translate.setDefaultLang('en');
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
}
