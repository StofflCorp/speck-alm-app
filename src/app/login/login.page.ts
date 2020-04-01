import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string;
  password: string;
  // tslint:disable-next-line:max-line-length
  constructor(public alertController: AlertController, private navController: NavController, public menuCtrl: MenuController, public http: HttpClient, public global: GlobalService) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {}

  async login() {
    if (this.email === undefined || this.password === undefined) {
        this.createAlert('E-Mail- und Passwortfeld dürfen nicht leer sein!');
        return;
    }

    var login = true;
    // überprüfen ob account schon vorhanden
    let postData = new FormData();
    postData.append('email', this.email);
    postData.append('password', this.password);

    const response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/auth/login`,postData).toPromise();

    if (response['token'] != null) {
      this.global.setToken(response['token']);
      this.global.setId(response['id']);
      console.log(response['token']);

      this.navController.navigateRoot('/home');
    } else {
      this.createAlert('E-Mail oder Passwort sind nicht korrekt!');
    }
  }

  async createAlert(m: string) {
    const alert = await this.alertController.create({
      header: 'Login',
      message: m,
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
  }
}
