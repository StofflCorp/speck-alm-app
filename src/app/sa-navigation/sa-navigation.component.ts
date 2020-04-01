import {Component, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {MenuController} from "@ionic/angular";
import {Router} from "@angular/router";
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-sa-navigation',
  templateUrl: './sa-navigation.component.html',
  styleUrls: ['./sa-navigation.component.scss'],
})
export class SaNavigationComponent implements OnInit {

  imageData: any = {
    isOpen: true,
    srcOpen: '../../assets/img/OffenIsBanner.jpg',
    srcClosed: '../../assets/img/ZuaIsBanner.jpg'
  };

  constructor(public navCtrl: NavController, private menu: MenuController, private router: Router, private global: GlobalService) {}

  ngOnInit() {}

  navigate(page: string) {
    if(page === 'login') {
      this.global.setToken('');
      this.global.setId(null);
    }

    this.navCtrl.navigateRoot(page).then(() => {
      this.menu.close();
    });
  }

}
