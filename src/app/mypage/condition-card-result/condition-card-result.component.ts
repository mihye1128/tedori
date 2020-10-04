import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { Insurance } from 'src/app/interfaces/insurance';
import { NationalTaxService } from 'src/app/services/national-tax.service';

@Component({
  selector: 'app-condition-card-result',
  templateUrl: './condition-card-result.component.html',
  styleUrls: ['./condition-card-result.component.scss'],
})
export class ConditionCardResultComponent implements OnInit {
  @Input() condition: Condition;
  @Input() rate: Insurance;

  opendTotal = false;
  opendDeduction = false;
  opendOwner = false;

  constructor(public nationalTaxService: NationalTaxService) {}

  ngOnInit(): void {}

  changedText(value: boolean) {
    if (value) {
      return '閉じる';
    } else {
      return '詳細表示';
    }
  }
}
