import {Injectable, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import 'firebase/auth';
import {AngularFireAuth} from '@angular/fire/auth';
import {User} from './user';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Store} from '@ngrx/store';
import * as fromRoot from '../state/app.state';
import * as userActions from './state/user.actions';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  userData: User;
  constructor(
    private store: Store<fromRoot.State>,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      this.setUserState(user);
    });
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null && user.emailVerified !== false;
  }
  private static setAppUserData(user) {
    const appUserData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return appUserData;
  }
  private setUserState(user: firebase.User) {
    if (user) {
      const appUser = FirebaseAuthService.setAppUserData(user);
      this.store.dispatch(new userActions.SetUserProfile(appUser));
      if (appUser.emailVerified) {
        this.store.dispatch(new userActions.ToggleUserStatus(true));
      } else {
        this.store.dispatch(new userActions.ToggleUserStatus(false));
      }
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.setItem('user', null);
      this.store.dispatch(new userActions.SetUserProfile(null));
      this.store.dispatch(new userActions.ToggleUserStatus(false));
    }
  }
  signIn(email, password, returnUrl) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        if (!result.user.emailVerified) {
          return alert('Please check your email and click on the link to verify your email address.');
        }
        this.ngZone.run(() => {
          setTimeout(() => {this.router.navigateByUrl(returnUrl); }, 0);
        });
      }).catch((error) => {
        alert(error.message);
      });
  }
  async sendVerificationMail() {
    await firebase.auth().currentUser.sendEmailVerification().then(r => alert('Please check your email, and click on verification link.'));
  }
  async forgotPassword(passwordResetEmail) {
    await firebase.auth().sendPasswordResetEmail(passwordResetEmail).catch(err => alert(err));
    alert('Please check your email');
  }
  googleAuth(returnUrl) {
    return this.authLogin(new firebase.auth.GoogleAuthProvider(), returnUrl);
  }
  authLogin(provider, returnUrl) {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.setUserData(result.user);
        this.ngZone.run(() => {
          setTimeout(() => {this.router.navigateByUrl(returnUrl); }, 0);
        });
      }).catch((error) => {
        alert(error);
      });
  }
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
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['home']);
    });
  }
  async signUp(email: string, password: string): Promise<any> {
    await  this.afAuth.createUserWithEmailAndPassword(email, password);
    await this.sendVerificationMail();
  }
}
