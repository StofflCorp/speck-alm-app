import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YardStorePage } from './yard-store.page';

const routes: Routes = [
  {
    path: '',
    component: YardStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YardStorePageRoutingModule {}
