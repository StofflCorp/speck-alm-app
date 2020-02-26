import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inn',
  templateUrl: './inn.page.html',
  styleUrls: ['./inn.page.scss'],
})
export class InnPage implements OnInit {

  sliderImages: string[] = [
    "../../../assets/img/Info/Inn/slide1.jpg",
    "../../../assets/img/Info/Inn/slide2.jpg",
    "../../../assets/img/Info/Inn/slide3.jpg",
    "../../../assets/img/Info/Inn/slide4.jpg",
    "../../../assets/img/Info/Inn/slide5.jpg",
    "../../../assets/img/Info/Inn/slide6.jpg",
    "../../../assets/img/Info/Inn/slide7.jpg",
    "../../../assets/img/Info/Inn/slide8.jpg"
  ];

  slideOptsOne= {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };

  constructor() { }

  ngOnInit() {
  }

}
