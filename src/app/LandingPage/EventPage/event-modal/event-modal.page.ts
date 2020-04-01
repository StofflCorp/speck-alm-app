import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements OnInit {
  bol: boolean;
  item;

  constructor() {
    // später muss der Zustand aus der DB geladen werden
    this.bol = false;
  }

  ngOnInit() {
  }

  getIcon() {
    if (!this.bol) {
      return 'star-outline';
    } else {
      return 'star';
    }
  }

  favBtnClicked() {
    this.bol = !this.bol;
  }
}
