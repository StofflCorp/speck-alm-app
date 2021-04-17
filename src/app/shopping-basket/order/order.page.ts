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
  time : Date;
  datestr: string;
  dateString : string;
  weekdays = ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "September", "Oktober","November", "Dezember"];
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
    this.curDate = this.calendar.currentDate
    this.dateString = this.weekdays[this.curDate.getMonth()] + " "+ this.curDate.getFullYear()
    this.time = new Date()
    this.time.setMinutes(0)
    this.time.setHours(12)
  }

  onEventSelected() {

  }
  onViewTitleChanged() {

  }
  onTimeSelected($event) {
    this.curDate = $event.selectedTime;
    this.dateString = this.weekdays[this.curDate.getMonth()] + " "+ this.curDate.getFullYear()
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
    this.curDate.setHours(this.time.getHours())
    this.curDate.setMinutes(this.time.getMinutes())
    const formattedDate = moment(this.curDate).format('YYYY-MM-DD HH:mm:ss');
    this.datestr = formattedDate.toString();
    postData.append('pickup_date', this.datestr);
    const response: any = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart/order?token=${this.globalService.getToken()}&pickup_date=${this.datestr}`, postData).toPromise();
  }

  setSelectedDate($event: CustomEvent) {
    this.time= new Date($event.detail.value)
  }
}
