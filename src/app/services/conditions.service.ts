import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Condition } from '../interfaces/condition';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConditionsService {
  conditions = new Subject<Condition[]>();
  conditions$ = this.conditions.asObservable();

  constructor(private db: AngularFirestore) {}

  setConditions(conditions: Condition[]) {
    this.conditions.next(conditions);
  }

  saveConditions(conditions: Condition[]) {
    this.conditions.next(conditions);
    for (const condition of conditions) {
      const id = this.db.createId();
      this.db.doc(`conditions/${id}`).set(condition);
    }
  }
}
