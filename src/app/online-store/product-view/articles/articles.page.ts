import { Component, OnInit } from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
import {DetailedArticlePage} from '../detailed-article/detailed-article.page';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {
  data: any;
  products: any;
  test: any;

  articleCategory: string;

  constructor(private modalController: ModalController, private route: ActivatedRoute, private dataService: DataService, public navCtr: NavController) { }
  async openModal(i) {
    const modal = await this.modalController.create({
      component: DetailedArticlePage,
      componentProps: {
        item: i
      }
    });
    return await modal.present();
  }

  ngOnInit() {
    this.articleCategory = this.dataService.getData('articlesTitle') ?? 'Produkte';
    this.data = this.route.snapshot.data.special ?? this.route.snapshot.paramMap.get('id') ?? -1;
    if (this.data === -1) {
      this.navCtr.navigateRoot('online-store');
    }
    this.products = this.dataService.searchProducts('products', this.data.id ?? this.data);
  }

}
