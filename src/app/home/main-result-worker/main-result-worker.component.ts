import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { Insurance } from 'src/app/interfaces/insurance';

@Component({
  selector: 'app-main-result-worker',
  templateUrl: './main-result-worker.component.html',
  styleUrls: ['./main-result-worker.component.scss'],
})
export class MainResultWorkerComponent implements OnInit {
  @Input() rate: Insurance;
  @Input() conditions: Condition[];

  openedIncomeDetail = false;
  openedDeductionDetail = false;

  constructor() {}

  ngOnInit(): void {}

  openDetail(target: 'income' | 'deduction') {
    if (target === 'income') {
      this.openedIncomeDetail = !this.openedIncomeDetail;
    } else if (target === 'deduction') {
      this.openedDeductionDetail = !this.openedDeductionDetail;
    }
  }
}
