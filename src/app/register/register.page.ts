import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confPw: string;

  constructor(public alertController: AlertController, private navController: NavController, public menuCtrl: MenuController, public http: HttpClient) { }

  ngOnInit() {}

  async register() {
    if (this.firstname === undefined || this.lastname === undefined || this.email === undefined || this.password === undefined || this.confPw === undefined) {
      this.createAlert('Alle Felder müssen befüllt werden!');
      return;
    }
    if (this.password !== this.confPw) {
      this.createAlert('Passwort stimmt nicht mit Bestätigung überein!');
      return;
    }
    if (this.checkPassword(this.password)) {
      this.createAlert('Das Passwort muss aus mindestens 8 Zeichen bestehen und einen Groß- und Kleinbuchstaben beinhalten!');
      return;
    }


    let register = false;

    let postData = new FormData();
    postData.append('prename', this.firstname);
    postData.append('surname', this.lastname);
    postData.append('email', this.email);
    postData.append('password', this.password);
    const response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users`,postData).toPromise();

    if(response['token'] && response['user']){
      register = true;
    }

    // Check if email already exists
    if(register) {
      this.createAlert('Account wurde erstellt bitte bestätigen Sie ihre E-Mail Adresse!');
      this.navController.navigateRoot('/login');
    } else {
      this.createAlert('E-Mail Adresse ist bereits vorhanden!');
    }
  }

  async createAlert(m: string) {
    const alert = await this.alertController.create({
      header: 'Registrierung',
      message: m,
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  checkPassword(pw) {
    const numbers = /\d/;
    const small = /[a-z]/;
    const big = /[A-Z]/;
    const regex = /^[^a-zA-Z0-9 ]+$/;

    if (pw.length < 8 || !numbers.test(pw) || !big.test(pw) || !small.test(pw)) {
      return true;
    }
    // überprüfen das keine Sonderzeichen vorhanden sind
    for (let i = 0; i < pw.length; i++) {
      if (regex.test(pw.charAt(i))) {
        return true;
      }
    }
    return false;
  }
}
