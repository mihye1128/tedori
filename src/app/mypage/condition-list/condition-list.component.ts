import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { ConditionsService } from 'src/app/services/conditions.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Condition } from 'src/app/interfaces/condition';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-condition-list',
  templateUrl: './condition-list.component.html',
  styleUrls: ['./condition-list.component.scss'],
})
export class ConditionListComponent implements OnInit {
  @Input() rate: Deductions;

  private index = this.searchService.index.condition;
  loading: boolean;
  result: {
    nbHits: number;
    hits: any[];
  }; // TODO: 型対応後調整(https://github.com/algolia/algoliasearch-client-javascript/pull/1086)
  conditionsList: Condition[];
  query: string;

  private isInit = true;
  createdAtFilter: string;
  categoriFilter: string[];
  sort: string;

  conditions$: Observable<Condition[]> = this.conditionsService.getConditions(
    this.authService.uid
  );

  constructor(
    private authService: AuthService,
    private conditionsService: ConditionsService,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.queryParamMap.subscribe((map) => {
      this.conditionsList = [];
      this.index = this.searchService.index[map.get('sort') || 'conditions'];
      this.query = map.get('title') || '';
      console.log(this.query);
      this.search();
    });
  }

  ngOnInit(): void {}

  search() {
    this.loading = true;
    this.index.search(this.query).then((result) => {
      this.result = result;
      const items = result.hits as any[]; // TODO: 型対応後調整(https://github.com/algolia/algoliasearch-client-javascript/pull/1086)
      this.conditionsList.push(...items);
      this.loading = false;
    });
  }
}
