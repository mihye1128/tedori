import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;
  uid: string;
  loginProcessing = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.afUser$.subscribe((user) => {
      this.uid = user?.uid;
    });
  }

  login() {
    this.loginProcessing = true;
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    this.afAuth
      .signInWithPopup(provider)
      .then(() => {
        this.router.navigateByUrl('/');
        this.loginProcessing = false;
      })
      .catch(() => {
        this.snackBar.open('ログイン中にエラーが発生しました。');
        this.loginProcessing = false;
      });
  }
  logout() {
    this.afAuth.signOut().then(() => {
      this.snackBar.open('ログアウトしました。');
      this.router.navigateByUrl('/');
    });
  }
}
