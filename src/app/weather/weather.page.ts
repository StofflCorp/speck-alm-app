import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage{
  weather;
  constructor(private http: HttpClient) {
    this.getWeather().then(data => {
      this.weather = data;
    });
  }


  getWeather() {
    return new Promise(resolve => {
      this.http.get('http://api.openweathermap.org/data/2.5/onecall?appid=6fa85161c8e45f86ad7115fe57191026&lat=48.253109&lon=14.831470&units=Metric&exclude=minutely,hourly&lang=DE').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  toDate(weather: any) {
    let weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
    var date = new Date(weather.dt *1000);
    return weekdays[date.getDay()];
  }


}
