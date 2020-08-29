import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { Condition } from 'src/app/interfaces/condition';

@Component({
  selector: 'app-main-result-worker',
  templateUrl: './main-result-worker.component.html',
  styleUrls: ['./main-result-worker.component.scss'],
})
export class MainResultWorkerComponent implements OnInit {
  @Input() rate: Deductions;
  @Input() conditions: Condition[];

  constructor() {}

  ngOnInit(): void {}
}
