import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { Insurance } from 'src/app/interfaces/insurance';
import { ConditionsService } from 'src/app/services/conditions.service';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html',
  styleUrls: ['./condition-list.component.scss'],
})
export class ConditionListComponent implements OnInit {
  @Input() conditionList: Condition[];
  @Input() loading: boolean;
  @Input() rate: Insurance;
  @Input() blankMessage: string;

  @Output() scrolled = new EventEmitter();

  constructor(public conditionsService: ConditionsService) {}

  ngOnInit(): void {}
}
