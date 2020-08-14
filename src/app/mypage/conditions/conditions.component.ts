import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { ConditionsService } from 'src/app/services/conditions.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Condition } from 'src/app/interfaces/condition';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export class ConditionsComponent implements OnInit {
  @Input() rate: Deductions;

  conditions$: Observable<Condition[]> = this.conditionsService.getConditions(
    this.authService.uid
  );

  constructor(
    private authService: AuthService,
    private conditionsService: ConditionsService
  ) {}

  ngOnInit(): void {}
}
