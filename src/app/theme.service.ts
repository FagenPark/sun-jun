import { Injectable } from '@angular/core';
import {themeOptions} from './app.constants';
import {StyleManagerService} from './style-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeOptions = themeOptions;

  constructor(private styleManager: StyleManagerService) { }
  setTheme(themeToSet) {
    this.styleManager.setStyle(
      'theme',
      themeToSet
    );
  }
}
