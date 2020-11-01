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
  selector: 'app-main-result-owner',
  templateUrl: './main-result-owner.component.html',
  styleUrls: ['./main-result-owner.component.scss'],
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
export class MainResultOwnerComponent implements OnInit {
  @Input() rate: Insurance;
  @Input() conditions: Condition[];

  isOpen = false;

  constructor() {}

  ngOnInit(): void {}
}
