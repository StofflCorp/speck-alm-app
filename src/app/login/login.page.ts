import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import { HomePage } from '../home/home.page';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  email: string;
  password: string;
  constructor(public alertController: AlertController, private navController: NavController, private afAuth: AngularFireAuth) { }

  ngOnInit() {}

  async login() {
    if (this.email === undefined || this.password === undefined) {
        this.createAlert('E-Mail- und Passwortfeld dürfen nicht leer sein!');
        return;
    }

    var login = true;
    // überprüfen ob account schon vorhanden
    await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).catch(function (error){
      login = false;
    });

    if(login) {
      this.navController.navigateRoot('/home');
    } else{
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
