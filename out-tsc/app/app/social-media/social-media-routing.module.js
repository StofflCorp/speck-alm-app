import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialMediaPage } from './social-media.page';
const routes = [
    {
        path: '',
        component: SocialMediaPage
    }
];
let SocialMediaPageRoutingModule = class SocialMediaPageRoutingModule {
};
SocialMediaPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SocialMediaPageRoutingModule);
export { SocialMediaPageRoutingModule };
//# sourceMappingURL=social-media-routing.module.js.map