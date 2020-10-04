import { Component, OnInit } from '@angular/core';
import { ConditionsService } from 'src/app/services/conditions.service';
import { NationalTaxService } from 'src/app/services/national-tax.service';

@Component({
  selector: 'app-national-tax-table',
  templateUrl: './national-tax-table.component.html',
  styleUrls: ['./national-tax-table.component.scss'],
})
export class NationalTaxTableComponent implements OnInit {
  constructor(
    public condetionsService: ConditionsService,
    public nationalTaxService: NationalTaxService
  ) {}

  ngOnInit(): void {}
}
