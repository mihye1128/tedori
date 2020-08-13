import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { ConditionsService } from 'src/app/services/conditions.service';
import { AuthService } from 'src/app/services/auth.service';
import { Deductions } from 'src/app/interfaces/deductions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  panelOpenState = false;

  conditions$ = this.conditionsService.conditions$;
  user$ = this.authService.afUser$;

  @Input() rate: Deductions;

  constructor(
    private conditionsService: ConditionsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  getConditionTitle(condition: Condition, i: number) {
    if (condition.title === '') {
      return '条件' + (i + 1);
    } else {
      return condition.title;
    }
  }

  saveConditions(conditions: Condition[]) {
    this.conditionsService.saveConditions(conditions);
  }
}
