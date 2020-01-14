import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsPage } from './events.page';
const routes = [
    {
        path: '',
        component: EventsPage
    }
];
let EventsPageRoutingModule = class EventsPageRoutingModule {
};
EventsPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EventsPageRoutingModule);
export { EventsPageRoutingModule };
//# sourceMappingURL=events-routing.module.js.map