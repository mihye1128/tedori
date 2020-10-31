import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-national-tax',
  templateUrl: './national-tax.component.html',
  styleUrls: ['./national-tax.component.scss'],
})
export class NationalTaxComponent implements OnInit {
  constructor(private seoService: SeoService) {
    this.seoService.setTitleAndMeta(
      '源泉所得税試算',
      '簡単に源泉徴収税額を検索できます。'
    );
  }

  ngOnInit(): void {}
}
