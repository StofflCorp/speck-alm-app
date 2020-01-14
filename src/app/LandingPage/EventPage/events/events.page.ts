import { Component, OnInit } from '@angular/core';
import {EventModalPage} from '../event-modal/event-modal.page';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  bol: boolean;
  clickedModal: boolean;

  constructor(private mod: ModalController) {
    this.bol = true;
    this.clickedModal = true;
  }

  ngOnInit() {
  }

  async clicked() {
    if (this.clickedModal) {
      const modal = await this.mod.create({
        component: EventModalPage
      });
      modal.present();
    }
    this.clickedModal = true;
  }

  getIcon() {
    if (!this.bol) {
      return 'star-outline';
    } else {
      return 'star';
    }
  }

  favBtnClicked() {
    this.clickedModal = false;
    this.bol = !this.bol;
  }
}
