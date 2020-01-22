import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
let ModalPage = class ModalPage {
    constructor(mod) {
        this.mod = mod;
    }
    ngOnInit() { }
    closeModal() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.mod.dismiss();
        });
    }
};
ModalPage = tslib_1.__decorate([
    Component({
        selector: 'app-modal',
        templateUrl: './modal.page.html',
        styleUrls: ['./modal.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], ModalPage);
export { ModalPage };
//# sourceMappingURL=modal.page.js.map