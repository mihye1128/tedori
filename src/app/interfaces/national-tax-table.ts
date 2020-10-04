export interface NationalTaxTable {
  title: string;
  url: string;
  table: {
    min: number;
    max: number;
    tax: number[];
    rate?: number;
  }[];
}
