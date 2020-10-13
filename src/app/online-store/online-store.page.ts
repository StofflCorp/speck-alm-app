import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import {GlobalService} from '../global.service';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.page.html',
  styleUrls: ['./online-store.page.scss'],
})
export class OnlineStorePage implements OnInit {

  constructor(public navCtrl: NavController, public dataService: DataService,  public alertController: AlertController, public globalService: GlobalService) { }

  ngOnInit() {
    if (this.globalService.getToken() == null) {
      this.createAlert('Bestelliste', 'Um diesen Bereich der App verwenden zu können müssen sie sich anmelden');
      this.navCtrl.navigateRoot('login');
    } else {
      this.createAlert('So Funktionierts', '1. Frischfleisch bzw. Produkte vorbestellen<br/><br/>  2. Am bekanntgegebenen Abholtermin Produkte abholen <br/><br/> 3. Handverlesene Speck-Alm BIO Qualität genießen.');
      this.openProductViewWithService(3, 3);

    }
  }
  async createAlert(header: string, m: string) {
    const alert = await this.alertController.create({
      header,
      message: m,
      cssClass:'getCustom',
      buttons: [
        {
          text:'OK'

        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss();
  }
  openProductViewWithService(id, value) {
      this.dataService.setData(id, value);
  }

}
