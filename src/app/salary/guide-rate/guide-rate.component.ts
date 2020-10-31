import { Component, OnInit, Input } from '@angular/core';
import { Insurance } from 'src/app/interfaces/insurance';

@Component({
  selector: 'app-guide-rate',
  templateUrl: './guide-rate.component.html',
  styleUrls: ['./guide-rate.component.scss'],
})
export class GuideRateComponent implements OnInit {
  @Input() rate: Insurance;

  constructor() {}

  ngOnInit(): void {}
}
