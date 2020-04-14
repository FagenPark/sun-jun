import { Component, OnInit } from '@angular/core';
import {FirebaseAuthService} from '../firebase-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public firebaseAuthService: FirebaseAuthService) { }

  ngOnInit(): void {
  }

}
