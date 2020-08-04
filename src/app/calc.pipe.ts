import { Pipe, PipeTransform } from '@angular/core';
import { Condition } from './interfaces/condition';
import { Deductions } from './interfaces/deductions';

@Pipe({
  name: 'calc',
})
export class CalcPipe implements PipeTransform {
  transform(condition: Condition, type: string, rate?: Deductions): string {
    let baseSalary: number; // 基本給
    let allowance: number; // 諸手当
    let travelCost: number; // 交通費
    let total: number; // 総支給

    let compensationIns: number; // 労災保険
    let unemploymentInsWorker: number; // 雇用保険・労働者
    let unemploymentInsOwner: number; // 雇用保険・事業者

    let standardMonthlyFee: number; // 標準報酬月額
    let nursingIns: number; // 介護保険
    let nursingInsWorker: number; // 介護保険・労働者
    let nursingInsOwner: number; // 介護保険・事業者
    let pensionIns: number; // 厚生年金
    let pensionInsWorker: number; // 厚生年金・労働者
    let pensionInsOwner: number; // 厚生年・事業者
    let childrenIns: number; // 子供・子育て拠出金

    let target: number;

    // 支給額
    if (condition.type === 'hourly') {
      baseSalary =
        condition.basePerHour * condition.hourPerDay * condition.dayPerMonth;
      allowance = 0;
      travelCost = condition.travelCostPerDay * condition.dayPerMonth;
    } else {
      baseSalary = condition.base;
      allowance = condition.allowance;
      travelCost = condition.travelCost;
    }
    total = baseSalary + allowance + travelCost;

    // 労働保険
    if (rate) {
      // 労災保険
      compensationIns = Math.floor((total * rate.compensationIns.rate) / 1000);

      // 雇用保険（事業者・労働者）
      if (condition.unemploymentIns) {
        unemploymentInsWorker = Math.floor(
          (total * rate.unemploymentIns.workerBurden) / 1000
        );
        unemploymentInsOwner = Math.floor(
          (total * rate.unemploymentIns.ownerBurden) / 1000
        );
      } else {
        unemploymentInsWorker = 0;
        unemploymentInsOwner = 0;
      }
    } else {
      rate = null;
    }

    // 標準報酬月額（社会保険料の算出時に使用）
    const standardMonthlyFeeTable = [
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

    standardMonthlyFeeTable.forEach((grade, i) => {
      if (total < grade.max && total >= grade.min) {
        standardMonthlyFee = grade.standard;
      }
    });

    // 社会保険（健康保険・厚生年金・介護保険・子育て拠出金）
    if (rate && condition.ins) {
      // 介護保険
      nursingIns = standardMonthlyFee * (rate.socialIns.nursingInsRate / 100);
      nursingInsWorker = Math.floor(nursingIns / 2);
      nursingInsOwner = Math.floor(nursingIns - nursingInsWorker);

      // 厚生年金保険
      if (standardMonthlyFee <= 88800) {
        pensionIns = 88800 * (rate.socialIns.pensionInsRate / 100);
      } else if (standardMonthlyFee > 88800 && standardMonthlyFee < 620000) {
        pensionIns = standardMonthlyFee * (rate.socialIns.pensionInsRate / 100);
      } else {
        pensionIns = 620000 * (rate.socialIns.pensionInsRate / 100);
      }
      pensionInsWorker = Math.floor(pensionIns / 2);
      pensionInsOwner = Math.floor(pensionIns - pensionInsWorker);

      // 子ども・子育て拠出金
      if (standardMonthlyFee <= 88800) {
        childrenIns = Math.floor(
          88800 * (rate.socialIns.childrenInsRate / 100)
        );
      } else if (standardMonthlyFee > 88800 && standardMonthlyFee < 620000) {
        childrenIns = Math.floor(
          standardMonthlyFee * (rate.socialIns.childrenInsRate / 100)
        );
      } else {
        childrenIns = Math.floor(
          620000 * (rate.socialIns.childrenInsRate / 100)
        );
      }
    } else {
      nursingIns = 0;
      nursingInsWorker = 0;
      nursingInsOwner = 0;
      pensionIns = 0;
      pensionInsWorker = 0;
      pensionInsOwner = 0;
      childrenIns = 0;
    }

    // 出力する値
    if (type === 'baseSalary') {
      target = baseSalary;
    } else if (type === 'travelCost') {
      target = travelCost;
    } else if (type === 'total') {
      target = total;
    } else if (type === 'compensationIns') {
      target = compensationIns;
    } else if (type === 'unemploymentInsWorker') {
      target = unemploymentInsWorker;
    } else if (type === 'unemploymentInsOwner') {
      target = unemploymentInsOwner;
    } else if (type === 'childrenIns') {
      target = childrenIns;
    } else if (type === 'pensionInsWorker') {
      target = pensionInsWorker;
    } else if (type === 'pensionInsOwner') {
      target = pensionInsOwner;
    } else if (type === 'nursingInsWorker') {
      target = nursingInsWorker;
    } else if (type === 'nursingInsOwner') {
      target = nursingInsOwner;
    }

    return target.toLocaleString();
  }
}
