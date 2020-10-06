import { Injectable } from '@angular/core';
import { ByArea } from '../interfaces/by-area';
import { FeeTable } from '../interfaces/fee-table';
import { STANDARD_MONTHLY_FEE_TABLE } from '../models/standard-monthly-fee-table';

@Injectable({
  providedIn: 'root',
})
export class SocialInsService {
  standardMonthlyFeeTable: FeeTable[] = STANDARD_MONTHLY_FEE_TABLE;

  constructor() {}

  getStandardMonthlyFee(total: number, insType: string = 'default') {
    let standard: number;
    this.standardMonthlyFeeTable.forEach((grade) => {
      if (total < grade.max && total >= grade.min) {
        standard = grade.standard;
      }
    });
    if (insType === 'PensionIns' || insType === 'childrenIns') {
      if (standard <= 88800 && standard !== 0) {
        standard = 88800;
      } else if (standard >= 620000) {
        standard = 620000;
      } else {
        standard = standard;
      }
    }
    return standard;
  }

  getHealthIns(
    total: number,
    subscribedSocialIns: boolean,
    area: string,
    healthInsRateList: ByArea[]
  ) {
    let healthInsWorder: number;
    let healthInsOwner: number;

    if (subscribedSocialIns && healthInsRateList.length) {
      let healthInsRate: number;
      for (const item of healthInsRateList) {
        if (area === item.area) {
          healthInsRate = item.rate;
        }
      }
      const healthIns: number =
        this.getStandardMonthlyFee(total) * (healthInsRate / 100);
      healthInsWorder = Math.round(healthIns / 2);
      healthInsOwner = Math.round(healthIns - healthInsWorder);
    } else {
      healthInsWorder = 0;
      healthInsOwner = 0;
    }
    return { healthInsWorder, healthInsOwner };
  }

  getNursingIns(
    total: number,
    subscribedSocialIns: boolean,
    age: string,
    nursingInsRate: number
  ) {
    let nursingInsWorker: number;
    let nursingInsOwner: number;

    if (subscribedSocialIns && age === 'middle') {
      const nursingIns: number =
        this.getStandardMonthlyFee(total) * (nursingInsRate / 100);
      nursingInsWorker = Math.round(nursingIns / 2);
      nursingInsOwner = Math.round(nursingIns - nursingInsWorker);
    } else {
      nursingInsWorker = 0;
      nursingInsOwner = 0;
    }
    return { nursingInsWorker, nursingInsOwner };
  }

  getPensionIns(
    total: number,
    subscribedSocialIns: boolean,
    pensionInsRate: number
  ) {
    let pensionInsWorker: number;
    let pensionInsOwner: number;

    if (subscribedSocialIns) {
      const standardMonthlyFee: number = this.getStandardMonthlyFee(
        total,
        'PensionIns'
      );
      const pensionIns: number = standardMonthlyFee * (pensionInsRate / 100);
      pensionInsWorker = Math.round(pensionIns / 2);
      pensionInsOwner = Math.round(pensionIns - pensionInsWorker);
    } else {
      pensionInsWorker = 0;
      pensionInsOwner = 0;
    }
    return { pensionInsWorker, pensionInsOwner };
  }

  getChildrenIns(
    total: number,
    subscribedSocialIns: boolean,
    childrenInsRate: number
  ) {
    let childrenIns: number;

    if (subscribedSocialIns) {
      const standardMonthlyFee: number = this.getStandardMonthlyFee(
        total,
        'childrenIns'
      );
      childrenIns = Math.round(standardMonthlyFee * (childrenInsRate / 100));
    } else {
      childrenIns = 0;
    }
    return childrenIns;
  }
}
