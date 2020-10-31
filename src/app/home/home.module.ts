import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MainFormComponent } from './main-form/main-form.component';
import { MainResultComponent } from './main-result/main-result.component';
import { MainResultTableHeaderComponent } from './main-result-table-header/main-result-table-header.component';
import { GuideRateComponent } from './guide-rate/guide-rate.component';
import { GuideMethodComponent } from './guide-method/guide-method.component';
import { MainResultWorkerComponent } from './main-result-worker/main-result-worker.component';
import { MainResultOwnerComponent } from './main-result-owner/main-result-owner.component';
import { PageHeadModule } from '../page-head/page-head.module';
import { CalcPipesModule } from '../pipes/calc-pipes.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
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
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    SharedModule,
    PageHeadModule,
    CalcPipesModule,
  ],
})
export class HomeModule {}
