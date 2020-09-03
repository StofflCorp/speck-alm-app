import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';
import {GlobalService} from '../global.service';
import {DetailedArticlePage} from '../online-store/product-view/detailed-article/detailed-article.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.page.html',
  styleUrls: ['./shopping-basket.page.scss'],
})
export class ShoppingBasketPage implements OnInit {
  public results;

  constructor(private modalController: ModalController, public globalService: GlobalService, public http: HttpClient) {
  }


  ngOnInit() {
    if (this.globalService.token != null) {
      console.log(this.globalService.getId());
      // tslint:disable-next-line:max-line-length
      const response = this.http.get(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart?token=${this.globalService.token}`).subscribe((o: any) => {
        this.results = o.products;
      });
    } else {
      console.log('token null');
    }
    console.log(this.results);
  }

    deleteArticle(id) {
      // tslint:disable-next-line:max-line-length
      const cache = `https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart/` + id + `?token=${this.globalService.token}`;
      console.log(cache);
      this.http.delete(cache).subscribe();
      location.reload();
    }
    expandItem(item): void {
      if (item.expanded) {
        item.expanded = false;
      } else {
        this.results.map(listItem => {
          if (item === listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }
}
