import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSignature } from '../models/sign.model';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  basicURL : string="http://localhost:1323";
  constructor(public http: Http, public httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getSignature(order_id: string){
    return this.http.get(this.basicURL+'/verify?order_id='+order_id);
  }
  
  addsignature(signature: UserSignature){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type','application/json');
    headers.append("Authorization", "Basic dGVzdDoxMjM0NTY3ODk=");
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append("Access-Control-Allow-Headers","*");
    const options = new RequestOptions({headers:headers});
    console.log("THis is test",JSON.stringify(signature))
    return this.http.post(this.basicURL+'/addSign',signature,options);
  }

}
