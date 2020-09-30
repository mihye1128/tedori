import { Component, OnInit } from '@angular/core';
import { Condition } from 'src/app/interfaces/condition';
import { AuthService } from 'src/app/services/auth.service';
import { SearchService } from 'src/app/services/search.service';
import { ActivatedRoute } from '@angular/router';
import { RateService } from 'src/app/services/rate.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.scss'],
})
export class SearchResultListComponent implements OnInit {
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
  page: number;
  perPage = 18;
  maxPage: number;
  loading: boolean;
  isInit = true;

  private index = this.searchService.index.condition;

  constructor(
    public rateService: RateService,
    public searchService: SearchService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.conditionsList = [];
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
      this.isInit = false;
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
          this.conditionsList.push(...items);
        })
        .finally(() => (this.loading = false));
    }
  }

  addSearch() {
    if (!this.loading && (!this.maxPage || this.maxPage > this.page)) {
      this.search();
    }
  }

  setCondition(condition: Condition) {
    const updateConditions = this.searchService.updateConditions;
    if (
      updateConditions.find(
        (updateConditionData) => updateConditionData.id === condition.id
      )
    ) {
      let updateCondition: Condition;
      updateConditions.map((updateConditionData) => {
        if (updateConditionData.id === condition.id) {
          updateCondition = updateConditionData;
        }
      });
      return updateCondition;
    } else {
      return condition;
    }
  }
}
