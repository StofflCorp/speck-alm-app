import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SocialMediaPage = class SocialMediaPage {
    constructor() { }
    ngOnInit() { }
    click(str) {
        if (str === 'facebook') {
            window.open('https://www.facebook.com/SpeckAlm', '_blank');
        }
        else if (str === 'website') {
            window.open('https://www.speck-alm.at/', '_blank');
        }
        else if (str === 'videos') {
            window.open('https://www.speck-alm.at/videos/', '_blank');
        }
    }
};
SocialMediaPage = tslib_1.__decorate([
    Component({
        selector: 'app-social-media',
        templateUrl: './social-media.page.html',
        styleUrls: ['./social-media.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SocialMediaPage);
export { SocialMediaPage };
//# sourceMappingURL=social-media.page.js.map