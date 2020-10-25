import { Injectable } from '@angular/core';
import { Condition } from '../interfaces/condition';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor() {}

  getPayment(
    condition: Condition
  ): {
    baseSalary: number;
    allowance: number;
    travelCost: number;
  } {
    let baseSalary: number;
    let allowance: number;
    let travelCost: number;

    const type = condition.type;

    if (type === 'hourly') {
      baseSalary =
        condition.basePerHour * condition.hourPerDay * condition.dayPerMonth;
      allowance = 0;
      travelCost = condition.travelCostPerDay * condition.dayPerMonth;
    } else {
      baseSalary = condition.base;
      allowance = condition.allowance;
      travelCost = condition.travelCost;
    }

    return {
      baseSalary,
      allowance,
      travelCost,
    };
  }
}
