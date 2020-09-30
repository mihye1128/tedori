import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  constructor(private seoService: SeoService) {
    this.seoService.setTitleAndMeta(
      'マイページ',
      '保存した条件の一覧を確認できます。'
    );
  }

  ngOnInit(): void {}
}
