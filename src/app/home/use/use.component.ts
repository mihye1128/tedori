import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-use',
  templateUrl: './use.component.html',
  styleUrls: ['./use.component.scss'],
})
export class UseComponent implements OnInit, AfterViewInit {
  uses = [
    {
      img: 'assets/images/use-worker.svg',
      target: '就活・転職活動中に',
      title: '手取り額をカンタン試算',
      text: [
        '給料の条件を設定することで、簡単に手取り額を算出できます。',
        '過去に設定した条件と比較したい場合は、ログインでのご利用が便利です。',
      ],
    },
    {
      img: 'assets/images/use-business.svg',
      target: '採用後のコストを把握したい時に',
      title: '事業主負担額も同時に算出',
      text: [
        '社会保険料の事業主負担分や労働保険料など、事業者負担額も合わせて算出できるので、採用後のコストを把握したい時などにご活用ください。',
        '',
      ],
    },
    {
      img: 'assets/images/use-family.svg',
      target: '家計収入を計算したい時に',
      title: 'ふたりの収入をまとめて計算',
      text: [
        '2件同時に計算できるので、ご夫婦やパートナーとの収入をまとめて試算できます。',
        'ライフプラン設計時など、ご家庭の収入額を算出したい時などにもご利用いただけます。',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    AOS.init({
      once: true,
    });
  }
}
