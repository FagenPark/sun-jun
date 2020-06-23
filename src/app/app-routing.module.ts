import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {ProfileComponent} from './profile/profile.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ProjectsComponent} from './projects/projects.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './auth/login/login.component';
import {FirebaseAuthGuardService} from './auth/firebase-auth-guard.service';


const routes: Routes = [
  {path: 'home', component: LandingPageComponent, data: {animation: 'home'}},
  {path: 'profile', component: ProfileComponent, data: {animation: 'profile'}},
  {path: 'gallery', component: GalleryComponent, canActivate: [FirebaseAuthGuardService], data: {animation: 'gallery'}},
  {path: 'projects', component: ProjectsComponent, data: {animation: 'projects'}},
  { path:  'login', component:  LoginComponent, data: {animation: 'login'}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, data: {animation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
