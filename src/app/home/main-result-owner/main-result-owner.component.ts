import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { Insurance } from 'src/app/interfaces/insurance';

@Component({
  selector: 'app-main-result-owner',
  templateUrl: './main-result-owner.component.html',
  styleUrls: ['./main-result-owner.component.scss'],
})
export class MainResultOwnerComponent implements OnInit {
  @Input() rate: Insurance;
  @Input() conditions: Condition[];

  constructor() {}

  ngOnInit(): void {}
}
