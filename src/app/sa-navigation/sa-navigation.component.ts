import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-sa-navigation',
  templateUrl: './sa-navigation.component.html',
  styleUrls: ['./sa-navigation.component.scss'],
})
export class SaNavigationComponent implements OnInit {

  @Input('selectedIndex') selectedIndex: number;
  activeLink: boolean[];

  imageData: any = {
    isOpen: true,
    srcOpen: '../../assets/img/OffenIsBanner.jpg',
    srcClosed: '../../assets/img/ZuaIsBanner.jpg'
  };

  constructor(public navCtrl: NavController) {
    this.activeLink = new Array(7);

  }

  ngOnInit() {
    for (let i = 0; i < this.activeLink.length; i++) {
      this.activeLink[i] = (i === +this.selectedIndex);
    }
  }

}
