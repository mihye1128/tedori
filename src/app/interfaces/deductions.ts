import { NationalTax } from './national-tax';
import { SocialIns } from './social-ins';
import { UnemploymentIns } from './unemployment-ins';
import { CompensationIns } from './compensation-ins';

export interface Deductions {
  socialIns: SocialIns;
  compensationIns: CompensationIns;
  unemploymentIns: UnemploymentIns;
  NationalTax: NationalTax;
}
