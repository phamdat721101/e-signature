webpackJsonp([0],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignaturePadModalPageModule", function() { return SignaturePadModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signature_pad_modal__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignaturePadModalPageModule = /** @class */ (function () {
    function SignaturePadModalPageModule() {
    }
    SignaturePadModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signature_pad_modal__["a" /* SignaturePadModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signature_pad_modal__["a" /* SignaturePadModalPage */]),
            ],
        })
    ], SignaturePadModalPageModule);
    return SignaturePadModalPageModule;
}());

//# sourceMappingURL=signature-pad-modal.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
;
var SignaturePad = (function () {
    function SignaturePad(elementRef) {
        // no op
        this.elementRef = elementRef;
        this.options = this.options || {};
        this.onBeginEvent = new core_1.EventEmitter();
        this.onEndEvent = new core_1.EventEmitter();
    }
    SignaturePad.prototype.ngAfterContentInit = function () {
        var sp = __webpack_require__(475)['default'];
        var canvas = this.elementRef.nativeElement.querySelector('canvas');
        if (this.options['canvasHeight']) {
            canvas.height = this.options['canvasHeight'];
        }
        if (this.options['canvasWidth']) {
            canvas.width = this.options['canvasWidth'];
        }
        this.signaturePad = new sp(canvas, this.options);
        this.signaturePad.onBegin = this.onBegin.bind(this);
        this.signaturePad.onEnd = this.onEnd.bind(this);
    };
    SignaturePad.prototype.resizeCanvas = function () {
        // When zoomed out to less than 100%, for some very strange reason,
        // some browsers report devicePixelRatio as less than 1
        // and only part of the canvas is cleared then.
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        var canvas = this.signaturePad._canvas;
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d').scale(ratio, ratio);
        this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    };
    // Returns signature image as an array of point groups
    SignaturePad.prototype.toData = function () {
        return this.signaturePad.toData();
    };
    // Draws signature image from an array of point groups
    SignaturePad.prototype.fromData = function (points) {
        this.signaturePad.fromData(points);
    };
    // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible paramters)
    SignaturePad.prototype.toDataURL = function (imageType, quality) {
        return this.signaturePad.toDataURL(imageType, quality); // save image as data URL
    };
    // Draws signature image from data URL
    SignaturePad.prototype.fromDataURL = function (dataURL, options) {
        if (options === void 0) { options = {}; }
        this.signaturePad.fromDataURL(dataURL, options);
    };
    // Clears the canvas
    SignaturePad.prototype.clear = function () {
        this.signaturePad.clear();
    };
    // Returns true if canvas is empty, otherwise returns false
    SignaturePad.prototype.isEmpty = function () {
        return this.signaturePad.isEmpty();
    };
    // Unbinds all event handlers
    SignaturePad.prototype.off = function () {
        this.signaturePad.off();
    };
    // Rebinds all event handlers
    SignaturePad.prototype.on = function () {
        this.signaturePad.on();
    };
    // set an option on the signaturePad - e.g. set('minWidth', 50);
    SignaturePad.prototype.set = function (option, value) {
        switch (option) {
            case 'canvasHeight':
                this.signaturePad._canvas.height = value;
                break;
            case 'canvasWidth':
                this.signaturePad._canvas.width = value;
                break;
            default:
                this.signaturePad[option] = value;
        }
    };
    // notify subscribers on signature begin
    SignaturePad.prototype.onBegin = function () {
        this.onBeginEvent.emit(true);
    };
    // notify subscribers on signature end
    SignaturePad.prototype.onEnd = function () {
        this.onEndEvent.emit(true);
    };
    SignaturePad.decorators = [
        { type: core_1.Component, args: [{
                    template: '<canvas></canvas>',
                    selector: 'signature-pad',
                },] },
    ];
    /** @nocollapse */
    SignaturePad.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    SignaturePad.propDecorators = {
        'options': [{ type: core_1.Input },],
        'onBeginEvent': [{ type: core_1.Output },],
        'onEndEvent': [{ type: core_1.Output },],
    };
    return SignaturePad;
}());
exports.SignaturePad = SignaturePad;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ25hdHVyZS1wYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIscUJBQW1FLGVBQWUsQ0FBQyxDQUFBO0FBUWxGLENBQUM7QUFNRjtJQVNFLHNCQUFZLFVBQXNCO1FBQ2hDLFFBQVE7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0seUNBQWtCLEdBQXpCO1FBQ0UsSUFBSSxFQUFFLEdBQVEsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELElBQUksTUFBTSxHQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RSxFQUFFLENBQUMsQ0FBTyxJQUFJLENBQUMsT0FBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsTUFBTSxHQUFTLElBQUksQ0FBQyxPQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFPLElBQUksQ0FBQyxPQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxLQUFLLEdBQVMsSUFBSSxDQUFDLE9BQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxtQ0FBWSxHQUFuQjtRQUNFLG1FQUFtRTtRQUNuRSx1REFBdUQ7UUFDdkQsK0NBQStDO1FBQy9DLElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGdCQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUM5QyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDNUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxtREFBbUQ7SUFDaEYsQ0FBQztJQUVBLHNEQUFzRDtJQUNoRCw2QkFBTSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHNEQUFzRDtJQUMvQywrQkFBUSxHQUFmLFVBQWdCLE1BQXlCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3R0FBd0c7SUFDakcsZ0NBQVMsR0FBaEIsVUFBaUIsU0FBa0IsRUFBRSxPQUFnQjtRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMseUJBQXlCO0lBQ25GLENBQUM7SUFFRCxzQ0FBc0M7SUFDL0Isa0NBQVcsR0FBbEIsVUFBbUIsT0FBZSxFQUFFLE9BQW9CO1FBQXBCLHVCQUFvQixHQUFwQixZQUFvQjtRQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELG9CQUFvQjtJQUNiLDRCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCwyREFBMkQ7SUFDcEQsOEJBQU8sR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCw2QkFBNkI7SUFDdEIsMEJBQUcsR0FBVjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELDZCQUE2QjtJQUN0Qix5QkFBRSxHQUFUO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsZ0VBQWdFO0lBQ3pELDBCQUFHLEdBQVYsVUFBVyxNQUFjLEVBQUUsS0FBVTtRQUVuQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2YsS0FBSyxjQUFjO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN6QyxLQUFLLENBQUM7WUFDUixLQUFLLGFBQWE7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQztZQUNSO2dCQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQXdDO0lBQ2pDLDhCQUFPLEdBQWQ7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQXNDO0lBQy9CLDRCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0ksdUJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsZ0JBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDeEIsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLGVBQWU7aUJBQzFCLEVBQUcsRUFBRTtLQUNMLENBQUM7SUFDRixrQkFBa0I7SUFDWCwyQkFBYyxHQUE2RDtRQUNsRixFQUFDLElBQUksRUFBRSxpQkFBVSxHQUFHO0tBQ25CLENBQUM7SUFDSywyQkFBYyxHQUEyQztRQUNoRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFLLEVBQUUsRUFBRTtRQUM3QixjQUFjLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtRQUNuQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtLQUNoQyxDQUFDO0lBQ0YsbUJBQUM7QUFBRCxDQUFDLEFBN0hELElBNkhDO0FBN0hZLG9CQUFZLGVBNkh4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdGltZTogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgUG9pbnRHcm91cCA9IEFycmF5PFBvaW50PjtcblxuXG5cbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVQYWQge1xuXG4gICBwdWJsaWMgb3B0aW9uczogT2JqZWN0O1xuICAgcHVibGljIG9uQmVnaW5FdmVudDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+O1xuICAgcHVibGljIG9uRW5kRXZlbnQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcblxuICBwcml2YXRlIHNpZ25hdHVyZVBhZDogYW55O1xuICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIG5vIG9wXG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcbiAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgfHwge307XG4gICAgdGhpcy5vbkJlZ2luRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5vbkVuZEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgc3A6IGFueSA9IHJlcXVpcmUoJ3NpZ25hdHVyZV9wYWQnKVsnZGVmYXVsdCddO1xuICAgIGxldCBjYW52YXM6IGFueSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuXG4gICAgaWYgKCg8YW55PnRoaXMub3B0aW9ucylbJ2NhbnZhc0hlaWdodCddKSB7XG4gICAgICBjYW52YXMuaGVpZ2h0ID0gKDxhbnk+dGhpcy5vcHRpb25zKVsnY2FudmFzSGVpZ2h0J107XG4gICAgfVxuXG4gICAgaWYgKCg8YW55PnRoaXMub3B0aW9ucylbJ2NhbnZhc1dpZHRoJ10pIHtcbiAgICAgIGNhbnZhcy53aWR0aCA9ICg8YW55PnRoaXMub3B0aW9ucylbJ2NhbnZhc1dpZHRoJ107XG4gICAgfVxuXG4gICAgdGhpcy5zaWduYXR1cmVQYWQgPSBuZXcgc3AoY2FudmFzLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuc2lnbmF0dXJlUGFkLm9uQmVnaW4gPSB0aGlzLm9uQmVnaW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5vbkVuZCA9IHRoaXMub25FbmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNpemVDYW52YXMoKTogdm9pZCB7XG4gICAgLy8gV2hlbiB6b29tZWQgb3V0IHRvIGxlc3MgdGhhbiAxMDAlLCBmb3Igc29tZSB2ZXJ5IHN0cmFuZ2UgcmVhc29uLFxuICAgIC8vIHNvbWUgYnJvd3NlcnMgcmVwb3J0IGRldmljZVBpeGVsUmF0aW8gYXMgbGVzcyB0aGFuIDFcbiAgICAvLyBhbmQgb25seSBwYXJ0IG9mIHRoZSBjYW52YXMgaXMgY2xlYXJlZCB0aGVuLlxuICAgIGNvbnN0IHJhdGlvOiBudW1iZXIgPSBNYXRoLm1heCh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxLCAxKTtcbiAgICBjb25zdCBjYW52YXM6IGFueSA9IHRoaXMuc2lnbmF0dXJlUGFkLl9jYW52YXM7XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoICogcmF0aW87XG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQgKiByYXRpbztcbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5zY2FsZShyYXRpbywgcmF0aW8pO1xuICAgIHRoaXMuc2lnbmF0dXJlUGFkLmNsZWFyKCk7IC8vIG90aGVyd2lzZSBpc0VtcHR5KCkgbWlnaHQgcmV0dXJuIGluY29ycmVjdCB2YWx1ZVxuICB9XG5cbiAgIC8vIFJldHVybnMgc2lnbmF0dXJlIGltYWdlIGFzIGFuIGFycmF5IG9mIHBvaW50IGdyb3Vwc1xuICBwdWJsaWMgdG9EYXRhKCk6IEFycmF5PFBvaW50R3JvdXA+IHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmVQYWQudG9EYXRhKCk7XG4gIH1cblxuICAvLyBEcmF3cyBzaWduYXR1cmUgaW1hZ2UgZnJvbSBhbiBhcnJheSBvZiBwb2ludCBncm91cHNcbiAgcHVibGljIGZyb21EYXRhKHBvaW50czogQXJyYXk8UG9pbnRHcm91cD4pOiB2b2lkIHtcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5mcm9tRGF0YShwb2ludHMpO1xuICB9XG5cbiAgLy8gUmV0dXJucyBzaWduYXR1cmUgaW1hZ2UgYXMgZGF0YSBVUkwgKHNlZSBodHRwczovL21kbi5pby90b2RhdGF1cmwgZm9yIHRoZSBsaXN0IG9mIHBvc3NpYmxlIHBhcmFtdGVycylcbiAgcHVibGljIHRvRGF0YVVSTChpbWFnZVR5cGU/OiBzdHJpbmcsIHF1YWxpdHk/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwoaW1hZ2VUeXBlLCBxdWFsaXR5KTsgLy8gc2F2ZSBpbWFnZSBhcyBkYXRhIFVSTFxuICB9XG5cbiAgLy8gRHJhd3Mgc2lnbmF0dXJlIGltYWdlIGZyb20gZGF0YSBVUkxcbiAgcHVibGljIGZyb21EYXRhVVJMKGRhdGFVUkw6IHN0cmluZywgb3B0aW9uczogT2JqZWN0ID0ge30pOiB2b2lkIHtcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5mcm9tRGF0YVVSTChkYXRhVVJMLCBvcHRpb25zKTtcbiAgfVxuXG4gIC8vIENsZWFycyB0aGUgY2FudmFzXG4gIHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnNpZ25hdHVyZVBhZC5jbGVhcigpO1xuICB9XG5cbiAgLy8gUmV0dXJucyB0cnVlIGlmIGNhbnZhcyBpcyBlbXB0eSwgb3RoZXJ3aXNlIHJldHVybnMgZmFsc2VcbiAgcHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlUGFkLmlzRW1wdHkoKTtcbiAgfVxuXG4gIC8vIFVuYmluZHMgYWxsIGV2ZW50IGhhbmRsZXJzXG4gIHB1YmxpYyBvZmYoKTogdm9pZCB7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQub2ZmKCk7XG4gIH1cblxuICAvLyBSZWJpbmRzIGFsbCBldmVudCBoYW5kbGVyc1xuICBwdWJsaWMgb24oKTogdm9pZCB7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQub24oKTtcbiAgfVxuXG4gIC8vIHNldCBhbiBvcHRpb24gb24gdGhlIHNpZ25hdHVyZVBhZCAtIGUuZy4gc2V0KCdtaW5XaWR0aCcsIDUwKTtcbiAgcHVibGljIHNldChvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuXG4gICAgc3dpdGNoIChvcHRpb24pIHtcbiAgICAgIGNhc2UgJ2NhbnZhc0hlaWdodCc6XG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUGFkLl9jYW52YXMuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnY2FudmFzV2lkdGgnOlxuICAgICAgICB0aGlzLnNpZ25hdHVyZVBhZC5fY2FudmFzLndpZHRoID0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5zaWduYXR1cmVQYWRbb3B0aW9uXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIG5vdGlmeSBzdWJzY3JpYmVycyBvbiBzaWduYXR1cmUgYmVnaW5cbiAgcHVibGljIG9uQmVnaW4oKTogdm9pZCB7XG4gICAgdGhpcy5vbkJlZ2luRXZlbnQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIC8vIG5vdGlmeSBzdWJzY3JpYmVycyBvbiBzaWduYXR1cmUgZW5kXG4gIHB1YmxpYyBvbkVuZCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uRW5kRXZlbnQuZW1pdCh0cnVlKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICB0ZW1wbGF0ZTogJzxjYW52YXM+PC9jYW52YXM+JyxcbiAgc2VsZWN0b3I6ICdzaWduYXR1cmUtcGFkJyxcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ29wdGlvbnMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nb25CZWdpbkV2ZW50JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidvbkVuZEV2ZW50JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var defaultOptions = {
    // workerPath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@0.2.0/dist/worker.js',
    corePath: 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js-core@0.1.0/index.js',    
    langPath: 'https://tessdata.projectnaptha.com/3.02/',
}

if (process.env.TESS_ENV === "development") {
    console.debug('Using Development Configuration')
    defaultOptions.workerPath = location.protocol + '//' + location.host + '/dist/worker.dev.js?nocache=' + Math.random().toString(36).slice(3)
}else{
    var version = __webpack_require__(472).version;
    defaultOptions.workerPath = 'https://cdn.jsdelivr.net/gh/naptha/tesseract.js@' + version + '/dist/worker.js'
}

exports.defaultOptions = defaultOptions;


exports.spawnWorker = function spawnWorker(instance, workerOptions){
    if(Blob && URL){
        var blob = new Blob(['importScripts("' + workerOptions.workerPath + '");'], {
            type: 'application/javascript'
        });
        var worker = new Worker(URL.createObjectURL(blob));
    }else{
        var worker = new Worker(workerOptions.workerPath)
    }

    worker.onmessage = function(e){
        var packet = e.data;
        instance._recv(packet)
    }
    return worker
}

exports.terminateWorker = function(instance){
    instance.worker.terminate()
}

exports.sendPacket = function sendPacket(instance, packet){
    loadImage(packet.payload.image, function(img){
        packet.payload.image = img
        instance.worker.postMessage(packet) 
    })
}


function loadImage(image, cb){
    if(typeof image === 'string'){
        if(/^\#/.test(image)){
            // element css selector
            return loadImage(document.querySelector(image), cb)
        }else if(/(blob|data)\:/.test(image)){
            // data url
            var im = new Image
            im.src = image;
            im.onload = e => loadImage(im, cb);
            im.onerror = e => { throw e; };
            return
        }else{
            var xhr = new XMLHttpRequest();
            xhr.open('GET', image, true)
            xhr.responseType = "blob";
            
            xhr.onload = e => {
                if (xhr.status >= 400){
                  throw new Error('Fail to get image as Blob');
                }else{
                    loadImage(xhr.response, cb);
                }
            };
            xhr.onerror = e => { throw e; }; 
            
            xhr.send(null)
            return
        }
    }else if(image instanceof File){
        // files
        var fr = new FileReader()
        fr.onload = e => loadImage(fr.result, cb);
        fr.onerror = e => { throw e; }; 
        fr.readAsDataURL(image)
        return
    }else if(image instanceof Blob){
        return loadImage(URL.createObjectURL(image), cb)
    }else if(image.getContext){
        // canvas element
        return loadImage(image.getContext('2d'), cb)
    }else if(image.tagName == "IMG" || image.tagName == "VIDEO"){
        // image element or video element
        var c = document.createElement('canvas');
        c.width  = image.naturalWidth  || image.videoWidth;
        c.height = image.naturalHeight || image.videoHeight;
        var ctx = c.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return loadImage(ctx, cb)
    }else if(image.getImageData){
        // canvas context
        var data = image.getImageData(0, 0, image.canvas.width, image.canvas.height);
        return loadImage(data, cb)
    }else{
        return cb(image)
    }
    throw new Error('Missing return in loadImage cascade')

}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(478)))

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = {
	"_from": "tesseract.js",
	"_id": "tesseract.js@1.0.19",
	"_inBundle": false,
	"_integrity": "sha512-UXnCd2GkDOuVwPYv8MryzDwXEPLJ/BjEuT76PWzVC8XhZbsChRkpoiKDSGDbZ2BW2rwg1yBWJ0joSdCTw1umBA==",
	"_location": "/tesseract.js",
	"_phantomChildren": {},
	"_requested": {
		"type": "tag",
		"registry": true,
		"raw": "tesseract.js",
		"name": "tesseract.js",
		"escapedName": "tesseract.js",
		"rawSpec": "",
		"saveSpec": null,
		"fetchSpec": "latest"
	},
	"_requiredBy": [
		"#USER",
		"/"
	],
	"_resolved": "https://registry.npmjs.org/tesseract.js/-/tesseract.js-1.0.19.tgz",
	"_shasum": "f66a9accef1aa933ec7e574d1bb3205f7d2aef65",
	"_spec": "tesseract.js",
	"_where": "E:\\GHN\\Projects\\ionic-signature-pad",
	"author": "",
	"browser": {
		"./src/node/index.js": "./src/browser/index.js"
	},
	"bugs": {
		"url": "https://github.com/naptha/tesseract.js/issues"
	},
	"bundleDependencies": false,
	"dependencies": {
		"file-type": "^3.8.0",
		"is-url": "1.2.2",
		"isomorphic-fetch": "^2.2.1",
		"jpeg-js": "^0.2.0",
		"level-js": "^2.2.4",
		"node-fetch": "^1.6.3",
		"object-assign": "^4.1.0",
		"png.js": "^0.2.1",
		"tesseract.js-core": "^1.0.2"
	},
	"deprecated": false,
	"description": "Pure Javascript Multilingual OCR",
	"devDependencies": {
		"babel-preset-es2015": "^6.16.0",
		"babelify": "^7.3.0",
		"browserify": "^13.1.0",
		"concurrently": "^3.1.0",
		"envify": "^3.4.1",
		"http-server": "^0.9.0",
		"pako": "^1.0.3",
		"uglify-js": "^3.4.9",
		"watchify": "^3.7.0"
	},
	"homepage": "https://github.com/naptha/tesseract.js",
	"license": "Apache-2.0",
	"main": "src/index.js",
	"name": "tesseract.js",
	"repository": {
		"type": "git",
		"url": "git+https://github.com/naptha/tesseract.js.git"
	},
	"scripts": {
		"build": "browserify src/index.js -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.js --standalone Tesseract && browserify src/browser/worker.js -t [ babelify --presets [ es2015 ] ] -o dist/worker.js && uglifyjs dist/tesseract.js --source-map -o dist/tesseract.min.js && uglifyjs dist/worker.js --source-map -o dist/worker.min.js",
		"release": "npm run build && git commit -am 'new release' && git push && git tag `jq -r '.version' package.json` && git push origin --tags && npm publish",
		"start": "concurrently --kill-others \"watchify src/index.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/tesseract.dev.js --standalone Tesseract\" \"watchify src/browser/worker.js  -t [ envify --TESS_ENV development ] -t [ babelify --presets [ es2015 ] ] -o dist/worker.dev.js\" \"http-server -p 7355\""
	},
	"version": "1.0.19"
};

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignaturePadModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_models_sign_model__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tesseract_js__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tesseract_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_tesseract_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignaturePadModalPage = /** @class */ (function () {
    function SignaturePadModalPage(viewCtrl, restProvider, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.newSign = new __WEBPACK_IMPORTED_MODULE_4__providers_models_sign_model__["a" /* UserSignature */]({});
        this.base64textString = "";
        this.data = {
            order_ID: null,
            reciever: null,
            sender: null,
            list_Order: null,
            desciption: null
        };
        this._ocrIsLoaded = false;
        this.brightness = 12;
        this.contrast = 52;
        this.unsharpMask = { radius: 100, strength: 2 };
        this.hue = -100;
        this.saturation = -100;
        // Initial sizes for the canvas
        this.options = {
            'minWidth': 5,
            'canvasWidth': 500,
            'canvasHeight': 300
        };
        this._zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]({ enableLongStackTrace: false });
    }
    SignaturePadModalPage.prototype.ionViewDidLoad = function () {
        // When the page has finished loading, resize the canvas to fit the screen
        this.signaturePad.set('canvasWidth', this.content.nativeElement.offsetWidth);
        this.signaturePad.set('canvasHeight', this.content.nativeElement.offsetHeight);
    };
    SignaturePadModalPage.prototype.changelistener = function (evt) {
        var _this = this;
        var image = evt.target.files[0];
        if (image) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsDataURL(image);
            /*get text from image-------------*/
            var loader_1 = this.loadingCtrl.create({
                content: 'Please wait...'
            });
            loader_1.present();
            __WEBPACK_IMPORTED_MODULE_5_tesseract_js___default.a.recognize(image, {}).progress(function (progress) {
                _this._zone.run(function () {
                    loader_1.setContent(progress.status + ": " + Math.floor(progress.progress * 100) + "%");
                });
            }).then(function (tesseractResult) {
                _this._zone.run(function () {
                    loader_1.dismissAll();
                    _this.data.desciption = tesseractResult.text;
                });
            });
            /*---------------------------------------*/
        }
    };
    SignaturePadModalPage.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        console.log(binaryString);
        this.imgOrder = btoa(binaryString);
    };
    SignaturePadModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss({});
    };
    SignaturePadModalPage.prototype.logForm = function () {
        var base64Img = this.signaturePad.toDataURL();
        this.base64textString = btoa(base64Img);
        this.newSign.signature = btoa(base64Img);
        this.newSign.order_id = this.data.order_ID;
        this.newSign.list_order = this.imgOrder;
        this.newSign.description = this.data.desciption;
        this.newSign.reciever = this.data.reciever;
        this.newSign.sender = this.data.sender;
        this.restProvider.addsignature(this.newSign).subscribe(function (results) {
            alert("Sign successfully");
        }, function (err) {
            console.log("Come there");
            console.log(err);
        });
        this.viewCtrl.dismiss({ signature: base64Img });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_signaturepad_signature_pad__["SignaturePad"]) === "function" && _a || Object)
    ], SignaturePadModalPage.prototype, "signaturePad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pad', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], SignaturePadModalPage.prototype, "content", void 0);
    SignaturePadModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signature-pad-modal',template:/*ion-inline-start:"E:\GHN\Projects\ionic-signature-pad\src\pages\signature-pad-modal\signature-pad-modal.html"*/'<ion-content>\n\n  <div id="pad-container" #pad>\n\n    <form (ngSubmit)="logForm()">\n\n      <ion-item>\n\n        <ion-label>OrderID</ion-label>\n\n        <ion-input type="text" [(ngModel)]="data.order_ID" name="title"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Người nhận</ion-label>\n\n        <ion-input type="text" [(ngModel)]="data.reciever" name="title"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>Người gửi</ion-label>\n\n          <ion-input type="text" [(ngModel)]="data.sender" name="title"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Upload File</ion-label>\n\n        <ion-input type="file" [(ngModel)]="data.list_Order" name="description" id="upload" accept="image/*"  (change)="changelistener($event)"></ion-input>\n\n      </ion-item>\n\n      <signature-pad [options]="options" name="signature"></signature-pad>\n\n      <button ion-button large type="submit">Save signature</button>\n\n    </form>\n\n    <button ion-button large color="danger" (click)="cancel()">Cancel</button>\n\n  </div>\n\n</ion-content>\n\n<ion-footer></ion-footer>'/*ion-inline-end:"E:\GHN\Projects\ionic-signature-pad\src\pages\signature-pad-modal\signature-pad-modal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
    ], SignaturePadModalPage);
    return SignaturePadModalPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=signature-pad-modal.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */

function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || new Date().getTime();
}

Point.prototype.velocityFrom = function (start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};

Point.prototype.distanceTo = function (start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};

Point.prototype.equals = function (other) {
  return this.x === other.x && this.y === other.y && this.time === other.time;
};

function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}

// Returns approximated length.
Bezier.prototype.length = function () {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;

  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }

  return length;
};

/* eslint-disable no-multi-spaces, space-in-parens */
Bezier.prototype._point = function (t, start, c1, c2, end) {
  return start * (1.0 - t) * (1.0 - t) * (1.0 - t) + 3.0 * c1 * (1.0 - t) * (1.0 - t) * t + 3.0 * c2 * (1.0 - t) * t * t + end * t * t * t;
};

/* eslint-disable */

// http://stackoverflow.com/a/27078401/815507
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}

function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};

  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.throttle = 'throttle' in opts ? opts.throttle : 16; // in miliseconds
  this.minDistance = 'minDistance' in opts ? opts.minDistance : 5;

  if (this.throttle) {
    this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
  } else {
    this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
  }

  this.dotSize = opts.dotSize || function () {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || 'black';
  this.backgroundColor = opts.backgroundColor || 'rgba(0,0,0,0)';
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;

  this._canvas = canvas;
  this._ctx = canvas.getContext('2d');
  this.clear();

  // We need add these inline so they are available to unbind while still having
  // access to 'self' we could use _.bind but it's not worth adding a dependency.
  this._handleMouseDown = function (event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };

  this._handleMouseMove = function (event) {
    if (self._mouseButtonDown) {
      self._strokeMoveUpdate(event);
    }
  };

  this._handleMouseUp = function (event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };

  this._handleTouchStart = function (event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };

  this._handleTouchMove = function (event) {
    // Prevent scrolling.
    event.preventDefault();

    var touch = event.targetTouches[0];
    self._strokeMoveUpdate(touch);
  };

  this._handleTouchEnd = function (event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };

  // Enable mouse and touch event handlers
  this.on();
}

// Public methods
SignaturePad.prototype.clear = function () {
  var ctx = this._ctx;
  var canvas = this._canvas;

  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  this._data = [];
  this._reset();
  this._isEmpty = true;
};

SignaturePad.prototype.fromDataURL = function (dataUrl) {
  var _this = this;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var image = new Image();
  var ratio = options.ratio || window.devicePixelRatio || 1;
  var width = options.width || this._canvas.width / ratio;
  var height = options.height || this._canvas.height / ratio;

  this._reset();
  image.src = dataUrl;
  image.onload = function () {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};

SignaturePad.prototype.toDataURL = function (type) {
  var _canvas;

  switch (type) {
    case 'image/svg+xml':
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }

      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};

SignaturePad.prototype.on = function () {
  this._handleMouseEvents();
  this._handleTouchEvents();
};

SignaturePad.prototype.off = function () {
  this._canvas.removeEventListener('mousedown', this._handleMouseDown);
  this._canvas.removeEventListener('mousemove', this._handleMouseMove);
  document.removeEventListener('mouseup', this._handleMouseUp);

  this._canvas.removeEventListener('touchstart', this._handleTouchStart);
  this._canvas.removeEventListener('touchmove', this._handleTouchMove);
  this._canvas.removeEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype.isEmpty = function () {
  return this._isEmpty;
};

// Private methods
SignaturePad.prototype._strokeBegin = function (event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);

  if (typeof this.onBegin === 'function') {
    this.onBegin(event);
  }
};

SignaturePad.prototype._strokeUpdate = function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var point = this._createPoint(x, y);
  var lastPointGroup = this._data[this._data.length - 1];
  var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
  var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;

  // Skip this point if it's too close to the previous one
  if (!(lastPoint && isLastPointTooClose)) {
    var _addPoint = this._addPoint(point),
        curve = _addPoint.curve,
        widths = _addPoint.widths;

    if (curve && widths) {
      this._drawCurve(curve, widths.start, widths.end);
    }

    this._data[this._data.length - 1].push({
      x: point.x,
      y: point.y,
      time: point.time,
      color: this.penColor
    });
  }
};

SignaturePad.prototype._strokeEnd = function (event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0]; // Point instance

  if (!canDrawCurve && point) {
    this._drawDot(point);
  }

  if (point) {
    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoint = lastPointGroup[lastPointGroup.length - 1]; // plain object

    // When drawing a dot, there's only one point in a group, so without this check
    // such group would end up with exactly the same 2 points.
    if (!point.equals(lastPoint)) {
      lastPointGroup.push({
        x: point.x,
        y: point.y,
        time: point.time,
        color: this.penColor
      });
    }
  }

  if (typeof this.onEnd === 'function') {
    this.onEnd(event);
  }
};

SignaturePad.prototype._handleMouseEvents = function () {
  this._mouseButtonDown = false;

  this._canvas.addEventListener('mousedown', this._handleMouseDown);
  this._canvas.addEventListener('mousemove', this._handleMouseMove);
  document.addEventListener('mouseup', this._handleMouseUp);
};

SignaturePad.prototype._handleTouchEvents = function () {
  // Pass touch events to canvas element on mobile IE11 and Edge.
  this._canvas.style.msTouchAction = 'none';
  this._canvas.style.touchAction = 'none';

  this._canvas.addEventListener('touchstart', this._handleTouchStart);
  this._canvas.addEventListener('touchmove', this._handleTouchMove);
  this._canvas.addEventListener('touchend', this._handleTouchEnd);
};

SignaturePad.prototype._reset = function () {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};

SignaturePad.prototype._createPoint = function (x, y, time) {
  var rect = this._canvas.getBoundingClientRect();

  return new Point(x - rect.left, y - rect.top, time || new Date().getTime());
};

SignaturePad.prototype._addPoint = function (point) {
  var points = this.points;
  var tmp = void 0;

  points.push(point);

  if (points.length > 2) {
    // To reduce the initial lag make it work with 3 points
    // by copying the first point to the beginning.
    if (points.length === 3) points.unshift(points[0]);

    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);

    // Remove the first element from the list,
    // so that we always have no more than 4 points in points array.
    points.shift();

    return { curve: curve, widths: widths };
  }

  return {};
};

SignaturePad.prototype._calculateCurveControlPoints = function (s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;

  var m1 = { x: (s1.x + s2.x) / 2.0, y: (s1.y + s2.y) / 2.0 };
  var m2 = { x: (s2.x + s3.x) / 2.0, y: (s2.y + s3.y) / 2.0 };

  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;

  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };

  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;

  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};

SignaturePad.prototype._calculateCurveWidths = function (curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };

  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;

  var newWidth = this._strokeWidth(velocity);

  widths.start = this._lastWidth;
  widths.end = newWidth;

  this._lastVelocity = velocity;
  this._lastWidth = newWidth;

  return widths;
};

SignaturePad.prototype._strokeWidth = function (velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};

SignaturePad.prototype._drawPoint = function (x, y, size) {
  var ctx = this._ctx;

  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};

SignaturePad.prototype._drawCurve = function (curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());

  ctx.beginPath();

  for (var i = 0; i < drawSteps; i += 1) {
    // Calculate the Bezier (x, y) coordinate for this step.
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;

    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;

    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;

    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }

  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._drawDot = function (point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === 'function' ? this.dotSize() : this.dotSize;

  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};

SignaturePad.prototype._fromData = function (pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];

    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
        var color = rawPoint.color;

        if (j === 0) {
          // First point in a group. Nothing to draw yet.

          // All points in the group have the same color, so it's enough to set
          // penColor just at the beginning.
          this.penColor = color;
          this._reset();

          this._addPoint(point);
        } else if (j !== group.length - 1) {
          // Middle point in a group.
          var _addPoint2 = this._addPoint(point),
              curve = _addPoint2.curve,
              widths = _addPoint2.widths;

          if (curve && widths) {
            drawCurve(curve, widths, color);
          }
        } else {
          // Last point in a group. Do nothing.
        }
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};

SignaturePad.prototype._toSVG = function () {
  var _this2 = this;

  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  svg.setAttributeNS(null, 'width', canvas.width);
  svg.setAttributeNS(null, 'height', canvas.height);

  this._fromData(pointGroups, function (curve, widths, color) {
    var path = document.createElement('path');

    // Need to check curve for NaN values, these pop up when drawing
    // lines on the canvas that are not continuous. E.g. Sharp corners
    // or stopping mid-stroke and than continuing without lifting mouse.
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = 'M ' + curve.startPoint.x.toFixed(3) + ',' + curve.startPoint.y.toFixed(3) + ' ' + ('C ' + curve.control1.x.toFixed(3) + ',' + curve.control1.y.toFixed(3) + ' ') + (curve.control2.x.toFixed(3) + ',' + curve.control2.y.toFixed(3) + ' ') + (curve.endPoint.x.toFixed(3) + ',' + curve.endPoint.y.toFixed(3));

      path.setAttribute('d', attr);
      path.setAttribute('stroke-width', (widths.end * 2.25).toFixed(3));
      path.setAttribute('stroke', color);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');

      svg.appendChild(path);
    }
  }, function (rawPoint) {
    var circle = document.createElement('circle');
    var dotSize = typeof _this2.dotSize === 'function' ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute('r', dotSize);
    circle.setAttribute('cx', rawPoint.x);
    circle.setAttribute('cy', rawPoint.y);
    circle.setAttribute('fill', rawPoint.color);

    svg.appendChild(circle);
  });

  var prefix = 'data:image/svg+xml;base64,';
  var header = '<svg' + ' xmlns="http://www.w3.org/2000/svg"' + ' xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + ' ' + minY + ' ' + maxX + ' ' + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + '>';
  var body = svg.innerHTML;

  // IE hack for missing innerHTML property on SVGElement
  if (body === undefined) {
    var dummy = document.createElement('dummy');
    var nodes = svg.childNodes;
    dummy.innerHTML = '';

    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }

    body = dummy.innerHTML;
  }

  var footer = '</svg>';
  var data = header + body + footer;

  return prefix + btoa(data);
};

SignaturePad.prototype.fromData = function (pointGroups) {
  var _this3 = this;

  this.clear();

  this._fromData(pointGroups, function (curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function (rawPoint) {
    return _this3._drawDot(rawPoint);
  });

  this._data = pointGroups;
};

SignaturePad.prototype.toData = function () {
  return this._data;
};

/* harmony default export */ __webpack_exports__["default"] = (SignaturePad);


/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignature; });
var UserSignature = /** @class */ (function () {
    function UserSignature(data) {
        this.signature = data.signature;
        this.list_order = data.list_order;
        this.order_id = data.order_id;
        this.description = data.description;
        this.reciever = data.reciever;
        this.sender = data.sender;
    }
    return UserSignature;
}());

//# sourceMappingURL=sign.model.js.map

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(471)
const circularize = __webpack_require__(479)
const TesseractJob = __webpack_require__(480);
const version = __webpack_require__(472).version;

const create = function(workerOptions = {}){
	var worker = new TesseractWorker(Object.assign({}, adapter.defaultOptions, workerOptions));
	worker.create = create;
	worker.version = version;
	return worker;
}

class TesseractWorker {
	constructor(workerOptions){
		this.worker = null;
		this.workerOptions = workerOptions;
		this._currentJob = null;
		this._queue = [];
	}

	recognize(image, options = {}){
		return this._delay(job => {
			if (typeof options === 'string') options = {lang: options}
			options.lang = options.lang || 'eng';

			job._send('recognize', { image, options, workerOptions: this.workerOptions });
		})
	}
	detect(image, options = {}){
		return this._delay(job => {
			job._send('detect', { image, options, workerOptions: this.workerOptions });
		})
	}

	terminate(){
		if(this.worker) adapter.terminateWorker(this);
		this.worker = null;
		this._currentJob = null;
		this._queue = [];
	}

	_delay(fn){
		if(!this.worker) this.worker = adapter.spawnWorker(this, this.workerOptions);

		var job = new TesseractJob(this);
		this._queue.push(e => {
			this._queue.shift();
			this._currentJob = job;
			fn(job);
		});
		if(!this._currentJob) this._dequeue();
		return job;
	}

	_dequeue(){
		this._currentJob = null;
		if(this._queue.length){
			this._queue[0]();
		}
	}

	_recv(packet){
        if(packet.status === 'resolve' && packet.action === 'recognize'){
            packet.data = circularize(packet.data);
        }

		if(this._currentJob.id === packet.jobId){
			this._currentJob._handle(packet)
		} else {
			console.warn('Job ID ' + packet.jobId + ' not known.')
		}
	}
}

module.exports = create();


/***/ }),

/***/ 478:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 479:
/***/ (function(module, exports) {

// The result of dump.js is a big JSON tree
// which can be easily serialized (for instance
// to be sent from a webworker to the main app
// or through Node's IPC), but we want
// a (circular) DOM-like interface for walking
// through the data. 

module.exports = function circularize(page){
    page.paragraphs = []
    page.lines = []
    page.words = []
    page.symbols = []

    page.blocks.forEach(function(block){
        block.page = page;

        block.lines = []
        block.words = []
        block.symbols = []

        block.paragraphs.forEach(function(para){
            para.block = block;
            para.page = page;

            para.words = []
            para.symbols = []
            
            para.lines.forEach(function(line){
                line.paragraph = para;
                line.block = block;
                line.page = page;

                line.symbols = []

                line.words.forEach(function(word){
                    word.line = line;
                    word.paragraph = para;
                    word.block = block;
                    word.page = page;
                    word.symbols.forEach(function(sym){
                        sym.word = word;
                        sym.line = line;
                        sym.paragraph = para;
                        sym.block = block;
                        sym.page = page;
                        
                        sym.line.symbols.push(sym)
                        sym.paragraph.symbols.push(sym)
                        sym.block.symbols.push(sym)
                        sym.page.symbols.push(sym)
                    })
                    word.paragraph.words.push(word)
                    word.block.words.push(word)
                    word.page.words.push(word)
                })
                line.block.lines.push(line)
                line.page.lines.push(line)
            })
            para.page.paragraphs.push(para)
        })
    })
    return page
}

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

const adapter = __webpack_require__(471)

let jobCounter = 0;

module.exports = class TesseractJob {
    constructor(instance){
        this.id = 'Job-' + (++jobCounter) + '-' + Math.random().toString(16).slice(3, 8)

        this._instance = instance;
        this._resolve = []
        this._reject = []
        this._progress = []
        this._finally = []
    }

    then(resolve, reject){
        if(this._resolve.push){
            this._resolve.push(resolve) 
        }else{
            resolve(this._resolve)
        }

        if(reject) this.catch(reject);
        return this;
    }
    catch(reject){
        if(this._reject.push){
            this._reject.push(reject) 
        }else{
            reject(this._reject)
        }
        return this;
    }
    progress(fn){
        this._progress.push(fn)
        return this;
    }
    finally(fn) {
        this._finally.push(fn)
        return this;  
    }
    _send(action, payload){
        adapter.sendPacket(this._instance, {
            jobId: this.id,
            action: action,
            payload: payload
        })
    }

    _handle(packet){
        var data = packet.data;
        let runFinallyCbs = false;

        if(packet.status === 'resolve'){
            if(this._resolve.length === 0) console.log(data);
            this._resolve.forEach(fn => {
                var ret = fn(data);
                if(ret && typeof ret.then == 'function'){
                    console.warn('TesseractJob instances do not chain like ES6 Promises. To convert it into a real promise, use Promise.resolve.')
                }
            })
            this._resolve = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'reject'){
            if(this._reject.length === 0) console.error(data);
            this._reject.forEach(fn => fn(data))
            this._reject = data;
            this._instance._dequeue()
            runFinallyCbs = true;
        }else if(packet.status === 'progress'){
            this._progress.forEach(fn => fn(data))
        }else{
            console.warn('Message type unknown', packet.status)
        }

        if (runFinallyCbs) {
            this._finally.forEach(fn => fn(data));
        }
    }
}


/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var signature_pad_1 = __webpack_require__(470);
var SignaturePadModule = (function () {
    function SignaturePadModule() {
    }
    SignaturePadModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [signature_pad_1.SignaturePad],
                    exports: [signature_pad_1.SignaturePad],
                },] },
    ];
    /** @nocollapse */
    SignaturePadModule.ctorParameters = [];
    return SignaturePadModule;
}());
exports.SignaturePadModule = SignaturePadModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBSS9DO0lBQUE7SUFVQSxDQUFDO0lBVndDLDZCQUFVLEdBQTBCO1FBQzdFLEVBQUUsSUFBSSxFQUFFLGVBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsT0FBTyxFQUFFLEVBQUc7b0JBQ1osWUFBWSxFQUFFLENBQUUsNEJBQVksQ0FBRTtvQkFDOUIsT0FBTyxFQUFFLENBQUUsNEJBQVksQ0FBRTtpQkFDMUIsRUFBRyxFQUFFO0tBQ0wsQ0FBQztJQUNGLGtCQUFrQjtJQUNYLGlDQUFjLEdBQTZELEVBQ2pGLENBQUM7SUFDRix5QkFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksMEJBQWtCLHFCQVU5QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpZ25hdHVyZVBhZCB9IGZyb20gJy4vc2lnbmF0dXJlLXBhZCc7XG5cblxuXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlUGFkTW9kdWxlIHsgc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gIGltcG9ydHM6IFsgXSxcbiAgZGVjbGFyYXRpb25zOiBbIFNpZ25hdHVyZVBhZCBdLFxuICBleHBvcnRzOiBbIFNpZ25hdHVyZVBhZCBdLFxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9IFtcbl07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ })

});
//# sourceMappingURL=0.js.map