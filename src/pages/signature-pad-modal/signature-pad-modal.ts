import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { UserSignature } from '../../providers/models/sign.model';

@IonicPage()
@Component({
  selector: 'page-signature-pad-modal',
  templateUrl: 'signature-pad-modal.html',
})
export class SignaturePadModalPage {
  // Get the dom elements
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild('pad', { read: ElementRef }) content: ElementRef;
  newSign : UserSignature = new UserSignature({})
  base64textString: string = "";
  // Initial sizes for the canvas
  private options = {
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  }

  constructor( public viewCtrl: ViewController, 
    public restProvider: RestProvider ) {
      this.getUsers();
    }

  ionViewDidLoad() {
    // When the page has finished loading, resize the canvas to fit the screen
    this.signaturePad.set( 'canvasWidth', this.content.nativeElement.offsetWidth );
    this.signaturePad.set( 'canvasHeight', this.content.nativeElement.offsetHeight );    
  }

  save() {
    // Get the image of the signature as a base64 encoded string
    const base64Img = this.signaturePad.toDataURL();
    console.log(btoa(base64Img))
    this.base64textString = btoa(base64Img)
    console.log(typeof(btoa(base64Img)))
    this.newSign.signature = btoa(base64Img)
    console.log(typeof(this.newSign))
    this.restProvider.addsignature(this.newSign).subscribe(results =>{
      console.log(results);
    },err => {
      console.log("Come there")
      console.log(err);
    });
    this.viewCtrl.dismiss({ signature: base64Img });
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
  }

  cancel() {
    this.viewCtrl.dismiss({});
  }

  getUsers(){
		this.restProvider.getUsers().then(data =>{
      console.log(data);
    })
  }
}
