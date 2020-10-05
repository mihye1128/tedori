import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Condition } from 'src/app/interfaces/condition';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionsService } from 'src/app/services/conditions.service';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-result-main',
  templateUrl: './result-main.component.html',
  styleUrls: ['./result-main.component.scss'],
})
export class ResultMainComponent implements OnInit {
  conditionList: Condition[] = [];
  loading: boolean;

  isComplete: boolean;
  lastCondition;

  constructor(
    public rateService: RateService,
    private authService: AuthService,
    private conditionsService: ConditionsService
  ) {
    this.getConditions();
  }

  ngOnInit(): void {}

  getConditions() {
    if (this.isComplete) {
      return;
    }
    this.loading = true;
    this.conditionsService
      .getConditions(this.authService.uid, this.lastCondition)
      .pipe(take(1))
      .subscribe((docs) => {
        if (docs) {
          if (docs.length) {
            this.lastCondition = docs[docs.length - 1];
            const conditions = docs.map((doc) => doc.data());
            this.conditionList.push(...conditions);
            this.loading = false;
          } else {
            this.isComplete = true;
            this.loading = false;
          }
        }
      });
  }
}
