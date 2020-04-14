import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public firebaseAuthService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

}
