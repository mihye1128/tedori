import { Component, OnInit, Input } from '@angular/core';
import { Insurance } from 'src/app/interfaces/insurance';
import { NationalTaxService } from 'src/app/services/national-tax.service';

@Component({
  selector: 'app-guide-method',
  templateUrl: './guide-method.component.html',
  styleUrls: ['./guide-method.component.scss'],
})
export class GuideMethodComponent implements OnInit {
  @Input() rate: Insurance;

  constructor(public nationalTaxService: NationalTaxService) {}

  ngOnInit(): void {}
}
