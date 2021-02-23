import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../global.service';
import {HttpClient} from '@angular/common/http';
import {ModalController, NavController} from "@ionic/angular";
import {DetailedArticlePage} from "../online-store/product-view/detailed-article/detailed-article.page";
import {ShowOrderPage} from "./show-order/show-order.page";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  user: any;
  orders: any;
  currentOrders: any;
  url = 'https://speckalm.htl-perg.ac.at/r/api/users/';
  constructor(private modalController: ModalController, private service: GlobalService, private http: HttpClient, private navCtr: NavController) { }

  ngOnInit() {
      this.http.get(this.url + this.service.getId() + '?token=' + this.service.getToken()).subscribe(
          u => this.user = u
      );
      this.http.get(this.url + this.service.getId() + '/latestOrders?token=' + this.service.getToken()).subscribe(
          o => (this.orders = o
          )
      );
      this.http.get(this.url + this.service.getId() + '/preparingOrders?token=' + this.service.getToken()).subscribe(
          o => (this.currentOrders = o
          )
      );
  }

  toShoppingBasket() {
    this.navCtr.navigateRoot('shopping-basket');
  }


  async openModal(i) {
      console.log("Arrived")
      const modal = await this.modalController.create({
          component: ShowOrderPage,
          componentProps: {
              order: i
          }
      });
      return await modal.present();
  }
}
