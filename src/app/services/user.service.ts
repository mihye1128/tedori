import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fns: AngularFireFunctions) {}

  deleteUserAccount(uid: string) {
    const callable = this.fns.httpsCallable('deleteUserAccount');
    return callable(uid).toPromise();
  }
}
