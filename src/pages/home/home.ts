import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  signature: string;
  qrcode: string;

  constructor( public modalCtrl: ModalController ) {}

  getSignature() {
    // Reset current signature so we don't get image popin
    this.signature = null;

    // Creat the modal
    let signaturePad = this.modalCtrl.create( 'SignaturePadModalPage' );

    // Define the function to run when the modal is closed
    signaturePad.onDidDismiss(
      data => {
        if ( data.signature != null ) {
          this.signature = data.signature;
        }
      }
    );

    // Show the modal
    signaturePad.present();
  }
  getQR(){
    this.qrcode = null;

    // Creat the modal
    let qrcodePad = this.modalCtrl.create( 'QrCodePage' );

    // Define the function to run when the modal is closed
    qrcodePad.onDidDismiss(
      data => {
        if ( data.signature != null ) {
          this.qrcode = data.qrcode;
        }
      }
    );

    // Show the modal
    qrcodePad.present();
  }

  checkSignature(){
    let signaturePad = this.modalCtrl.create( 'VerifysignaturePage' );
    signaturePad.present();
  }

}
