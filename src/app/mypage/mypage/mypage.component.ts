import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { RateService } from 'src/app/services/rate.service';
import { Deductions } from 'src/app/interfaces/deductions';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  rate$ = this.rateService.rate$;

  constructor(private rateService: RateService) {
    this.rate$.subscribe((rate) => console.log(rate));
  }

  conditions: Condition[] = [
    {
      title: 'A社 正社員',
      type: 'monthly',
      base: 320000,
      allowance: 20000,
      travelCost: 6000,
      basePerHour: 0,
      travelCostPerDay: 0,
      hourPerDay: 0,
      dayPerMonth: 0,
      ins: true,
      unemploymentIns: true,
      area: '広島県',
      age: 'young',
      dependents: 1,
      cityTax: 20000,
      otherDeduction: 0,
      userId: null,
    },
    {
      title: 'B社 パート',
      type: 'hourly',
      base: 0,
      allowance: 0,
      travelCost: 0,
      basePerHour: 1500,
      travelCostPerDay: 400,
      hourPerDay: 6,
      dayPerMonth: 16,
      ins: false,
      unemploymentIns: true,
      area: '広島県',
      age: 'young',
      dependents: 0,
      cityTax: 0,
      otherDeduction: 0,
      userId: null,
    },
    {
      title: 'C社 バイト',
      type: 'hourly',
      base: 0,
      allowance: 0,
      travelCost: 0,
      basePerHour: 1200,
      travelCostPerDay: 300,
      hourPerDay: 5,
      dayPerMonth: 12,
      ins: false,
      unemploymentIns: false,
      area: '広島県',
      age: 'young',
      dependents: 0,
      cityTax: 0,
      otherDeduction: 0,
      userId: null,
    },
  ];

  ngOnInit(): void {}
}
