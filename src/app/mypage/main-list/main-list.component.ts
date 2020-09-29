import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionsService } from 'src/app/services/conditions.service';
import { RateService } from 'src/app/services/rate.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {
  lastDoc;
  conditions: Condition[] = [];
  isComplete: boolean;
  loading: boolean;

  constructor(
    public rateService: RateService,
    private authService: AuthService,
    private conditionsService: ConditionsService
  ) {
    console.log(this.authService.uid);
    this.getConditions();
  }

  ngOnInit(): void {}

  getConditions() {
    if (this.isComplete) {
      return;
    }
    this.loading = true;
    this.conditionsService
      .getConditions(this.authService.uid, this.lastDoc)
      .pipe(take(1))
      .subscribe((docs) => {
        if (docs) {
          if (!docs.length) {
            this.isComplete = true;
            this.loading = false;
            return;
          }
          this.lastDoc = docs[docs.length - 1];
          const conditions = docs.map((doc) => doc.data());
          this.conditions.push(...conditions);
          this.loading = false;
        }
      });
  }
}
