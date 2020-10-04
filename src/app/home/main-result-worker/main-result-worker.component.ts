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

  constructor() {}

  ngOnInit(): void {}
}
