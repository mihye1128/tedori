import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { RateService } from 'src/app/services/rate.service';
import { ConditionsService } from 'src/app/services/conditions.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  panelOpenState = false;

  conditions$ = this.conditionsService.conditions$;
  rate$ = this.rateService.getRate();

  constructor(
    private conditionsService: ConditionsService,
    private rateService: RateService
  ) {}

  ngOnInit(): void {}

  getConditionTitle(condition: Condition, i: number) {
    if (condition.title === '') {
      return '条件' + (i + 1);
    } else {
      return condition.title;
    }
  }
}
