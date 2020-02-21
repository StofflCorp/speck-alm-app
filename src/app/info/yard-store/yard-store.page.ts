import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yard-store',
  templateUrl: './yard-store.page.html',
  styleUrls: ['./yard-store.page.scss'],
})
export class YardStorePage implements OnInit {

  sliderImages: string[] = [
      "../../../assets/img/Info/yard-store/slide1.jpg",
    "../../../assets/img/Info/yard-store/slide2.jpg",
    "../../../assets/img/Info/yard-store/slide3.jpg",
    "../../../assets/img/Info/yard-store/slide4.jpg",
    "../../../assets/img/Info/yard-store/slide5.jpg",
    "../../../assets/img/Info/yard-store/slide6.jpg",
    "../../../assets/img/Info/yard-store/slide7.jpg"
  ];
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };
  constructor() { }

  ngOnInit() {
  }

}
