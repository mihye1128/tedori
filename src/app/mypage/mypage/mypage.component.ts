import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { RateService } from 'src/app/services/rate.service';
import { Deductions } from 'src/app/interfaces/deductions';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionsService } from 'src/app/services/conditions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  rate$ = this.rateService.rate$;

  conditions$: Observable<Condition[]> = this.conditionsService.getConditions(
    this.authService.uid
  );

  constructor(
    private rateService: RateService,
    private authService: AuthService,
    private conditionsService: ConditionsService
  ) {}

  // conditions: Condition[] = [
  //   {
  //     title: 'A社 正社員',
  //     type: 'monthly',
  //     base: 320000,
  //     allowance: 20000,
  //     travelCost: 6000,
  //     basePerHour: 0,
  //     travelCostPerDay: 0,
  //     hourPerDay: 0,
  //     dayPerMonth: 0,
  //     ins: true,
  //     unemploymentIns: true,
  //     area: '広島県',
  //     age: 'young',
  //     dependents: 1,
  //     cityTax: 20000,
  //     otherDeduction: 0,
  //     userId: null,
  //   },
  // ];

  ngOnInit(): void {}
}
