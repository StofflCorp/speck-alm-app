import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpClient} from '@angular/common/http';
import {ModalController, NavController} from '@ionic/angular';
import {ShowOrderPage} from './show-order/show-order.page';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  user: any;
  orders: any;
  currentOrders: any;
  statistics: any;

  statisticColors: string[];

  url = 'https://speckalm.htl-perg.ac.at/r/api/users/';
  constructor(private modalController: ModalController, private service: GlobalService, private http: HttpClient, private navCtr: NavController) { }

  ngOnInit() {
      this.statisticColors = ['#00acd4', '#E14575', '#6aba01'];
      this.http.get(this.url + this.service.getId() + '?token=' + this.service.getToken()).subscribe(
          u => this.user = u
      );
      this.http.get(this.url + this.service.getId() + '/latestOrders?token=' + this.service.getToken()).subscribe(
          o => this.orders = o
      );
      this.http.get(this.url + this.service.getId() + '/preparingOrders?token=' + this.service.getToken()).subscribe(
          o => this.currentOrders = o
      );
      this.http.get(this.url + this.service.getId() + '/statistics?token=' + this.service.getToken()).subscribe(
          o => this.statistics = o
      );
  }

  toShoppingBasket() {
    this.navCtr.navigateRoot('shopping-basket');
  }

  async openModal(i) {
      const modal = await this.modalController.create({
          component: ShowOrderPage,
          componentProps: {
              order: i
          }
      });
      return await modal.present();
  }
}
