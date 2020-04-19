import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {NavController} from "@ionic/angular";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {
  results: Observable<any>;
  searchTerm = 'categories';
  constructor(public navCtrl: NavController,private router: Router, private dataService: DataService) { }

  openArticlesWithService(id:Number, value){
    this.dataService.setData(id, value);
  }

  ngOnInit(): void {
    this.results = this.dataService.searchCategories(this.searchTerm)
  }




}
