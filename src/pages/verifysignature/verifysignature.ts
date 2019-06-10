import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import html2canvas  from 'html2canvas';
@IonicPage()
@Component({
  selector: 'page-verifysignature',
  templateUrl: 'verifysignature.html',
  styles:['verifysignature.scss']
})
export class VerifysignaturePage {
  imageSign: any;
  result: any = {};
  imgSignature: any;
  imageInvoice: any;
  imgInvoice: any;
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
      this.result = JSON.parse(this.imageSign._body);
      this.imgSignature = atob(this.result.signature);
      this.imgInvoice = atob(this.result.list_order);
      console.log(this.imgInvoice);
    },err => {
      console.log("Come there")
      console.log(err);
    });
  }
  printImg(){
    var element = document.getElementById('imgBill');
      html2canvas(element).then(canvas => {
        var imgData = canvas.toDataURL("image/png");
        this.imageInvoice = imgData;
        alert("Printed");
    });
  }
}
