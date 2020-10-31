import { Component, OnInit, Input } from '@angular/core';
import { ConditionsService } from 'src/app/services/conditions.service';
import { AuthService } from 'src/app/services/auth.service';
import { Condition } from 'src/app/interfaces/condition';
import { Insurance } from 'src/app/interfaces/insurance';

@Component({
  selector: 'app-main-result',
  templateUrl: './main-result.component.html',
  styleUrls: ['./main-result.component.scss'],
})
export class MainResultComponent implements OnInit {
  @Input() rate: Insurance;

  constructor(
    public conditionsService: ConditionsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}
}
