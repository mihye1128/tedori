import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { Insurance } from 'src/app/interfaces/insurance';

@Component({
  selector: 'app-main-result-worker',
  templateUrl: './main-result-worker.component.html',
  styleUrls: ['./main-result-worker.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        'true',
        style({
          height: '*',
          opacity: 1,
        })
      ),
      state(
        'false',
        style({
          height: 0,
          opacity: 0,
        })
      ),
      transition('true <=> false', [
        animate('400ms cubic-bezier(0.35, 0, 0.25, 1)'),
      ]),
    ]),
  ],
})
export class MainResultWorkerComponent implements OnInit {
  @Input() rate: Insurance;
  @Input() conditions: Condition[];

  isOpenIncome = false;
  isOpenDeduction = false;

  constructor() {}

  ngOnInit(): void {}
}
