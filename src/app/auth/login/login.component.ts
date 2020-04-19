import {Component, OnInit} from '@angular/core';
import {FirebaseAuthService} from '../firebase-auth.service';
import {inOutAnimation, zoomInOutAnimation} from '../../animation-config';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [inOutAnimation, zoomInOutAnimation]
})
export class LoginComponent implements OnInit {
  useIntention = 'login';
  returnUrl: string;

  constructor(private route: ActivatedRoute,
              public firebaseAuthService: FirebaseAuthService) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  userSignup(email, psd): void {
    this.firebaseAuthService.signUp(email, psd).then(value => {
      this.useIntention = 'verify-email';
    })
      .catch(err => {
        alert(err.message);
      });
  }
}
