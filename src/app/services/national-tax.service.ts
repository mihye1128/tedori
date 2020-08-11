import { Injectable } from '@angular/core';
import { Condition } from '../interfaces/condition';

@Injectable({
  providedIn: 'root',
})
export class NationalTaxService {
  constructor() {}

  getIncomeDeduction(taxTargetFee: number) {
    if (taxTargetFee <= 135416) {
      return 45834;
    } else if (taxTargetFee <= 149999) {
      return (taxTargetFee * 40) / 100 - 8333;
    } else if (taxTargetFee <= 299999) {
      return (taxTargetFee * 30) / 100 + 6667;
    } else if (taxTargetFee <= 549999) {
      return (taxTargetFee * 20) / 100 + 36667;
    } else if (taxTargetFee <= 708330) {
      return (taxTargetFee * 10) / 100 + 91667;
    } else {
      return 162500;
    }
  }

  getBasicDeduction(taxTargetFee: number) {
    if (taxTargetFee <= 2162499) {
      return 40000;
    } else if (taxTargetFee <= 2204166) {
      return 26667;
    } else if (taxTargetFee <= 2245833) {
      return 13334;
    } else {
      return 0;
    }
  }

  getNationalTaxBase(taxationIncome: number) {
    if (taxationIncome <= 0) {
      return 0;
    } else if (taxationIncome <= 162500) {
      return (taxationIncome * 5.105) / 100;
    } else if (taxationIncome <= 275000) {
      return (taxationIncome * 10.21) / 100 - 8296;
    } else if (taxationIncome <= 579166) {
      return (taxationIncome * 20.42) / 100 - 36374;
    } else if (taxationIncome <= 750000) {
      return (taxationIncome * 23.483) / 100 - 54113;
    } else if (taxationIncome <= 1500000) {
      return (taxationIncome * 33.693) / 100 - 130688;
    } else if (taxationIncome <= 3333333) {
      return (taxationIncome * 40.84) / 100 - 237893;
    } else {
      return (taxationIncome * 45.945) / 100 - 408061;
    }
  }

  getNationalTax(taxTargetFee: number, dependents: number) {
    const incomeDeduction: number = Math.ceil(
      this.getIncomeDeduction(taxTargetFee)
    );
    const dependentExemption: number = dependents * 31667;
    const basicDeduction: number = this.getBasicDeduction(taxTargetFee);

    // 配偶者控除・扶養控除
    // dependentExemption = condition.dependents * 31667;
    // 課税給与所得金額
    const taxationIncome: number =
      taxTargetFee - (incomeDeduction + dependentExemption + basicDeduction);

    // 源泉所得税
    const nationalTax: number = this.getNationalTaxBase(taxationIncome);
    return Math.round(nationalTax / 10) * 10;
  }
}
