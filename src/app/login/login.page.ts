import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../global.service';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string;
  password: string;
  // tslint:disable-next-line:max-line-length
  constructor(public alertController: AlertController,
              private navController: NavController,
              public menuCtrl: MenuController,
              public http: HttpClient,
              public global: GlobalService,
              public storage: StorageService) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.silentLogin();
  }

  private async silentLogin() {
    const t = this.global.getToken();
    const i = this.global.getId();
    if (t && i) {
      const postData = new FormData();
      postData.append('token', t);
      postData.append('id', i.toString());
      const response: any = await this.http.post('https://speckalm.htl-perg.ac.at/r/auth/refreshToken', postData).toPromise();

      if (!response.error) {
        this.global.setToken(response.token);
        this.global.setId(response.id);
        await this.navController.navigateRoot('/home');
      }
    }
  }

  async login() {
    if (this.email === undefined || this.password === undefined) {
      this.createAlert('E-Mail- und Passwortfeld dürfen nicht leer sein!');
      return;
    }

    // überprüfen ob account schon vorhanden
    const postData = new FormData();
    this.email = this.email.trim();
    this.password = this.password.trim();
    postData.append('email', this.email);
    postData.append('password', this.password);
    try {
      const response: any = await this.http.post(`https://speckalm.htl-perg.ac.at/r/auth/login`, postData).toPromise();
      this.global.setToken(response.token);
      this.global.setId(response.id);
      this.navController.navigateRoot('/home');

    } catch (e) {
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
