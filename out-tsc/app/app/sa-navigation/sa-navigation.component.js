import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from "@ionic/angular";
import { MenuController } from "@ionic/angular";
import { Router } from "@angular/router";
let SaNavigationComponent = class SaNavigationComponent {
    constructor(navCtrl, menu, router) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.router = router;
        this.imageData = {
            isOpen: true,
            srcOpen: '../../assets/img/OffenIsBanner.jpg',
            srcClosed: '../../assets/img/ZuaIsBanner.jpg'
        };
    }
    ngOnInit() { }
    navigate(page) {
        this.navCtrl.navigateRoot(page).then(() => {
            this.menu.close();
        });
    }
};
SaNavigationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sa-navigation',
        templateUrl: './sa-navigation.component.html',
        styleUrls: ['./sa-navigation.component.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [NavController, MenuController, Router])
], SaNavigationComponent);
export { SaNavigationComponent };
//# sourceMappingURL=sa-navigation.component.js.map