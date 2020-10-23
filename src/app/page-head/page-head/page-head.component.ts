import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.scss'],
})
export class PageHeadComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;
  @Input() image: string;

  constructor() {}

  ngOnInit(): void {}
}
