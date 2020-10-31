import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

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

  constructor() {}
}
