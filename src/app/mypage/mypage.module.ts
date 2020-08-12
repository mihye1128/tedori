import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MypageRoutingModule } from './mypage-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

import { SharedModule } from '../shared/shared.module';
import { MypageComponent } from './mypage/mypage.component';
import { ConditionComponent } from './condition/condition.component';
import { PipesModule } from '../pipes/pipes.module';
import { DataComponent } from './data/data.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    MypageComponent,
    ConditionComponent,
    DataComponent,
    ResultComponent,
  ],
  imports: [
    CommonModule,
    MypageRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatTabsModule,
    MatMenuModule,
    SharedModule,
    PipesModule,
  ],
})
export class MypageModule {}
