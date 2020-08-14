import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MypageRoutingModule } from './mypage-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { MypageComponent } from './mypage/mypage.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ConditionComponent } from './condition/condition.component';
import { ConditionDataComponent } from './condition-data/condition-data.component';
import { ConditionResultComponent } from './condition-result/condition-result.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormComponent } from './form/form.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    MypageComponent,
    ConditionComponent,
    ConditionDataComponent,
    ConditionResultComponent,
    FormComponent,
    ConditionsComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MypageRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatMenuModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PipesModule,
  ],
})
export class MypageModule {}
