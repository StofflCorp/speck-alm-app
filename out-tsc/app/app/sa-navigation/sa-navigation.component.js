import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SaNavigationComponent = class SaNavigationComponent {
    constructor() {
        this.imageData = {
            isOpen: true,
            srcOpen: "../../assets/img/OffenIsBanner.jpg",
            srcClosed: "../../assets/img/ZuaIsBanner.jpg"
        };
    }
    ngOnInit() { }
};
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