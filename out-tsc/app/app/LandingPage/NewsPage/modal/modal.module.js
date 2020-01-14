import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';
let ModalPageModule = class ModalPageModule {
};
ModalPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            ModalPageRoutingModule
        ],
        declarations: [ModalPage]
    })
], ModalPageModule);
export { ModalPageModule };
//# sourceMappingURL=modal.module.js.map