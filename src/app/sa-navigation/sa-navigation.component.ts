import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sa-navigation',
  templateUrl: './sa-navigation.component.html',
  styleUrls: ['./sa-navigation.component.scss'],
})
export class SaNavigationComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('selectedIndex') selectedIndex: number;
  isActive: boolean[];

  imageData: any = {
    isOpen: true,
    srcOpen: '../../assets/img/OffenIsBanner.jpg',
    srcClosed: '../../assets/img/ZuaIsBanner.jpg'
  };

  constructor() {
    this.isActive = new Array(8);
  }

  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      this.isActive[i] = i === this.selectedIndex;
    }
  }

}
