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
  data = {
    order_ID: null,
    list_Order: null
  };
  imgOrder : string = "";
  // Initial sizes for the canvas
  private options = {
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  }

  constructor( public viewCtrl: ViewController, 
    public restProvider: RestProvider ) {
    }

  ionViewDidLoad() {
    // When the page has finished loading, resize the canvas to fit the screen
    this.signaturePad.set( 'canvasWidth', this.content.nativeElement.offsetWidth );
    this.signaturePad.set( 'canvasHeight', this.content.nativeElement.offsetHeight );    
  }

  // save() {
  //   // Get the image of the signature as a base64 encoded string
    
  // }

  changelistener(evt:any){
    let image = evt.target.files[0];
    if (image) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(image);
    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.imgOrder = btoa(binaryString);
    console.log(this.imgOrder);
  }

  cancel() {
    this.viewCtrl.dismiss({});
  }

  getUsers(){
		// this.restProvider.getUsers().then(data =>{
    //   console.log(data);
    // })
  }

  logForm(){
    console.log(this.data);
    console.log(this.base64textString);
    const base64Img = this.signaturePad.toDataURL();
    this.base64textString = btoa(base64Img)
    console.log(atob(this.base64textString));
    this.newSign.signature = btoa(base64Img)
    this.newSign.order_id = this.data.order_ID;
    this.newSign.list_order = this.imgOrder;
    this.restProvider.addsignature(this.newSign).subscribe(results =>{
      console.log(results);
    },err => {
      console.log("Come there")
      console.log(err);
    });
    this.viewCtrl.dismiss({ signature: base64Img });
  }
}
