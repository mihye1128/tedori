import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';

@Component({
  selector: 'app-main-result-table-header',
  templateUrl: './main-result-table-header.component.html',
  styleUrls: ['./main-result-table-header.component.scss'],
})
export class MainResultTableHeaderComponent implements OnInit {
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
