import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../global.service';
import {HttpClient} from '@angular/common/http';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements OnInit {
  bol: boolean;
  item;

  constructor(private global: GlobalService, public http: HttpClient, private modalController: ModalController) {}

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
    if(this.bol) {
      this.http.delete(`https://speckalm.htl-perg.ac.at/r/api/users/`+this.global.getId() + '/events/' + this.item.id +"?token="+this.global.getToken()).subscribe();
    } else {
      let postData = new FormData();
      postData.append("token",this.global.getToken());
      postData.append("event", this.item.id);
      this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/`+this.global.getId()+'/events',postData).subscribe();
    }
    this.bol = !this.bol;
  }

  closeModal () {
    let data = {'bol':this.bol};
    this.modalController.dismiss({data});
  }
}
