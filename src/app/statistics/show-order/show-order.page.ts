import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController, ToastController} from "@ionic/angular";
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
  response: any;
  url = 'https://speckalm.htl-perg.ac.at/r/api/';
  constructor(public alertController: AlertController,private modalController: ModalController, private service: GlobalService, private http: HttpClient,public navCtr: NavController, public toastController: ToastController) { }

  ngOnInit() {
    this.http.get(this.url+'orders/' + this.order.id + '/products?token=' + this.service.getToken()).subscribe(
        o => (this.products = o )
    );
    console.log(this.order)
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

  async addToBasket() {
    const requestBody: { [k: string]: any } = {
      order: this.order.id
    };
    this.response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${this.service.getId()}/redoOrder?token=${this.service.getToken()}`, requestBody).toPromise();
    console.log(this.response)

    this.createAlert('Produkte zum Warenkorb hinzufügen');


  }
  async createAlert(header: string) {
    let array=[];
    for (let entry of this.response.merge_tactics) {
       let action=  async back => {
        const requestBody: { [k: string]: any } = {
          order: this.order.id,
          merge_tactic: entry.code
        };
        this.response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${this.service.getId()}/redoOrder?token=${this.service.getToken()}`, requestBody).toPromise();
        if(!this.response.succes){
          this.presentToastWithOptions("Produkte wurden erfolgreich hinzugefügt")
        }
        else{
          this.presentToastWithOptions("Produkte wurden nicht erfolgreich hinzugefügt")
        }
      }
      array.push({text:entry.name, handler:action})

    }

    var message = this.response.warning
    const alert = await this.alertController.create({
      header,
      message,
      buttons:array

    });
    await alert.present();
    await alert.onDidDismiss();
  }
  async presentToastWithOptions(message:string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      duration: 2000
    });
    await toast.present();
    this.closeModal()
  }
}
