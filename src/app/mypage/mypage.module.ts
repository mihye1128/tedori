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
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { SharedModule } from '../shared/shared.module';
import { MypageComponent } from './mypage/mypage.component';
import { PipesModule } from '../pipes/pipes.module';
import { ConditionCardComponent } from './condition-card/condition-card.component';
import { ConditionCardDataComponent } from './condition-card-data/condition-card-data.component';
import { ConditionCardResultComponent } from './condition-card-result/condition-card-result.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ConditionListComponent } from './condition-list/condition-list.component';
import { ResultMainComponent } from './result-main/result-main.component';
import { ResultSearchComponent } from './result-search/result-search.component';
import { PageHeadModule } from '../page-head/page-head.module';

@NgModule({
  declarations: [
    MypageComponent,
    ConditionCardComponent,
    ConditionCardDataComponent,
    ConditionCardResultComponent,
    SearchFormComponent,
    ConditionListComponent,
    ResultMainComponent,
    ResultSearchComponent,
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
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    PageHeadModule,
    PipesModule,
  ],
})
export class MypageModule {}
