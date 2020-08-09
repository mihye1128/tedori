import { Injectable } from '@angular/core';
import { Condition } from '../interfaces/condition';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor() {}

  getPayment(condition: Condition) {
    const type = condition.type;
    if (type === 'hourly') {
      const baseSalary =
        condition.basePerHour * condition.hourPerDay * condition.dayPerMonth;
      const allowance = 0;
      const travelCost = condition.travelCostPerDay * condition.dayPerMonth;
      return {
        baseSalary,
        allowance,
        travelCost,
      };
    } else {
      const baseSalary = condition.base;
      const allowance = condition.allowance;
      const travelCost = condition.travelCost;
      return {
        baseSalary,
        allowance,
        travelCost,
      };
    }
  }
}
