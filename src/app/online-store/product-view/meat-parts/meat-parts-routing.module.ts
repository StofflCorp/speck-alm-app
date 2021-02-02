import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeatPartsPage } from './meat-parts.page';

const routes: Routes = [
  {
    path: '',
    component: MeatPartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeatPartsPageRoutingModule {}
