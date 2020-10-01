import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Deductions } from '../interfaces/deductions';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  rate: Deductions;

  constructor(private db: AngularFirestore) {
    this.getRate()
      .pipe(take(1))
      .toPromise()
      .then((res) => {
        this.rate = res;
      });
  }

  private getRate(): Observable<Deductions> {
    return this.db.doc<Deductions>('rates/rate').valueChanges();
  }
}
