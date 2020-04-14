import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {reducer} from './state/user.reducer';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [RegisterComponent, ForgotPasswordComponent, VerifyEmailComponent, LoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forFeature('users', reducer)
  ]
})
export class UserModule { }
