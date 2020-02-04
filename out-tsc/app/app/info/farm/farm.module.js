import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FarmPageRoutingModule } from './farm-routing.module';
import { FarmPage } from './farm.page';
let FarmPageModule = class FarmPageModule {
};
FarmPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            FarmPageRoutingModule
        ],
        declarations: [FarmPage]
    })
], FarmPageModule);
export { FarmPageModule };
//# sourceMappingURL=farm.module.js.map