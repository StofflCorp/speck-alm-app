import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventModalPage } from './event-modal.page';
const routes = [
    {
        path: '',
        component: EventModalPage
    }
];
let EventModalPageRoutingModule = class EventModalPageRoutingModule {
};
EventModalPageRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], EventModalPageRoutingModule);
export { EventModalPageRoutingModule };
//# sourceMappingURL=event-modal-routing.module.js.map