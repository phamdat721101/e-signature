import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the VerifysignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifysignature',
  templateUrl: 'verifysignature.html',
})
export class VerifysignaturePage {
  imageSign: any;
  result: any = {};
  imgSignature: any;
  data = {
    order_ID: null
  };
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifysignaturePage');
  }

  cancel() {
    this.viewCtrl.dismiss({});
  }

  logForm(){
    this.restProvider.getSignature(this.data.order_ID).subscribe(res =>{
      this.imageSign = res;
      console.log(this.imageSign._body);
      this.result = JSON.parse(this.imageSign._body);
      console.log(this.result.signature);
      this.imgSignature = atob(this.result.signature);
    },err => {
      console.log("Come there")
      console.log(err);
    });
  }
}
