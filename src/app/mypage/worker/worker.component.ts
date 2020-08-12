import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.scss'],
})
export class WorkerComponent implements OnInit {
  rate$ = this.rateService.getRate();

  @Input() condition: Condition;

  constructor(private rateService: RateService) {}

  ngOnInit(): void {}
}
