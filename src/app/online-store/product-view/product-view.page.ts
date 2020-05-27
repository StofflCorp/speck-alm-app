import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {AlertController, NavController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GlobalService} from "../../global.service";



@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {
  results: Observable<any>;
  data:any;
  title:any;
  searchTerm = 'categories';
  constructor(private router: Router, private dataService: DataService,private route: ActivatedRoute, public globalService: GlobalService) { }

  openArticlesWithService(id:Number, value){
    this.dataService.setData(id, value);
  }

  ngOnInit(): void {

    if(this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
      if(this.data == 1){
        this.title = "Speck-Alm BIO Produkte";
        this.results = this.dataService.searchCategories(this.searchTerm, this.data)
      }
      else if(this.data == 2){
        this.title = "Hofladen Produkte";
        this.results = this.dataService.searchCategories(this.searchTerm, this.data)
      }
      else if(this.data == 3){
        this.title = "Bio Fleisch"
      }

    }
    else{
      this.title = "Bio Fleisch"
      this.data = 3
    }

  }


}
