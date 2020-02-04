import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FarmPage } from './farm.page';
const routes = [
    {
        path: '',
        component: FarmPage
    }
];
let FarmPageRoutingModule = class FarmPageRoutingModule {
};
FarmPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FarmPageRoutingModule);
export { FarmPageRoutingModule };
//# sourceMappingURL=farm-routing.module.js.map