import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
})
export class PointsComponent implements OnInit {
  readonly points = [
    {
      icon: 'supervisor_account',
      title: '2件同時計算',
      text:
        '2件の条件を同時に計算できるので、比較や世帯収入計算にもおすすめです。',
    },
    {
      icon: 'save_alt',
      title: '条件を保存',
      text:
        'Googleアカウントでログインすると、条件保存が可能に。他デバイスで確認したい時にも便利です。',
    },
    {
      icon: 'search',
      title: '絞り込み検索機能',
      text: '条件名と基本給で絞り込み検索。保存件数が増えた時に活用できます。',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
