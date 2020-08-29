import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { Condition } from 'src/app/interfaces/condition';

@Component({
  selector: 'app-main-result-owner',
  templateUrl: './main-result-owner.component.html',
  styleUrls: ['./main-result-owner.component.scss'],
})
export class MainResultOwnerComponent implements OnInit {
  @Input() rate: Deductions;
  @Input() conditions: Condition[];

  constructor() {}

  ngOnInit(): void {}
}
