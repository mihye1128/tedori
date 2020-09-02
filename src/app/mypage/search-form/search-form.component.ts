import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit {
  form = this.fb.group({
    title: ['', [Validators.maxLength(20)]],
    typeMonthly: [false, []],
    typeHourly: [false, []],
    baseLower: [null, [Validators.maxLength(8)]],
    baseUpper: [null, [Validators.maxLength(8)]],
    allowanceLower: [null, [Validators.maxLength(8)]],
    allowanceUpper: [null, [Validators.maxLength(8)]],
    basePerHourLower: [null, [Validators.maxLength(6)]],
    basePerHourUpper: [null, [Validators.maxLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  cancelSearchConditions() {
    this.form.reset();
    this.router.navigateByUrl('/mypage');
  }

  serchConditions() {
    const formValue = this.form.value;
    const params: Params = {};

    if (formValue.title !== '') {
      params.title = formValue.title;
    }

    if (formValue.typeMonthly && !formValue.typeHourly) {
      params.type = 'monthly';
    } else if (formValue.typeHourly && !formValue.typeMonthly) {
      params.type = 'hourly';
    }

    if (formValue.typeMonthly) {
      if (formValue.baseLower) {
        params.baseLower = +formValue.baseLower;
      }
      if (formValue.baseUpper) {
        params.baseUpper = +formValue.baseUpper;
      }
      if (formValue.allowanceLower) {
        params.allowanceLower = +formValue.allowanceLower;
      }
      if (formValue.allowanceUpper) {
        params.allowanceUpper = +formValue.allowanceUpper;
      }
    }
    if (formValue.typeHourly) {
      if (formValue.basePerHourLower) {
        params.basePerHourLower = +formValue.basePerHourLower;
      }
      if (formValue.basePerHourUpper) {
        params.basePerHourUpper = +formValue.basePerHourUpper;
      }
    }

    this.router.navigate(['/mypage/search'], {
      relativeTo: this.route,
      queryParams: params,
    });
  }
}
