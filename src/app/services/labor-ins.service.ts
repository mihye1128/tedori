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
    let unemploymentInsWorker: number;
    let unemploymentInsOwner: number;

    if (unemploymentIns) {
      unemploymentInsWorker = Math.round(
        (total * unemploymentInsWorkerBurden) / 1000
      );
      unemploymentInsOwner = Math.round(
        (total * unemploymentInsOwnerBurden) / 1000
      );
    } else {
      unemploymentInsWorker = 0;
      unemploymentInsOwner = 0;
    }

    return { unemploymentInsWorker, unemploymentInsOwner };
  }

  getCompensationIns(total: number, compensationInsRate: number) {
    return Math.round((total * compensationInsRate) / 1000);
  }
}
