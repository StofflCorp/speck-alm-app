import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-online-store',
  templateUrl: './online-store.page.html',
  styleUrls: ['./online-store.page.scss'],
})
export class OnlineStorePage implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  openProductViewWithService(id, value) {
      this.dataService.setData(id, value);
  }
}
