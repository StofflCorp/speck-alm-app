import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor(private mod: ModalController) { }

  ngOnInit() {
  }

  async clicked() {
    const modal = await this.mod.create({
      component: ModalPage
    });

    modal.cssClass = 'modal-fullscreen';
    modal.present();
  }
}
