import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { RateService } from 'src/app/services/rate.service';
import { Deductions } from 'src/app/interfaces/deductions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
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
