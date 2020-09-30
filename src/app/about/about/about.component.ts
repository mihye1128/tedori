import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private seoService: SeoService) {
    this.seoService.setTitleAndMeta(
      'TEDORIについて',
      'TEDORIβの機能、活用例をご紹介します。'
    );
  }

  ngOnInit(): void {}
}
