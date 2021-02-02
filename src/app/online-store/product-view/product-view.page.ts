import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NavController} from '@ionic/angular';
import {Observable} from 'rxjs';
import {GlobalService} from '../../global.service';



@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {
  results: Observable<any>;
  data: any;
  title: any;
  searchTerm = 'categories';
  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute, public globalService: GlobalService, public navCtr: NavController) { }

  ngOnInit(): void {
    this.data = this.route.snapshot.data.special ?? this.route.snapshot.paramMap.get('id') ?? 3;
    if (this.data === 1) {
      this.title = 'Speck-Alm BIO Produkte';
      this.results = this.dataService.searchCategories(this.searchTerm, this.data);
    } else if (this.data === 2) {
      this.title = 'Hofladen Produkte';
      this.results = this.dataService.searchCategories(this.searchTerm, this.data);
    } else if (this.data === 3) {
      this.title = 'Bio Fleisch';
    }
  }

  toBasket() {
    this.navCtr.navigateRoot('shopping-basket');
  }

  setArticleCategoryTitle(title: string) {
    this.dataService.setData('articlesTitle', title);
  }

}
