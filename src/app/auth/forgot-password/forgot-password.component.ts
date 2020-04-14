import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../firebase-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public firebaseAuthService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

}
