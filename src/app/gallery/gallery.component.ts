import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  private isComponentActive = true;
  slides: any[];

  constructor(private http: HttpClient) { }
  chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.http.get('assets/json/cards.json').pipe(
      takeWhile(() => this.isComponentActive),
      tap((c) => this.slides = this.chunk(c, 3))
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
  trackByFn(index: number, item: any): string | number {
    return item?.id || index;
  }

}
