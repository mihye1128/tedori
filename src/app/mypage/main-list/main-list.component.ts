import { Component, OnInit } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { Observable } from 'rxjs';
import { Condition } from 'src/app/interfaces/condition';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionsService } from 'src/app/services/conditions.service';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {
  rate$: Observable<Deductions> = this.rateService.rate$;
  conditions$: Observable<Condition[]> = this.conditionsService.getConditions(
    this.authService.uid
  );

  constructor(
    private rateService: RateService,
    private authService: AuthService,
    private conditionsService: ConditionsService
  ) {}

  ngOnInit(): void {}
}
