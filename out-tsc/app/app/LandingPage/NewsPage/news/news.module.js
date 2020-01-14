import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewsPageRoutingModule } from './news-routing.module';
import { NewsPage } from './news.page';
import { ModalPage } from '../modal/modal.page';
let NewsPageModule = class NewsPageModule {
};
NewsPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            NewsPageRoutingModule
        ],
        declarations: [NewsPage, ModalPage],
        entryComponents: [ModalPage]
    })
], NewsPageModule);
export { NewsPageModule };
//# sourceMappingURL=news.module.js.map