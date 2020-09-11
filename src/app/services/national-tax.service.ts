import { Injectable } from '@angular/core';
import { NATIONAL_TAX_TABLE } from '../models/national-tax-table';

@Injectable({
  providedIn: 'root',
})
export class NationalTaxService {
  nationalTaxTable = NATIONAL_TAX_TABLE;

  constructor() {}

  getNationalTax(taxTargetFee: number, dependents: number) {
    let standard: number;

    this.nationalTaxTable.table.forEach((rank, i) => {
      if (taxTargetFee < rank.max && taxTargetFee >= rank.min) {
        standard = rank.tax[dependents];
        if (rank.rate) {
          standard = Math.round(
            rank.tax[dependents] + ((taxTargetFee - rank.min) * rank.rate) / 100
          );
        }
      }
    });

    return standard;
  }
}
