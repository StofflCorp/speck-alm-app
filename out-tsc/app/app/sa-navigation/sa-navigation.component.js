import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let SaNavigationComponent = class SaNavigationComponent {
    constructor() {
        this.imageData = {
            isOpen: true,
            srcOpen: "../../assets/img/OffenIsBanner.jpg",
            srcClosed: "../../assets/img/ZuaIsBanner.jpg"
        };
        //Initialize Array
        this.isActive = new Array(8);
    }
    ngOnInit() {
        //Check which navigation link is active
        for (let i = 0; i < 8; i++) {
            this.isActive[i] = i === this.selectedIndex;
        }
    }
};
tslib_1.__decorate([
    Input('selectedIndex'),
    tslib_1.__metadata("design:type", Number)
], SaNavigationComponent.prototype, "selectedIndex", void 0);
SaNavigationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sa-navigation',
        templateUrl: './sa-navigation.component.html',
        styleUrls: ['./sa-navigation.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SaNavigationComponent);
export { SaNavigationComponent };
//# sourceMappingURL=sa-navigation.component.js.map