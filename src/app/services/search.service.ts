import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Condition } from '../interfaces/condition';
import { Observable } from 'rxjs';

const searchClient = algoliasearch(
  environment.algolia.appId,
  environment.algolia.searchKey
);

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  index = {
    condition: searchClient.initIndex('conditions'),
  };
  deletedIds: string[] = [];

  constructor() {}
}
