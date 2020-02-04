import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InnPageRoutingModule } from './inn-routing.module';
import { InnPage } from './inn.page';
let InnPageModule = class InnPageModule {
};
InnPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            InnPageRoutingModule
        ],
        declarations: [InnPage]
    })
], InnPageModule);
export { InnPageModule };
//# sourceMappingURL=inn.module.js.map