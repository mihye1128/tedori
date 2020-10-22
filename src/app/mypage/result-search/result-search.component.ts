import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { AuthService } from 'src/app/services/auth.service';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { RateService } from 'src/app/services/rate.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
})
export class ResultSearchComponent implements OnInit {
  conditionList: Condition[];
  loading: boolean;

  private queryTitle: string;
  private typeFilter: string;
  private baseLower: number;
  private baseUpper: number;
  private allowanceLower: number;
  private allowanceUpper: number;
  private basePerHourLower: number;
  private basePerHourUpper: number;
  private readonly perPage = 18;
  private page: number;
  private maxPage: number;
  private index = this.searchService.index.condition;

  constructor(
    public rateService: RateService,
    private searchService: SearchService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initialSearch();
  }

  private pushRange(
    rangeList: string[],
    key: string,
    lower?: number,
    upper?: number
  ) {
    if (lower && upper) {
      rangeList.push(`${key}: ${lower} TO ${upper}`);
    } else if (lower) {
      rangeList.push(`${key} >= ${lower}`);
    } else if (upper) {
      rangeList.push(`${key} <= ${upper}`);
    }
  }

  private setRange() {
    const rangeList: string[] = [];

    this.pushRange(rangeList, 'base', this.baseLower, this.baseUpper);
    this.pushRange(
      rangeList,
      'allowance',
      this.allowanceLower,
      this.allowanceUpper
    );
    this.pushRange(
      rangeList,
      'basePerHour',
      this.basePerHourLower,
      this.basePerHourUpper
    );

    return rangeList;
  }

  private search() {
    if (!this.loading) {
      this.loading = true;
      this.index
        .search(this.queryTitle, {
          facetFilters: [
            `userId: ${this.authService.uid}`,
            `type: ${this.typeFilter}`,
          ],
          numericFilters: this.setRange(),
          page: this.page++,
          hitsPerPage: this.perPage,
        })
        .then((result) => {
          this.maxPage = result.nbPages;
          const items = result.hits as any[];
          this.conditionList.push(...items);
        })
        .finally(() => (this.loading = false));
    }
  }

  initialSearch() {
    this.route.queryParamMap.subscribe((params) => {
      this.conditionList = [];
      this.page = 0;
      this.index = this.searchService.index.condition;
      this.queryTitle = params.get('title') || '';
      this.typeFilter = params.get('type') || '';
      this.baseLower = +params.get('baseLower');
      this.baseUpper = +params.get('baseUpper');
      this.allowanceLower = +params.get('allowanceLower');
      this.allowanceUpper = +params.get('allowanceUpper');
      this.basePerHourLower = +params.get('basePerHourLower');
      this.basePerHourUpper = +params.get('basePerHourUpper');
      this.search();
    });
  }

  addSearch() {
    if (!this.loading && (!this.maxPage || this.maxPage > this.page)) {
      this.search();
    }
  }
}
