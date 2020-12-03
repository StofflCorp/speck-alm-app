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
  public jokeList: any = [];

  constructor(private modalController: ModalController, public globalService: GlobalService, public http: HttpClient) {
  }

  ngOnInit() {
    this.jokeList = this.http.get(`https://speckalm.htl-perg.ac.at/r/api/jokes`).subscribe((o: any) => {
      this.jokeList = o;
      const random = Math.floor(Math.random() * (this.jokeList.length - 1 + 1)) + 1;
      console.log(this.jokeList);
      this.jokes = this.jokeList['0'];
      console.log(this.jokes);

    });

    /*this.jokes = this.http.get(`https://speckalm.htl-perg.ac.at/r/api/jokes/${random}`).subscribe((u: any) => {
      this.jokes = u;
    });*/
  }

}
