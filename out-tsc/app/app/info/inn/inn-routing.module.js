import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InnPage } from './inn.page';
const routes = [
    {
        path: '',
        component: InnPage
    }
];
let InnPageRoutingModule = class InnPageRoutingModule {
};
InnPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], InnPageRoutingModule);
export { InnPageRoutingModule };
//# sourceMappingURL=inn-routing.module.js.map