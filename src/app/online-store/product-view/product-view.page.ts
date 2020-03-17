import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../services/data.service";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.page.html',
  styleUrls: ['./product-view.page.scss'],
})
export class ProductViewPage implements OnInit {

  constructor(public navCtrl: NavController,private router: Router, private dataService: DataService) { }

  openArticlesWithService(id:Number, value:string){
    this.dataService.setData(id, value);
  }

  ngOnInit(): void {
  }

}
