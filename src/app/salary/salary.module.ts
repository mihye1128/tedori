import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import { SalaryComponent } from './salary/salary.component';
import { MainFormComponent } from './main-form/main-form.component';
import { MainResultComponent } from './main-result/main-result.component';
import { MainResultTableHeaderComponent } from './main-result-table-header/main-result-table-header.component';
import { MainResultWorkerComponent } from './main-result-worker/main-result-worker.component';
import { MainResultOwnerComponent } from './main-result-owner/main-result-owner.component';
import { GuideRateComponent } from './guide-rate/guide-rate.component';
import { GuideMethodComponent } from './guide-method/guide-method.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

import { SharedModule } from '../shared/shared.module';
import { PageHeadModule } from '../page-head/page-head.module';
import { CalcPipesModule } from '../pipes/calc-pipes.module';

@NgModule({
  declarations: [
    SalaryComponent,
    MainFormComponent,
    MainResultComponent,
    MainResultTableHeaderComponent,
    MainResultWorkerComponent,
    MainResultOwnerComponent,
    GuideRateComponent,
    GuideMethodComponent,
  ],
  imports: [
    CommonModule,
    SalaryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    SharedModule,
    PageHeadModule,
    CalcPipesModule,
  ],
})
export class SalaryModule {}
