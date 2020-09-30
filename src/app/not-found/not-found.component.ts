import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router, private seoService: SeoService) {
    this.seoService.setTitleAndMeta('404', '404 Not Found.');
  }

  ngOnInit(): void {}

  home() {
    this.router.navigateByUrl('/');
  }
}
