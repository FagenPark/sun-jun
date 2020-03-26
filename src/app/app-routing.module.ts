import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ProfileComponent} from './profile/profile.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ProjectsComponent} from './projects/projects.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'home', component: LandingPageComponent, data: { animation: 'isRight'}},
  {path: 'profile', component: ProfileComponent, data: { animation: 'isRight'}},
  {path: 'gallery', component: GalleryComponent, data: { animation: 'isRight'}},
  {path: 'projects', component: ProjectsComponent, data: { animation: 'isRight'}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, data: { animation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
