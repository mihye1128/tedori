import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  QueryDocumentSnapshot,
} from '@angular/fire/firestore';
import { Condition } from '../interfaces/condition';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { firestore } from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConditionsService {
  conditions = new Subject<Condition[]>();
  conditions$ = this.conditions.asObservable();
  updatedConditions: Condition[] = [];
  deletedIds: string[] = [];

  readonly dependentsCounts = [...Array(7)].map((_, i) => i + 1);
  readonly titleMaxLength = 12;
  readonly range = {
    base: {
      min: 0,
      max: 9999999,
    },
    allowance: {
      min: 0,
      max: 9999999,
    },
    travelCost: {
      min: 0,
      max: 999999,
    },
    basePerHour: {
      min: 0,
      max: 99999,
    },
    travelCostPerDay: {
      min: 0,
      max: 99999,
    },
    hourPerDay: {
      min: 0,
      max: 24,
    },
    dayPerMonth: {
      min: 0,
      max: 31,
    },
    cityTax: {
      min: 0,
      max: 9999999,
    },
    otherDeduction: {
      min: 0,
      max: 9999999,
    },
  };

  constructor(
    private authService: AuthService,
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  transferData(condition: Condition): Condition {
    return {
      title: condition.title,
      type: condition.type,
      base: condition.type === 'monthly' ? +condition.base : 0,
      allowance: condition.type === 'monthly' ? +condition.allowance : 0,
      travelCost: condition.type === 'monthly' ? +condition.travelCost : 0,
      basePerHour: condition.type === 'hourly' ? +condition.basePerHour : 0,
      travelCostPerDay:
        condition.type === 'hourly' ? +condition.travelCostPerDay : 0,
      hourPerDay: condition.type === 'hourly' ? +condition.hourPerDay : 0,
      dayPerMonth: condition.type === 'hourly' ? +condition.dayPerMonth : 0,
      ins: condition.ins,
      unemploymentIns: condition.unemploymentIns,
      area: condition.area,
      age: condition.age,
      dependents: condition.dependents,
      cityTax: +condition.cityTax,
      otherDeduction: +condition.otherDeduction,
      userId: this.authService.uid,
    };
  }

  setCondition(condition: Condition) {
    const updatedConditions = this.updatedConditions;
    if (
      updatedConditions.find(
        (updateConditionData) => updateConditionData.id === condition.id
      )
    ) {
      let updateCondition: Condition;
      updatedConditions.forEach((updateConditionData) => {
        if (updateConditionData.id === condition.id) {
          updateCondition = updateConditionData;
        }
      });
      return updateCondition;
    } else {
      return condition;
    }
  }

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
          createdAt: firestore.Timestamp.now(),
        });
      })
    ).then(() => {
      this.snackBar
        .open('マイページに保存しました。', '確認する')
        .onAction()
        .subscribe(() => {
          this.router.navigateByUrl('/mypage');
        });
    });
  }

  getConditions(uid: string, startAt?: QueryDocumentSnapshot<Condition>) {
    return this.db
      .collection<Condition>(`conditions`, (ref) => {
        if (startAt) {
          return ref
            .where('userId', '==', uid)
            .orderBy('createdAt', 'desc')
            .startAfter(startAt)
            .limit(18);
        } else {
          return ref
            .where('userId', '==', uid)
            .orderBy('createdAt', 'desc')
            .limit(18);
        }
      })
      .snapshotChanges()
      .pipe(map((snaps) => snaps.map((snap) => snap.payload.doc)));
  }

  async updateCondition(condition: Condition, id: string): Promise<void> {
    return this.db
      .doc(`conditions/${id}`)
      .set(condition, { merge: true })
      .then(() => {
        this.snackBar.open('条件を更新しました。');
      })
      .catch(() => {
        this.snackBar.open('更新できませんでした。');
      });
  }

  async deleteCondition(id: string): Promise<void> {
    return this.db
      .doc(`conditions/${id}`)
      .delete()
      .then(() => {
        this.snackBar.open('条件を削除しました。');
      })
      .catch(() => {
        this.snackBar.open('削除できませんでした。');
      });
  }
}
