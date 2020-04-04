import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BulletComponent } from './profile/bullet/bullet.component';
import { WhoAmIComponent } from './profile/who-am-i/who-am-i.component';
import { SkillChartComponent } from './profile/skill-chart/skill-chart.component';
import { ProjectComponent } from './projects/project/project.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProfileComponent,
    GalleryComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    BulletComponent,
    WhoAmIComponent,
    SkillChartComponent,
    ProjectComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
