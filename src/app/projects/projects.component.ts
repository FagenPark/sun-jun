import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private isComponentActive = true;
  junProjects: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/json/projects.json').pipe(
      takeWhile(() => this.isComponentActive),
      tap((p ) => this.junProjects = p)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
  trackByFn(index: number, item: any): string | number {
    return item?.id || index;
  }

}
