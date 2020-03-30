import {ChangeDetectionStrategy, Component} from '@angular/core';
import {slider} from './animation-config';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'sun-jun';
  prepareRoute(outlet: RouterOutlet) {
    const animation = 'animation';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[animation];
  }
}
