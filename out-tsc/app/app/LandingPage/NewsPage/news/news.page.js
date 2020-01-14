import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
let NewsPage = class NewsPage {
    constructor(mod) {
        this.mod = mod;
    }
    ngOnInit() {
    }
    clicked() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.mod.create({
                component: ModalPage
            });
            modal.present();
        });
    }
};
NewsPage = tslib_1.__decorate([
    Component({
        selector: 'app-news',
        templateUrl: './news.page.html',
        styleUrls: ['./news.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], NewsPage);
export { NewsPage };
//# sourceMappingURL=news.page.js.map