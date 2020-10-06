import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import {DetailedGiftbasketPage} from './detailed-giftbasket/detailed-giftbasket.page';
import {DetailedArticlePage} from '../product-view/detailed-article/detailed-article.page';

@Component({
  selector: 'app-gift-basket',
  templateUrl: './gift-basket.page.html',
  styleUrls: ['./gift-basket.page.scss'],
})
export class GiftBasketPage implements OnInit {

  constructor(private modalController: ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: DetailedGiftbasketPage
    });
    return await modal.present();
  }
  ngOnInit() {
  }

}
