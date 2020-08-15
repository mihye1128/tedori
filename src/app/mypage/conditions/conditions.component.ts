import { Component, OnInit, Input } from '@angular/core';
import { Deductions } from 'src/app/interfaces/deductions';
import { ConditionsService } from 'src/app/services/conditions.service';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { Condition } from 'src/app/interfaces/condition';
import { Router, ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
})
export class ConditionsComponent implements OnInit {
  @Input() rate: Deductions;

  index = this.searchService.index.condition;

  result: {
    nbHits: number;
    hits: any[];
  };

  conditions$: Observable<Condition[]> = this.conditionsService.getConditions(
    this.authService.uid
  );

  conditions: Condition[];

  constructor(
    private authService: AuthService,
    private conditionsService: ConditionsService,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe((map) => {
    //   const searchQuery: string = map.get('title');
    //   this.index.search(searchQuery).then(result => this.result = result);
    // });
  }
}
