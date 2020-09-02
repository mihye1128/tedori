import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MypageComponent } from './mypage/mypage.component';
import { MainListComponent } from './main-list/main-list.component';
import { SearchResultListComponent } from './search-result-list/search-result-list.component';

const routes: Routes = [
  {
    path: '',
    component: MypageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainListComponent,
      },
      {
        path: 'search',
        component: SearchResultListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypageRoutingModule {}
