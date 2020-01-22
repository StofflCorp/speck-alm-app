import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-sa-navigation',
  templateUrl: './sa-navigation.component.html',
  styleUrls: ['./sa-navigation.component.scss'],
})
export class SaNavigationComponent implements OnInit {

  @Input('selectedIndex') selectedIndex: number;

  imageData: any = {
    isOpen: true,
    srcOpen: '../../assets/img/OffenIsBanner.jpg',
    srcClosed: '../../assets/img/ZuaIsBanner.jpg'
  };

  constructor(public navCtrl: NavController) {
  }

  ngOnInit() {}

}
