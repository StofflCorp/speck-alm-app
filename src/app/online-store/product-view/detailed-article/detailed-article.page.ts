import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {GlobalService} from '../../../global.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.page.html',
  styleUrls: ['./detailed-article.page.scss'],
})
export class DetailedArticlePage implements OnInit {
  item;
  amount: number;
  isEditMode = false;

  selectedPartition;
  selectedSubPartitionType;
  partitionValue;
  includeBone;

  constructor(public alertController: AlertController, private modalController: ModalController, public globalService: GlobalService, private http: HttpClient, private navCtr: NavController) {
  }

  ngOnInit() {
    if (this.item.pivot) {
        this.isEditMode = true;
        this.amount = this.item.pivot.quantity;
        if (this.item.type === 1) {
          this.selectedPartition = this.item.partitions.filter((elem) => elem.id === this.item.selectedPartition.id)[0];
          if (this.item.selectedPartition.type === 2) {
            this.selectedSubPartitionType = this.item.pivot.partition_value.toString();
          } else {
            this.partitionValue = this.item.pivot.partition_value;
          }
          this.includeBone = this.item.pivot.include_bone;
        }
      } else {
          this.amount = 1;
      }
  }
  async closeModal() {
    await this.modalController.dismiss();
  }

  async submit() {
    if (!this.amount) {
      this.createAlert('Fehlerhafte Eingaben', 'Menge darf nicht leer sein!');
      return;
    }
    const requestBody: {[k: string]: any} = {
      quantity: this.amount.toString()
    };
    if (this.item.type === 1) {
      requestBody.partition_id = this.selectedPartition.id;
      // Ist Fleischaufteilung eine Checkbox? partitionValue einsetzen. Ist es ein Gewichts-/Stückartikel mit Auswahl? 0 für Gewichtsangabe, 1 für Stückangabe einsetzen
      requestBody.partition_value = this.selectedPartition.type === 3 ? this.partitionValue : this.selectedPartition.type === 2 ? this.selectedSubPartitionType : 0;
      requestBody.include_bone = this.item.bone_weight > 0 ? this.includeBone : 0;
    }
    requestBody.product = this.item.id;

    let response;
    if (this.isEditMode) {
      response = await this.http.put(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart/${this.item.id}?token=${this.globalService.getToken()}`, requestBody).toPromise();
      if (response.error) {
        this.createAlert('Speichern fehlgeschlagen', response.error);
      } else {
        this.modalController.dismiss();
      }
    } else {
      response = await this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart?token=${this.globalService.getToken()}`, requestBody).toPromise();
      if (!response.error) {
        this.createAlert('Warenkorb ergänzt', 'Produkt erfolgreich hinzugefügt.');
      } else {
        this.createAlert('Hinzufügen fehlgeschlagen',  response.error);
      }
    }
  }
  async createAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Weiter einkaufen',

          handler: back => {
            this.modalController.dismiss();
            this.navCtr.navigateRoot('online-store');
          }
        }
        ,
        {
          text: 'Zum Warenkorb',
          handler: back => {
            this.modalController.dismiss();
            this.navCtr.navigateRoot('shopping-basket');
          }
        }
        ]
    });
    await alert.present();
    await alert.onDidDismiss();
  }

  resetAmount() {
    this.amount = 1;
  }

  resetSubPartitionType() {
    this.selectedSubPartitionType = null;
  }
}
