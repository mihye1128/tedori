import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  rate$ = this.rateService.rate$;

  constructor(private rateService: RateService) {}

  ngOnInit(): void {}
}
