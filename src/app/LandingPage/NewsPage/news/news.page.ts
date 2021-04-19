import { Component, OnInit } from '@angular/core';
import {MenuController, ModalController} from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { HttpClient } from '@angular/common/http';
import {forEach} from '@angular-devkit/schematics';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  items: any[] = [];
  stop: boolean;

  constructor(private mod: ModalController, public menuCtrl: MenuController, public http: HttpClient) {
    this.menuCtrl.enable(true);
    this.stop = false;
    this.loadData();
  }

  ngOnInit() {
  }

  async clicked(i) {
    const modal = await this.mod.create({
      component: ModalPage,
      componentProps: {
        item: i
      }
    });

    modal.cssClass = 'modal-fullscreen';
    modal.present();
  }

  loadData(event?) {
    this.http.get('https://speckalm.htl-perg.ac.at/r/api/news')
        .subscribe(res => {
          this.items = this.items.concat(res);
          for (const i of this.items) {
            i.description = i.description.replace(/\r/g, '<br>');
          }
          if (Object.keys(res).length < 10) {
            this.stop = true;
          }
          if (event) {
            event.target.complete();
          }
        });
  }

  loadMore(event) {
    if (this.stop)  {
      event.target.complete();
      event.target.disable = true;
    } else {
      this.loadData(event);
    }
  }
}
