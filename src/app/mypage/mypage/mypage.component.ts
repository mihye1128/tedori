import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { RateService } from 'src/app/services/rate.service';
import { Deductions } from 'src/app/interfaces/deductions';
import { AuthService } from 'src/app/services/auth.service';
import { ConditionsService } from 'src/app/services/conditions.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  rate$ = this.rateService.rate$;

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
