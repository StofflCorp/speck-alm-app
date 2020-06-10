import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';
import {DetailedArticlePage} from '../detailed-article/detailed-article.page';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {GlobalService} from "../../../global.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {
  data:any;
  products:any;
  test:any;
  constructor(private modalController: ModalController, private route: ActivatedRoute, private dataService: DataService, private globalService:GlobalService) { }
  async openModal(i) {
    const modal = await this.modalController.create({
      component: DetailedArticlePage,
      componentProps: {
        item:i
      }
    });
    return await modal.present();
  }
  ngOnInit() {
    if(this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
    }
    this.products = this.dataService.searchProducts("products", this.data.id);
  }


}
