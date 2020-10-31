import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss'],
})
export class SalaryComponent implements OnInit {
  constructor(public rateService: RateService, private seoService: SeoService) {
    this.seoService.setTitleAndMeta(
      '給与試算',
      '給与シミュレーションを行うことができます。'
    );
  }

  ngOnInit(): void {}
}
