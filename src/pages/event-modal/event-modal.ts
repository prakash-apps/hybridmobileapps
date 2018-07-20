import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { MatDialogModule } from '@angular/material';
@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
  
})
export class EventModalPage {
  public isToggle: boolean;
  event = { startTime: new Date().toISOString(),
     endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();
 
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    this.isToggle = false;
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.viewCtrl.dismiss(this.event);
  }
 
  public notify(e) {

    if(this.isToggle)
    console.log("Multi day: "); 
    else
    console.log("single day: "); 
    // console.log("Toggled: "+ this.isToggle);
     
  }
   public action1()
   {
     alert("Sorry!!!!!!!! .Not implemented");
   }
}