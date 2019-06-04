webpackJsonp([1],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifysignaturePageModule", function() { return VerifysignaturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verifysignature__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerifysignaturePageModule = (function () {
    function VerifysignaturePageModule() {
    }
    return VerifysignaturePageModule;
}());
VerifysignaturePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__verifysignature__["a" /* VerifysignaturePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verifysignature__["a" /* VerifysignaturePage */]),
        ],
    })
], VerifysignaturePageModule);

//# sourceMappingURL=verifysignature.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifysignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VerifysignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifysignaturePage = (function () {
    function VerifysignaturePage(viewCtrl, navCtrl, navParams, restProvider) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.result = {};
        this.data = {
            order_ID: null
        };
    }
    VerifysignaturePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifysignaturePage');
    };
    VerifysignaturePage.prototype.cancel = function () {
        this.viewCtrl.dismiss({});
    };
    VerifysignaturePage.prototype.logForm = function () {
        var _this = this;
        this.restProvider.getSignature(this.data.order_ID).subscribe(function (res) {
            _this.imageSign = res;
            console.log(_this.imageSign._body);
            _this.result = JSON.parse(_this.imageSign._body);
            console.log(_this.result.signature);
            _this.imgSignature = atob(_this.result.signature);
        }, function (err) {
            console.log("Come there");
            console.log(err);
        });
    };
    return VerifysignaturePage;
}());
VerifysignaturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-verifysignature',template:/*ion-inline-start:"E:\GHN\Projects\ionic-signature-pad\src\pages\verifysignature\verifysignature.html"*/'<!--\n  Generated template for the VerifysignaturePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>verifysignature</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div id="pad-container" #pad>\n    <form (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-label>OrderID</ion-label>\n        <ion-input type="text" [(ngModel)]="data.order_ID" name="title"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>Check signature</button>\n      <button ion-button color="danger" (click)="cancel()">Cancel</button>\n    </form>\n    <img [src]="imgSignature" >\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\GHN\Projects\ionic-signature-pad\src\pages\verifysignature\verifysignature.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
], VerifysignaturePage);

//# sourceMappingURL=verifysignature.js.map

/***/ })

});
//# sourceMappingURL=1.js.map