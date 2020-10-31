import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationalTaxRoutingModule } from './national-tax-routing.module';
import { NationalTaxComponent } from './national-tax/national-tax.component';
import { NationalTaxTableComponent } from './national-tax-table/national-tax-table.component';
import { NationalTaxCalcComponent } from './national-tax-calc/national-tax-calc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PageHeadModule } from '../page-head/page-head.module';

@NgModule({
  declarations: [
    NationalTaxComponent,
    NationalTaxTableComponent,
    NationalTaxCalcComponent,
  ],
  imports: [
    CommonModule,
    NationalTaxRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    PageHeadModule,
  ],
})
export class NationalTaxModule {}
