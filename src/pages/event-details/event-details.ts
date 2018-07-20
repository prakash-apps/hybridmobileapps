import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ProfilePage} from '../profile/profile';
/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  imgSrc = "url('assets/imgs/batman.jpg')";
  imgHeight = "30vh"; 
  profilePage=ProfilePage;
  value:any;
  constructor(public navCtrl: NavController, public navParams: NavParams   ) {
    let start = navParams.get('start');
    let end = navParams.get('end');
    let viewTitle = navParams.get('viewTitle');
    let description = navParams.get('description');
    this.value=navParams.get('viewTitle');
    // console.log(this.navParams.get('imgUrl'));
    // console.log(this.navParams.get('id'));
    console.log(viewTitle);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    let start =this.imgHeight;
    
  }
  pushPage(){
     
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(ProfilePage, {
      start: "start",
      end: "end"
    });
  }
}
