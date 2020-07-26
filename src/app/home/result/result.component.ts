import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/app/services/condition.service';
import { Condition } from 'src/app/interfaces/condition';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  panelOpenState = false;

  conditions$ = this.conditionService.conditions$;

  constructor(private conditionService: ConditionService) {}

  ngOnInit(): void {}

  conditionTitle(condition: Condition, i: number) {
    let title: string;
    if (condition.title === '') {
      title = '条件' + (i + 1);
    } else {
      title = condition.title;
    }
    return title;
  }
}
