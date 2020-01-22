import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoPage } from './info.page';
const routes = [
    {
        path: '',
        component: InfoPage
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