import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NationalTaxTableComponent } from './national-tax-table/national-tax-table.component';
import { NationalTaxTableRoutingModule } from './national-tax-table-routing.module';

@NgModule({
  declarations: [NationalTaxTableComponent],
  imports: [CommonModule, NationalTaxTableRoutingModule],
})
export class NationalTaxTableModule {}
