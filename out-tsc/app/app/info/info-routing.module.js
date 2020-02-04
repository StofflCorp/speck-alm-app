import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoPage } from './info.page';
const routes = [
    {
        path: '',
        component: InfoPage,
        children: [
            {
                path: '',
                redirectTo: 'farm'
            },
            {
                path: 'farm',
                loadChildren: () => import('./farm/farm.module').then(m => m.FarmPageModule)
            },
            {
                path: 'inn',
                loadChildren: () => import('./inn/inn.module').then(m => m.InnPageModule)
            },
            {
                path: 'yardStore',
                loadChildren: () => import('./yard-store/yard-store.module').then(m => m.YardStorePageModule)
            }
        ]
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], InfoPageRoutingModule);
export { InfoPageRoutingModule };
//# sourceMappingURL=info-routing.module.js.map