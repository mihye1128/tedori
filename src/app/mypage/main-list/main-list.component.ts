import { Component, OnInit } from '@angular/core';
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
  conditions$: Observable<Condition[]> = this.conditionsService.getConditions(
    this.authService.uid
  );

  constructor(
    public rateService: RateService,
    private authService: AuthService,
    private conditionsService: ConditionsService
  ) {}

  ngOnInit(): void {}
}
