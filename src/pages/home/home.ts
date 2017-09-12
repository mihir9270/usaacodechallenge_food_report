import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchApiUrl = 'https://api.nal.usda.gov/ndb/search/?format=json&api_key=Loinjm5jfWGWOvVBPzwXfhupk99mF6pWgmNraulS?q=';

  constructor(public navCtrl: NavController, public http: Http) {
  }

  foodSearch(){
    this.http.post(this.searchApiUrl+);
  }

}
