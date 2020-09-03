import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../global.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.page.html',
  styleUrls: ['./shopping-basket.page.scss'],
})
export class ShoppingBasketPage implements OnInit {
  public results;

  constructor(public globalService: GlobalService, public http: HttpClient) {
  }

  ngOnInit() {
    if (this.globalService.token != null) {
      console.log(this.globalService.getId());
      // tslint:disable-next-line:max-line-length
      this.http.get(`https://speckalm.htl-perg.ac.at/r/api/users/${this.globalService.getId()}/shoppingCart?token=${this.globalService.token}`).subscribe((o: any) => {
        this.results = o.products;
      });
    } else {
      console.log('token null');
    }
    console.log(this.results);
  }

}
