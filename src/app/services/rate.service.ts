import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Deductions } from '../interfaces/deductions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  constructor(private db: AngularFirestore) {}

  getRate(): Observable<Deductions> {
    return this.db.doc<Deductions>('rates/rate').valueChanges();
  }
}
