import { ByArea } from './by-area';

export interface Deductions {
  socialIns: {
    title: string;
    url: string;
    healthInsRateListUrl: string;
    healthInsRateList: ByArea[];
    nursingInsRate: number;
    pensionInsRate: number;
    childrenInsRate: number;
  };
  compensationIns: {
    title: string;
    url: string;
    rate: number;
  };
  unemploymentIns: {
    title: string;
    url: string;
    rate: number;
    workerBurden: number;
    ownerBurden: number;
  };
}
