import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import {DetailedArticlePage} from '../detailed-article/detailed-article.page';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  constructor(private modalController: ModalController) { }
  async openModal() {
    const modal = await this.modalController.create({
      component: DetailedArticlePage
    });
    return await modal.present();
  }
  ngOnInit() {}


}
