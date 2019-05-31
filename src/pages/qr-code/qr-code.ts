import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {NgxQRCodeModule} from 'ngx-qrcode2';

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {
  qrData = null;
  createdCode = null;
  scannedCode = null;
  constructor(private barcodeScanner: BarcodeScanner) {
  }
  createCode(){
  	alert("Not yet to create");
  }
  scanCode(){
  	this.barcodeScanner.scan().then(barcodeData => {
  	this.scannedCode = barcodeData.text;	
  	})
  }

}
