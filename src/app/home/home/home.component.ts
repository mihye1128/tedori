import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public rateService: RateService, private seoService: SeoService) {
    this.seoService.setTitleAndMeta();
  }

  ngOnInit(): void {}
}
