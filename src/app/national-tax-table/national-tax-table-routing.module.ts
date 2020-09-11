import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationalTaxTableComponent } from './national-tax-table/national-tax-table.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NationalTaxTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NationalTaxTableRoutingModule {}
