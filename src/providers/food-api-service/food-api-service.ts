import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FoodApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FoodApiServiceProvider {

  constructor(public http: Http) {
    console.log('Hello FoodApiServiceProvider Provider');
  }

}
