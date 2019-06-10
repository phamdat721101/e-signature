import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, ViewController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { UserSignature } from '../../providers/models/sign.model';
import Tesseract from 'tesseract.js';

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
    reciever: null,
    sender: null,
    list_Order: null,
    desciption: null
  };
  imgOrder : any;
  _zone: any;
  _ocrIsLoaded: boolean = false;
  brightness: number = 12;
  contrast: number = 52;
  unsharpMask: any = { radius: 100, strength: 2 };
  hue: number = -100;
  saturation: number = -100;
  // Initial sizes for the canvas
  private options = {
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300
  }

  constructor( public viewCtrl: ViewController, 
    public restProvider: RestProvider,
    public loadingCtrl: LoadingController) {
      this._zone = new NgZone({ enableLongStackTrace: false });
    }

  ionViewDidLoad() {
    // When the page has finished loading, resize the canvas to fit the screen
    this.signaturePad.set( 'canvasWidth', this.content.nativeElement.offsetWidth );
    this.signaturePad.set( 'canvasHeight', this.content.nativeElement.offsetHeight );    
  }

  changelistener(evt:any){
    let image = evt.target.files[0];
    if (image) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsDataURL(image);
      /*get text from image-------------*/
      let loader = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loader.present();
      Tesseract.recognize(image, {}).progress((progress) =>{
        this._zone.run(() => {
          loader.setContent(`${progress.status}: ${Math.floor(progress.progress * 100)}%`)
        })
      }).then((tesseractResult) => {
        this._zone.run(() => {
          loader.dismissAll();
          this.data.desciption = tesseractResult.text;
        });
      });
      /*---------------------------------------*/
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    console.log(binaryString);
    this.imgOrder = btoa(binaryString);
  }

  cancel() {
    this.viewCtrl.dismiss({});
  }

  logForm(){
    const base64Img = this.signaturePad.toDataURL();
    this.base64textString = btoa(base64Img)
    this.newSign.signature = btoa(base64Img)
    this.newSign.order_id = this.data.order_ID;
    this.newSign.list_order = this.imgOrder;
    this.newSign.description = this.data.desciption;
    this.newSign.reciever = this.data.reciever;
    this.newSign.sender = this.data.sender;
    this.restProvider.addsignature(this.newSign).subscribe(results =>{
      alert("Sign successfully");
    },err => {
      console.log("Come there")
      console.log(err);
    });
    this.viewCtrl.dismiss({ signature: base64Img });
  }
}
