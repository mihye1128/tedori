import { Component, OnInit, Input } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { AuthService } from 'src/app/services/auth.service';
import { SearchService } from 'src/app/services/search.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Deductions } from 'src/app/interfaces/deductions';
import { RateService } from 'src/app/services/rate.service';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {
  rate$: Observable<Deductions> = this.rateService.rate$;

  conditionsList: Condition[];
  queryTitle: string;
  typeFilter: string;
  baseLower: number;
  baseUpper: number;
  allowanceLower: number;
  allowanceUpper: number;
  basePerHourLower: number;
  basePerHourUpper: number;
  baseRange: string;

  private index = this.searchService.index.condition;
  loading: boolean;
  result: {
    nbHits: number;
    hits: any[];
  }; // TODO: 型対応後調整(https://github.com/algolia/algoliasearch-client-javascript/pull/1086)

  constructor(
    private rateService: RateService,
    private authService: AuthService,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.conditionsList = [];
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

  pushRange(rangeList: string[], key: string, lower?: number, upper?: number) {
    if (lower && upper) {
      rangeList.push(`${key}: ${lower} TO ${upper}`);
    } else if (lower) {
      rangeList.push(`${key} >= ${lower}`);
    } else if (upper) {
      rangeList.push(`${key} <= ${upper}`);
    }
  }

  setRange() {
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

  search() {
    this.loading = true;
    this.index
      .search(this.queryTitle, {
        facetFilters: [
          `userId: ${this.authService.uid}`,
          `type: ${this.typeFilter}`,
        ],
        numericFilters: this.setRange(),
      })
      .then((result) => {
        this.result = result;
        const items = result.hits as any[]; // TODO: 型対応後調整(https://github.com/algolia/algoliasearch-client-javascript/pull/1086)
        this.conditionsList.push(...items);
        this.loading = false;
      });
  }
}
