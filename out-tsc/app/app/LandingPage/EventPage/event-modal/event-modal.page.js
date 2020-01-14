import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let EventModalPage = class EventModalPage {
    constructor() {
        // später muss der Zustand aus der DB geladen werden
        this.bol = false;
    }
    ngOnInit() {
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
        this.bol = !this.bol;
    }
};
EventModalPage = tslib_1.__decorate([
    Component({
        selector: 'app-event-modal',
        templateUrl: './event-modal.page.html',
        styleUrls: ['./event-modal.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], EventModalPage);
export { EventModalPage };
//# sourceMappingURL=event-modal.page.js.map