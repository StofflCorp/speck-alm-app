import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventsPageRoutingModule } from './events-routing.module';
import { EventsPage } from './events.page';
import { EventModalPage } from '../event-modal/event-modal.page';
let EventsPageModule = class EventsPageModule {
};
EventsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            EventsPageRoutingModule
        ],
        declarations: [EventsPage, EventModalPage],
        entryComponents: [EventModalPage]
    })
], EventsPageModule);
export { EventsPageModule };
//# sourceMappingURL=events.module.js.map