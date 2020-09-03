import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
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
  constructor(public alertController: AlertController, private modalController: ModalController, public globalService: GlobalService,private http: HttpClient, private navCtr:NavController) { }

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
    const response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart?token=${this.globalService.getToken()}`, postData).toPromise()
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
      buttons: [
        {
          text:'Weiter einkaufen',
          handler: back =>{
            this.modalController.dismiss();
            this.navCtr.navigateRoot("online-store")
          }
        }
        ,
        {
          text:'Zum Warenkorb',
          handler: back =>{
            this.modalController.dismiss();
            this.navCtr.navigateRoot("shopping-basket")
          }
        }
        ]
    });
    await alert.present();
    await alert.onDidDismiss();
  }
}
