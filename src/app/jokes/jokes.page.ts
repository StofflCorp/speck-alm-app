import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../global.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.page.html',
  styleUrls: ['./jokes.page.scss'],
})
export class JokesPage implements OnInit {

  public jokes;

  constructor(private modalController: ModalController, public globalService: GlobalService, public http: HttpClient) {
  }

  ngOnInit() {
    this.jokes = this.http.get(`https://speckalm.htl-perg.ac.at/r/api/jokes/1`).subscribe();
    console.log(this.jokes);
  }

}
