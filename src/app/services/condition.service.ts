import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Condition } from '../interfaces/condition';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ConditionService {
  conditions = new Subject<Condition[]>();
  conditions$ = this.conditions.asObservable();

  constructor(private db: AngularFirestore) {}

  setCondition(conditions: Condition[]) {
    this.conditions.next(conditions);
    console.log(conditions);
  }

  saveCondition(conditions: Condition[]) {
    this.conditions.next(conditions);
    for (const condition of conditions) {
      const id = this.db.createId();
      this.db.doc(`conditions/${id}`).set(condition);
    }
  }
}
