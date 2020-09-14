import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NationalTaxComponent } from './national-tax/national-tax.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NationalTaxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NationalTaxRoutingModule {}
