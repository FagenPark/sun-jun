import { Component} from '@angular/core';
import {stepper} from './animation-config';
import { RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    stepper
  ]
})
export class AppComponent {
  title = 'sun-jun test';
  constructor() {
  }

  prepareRoute(outlet: RouterOutlet) {
    const animation = 'animation';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[animation];
  }

}
