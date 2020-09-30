import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  readonly siteName = 'TEDORI β';
  readonly defaultDescription =
    'TEDORIβは、条件を入力するだけで、簡単に差し引き支給額や事業主負担額を試算できます。';

  constructor(private titleService: Title, private meta: Meta) {}

  pageTitle(title?: string) {
    if (title) {
      return title + ' | ' + this.siteName;
    } else {
      return this.siteName + ' | 給与試算ツール';
    }
  }

  pageDescription(description?: string) {
    if (description) {
      return description;
    } else {
      return this.defaultDescription;
    }
  }

  setTitleAndMeta(title?: string, description?: string) {
    this.titleService.setTitle(this.pageTitle(title));
    this.meta.addTags([
      {
        name: 'description',
        content: this.pageDescription(description),
      },
      {
        property: 'og:site_name',
        content: this.siteName,
      },
      {
        property: 'og:title',
        content: this.pageTitle(title),
      },
      {
        property: 'og:description',
        content: this.pageDescription(description),
      },
      {
        property: 'og:url',
        content: location.href,
      },
      {
        property: 'og:image',
        content: location.href + 'assets/images/ogp-cover.png',
      },
    ]);
  }
}
