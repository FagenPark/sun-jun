import {Injectable, NgZone, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from './user';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';
import * as fromRoot from '../state/app.state';
import * as userActions from './state/user.actions';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  userData: User;

  constructor(
    private store: Store<fromRoot.State>,
    private afs: AngularFirestore,   // Inject Firestore service
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
    private ngZone: NgZone // NgZone service to remove outside scope warning
  ) {
    /* Saving user data in localstorage when
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      this.setUserState(user);
    });
  }

  private setUserState(user: firebase.User) {
    if (user) {
      const appUser = this.setAppUserData(user);
      this.store.dispatch(new userActions.SetUserProfile(appUser));
      if (appUser.emailVerified) {
        this.store.dispatch(new userActions.ToggleUserStatus(true));
      } else {
        this.store.dispatch(new userActions.ToggleUserStatus(false));
      }
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
    } else {
      localStorage.setItem('user', null);
      this.store.dispatch(new userActions.SetUserProfile(null));
      this.store.dispatch(new userActions.ToggleUserStatus(false));
    }
  }

// Sign in with email/password
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error.message);
      });
  }
  // Send email verfificaiton when new user sign up
  async sendVerificationMail() {
    await (await this.afAuth.currentUser).sendEmailVerification();
    await this.router.navigate(['verify-email']);
    // return this.afAuth.currentUser.sendEmailVerification()
    //   .then(() => {
    //     this.router.navigate(['verify-email-address']);
    //   });
  }

  // Reset Forggot password
  forgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error);
      });
  }

  // Sign in with Google
  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  authLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        this.setUserData(result.user);
      }).catch((error) => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
 sign up with username/password and sign in with social auth
 provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  private setUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  // extract user data from firebase user data
  private setAppUserData(user) {
    const appUserData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return appUserData;
  }

  // Sign out
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }

  signUp(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['verify-email']);
      })
      .catch(err => {
        alert(err.message);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false;
  }
}
