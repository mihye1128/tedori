import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NationalTaxTable } from '../interfaces/national-tax-table';

@Injectable({
  providedIn: 'root',
})
export class NationalTaxService {
  nationalTaxTable: NationalTaxTable;

  private nationalTaxData = '/assets/data/national-tax.json';

  constructor(private http: HttpClient) {
    this.getNationalTaxTable().then((data) => (this.nationalTaxTable = data));
  }

  getNationalTaxTable(): Promise<NationalTaxTable> {
    return this.http.get<NationalTaxTable>(this.nationalTaxData).toPromise();
  }

  getNationalTax(taxTargetFee: number, dependents: number) {
    let tax: number;

    this.nationalTaxTable.table.forEach((rank) => {
      if (taxTargetFee < rank.max && taxTargetFee >= rank.min) {
        tax = rank.tax[dependents];
        if (rank.rate) {
          tax = Math.round(
            rank.tax[dependents] + ((taxTargetFee - rank.min) * rank.rate) / 100
          );
        }
      }
    });

    return tax;
  }
}
