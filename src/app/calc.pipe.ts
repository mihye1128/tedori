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

    // 各種保険
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

      // 社会保険（健康保険・厚生年金・介護保険・子育て拠出金）
      if (condition.ins) {
      }
    } else {
      rate = null;
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
    }

    return target.toLocaleString();
  }
}
