import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from "@ionic/angular";
import {GlobalService} from "../../global.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.page.html',
  styleUrls: ['./show-order.page.scss'],
})
export class ShowOrderPage implements OnInit {
  order;
  products: any;
  statistics: any;
  url = 'https://speckalm.htl-perg.ac.at/r/api/';
  constructor(private modalController: ModalController, private service: GlobalService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url+'orders/' + this.order.id + '/products?token=' + this.service.getToken()).subscribe(
        o => (this.products = o )
    );
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
}
