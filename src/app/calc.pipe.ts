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
    let unemploymentInsOwner: number; // 雇用保険・事業者
    let unemploymentInsWorker: number; // 雇用保険・労働者

    let standardMonthlyFee: number; // 標準報酬月額
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
        unemploymentInsOwner = Math.floor(
          (total * rate.unemploymentIns.ownerBurden) / 1000
        );
        unemploymentInsWorker = Math.floor(
          (total * rate.unemploymentIns.workerBurden) / 1000
        );
      } else {
        unemploymentInsOwner = 0;
        unemploymentInsWorker = 0;
      }
    } else {
      rate = null;
    }

    // 標準報酬月額（社会保険料の算出時に使用）
    switch (true) {
      case total < 63000:
        standardMonthlyFee = 58000;
        break;
      case total < 73000:
        standardMonthlyFee = 68000;
        break;
      case total < 83000:
        standardMonthlyFee = 78000;
        break;
      case total < 93000:
        standardMonthlyFee = 88000;
        break;
      case total < 101000:
        standardMonthlyFee = 98000;
        break;
      case total < 107000:
        standardMonthlyFee = 104000;
        break;
      case total < 114000:
        standardMonthlyFee = 110000;
        break;
      case total < 122000:
        standardMonthlyFee = 118000;
        break;
      case total < 130000:
        standardMonthlyFee = 126000;
        break;
      case total < 138000:
        standardMonthlyFee = 134000;
        break;
      case total < 146000:
        standardMonthlyFee = 142000;
        break;
      case total < 155000:
        standardMonthlyFee = 150000;
        break;
      case total < 165000:
        standardMonthlyFee = 160000;
        break;
      case total < 175000:
        standardMonthlyFee = 170000;
        break;
      case total < 185000:
        standardMonthlyFee = 180000;
        break;
      case total < 195000:
        standardMonthlyFee = 190000;
        break;
      case total < 210000:
        standardMonthlyFee = 200000;
        break;
      case total < 230000:
        standardMonthlyFee = 220000;
        break;
      case total < 250000:
        standardMonthlyFee = 240000;
        break;
      case total < 270000:
        standardMonthlyFee = 260000;
        break;
      case total < 290000:
        standardMonthlyFee = 280000;
        break;
      case total < 310000:
        standardMonthlyFee = 300000;
        break;
      case total < 330000:
        standardMonthlyFee = 320000;
        break;
      case total < 350000:
        standardMonthlyFee = 340000;
        break;
      case total < 370000:
        standardMonthlyFee = 360000;
        break;
      case total < 395000:
        standardMonthlyFee = 380000;
        break;
      case total < 425000:
        standardMonthlyFee = 410000;
        break;
      case total < 455000:
        standardMonthlyFee = 440000;
        break;
      case total < 485000:
        standardMonthlyFee = 470000;
        break;
      case total < 515000:
        standardMonthlyFee = 500000;
        break;
      case total < 545000:
        standardMonthlyFee = 530000;
        break;
      case total < 575000:
        standardMonthlyFee = 560000;
        break;
      case total < 605000:
        standardMonthlyFee = 590000;
        break;
      case total < 635000:
        standardMonthlyFee = 620000;
        break;
      case total < 665000:
        standardMonthlyFee = 650000;
        break;
      case total < 695000:
        standardMonthlyFee = 680000;
        break;
      case total < 730000:
        standardMonthlyFee = 710000;
        break;
      case total < 770000:
        standardMonthlyFee = 750000;
        break;
      case total < 810000:
        standardMonthlyFee = 790000;
        break;
      case total < 855000:
        standardMonthlyFee = 830000;
        break;
      case total < 905000:
        standardMonthlyFee = 880000;
        break;
      case total < 955000:
        standardMonthlyFee = 930000;
        break;
      case total < 1005000:
        standardMonthlyFee = 980000;
        break;
      case total < 1055000:
        standardMonthlyFee = 1030000;
        break;
      case total < 1115000:
        standardMonthlyFee = 1090000;
        break;
      case total < 1175000:
        standardMonthlyFee = 1150000;
        break;
      case total < 1235000:
        standardMonthlyFee = 1210000;
        break;
      case total < 1295000:
        standardMonthlyFee = 1270000;
        break;
      case total < 1355000:
        standardMonthlyFee = 1330000;
        break;
      default:
        standardMonthlyFee = 1390000;
        break;
    }

    // 社会保険（健康保険・厚生年金・介護保険・子育て拠出金）
    if (rate && condition.ins) {
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
    } else if (type === 'unemploymentInsOwner') {
      target = unemploymentInsOwner;
    } else if (type === 'unemploymentInsWorker') {
      target = unemploymentInsWorker;
    } else if (type === 'childrenIns') {
      target = childrenIns;
    }

    return target.toLocaleString();
  }
}
