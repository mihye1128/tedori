import { ByArea } from './by-area';

export interface SocialIns {
  title: string;
  url: string;
  healthInsRateListUrl: string;
  healthInsRateList: ByArea[];
  nursingInsRate: number;
  pensionInsRate: number;
  childrenInsRate: number;
}
