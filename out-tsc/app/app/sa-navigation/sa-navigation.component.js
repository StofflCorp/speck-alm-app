import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NavController } from "@ionic/angular";
let SaNavigationComponent = class SaNavigationComponent {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.imageData = {
            isOpen: true,
            srcOpen: '../../assets/img/OffenIsBanner.jpg',
            srcClosed: '../../assets/img/ZuaIsBanner.jpg'
        };
        this.activeLink = new Array(7);
    }
    ngOnInit() {
        for (let i = 0; i < this.activeLink.length; i++) {
            this.activeLink[i] = (i === +this.selectedIndex);
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
    tslib_1.__metadata("design:paramtypes", [NavController])
], SaNavigationComponent);
export { SaNavigationComponent };
//# sourceMappingURL=sa-navigation.component.js.map