import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-detailed-giftbasket',
  templateUrl: './detailed-giftbasket.page.html',
  styleUrls: ['./detailed-giftbasket.page.scss'],
})
export class DetailedGiftbasketPage implements OnInit {

  constructor(private modalController: ModalController ) {}

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
}
