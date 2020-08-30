import { Injectable } from '@angular/core';
import { ByArea } from '../interfaces/by-area';
import { FeeTable } from '../interfaces/fee-table';
import { standardMonthlyFeeTable } from '../models/standard-monthly-fee-table';

@Injectable({
  providedIn: 'root',
})
export class SocialInsService {
  standardMonthlyFeeTable: FeeTable[] = standardMonthlyFeeTable;

  constructor() {}

  getStandardMonthlyFee(total: number, insType: string = 'default') {
    let standard: number;
    this.standardMonthlyFeeTable.forEach((grade, i) => {
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
    if (subscribedSocialIns && healthInsRateList.length) {
      let healthInsRate: number;
      for (const item of healthInsRateList) {
        if (area === item.area) {
          healthInsRate = item.rate;
        }
      }
      const healthIns: number =
        this.getStandardMonthlyFee(total) * (healthInsRate / 100);
      const healthInsWorder: number = Math.round(healthIns / 2);
      const healthInsOwner: number = Math.round(healthIns - healthInsWorder);
      return { healthInsWorder, healthInsOwner };
    } else {
      const healthInsWorder = 0;
      const healthInsOwner = 0;
      return { healthInsWorder, healthInsOwner };
    }
  }

  getNursingIns(
    total: number,
    subscribedSocialIns: boolean,
    age: string,
    nursingInsRate: number
  ) {
    if (subscribedSocialIns && age === 'middle') {
      const nursingIns: number =
        this.getStandardMonthlyFee(total) * (nursingInsRate / 100);
      const nursingInsWorker: number = Math.round(nursingIns / 2);
      const nursingInsOwner: number = Math.round(nursingIns - nursingInsWorker);
      return { nursingInsWorker, nursingInsOwner };
    } else {
      const nursingInsWorker = 0;
      const nursingInsOwner = 0;
      return { nursingInsWorker, nursingInsOwner };
    }
  }

  getPensionIns(
    total: number,
    subscribedSocialIns: boolean,
    pensionInsRate: number
  ) {
    if (subscribedSocialIns) {
      const standardMonthlyFee: number = this.getStandardMonthlyFee(
        total,
        'PensionIns'
      );
      const pensionIns: number = standardMonthlyFee * (pensionInsRate / 100);
      const pensionInsWorker: number = Math.round(pensionIns / 2);
      const pensionInsOwner: number = Math.round(pensionIns - pensionInsWorker);
      return { pensionInsWorker, pensionInsOwner };
    } else {
      const pensionInsWorker = 0;
      const pensionInsOwner = 0;
      return { pensionInsWorker, pensionInsOwner };
    }
  }

  getChildrenIns(
    total: number,
    subscribedSocialIns: boolean,
    childrenInsRate: number
  ) {
    if (subscribedSocialIns) {
      const standardMonthlyFee: number = this.getStandardMonthlyFee(
        total,
        'childrenIns'
      );
      return Math.round(standardMonthlyFee * (childrenInsRate / 100));
    } else {
      return 0;
    }
  }
}
