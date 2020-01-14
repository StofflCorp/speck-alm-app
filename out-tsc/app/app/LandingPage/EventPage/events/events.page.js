import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EventModalPage } from '../event-modal/event-modal.page';
import { ModalController } from '@ionic/angular';
let EventsPage = class EventsPage {
    constructor(mod) {
        this.mod = mod;
        this.bol = true;
        this.clickedModal = true;
    }
    ngOnInit() {
    }
    clicked() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.clickedModal) {
                const modal = yield this.mod.create({
                    component: EventModalPage
                });
                modal.present();
            }
            this.clickedModal = true;
        });
    }
    getIcon() {
        if (!this.bol) {
            return 'star-outline';
        }
        else {
            return 'star';
        }
    }
    favBtnClicked() {
        this.clickedModal = false;
        this.bol = !this.bol;
    }
};
EventsPage = tslib_1.__decorate([
    Component({
        selector: 'app-events',
        templateUrl: './events.page.html',
        styleUrls: ['./events.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], EventsPage);
export { EventsPage };
//# sourceMappingURL=events.page.js.map