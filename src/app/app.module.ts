import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 import {EventDetailsPage} from'../pages/event-details/event-details';

 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgCalendarModule  } from 'ionic2-calendar';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EventDetailsPage,ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgCalendarModule,
     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EventDetailsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
