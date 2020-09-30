import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  readonly siteName = 'TEDORIβ';
  readonly defaultDescription =
    'TEDORIβは、条件を入力するだけで、簡単に差し引き支給額や事業主負担額を試算できます。';

  constructor(private titleService: Title, private meta: Meta) {}

  setTitleAndMeta(title?: string, description?: string) {
    const pageTitle = title
      ? title + ' | ' + this.siteName
      : this.siteName + ' | 給与試算ツール';
    const pageDescription = description ? description : this.defaultDescription;
    const metaList = [
      {
        name: 'description',
        content: pageDescription,
      },
      {
        property: 'og:site_name',
        content: this.siteName,
      },
      {
        property: 'og:title',
        content: pageTitle,
      },
      {
        property: 'og:description',
        content: pageDescription,
      },
      {
        property: 'og:url',
        content: location.href,
      },
      {
        property: 'og:image',
        content: location.href + 'assets/images/ogp-cover.png',
      },
    ];

    this.titleService.setTitle(pageTitle);
    metaList.forEach((meta) => {
      this.meta.updateTag(meta);
    });
  }
}
