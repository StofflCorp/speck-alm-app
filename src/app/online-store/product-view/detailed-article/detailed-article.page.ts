import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-detailed-article',
  templateUrl: './detailed-article.page.html',
  styleUrls: ['./detailed-article.page.scss'],
})
export class DetailedArticlePage implements OnInit {
  item;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  async closeModal() {
    await this.modalController.dismiss();
  }
}
