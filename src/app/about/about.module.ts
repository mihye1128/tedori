import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { UseComponent } from './use/use.component';
import { PointsComponent } from './points/points.component';

@NgModule({
  declarations: [AboutComponent, HeroComponent, UseComponent, PointsComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}
