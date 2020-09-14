import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { NATIONAL_TAX_TABLE } from 'src/app/models/national-tax-table';

@Component({
  selector: 'app-guide-method',
  templateUrl: './guide-method.component.html',
  styleUrls: ['./guide-method.component.scss'],
})
export class GuideMethodComponent implements OnInit {
  nationalTaxTable = NATIONAL_TAX_TABLE;

  @Input() rate: Deductions;

  constructor() {}

  ngOnInit(): void {}
}
