import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { Deductions } from 'src/app/interfaces/deductions';

@Component({
  selector: 'app-condition-result',
  templateUrl: './condition-result.component.html',
  styleUrls: ['./condition-result.component.scss'],
})
export class ConditionResultComponent implements OnInit {
  opendTotal = false;
  opendDeduction = false;
  opendOwner = false;

  @Input() condition: Condition;
  @Input() rate: Deductions;

  constructor() {}

  ngOnInit(): void {}

  changedText(value: boolean) {
    if (value) {
      return '閉じる';
    } else {
      return '詳細表示';
    }
  }
}
