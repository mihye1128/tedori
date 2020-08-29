import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';

@Component({
  selector: 'app-guide-rate',
  templateUrl: './guide-rate.component.html',
  styleUrls: ['./guide-rate.component.scss'],
})
export class GuideRateComponent implements OnInit {
  @Input() rate: Deductions;

  constructor() {}

  ngOnInit(): void {}
}
