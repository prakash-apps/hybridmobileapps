import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import {EventDetailsPage} from '../event-details/event-details';
import { Platform, ActionSheetController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  eventdetailspage=EventDetailsPage;
  eventSource = [];

  viewTitle: string;
  viewdescription: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController,public platform: Platform,
    public actionsheetCtrl: ActionSheetController) { }
 
  addEvent() {
    let modal = this.modalCtrl.create('EventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
  onViewDescriptionChanged(title)
  {
    this.viewdescription=title;
  }
  
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    // let alert = this.alertCtrl.create({
    //   title: '' + event.title,
    //   subTitle: 'From: ' + start + '<br>To: ' + end+"<br> descriptio :"+event.description,
    //   buttons: ['OK']
    // })
    // alert.present();
    this.pushPage(event);

  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
  pushPage(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(EventDetailsPage, {
      start: start,
      end: end,
      viewTitle:event.title,
      description:event.description,
      
    });
  }
  pushPage1(){
   
    this.navCtrl.push(EventDetailsPage, {
      
      
    });
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Notifications',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Birthday celebration',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
} 