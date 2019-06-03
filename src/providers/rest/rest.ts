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
  basicURL : string="https://103.48.80.41:7000";
  constructor(public http: Http, public httpClient: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  getUsers(){
    return new Promise(resolve =>{
      this.http.get(this.basicURL+'/getall').subscribe(data =>{
        resolve(data);
      },err => {
        console.log(err);
      });
    });
  }
  // addTest(data){
  //   var headers = new Headers();
  //   headers.append("Accept", 'application/json');
  //   headers.append('Content-Type','application/json');
  //   headers.append('Access-Control-Allow-Origin', 'http://localhost:7000');
  //   headers.append('Access-Control-Allow-Credentials', 'true');
  //   const options = new RequestOptions({headers:headers});
  //   var postData = {
  //     "signature" : data
  //   }
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.basicURL+'/testAdd', data,options)
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         console.log("Fail to do");
  //         console.log(err);
  //       });
  //   });
  // }
  addsignature(signature: UserSignature){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type','application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append("Access-Control-Allow-Headers","X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Pragma");
    const options = new RequestOptions({headers:headers});
    // var postData = {
    //   "signature" : data
    // }
    console.log("THis is test",JSON.stringify(signature))
    return this.http.post("103.48.80.41:1323/addSign",signature,options);
  }

}
