import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MypageComponent } from './mypage/mypage.component';
import { ResultMainComponent } from './result-main/result-main.component';
import { ResultSearchComponent } from './result-search/result-search.component';

const routes: Routes = [
  {
    path: '',
    component: MypageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ResultMainComponent,
      },
      {
        path: 'search',
        component: ResultSearchComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypageRoutingModule {}
