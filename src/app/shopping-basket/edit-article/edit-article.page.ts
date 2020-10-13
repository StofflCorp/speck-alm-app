import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController, NavController} from '@ionic/angular';
import {GlobalService} from '../../global.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.page.html',
  styleUrls: ['./edit-article.page.scss'],
})
export class EditArticlePage implements OnInit {
  item;
  amount;
  constructor(public alertController: AlertController, private modalController: ModalController, public globalService: GlobalService, private http: HttpClient, private navCtr: NavController) { }

  ngOnInit() {
    this.amount = this.item.pivot.quantity;
  }

  async closeModal() {
    await this.modalController.dismiss();
  }
  async editAmount(){
    const putData = new FormData();
    putData.append('quantity', this.amount.toString());
    const response: any = await this.http.put(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart/${this.item.id}?token=${this.globalService.getToken()}&quantity=${this.amount}`, putData).toPromise();
    this.closeModal();
    location.reload();
  }

}
