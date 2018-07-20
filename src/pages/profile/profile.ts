import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public person: {name: string, company: string, birthdate?: number,mobile: string};
  dob: any;
  age: any;
  mobile:any;
  showProfile: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = {name: undefined, company: undefined, birthdate: undefined,mobile:undefined};
    this.dob = undefined;
  }

  ionViewDidLoad() {
    this.showProfile = false;
    let person = JSON.parse(localStorage.getItem('PERSON'));
    if (person){
      this.person = person;
      this.mobile="123"
      this.age = this.getAge(this.person.birthdate);
      this.dob = new Date(this.person.birthdate).toISOString();
    }
  }

  reset(){
    this.person = {name: null, company: null, birthdate: null,mobile:null};
    this.dob = null;
    this.mobile=null;
    this.showProfile = false;
  }

  save(){
    this.person.birthdate = new Date(this.dob).getTime();
    this.age = this.getAge(this.person.birthdate);
    this.showProfile = true;
    this.mobile="123456";
    localStorage.setItem('PERSON', JSON.stringify(this.person));
  }

  getAge(birthdate){
    let currentTime = new Date().getTime();
     return ((currentTime - birthdate)/31556952000).toFixed(0);
  }


}
