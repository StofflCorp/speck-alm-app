import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventModalPageRoutingModule } from './event-modal-routing.module';
import { EventModalPage } from './event-modal.page';
let EventModalPageModule = class EventModalPageModule {
};
EventModalPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EventModalPageRoutingModule
        ],
        declarations: [EventModalPage]
    })
], EventModalPageModule);
export { EventModalPageModule };
//# sourceMappingURL=event-modal.module.js.map