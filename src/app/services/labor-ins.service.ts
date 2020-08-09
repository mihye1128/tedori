import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LaborInsService {
  constructor() {}

  getUnemploymentIns(
    total: number,
    unemploymentIns: boolean,
    unemploymentInsWorkerBurden: number,
    unemploymentInsOwnerBurden: number
  ) {
    if (unemploymentIns) {
      const unemploymentInsWorker: number = Math.round(
        (total * unemploymentInsWorkerBurden) / 1000
      );
      const unemploymentInsOwner: number = Math.round(
        (total * unemploymentInsOwnerBurden) / 1000
      );
      return { unemploymentInsWorker, unemploymentInsOwner };
    } else {
      const unemploymentInsWorker = 0;
      const unemploymentInsOwner = 0;
      return { unemploymentInsWorker, unemploymentInsOwner };
    }
  }

  getCompensationIns(total: number, compensationInsRate: number) {
    return Math.round((total * compensationInsRate) / 1000);
  }
}
