import {Component, OnDestroy, OnInit} from '@angular/core';
import {blurPage, stepper} from './animation-config';
import {NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {concatMapTo, filter, take, takeWhile} from 'rxjs/operators';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    blurPage
    // stepper
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'sun-jun test';
  isLoadingRoute = false;
  isAppActive = true;

  constructor(private router: Router) {
  }

  prepareRoute(outlet: RouterOutlet) {
    const animation = 'animation';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[animation];
  }

  ngOnInit(): void {
    this.router.events.pipe(
      takeWhile(() => this.isAppActive),
      filter(e => e instanceof NavigationStart),
    ).subscribe((x) => {
      this.isLoadingRoute = true;
    });

    this.router.events.pipe(
      takeWhile(() => this.isAppActive),
      filter(e => e instanceof NavigationEnd),
      concatMapTo(interval(1500).pipe(take(1))),
    ).subscribe(() => {
      this.isLoadingRoute = false;
    });
  }

  ngOnDestroy(): void {
    this.isAppActive = false;
  }

}
