import { Component, OnInit } from '@angular/core';
import {EventModalPage} from '../event-modal/event-modal.page';
import { MenuController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  bol: boolean;
  clickedModal: boolean;
  items = [];
  favItems = [];
  stop: boolean;

  constructor(private mod: ModalController, public http: HttpClient, private global: GlobalService) {
    this.bol = true;
    this.clickedModal = true;
    this.stop = false;
    this.loadData();
    this.loadFav();
  }

  ngOnInit() {
  }

  loadFav() {
    if(this.global.getId() != null){
      this.http.get( 'https://speckalm.htl-perg.ac.at/r/api/users/'+this.global.getId()+'/events?token='+this.global.getToken()).subscribe(res => {
        this.favItems = this.favItems.concat(res);
      });
    }
  }

  loadData(event?) {
    this.http.get('https://speckalm.htl-perg.ac.at/r/api/events')
        .subscribe(res => {
          this.items = this.items.concat(res);
          if (Object.keys(res).length < 10) {
            this.stop = true;
          }
          if (event) {
            event.target.complete();
          }
        });
  }

  loadMore(event) {
    if(this.stop) {
      event.target.complete();
      event.target.disable = true;
    } else {
      this.loadData(event);
    }
  }

  async clicked(i) {
    let bo: Boolean = false;

    for(let it of this.favItems) {
      if(i.id === it.id) {
        bo=true;
      }
    }

    if (this.clickedModal) {
      const modal = await this.mod.create({
        component: EventModalPage,
        componentProps: {
          item: i,
          bol: bo
        }
      });

      modal.onDidDismiss().then((data) => {
        console.log(data);
      });

      modal.present();
    }
    this.clickedModal = true;
  }

  getIcon(item) {
    for(let i of this.favItems) {
      if(item.id === i.id) {
        return 'star';
      }
    }

    return 'star-outline';
  }

  favBtnClicked(item) {
    if(this.global.getId() != null){
      this.clickedModal = false;
      console.log(item);
      let elem = document.getElementById("icon"+item.id);

      if(elem.getAttribute("ng-reflect-name") === 'star-outline') {
        this.favItems.push(item);

        let postData = new FormData();
        postData.append("token",this.global.getToken());
        postData.append("event", item.id);
        this.http.post(`https://speckalm.htl-perg.ac.at/r/api/users/`+this.global.getId()+'/events',postData).subscribe();

      } else {
        let index: number = 0;
        for(let i of this.favItems) {
          if(item.id === i.id){
             break;
          }
          i++;
        }
        if (index !== -1){
          this.favItems.splice(index, 1);
        }
        this.http.delete(`https://speckalm.htl-perg.ac.at/r/api/users/`+this.global.getId() + '/events/' + item.id +"?token="+this.global.getToken()).subscribe();
      }
    }
  }
}
