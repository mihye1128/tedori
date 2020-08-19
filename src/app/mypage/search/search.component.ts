import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { FormBuilder, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  index = this.searchService.index.condition;
  @Input() rate: Deductions;

  result: {
    nbHits: number;
    hits: any[];
  };

  form = this.fb.group({
    title: ['', [Validators.maxLength(20)]],
    typeMonthly: [true, []],
    typeHourly: [true, []],
    baseLower: [null, [Validators.maxLength(8)]],
    baseUpper: [null, [Validators.maxLength(8)]],
    allowanceLower: [null, [Validators.maxLength(8)]],
    allowanceUpper: [null, [Validators.maxLength(8)]],
    basePerHourLower: [null, [Validators.maxLength(6)]],
    basePerHourUpper: [null, [Validators.maxLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.setFilter();

    this.form.valueChanges.subscribe((value) => {
      this.updateURL(value);
    });
  }

  cancelSearch() {
    this.form.reset();
  }

  private setFilter() {
    const data = {};
    const queryParams = this.route.snapshot.queryParams;

    Object.keys(queryParams).forEach((key) => {
      data[key] = queryParams[key].split(',');
    });

    this.form.patchValue(data);
  }

  private updateURL(value) {
    const params: Params = {};

    if (value.title !== '') {
      params.title = value.title;
    }

    if (value.typeMonthly && !value.typeHourly) {
      params.type = 'monthly';
    } else if (value.typeHourly && !value.typeMonthly) {
      params.type = 'hourly';
    }

    if (value.typeMonthly) {
      if (value.baseLower) {
        params.baseLower = +value.baseLower;
      }
      if (value.baseUpper) {
        params.baseUpper = +value.baseUpper;
      }
      if (value.allowanceLower) {
        params.allowanceLower = +value.allowanceLower;
      }
      if (value.allowanceUpper) {
        params.allowanceUpper = +value.allowanceUpper;
      }
    }
    if (value.typeHourly) {
      if (value.basePerHourLower) {
        params.basePerHourLower = +value.basePerHourLower;
      }
      if (value.basePerHourUpper) {
        params.basePerHourUpper = +value.basePerHourUpper;
      }
    }

    console.log(params);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
    });
  }
}
