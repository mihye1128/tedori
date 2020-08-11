import { Injectable } from '@angular/core';
import { Condition } from '../interfaces/condition';
import { Deductions } from '../interfaces/deductions';
import { ByArea } from '../interfaces/by-area';

@Injectable({
  providedIn: 'root',
})
export class SocialInsService {
  standardMonthlyFeeTable = [
    {
      min: 0,
      max: 63000,
      standard: 58000,
    },
    {
      min: 63000,
      max: 73000,
      standard: 68000,
    },
    {
      min: 73000,
      max: 83000,
      standard: 78000,
    },
    {
      min: 83000,
      max: 93000,
      standard: 88000,
    },
    {
      min: 93000,
      max: 101000,
      standard: 98000,
    },
    {
      min: 101000,
      max: 107000,
      standard: 104000,
    },
    {
      min: 107000,
      max: 114000,
      standard: 110000,
    },
    {
      min: 114000,
      max: 122000,
      standard: 118000,
    },
    {
      min: 122000,
      max: 130000,
      standard: 126000,
    },
    {
      min: 130000,
      max: 138000,
      standard: 134000,
    },
    {
      min: 138000,
      max: 146000,
      standard: 142000,
    },
    {
      min: 146000,
      max: 155000,
      standard: 150000,
    },
    {
      min: 155000,
      max: 165000,
      standard: 160000,
    },
    {
      min: 165000,
      max: 175000,
      standard: 170000,
    },
    {
      min: 175000,
      max: 185000,
      standard: 180000,
    },
    {
      min: 185000,
      max: 195000,
      standard: 190000,
    },
    {
      min: 195000,
      max: 210000,
      standard: 200000,
    },
    {
      min: 210000,
      max: 230000,
      standard: 220000,
    },
    {
      min: 230000,
      max: 250000,
      standard: 240000,
    },
    {
      min: 250000,
      max: 270000,
      standard: 260000,
    },
    {
      min: 270000,
      max: 290000,
      standard: 280000,
    },
    {
      min: 290000,
      max: 310000,
      standard: 300000,
    },
    {
      min: 310000,
      max: 330000,
      standard: 320000,
    },
    {
      min: 330000,
      max: 350000,
      standard: 340000,
    },
    {
      min: 350000,
      max: 370000,
      standard: 360000,
    },
    {
      min: 370000,
      max: 395000,
      standard: 380000,
    },
    {
      min: 395000,
      max: 425000,
      standard: 410000,
    },
    {
      min: 425000,
      max: 455000,
      standard: 440000,
    },
    {
      min: 455000,
      max: 485000,
      standard: 470000,
    },
    {
      min: 485000,
      max: 515000,
      standard: 500000,
    },
    {
      min: 515000,
      max: 545000,
      standard: 530000,
    },
    {
      min: 545000,
      max: 575000,
      standard: 560000,
    },
    {
      min: 575000,
      max: 605000,
      standard: 590000,
    },
    {
      min: 605000,
      max: 635000,
      standard: 620000,
    },
    {
      min: 635000,
      max: 665000,
      standard: 650000,
    },
    {
      min: 665000,
      max: 695000,
      standard: 680000,
    },
    {
      min: 695000,
      max: 730000,
      standard: 710000,
    },
    {
      min: 730000,
      max: 770000,
      standard: 750000,
    },
    {
      min: 770000,
      max: 810000,
      standard: 790000,
    },
    {
      min: 810000,
      max: 855000,
      standard: 830000,
    },
    {
      min: 855000,
      max: 905000,
      standard: 880000,
    },
    {
      min: 905000,
      max: 955000,
      standard: 930000,
    },
    {
      min: 955000,
      max: 1005000,
      standard: 980000,
    },
    {
      min: 1005000,
      max: 1055000,
      standard: 1030000,
    },
    {
      min: 1055000,
      max: 1115000,
      standard: 1090000,
    },
    {
      min: 1115000,
      max: 1175000,
      standard: 1150000,
    },
    {
      min: 1175000,
      max: 1235000,
      standard: 1210000,
    },
    {
      min: 1235000,
      max: 1295000,
      standard: 1270000,
    },
    {
      min: 1295000,
      max: 1355000,
      standard: 1330000,
    },
    {
      min: 1355000,
      max: 999999999,
      standard: 1390000,
    },
  ];

  constructor() {}

  getStandardMonthlyFee(total: number, insType: string = 'default') {
    let standard: number;
    this.standardMonthlyFeeTable.forEach((grade, i) => {
      if (total < grade.max && total >= grade.min) {
        standard = grade.standard;
      }
    });
    if (insType === 'PensionIns' || insType === 'childrenIns') {
      if (standard <= 88800) {
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
