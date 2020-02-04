import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
let RegisterPage = class RegisterPage {
    constructor(alertController, navController, afAuth) {
        this.alertController = alertController;
        this.navController = navController;
        this.afAuth = afAuth;
    }
    ngOnInit() { }
    register() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.firstname === undefined || this.lastname === undefined || this.email === undefined || this.password === undefined || this.confPw === undefined) {
                this.createAlert('Alle Felder müssen befüllt werden!');
                return;
            }
            if (this.password !== this.confPw) {
                this.createAlert('Passwort stimmt nicht mit Bestätigung überein!');
                return;
            }
            if (this.checkPassword(this.password)) {
                // noinspection JSPotentiallyInvalidUsageOfClassThis
                this.createAlert('Das Passwort muss aus mindestens 8 Zeichen bestehen und einen Groß- und Kleinbuchstaben beinhalten!');
                return;
            }
            let register = true;
            yield this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).catch(function () {
                register = false;
            });
            // Check if email already exists
            if (register) {
                this.createAlert('Account wurde erstellt bitte bestätigen Sie ihre E-Mail Adresse!');
                this.navController.navigateRoot('/login');
            }
            else {
                this.createAlert('E-Mail Adresse ist bereits vorhanden!');
            }
            // Speichern in eigener DB
        });
    }
    createAlert(m) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Registrierung',
                message: m,
                buttons: ['OK']
            });
            yield alert.present();
            yield alert.onDidDismiss();
        });
    }
    checkPassword(pw) {
        var numbers = /\d/;
        var small = /[a-z]/;
        var big = /[A-Z]/;
        var regex = /^[^a-zA-Z0-9 ]+$/;
        if (pw.length < 8 || !numbers.test(pw) || !big.test(pw) || !small.test(pw)) {
            return true;
        }
        // überprüfen das keine Sonderzeichen vorhanden sind
        for (var i = 0; i < pw.length; i++) {
            if (regex.test(pw.charAt(i))) {
                return true;
            }
        }
        return false;
    }
};
RegisterPage = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [AlertController, NavController, AngularFireAuth])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map
