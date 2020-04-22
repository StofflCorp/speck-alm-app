import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import {DataService} from "../../../services/data.service";
import {GlobalService} from "../../../global.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.page.html',
  styleUrls: ['./detailed-article.page.scss'],
})
export class DetailedArticlePage implements OnInit {
  item;
  amount;
  constructor(public alertController: AlertController, private modalController: ModalController, public dataService: DataService, public globalService: GlobalService,private http: HttpClient) { }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

  async addToCart() {
    if (this.amount === undefined) {
      this.createAlert('Menge darf nicht leer sein!');
      return;
    }
    let postData = new FormData();
    postData.append('product', this.item.id);
    postData.append('quantity', this.amount);
    const response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/3/shoppingCart?token=${this.dataService.token}`, postData).toPromise()
    //const response = this.dataService.addToCart(3, this.item.id, this.amount);

    this.createAlert(response['error'])
  }
  async createAlert(m: string) {
    const alert = await this.alertController.create({
      header: 'Produkt zum Warenkorb hinzufügen',
      message: m,
      buttons: ['OK']
    });
    await alert.present();
    await alert.onDidDismiss();
  }
}
