import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SaNavigationComponent } from './sa-navigation.component';
const routes = [
    {
        path: '',
        component: SaNavigationComponent
    }
];
let SaNavigationModule = class SaNavigationModule {
};
SaNavigationModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SaNavigationModule);
export { SaNavigationModule };
//# sourceMappingURL=sa-navigation-routing.module.js.map