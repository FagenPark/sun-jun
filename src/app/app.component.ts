import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {stepper} from './animation-config';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    stepper
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'sun-jun';
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.url.pipe(map(segments => segments.join(''))).subscribe(
      url => console.log(url)
    );
    // this.route.url.subscribe(
    //   url => console.log(url)
    // );
  }

  prepareRoute(outlet: RouterOutlet) {
    const animation = 'animation';
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[animation];
  }
}
