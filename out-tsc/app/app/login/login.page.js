import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
let LoginPage = class LoginPage {
    constructor(alertController, navController, afAuth) {
        this.alertController = alertController;
        this.navController = navController;
        this.afAuth = afAuth;
    }
    ngOnInit() { }
    login() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.email === undefined || this.password === undefined) {
                this.createAlert('E-Mail- und Passwortfeld dürfen nicht leer sein!');
                return;
            }
            var login = true;
            // überprüfen ob account schon vorhanden
            yield this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).catch(function () {
                login = false;
            });
            if (login) {
                this.navController.navigateRoot('/home');
            }
            else {
                this.createAlert('E-Mail oder Passwort sind nicht korrekt!');
            }
        });
    }
    createAlert(m) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Login',
                message: m,
                buttons: ['OK']
            });
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
};
LoginPage = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.page.html',
        styleUrls: ['./login.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController, NavController, AngularFireAuth])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.page.js.map
