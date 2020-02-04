import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnPage } from './inn.page';

const routes: Routes = [
  {
    path: '',
    component: InnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnPageRoutingModule {}
