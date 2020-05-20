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
  amount: number;
  constructor(public alertController: AlertController, private modalController: ModalController, public dataService: DataService, public globalService: GlobalService,private http: HttpClient) { }

  ngOnInit() {
    this.amount = 1;
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
    postData.append('quantity', this.amount.toString());
    const response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/3/shoppingCart?token=${this.globalService.getToken()}`, postData).toPromise()
    //const response = this.dataService.addToCart(3, this.item.id, this.amount);
    if(response['error'] == undefined ){
      this.createAlert("Produkt erfolgreich hinzugefügt.")
    }
    else{
      this.createAlert("Produkt ist bereits im Warenkorb. ")
    }

  }
  async createAlert(m: string) {
    const alert = await this.alertController.create({
      header: 'Produkt zum Warenkorb hinzufügen',
      message: m,
      buttons: ['Weiter einkaufen','Zum Warenkorb']
    });
    await alert.present();
    await alert.onDidDismiss();
  }
}
