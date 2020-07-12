import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
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

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.afUser$.subscribe((user) => {
      this.uid = user ? user.uid : null;
    });
  }

  login() {
    const provider = new auth.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    this.afAuth.signInWithPopup(provider).then(() => {
      this.router.navigateByUrl('/mypage');
    });
  }
  logout() {
    this.afAuth.signOut().then(() => {
      this.snackBar.open('ログアウトしました。', null, {
        duration: 2000,
      });
      this.router.navigateByUrl('/about');
    });
  }
}
