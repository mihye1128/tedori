import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Condition } from '../interfaces/condition';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ConditionsService {
  conditions = new Subject<Condition[]>();
  conditions$ = this.conditions.asObservable();

  constructor(private db: AngularFirestore, private snackBar: MatSnackBar) {}

  setConditions(conditions: Condition[]) {
    this.conditions.next(conditions);
  }

  saveConditions(conditions: Condition[]) {
    this.conditions.next(conditions);
    for (const condition of conditions) {
      const id = this.db.createId();
      this.db
        .doc(`conditions/${id}`)
        .set(condition)
        .then(() => {
          this.snackBar.open('マイページに保存しました。', '確認する', {
            duration: 2000,
          });
        });
    }
  }
}
