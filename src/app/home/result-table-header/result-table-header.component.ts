import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';

@Component({
  selector: 'app-result-table-header',
  templateUrl: './result-table-header.component.html',
  styleUrls: ['./result-table-header.component.scss'],
})
export class ResultTableHeaderComponent implements OnInit {
  @Input() conditions: Condition[];

  constructor() {}

  ngOnInit(): void {}

  getConditionTitle(condition: Condition, i: number) {
    if (condition.title === '') {
      return '条件' + (i + 1);
    } else {
      return condition.title;
    }
  }
}
