import { Pipe, PipeTransform } from '@angular/core';
import { Condition } from './interfaces/condition';

@Pipe({
  name: 'calc',
})
export class CalcPipe implements PipeTransform {
  transform(condition: Condition, type: string): string {
    let baseSalary: number; // 基本給
    let allowance: number; // 諸手当
    let travelCost: number; // 交通費
    let total: number; // 総支給
    let target: number;

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

    if (type === 'baseSalary') {
      target = baseSalary;
    } else if (type === 'travelCost') {
      target = travelCost;
    } else if (type === 'total') {
      target = total;
    }

    return target.toLocaleString();
  }
}
