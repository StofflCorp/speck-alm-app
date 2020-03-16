import { Component, OnInit } from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {  MenuController } from '@ionic/angular';

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

  constructor(public alertController: AlertController, private navController: NavController, private afAuth: AngularFireAuth, public menuCtrl: MenuController) { }

  ngOnInit() {}

  ionViewWillEnter() {
    // this.menuCtrl.enable(false);
  }

  ionViewWillLeave(){
    // this.menuCtrl.enable(true);
  }

  async register(){
    if (this.firstname === undefined || this.lastname === undefined || this.email === undefined || this.password === undefined || this.confPw === undefined) {
      this.createAlert('Alle Felder müssen befüllt werden!');
      return;
    }
    if (this.password !== this.confPw) {
      this.createAlert('Passwort stimmt nicht mit Bestätigung überein!');
      return;
    }
    if(this.checkPassword(this.password)){
      this.createAlert('Das Passwort muss aus mindestens 8 Zeichen bestehen und einen Groß- und Kleinbuchstaben beinhalten!');
      return;
    }

    let register = true;

    await this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password).catch(function() {
      register = false;
    });

    // Check if email already exists
    if(register) {
      this.createAlert('Account wurde erstellt bitte bestätigen Sie ihre E-Mail Adresse!');
      this.navController.navigateRoot('/login');
    } else {
      this.createAlert('E-Mail Adresse ist bereits vorhanden!');
    }

    // Speichern in eigener DB
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

  checkPassword(pw){
    var numbers = /\d/;
    var small = /[a-z]/;
    var big = /[A-Z]/;
    var regex = /^[^a-zA-Z0-9 ]+$/;

    if(pw.length < 8 || !numbers.test(pw) || !big.test(pw) || !small.test(pw)) {
      return true;
    }
    // überprüfen das keine Sonderzeichen vorhanden sind
    for(var i=0; i < pw.length; i++) {
      if(regex.test(pw.charAt(i))){
        return true;
      }
    }
    return false;
  }
}
