import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsPage } from './news.page';
const routes = [
    {
        path: '',
        component: NewsPage
    }
];
let NewsPageRoutingModule = class NewsPageRoutingModule {
};
NewsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NewsPageRoutingModule);
export { NewsPageRoutingModule };
//# sourceMappingURL=news-routing.module.js.map