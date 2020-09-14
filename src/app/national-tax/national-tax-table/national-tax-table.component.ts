import { Component, OnInit } from '@angular/core';
import { NATIONAL_TAX_TABLE } from 'src/app/models/national-tax-table';
import { ConditionsService } from 'src/app/services/conditions.service';

@Component({
  selector: 'app-national-tax-table',
  templateUrl: './national-tax-table.component.html',
  styleUrls: ['./national-tax-table.component.scss'],
})
export class NationalTaxTableComponent implements OnInit {
  nationalTaxTable = NATIONAL_TAX_TABLE;
  nationalTaxTableLength: number = this.nationalTaxTable.table.length;
  nationalTaxBranchPoint: number = this.nationalTaxTable.table[
    this.nationalTaxTableLength - 1
  ].min;

  constructor(public condetionsService: ConditionsService) {}

  ngOnInit(): void {}
}
