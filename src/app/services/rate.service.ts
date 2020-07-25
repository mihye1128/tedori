import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private db: AngularFirestore) {}

  getRate() {
    return this.db.doc('rates/rate').valueChanges();
  }
}
