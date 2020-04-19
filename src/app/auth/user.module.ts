import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/user.reducer';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        StoreModule.forFeature('users', reducer),
        FormsModule
    ]
})
export class UserModule { }
