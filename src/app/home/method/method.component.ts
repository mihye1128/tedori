import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss'],
})
export class MethodComponent implements OnInit {
  rate$ = this.rateService.getRate();

  constructor(private rateService: RateService) {}

  ngOnInit(): void {}
}
