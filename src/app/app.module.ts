import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomePageModule} from './home/home.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, CommonModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, HomePageModule, NgCalendarModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
