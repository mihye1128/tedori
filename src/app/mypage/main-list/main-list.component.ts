import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Condition } from 'src/app/interfaces/condition';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionsService } from 'src/app/services/conditions.service';
import { RateService } from 'src/app/services/rate.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss'],
})
export class MainListComponent implements OnInit {
  loading: boolean;
  conditions$: Observable<Condition[]> = this.conditionsService
    .getConditions(this.authService.uid)
    .pipe(tap(() => (this.loading = false)));

  constructor(
    public rateService: RateService,
    private authService: AuthService,
    private conditionsService: ConditionsService
  ) {
    this.loading = true;
  }

  ngOnInit(): void {}
}
