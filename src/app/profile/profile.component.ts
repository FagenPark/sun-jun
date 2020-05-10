import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromApp from '../state';
import {Observable} from 'rxjs';
import * as fromRoot from '../state/app.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentTheme$: Observable<string>;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.currentTheme$ = this.store.pipe(
      select(fromApp.getTheme));
  }

}
