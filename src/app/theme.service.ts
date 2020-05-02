import { Injectable } from '@angular/core';
import {themeOptions} from './app.constants';
import {StyleManagerService} from './style-manager.service';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeOptions = themeOptions;

  constructor(private styleManager: StyleManagerService,public sanitizer: DomSanitizer) { }
  setTheme(themeToSet) {
    this.styleManager.setStyle(
      'theme',
      themeToSet
    );
  }
}
