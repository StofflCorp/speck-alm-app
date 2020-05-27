import { Component, OnInit } from '@angular/core';
import {NavController, Platform} from "@ionic/angular";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  constructor(private platform: Platform, private navCtr: NavController) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.navCtr.navigateRoot("home")
    });
  }

  ngOnInit() {
  }

}
