import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Condition } from '../interfaces/condition';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firestore } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ConditionsService {
  conditions = new Subject<Condition[]>();
  conditions$ = this.conditions.asObservable();

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  setConditions(conditions: Condition[]) {
    this.conditions.next(conditions);
  }

  saveConditions(conditions: Condition[]) {
    this.conditions.next(conditions);
    Promise.all(
      conditions.map((condition) => {
        const id = this.db.createId();
        return this.db.doc(`conditions/${id}`).set({
          id,
          ...condition,
          craetedAt: firestore.Timestamp.now(),
        });
      })
    ).then(() => {
      this.snackBar
        .open('マイページに保存しました。', '確認する', {
          duration: 2000,
        })
        .onAction()
        .subscribe(() => {
          this.router.navigateByUrl('/mypage');
        });
    });
  }

  getConditions(uid: string) {
    return this.db
      .collection<Condition>(`conditions`, (ref) =>
        ref.where('userId', '==', uid)
      )
      .valueChanges();
  }

  updateCondition(condition: Condition, id: string): Promise<void> {
    return this.db.doc(`conditions/${id}`).set(condition, { merge: true });
  }

  deleteCondition(id: string): Promise<void> {
    return this.db.collection('conditions').doc(id).delete();
  }
}
