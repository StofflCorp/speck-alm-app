import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sa-navigation',
  templateUrl: './sa-navigation.component.html',
  styleUrls: ['./sa-navigation.component.scss'],
})
export class SaNavigationComponent implements OnInit {

  imageData: any = {
    isOpen: true,
    srcOpen: "../../assets/img/OffenIsBanner.jpg",
    srcClosed: "../../assets/img/ZuaIsBanner.jpg"
  };

  constructor() { }

  ngOnInit() {}

}
