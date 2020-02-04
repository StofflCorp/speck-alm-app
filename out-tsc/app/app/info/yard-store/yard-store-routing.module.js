import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { YardStorePage } from './yard-store.page';
const routes = [
    {
        path: '',
        component: YardStorePage
    }
];
let YardStorePageRoutingModule = class YardStorePageRoutingModule {
};
YardStorePageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], YardStorePageRoutingModule);
export { YardStorePageRoutingModule };
//# sourceMappingURL=yard-store-routing.module.js.map