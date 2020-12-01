import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../global.service';
import {HttpClient} from '@angular/common/http';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor( public globalService: GlobalService, public alertController: AlertController, private modalController: ModalController, private http: HttpClient, private navCtr: NavController) { }
  date: Date;
  type: 'string';
  curDate: Date;
  datestr: string;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  markDisabled = (date: Date) => {
    const current = new Date();
    return date < current;
  }

  onChange($event) {
    console.log($event);
  }

  ngOnInit(): void {
  }

  onEventSelected() {

  }
  onViewTitleChanged() {

  }
  onTimeSelected($event) {
    this.curDate = $event.selectedTime;
  }
  async order() {
    this.presentConfirm();
  }

  async presentConfirm() {
    const alert = await this.alertController.create({
      message: 'Jetzt bestellen?',
      buttons: [
        {
          text: 'Ja',
          handler: () => {
            this.placeOrder();
            this.modalController.dismiss();
            this.navCtr.navigateRoot('home');
          }
        },
        {
          text: 'Nein',
          role: 'Nein',
          handler: () => {
            return;
          }
        }
      ]
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  async placeOrder() {
    const postData = new FormData();
    const formattedDate = moment(this.curDate).format('YYYY-MM-DD HH:mm:ss');
    this.datestr = formattedDate.toString();
    postData.append('pickup_date', this.datestr);
    const response: any = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart/order?token=${this.globalService.getToken()}&pickup_date=${this.datestr}`, postData).toPromise();
  }
}
