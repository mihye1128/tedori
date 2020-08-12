import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.scss'],
})
export class ConditionComponent implements OnInit {
  rate$ = this.rateService.getRate();

  @Input() condition: Condition;

  constructor(private rateService: RateService) {}

  ngOnInit(): void {}

  getType(value: string) {
    if (value === 'monthly') {
      return '月給';
    } else {
      return '時給';
    }
  }
  getIns(value: boolean) {
    if (value) {
      return '社会保険加入';
    } else {
      return '社会保険なし';
    }
  }
  getUnemploymentIns(value: boolean) {
    if (value) {
      return '雇用保険加入';
    } else {
      return '雇用保険なし';
    }
  }
}
