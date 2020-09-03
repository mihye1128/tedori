import { Component, OnInit } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.scss'],
})
export class MypageComponent implements OnInit {
  rate$ = this.rateService.rate$;

  constructor(private rateService: RateService) {}

  ngOnInit(): void {}
}
