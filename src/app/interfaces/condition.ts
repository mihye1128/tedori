export interface Condition {
  title: string;
  type: 'monthly' | 'hourly';
  base: number;
  allowance: number;
  travelCost: number;
  basePerHour: number;
  travelCostPerDay: number;
  hourPerDay: number;
  dayPerMonth: number;
  ins: boolean;
  unemploymentIns: boolean;
  area: string;
  age: 'young' | 'middle' | 'elderly';
  dependents: number;
  cityTax: number;
  otherDeduction: number;
  userId: string;
}
