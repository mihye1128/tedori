import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from '../interfaces/insurance';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  rate: Insurance;

  private readonly insuranceData = '/assets/data/insurance.json';

  constructor(private http: HttpClient) {
    this.getRate().then((data) => (this.rate = data));
  }

  private getRate(): Promise<Insurance> {
    return this.http.get<Insurance>(this.insuranceData).toPromise();
  }
}
