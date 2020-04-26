import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'img'
})
export class ImgFallbackDirective {

  constructor(private el: ElementRef) { }
  @HostListener('error') imgLoadError() {
    console.log('no image');
  }

}
