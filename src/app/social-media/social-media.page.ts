import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.page.html',
  styleUrls: ['./social-media.page.scss'],
})
export class SocialMediaPage implements OnInit {

  constructor() { }

  ngOnInit() {}

  click(str) {
    if (str === 'facebook') {
      window.open('https://www.facebook.com/SpeckAlm', '_system');
    } else if (str === 'website') {
      window.open('https://www.speck-alm.at/', '_system');
    } else if (str === 'videos') {
      window.open('https://www.speck-alm.at/videos/', '_system');
    }
  }

}
