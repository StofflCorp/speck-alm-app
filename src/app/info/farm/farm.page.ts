import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.page.html',
  styleUrls: ['./farm.page.scss'],
})
export class FarmPage implements OnInit {

  sliderImages: string[] = [
    "../../../assets/img/Info/Farm/slideTractor.jpg",
    "../../../assets/img/Info/Farm/slideLandscape.jpg",
    "../../../assets/img/Info/Farm/slideTractor2.jpg",
    "../../../assets/img/Info/Farm/slideCow.jpg",
    "../../../assets/img/Info/Farm/slideCow2.jpg",
    "../../../assets/img/Info/Farm/slideLandscape2.jpg",
    "../../../assets/img/Info/Farm/slideBio.jpg",
    "../../../assets/img/Info/Farm/slideTractor3.jpg",
    "../../../assets/img/Info/Farm/slideTractor4.jpg"
  ];

  constructor() { }

  ngOnInit() {
  }

}
