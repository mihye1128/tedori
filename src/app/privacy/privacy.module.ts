import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyRoutingModule } from './privacy-routing.module';
import { PrivacyComponent } from './privacy/privacy.component';
import { PageHeadModule } from '../page-head/page-head.module';

@NgModule({
  declarations: [PrivacyComponent],
  imports: [CommonModule, PrivacyRoutingModule, PageHeadModule],
})
export class PrivacyModule {}
