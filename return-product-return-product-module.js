(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["return-product-return-product-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/product/return-product/return-product.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/product/return-product/return-product.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"selectedOrder?.isCancelled\" class=\"money-amount-container\">\n\t<div class=\"money-amount\">\n\t\t<!-- TODO add translate -->\n\t\tThe customer cancel order\n\t</div>\n</div>\n\n<div class=\"carrier-view\">\n\t<img\n\t\tclass=\"product-image\"\n\t\tsrc=\"{{ (selectedOrder?.products)[0].product.images[0].url }}\"\n\t/>\n\t<div class=\"bottom-container\">\n\t\t<div class=\"info\">\n\t\t\t<span class=\"left-info\"\n\t\t\t\t>{{\n\t\t\t\tlocaleTranslate((selectedOrder?.products)[0]?.product?.title)\n\t\t\t\t}}</span\n\t\t\t>\n\t\t\t<span class=\"right-text\">#{{ selectedOrder?.orderNumber }}</span>\n\t\t</div>\n\t\t<div class=\"buttons\">\n\t\t\t<div class=\"button-bar\">\n\t\t\t\t<button class=\"button button-brand\" (click)=\"returnProduct()\">\n\t\t\t\t\t{{ 'RETURN_PRODUCT_VIEW.RETURN_PRODUCT' | translate }}\n\t\t\t\t</button>\n\n\t\t\t\t<button\n\t\t\t\t\t*ngIf=\"allowCancel\"\n\t\t\t\t\tclass=\"button button-assertive\"\n\t\t\t\t\t(click)=\"cancelReturn()\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'RETURN_PRODUCT_VIEW.CANCEL' | translate }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/pages/product/return-product/return-product.module.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/product/return-product/return-product.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReturnProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnProductPageModule", function() { return ReturnProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _return_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./return-product */ "./src/pages/product/return-product/return-product.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var routes = [
    {
        path: '',
        component: _return_product__WEBPACK_IMPORTED_MODULE_2__["ReturnProductPage"],
    },
];
var ReturnProductPageModule = (function () {
    function ReturnProductPageModule() {
    }
    ReturnProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_return_product__WEBPACK_IMPORTED_MODULE_2__["ReturnProductPage"]],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            ],
        })
    ], ReturnProductPageModule);
    return ReturnProductPageModule;
}());



/***/ }),

/***/ "./src/pages/product/return-product/return-product.ts":
/*!************************************************************!*\
  !*** ./src/pages/product/return-product/return-product.ts ***!
  \************************************************************/
/*! exports provided: ReturnProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnProductPage", function() { return ReturnProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");










var ReturnProductPage = (function () {
    function ReturnProductPage(translateProductLocales, carrierRouter, orderRouter, store, navCtrl) {
        this.translateProductLocales = translateProductLocales;
        this.carrierRouter = carrierRouter;
        this.orderRouter = orderRouter;
        this.store = store;
        this.navCtrl = navCtrl;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
    }
    Object.defineProperty(ReturnProductPage.prototype, "allowCancel", {
        get: function () {
            switch (this.store.returnProductFrom) {
                case 'driveToWarehouse':
                    return false;
                case 'startingDelivery':
                    return this.selectedOrder && !this.selectedOrder.isCancelled;
                default:
                    return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    ReturnProductPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    ReturnProductPage.prototype.localeTranslate = function (member) {
        return this.translateProductLocales.getTranslate(member);
    };
    ReturnProductPage.prototype.cancelReturn = function () {
        if (!this.allowCancel)
            throw new Error('Cancel not allowed!');
        this.navCtrl.navigateRoot('/main/starting-delivery');
    };
    ReturnProductPage.prototype.returnProduct = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.selectedOrder.isCancelled) return [3, 2];
                        return [4, this.orderRouter.updateCarrierStatus(this.store.orderId, _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_7__["default"].IssuesDuringDelivery)];
                    case 1:
                        _a.sent();
                        this.unselectOrder();
                        this.navCtrl.navigateRoot('/main/home');
                        return [3, 3];
                    case 2:
                        this.unselectOrder();
                        this.navCtrl.navigateRoot('/main/home');
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    ReturnProductPage.prototype.ionViewWillLeave = function () {
        localStorage.removeItem('returnProductFrom');
    };
    ReturnProductPage.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.carrierRouter
                                .get(this.store.carrierId)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                                .toPromise()];
                    case 1:
                        _a.carrier = _b.sent();
                        this.orderRouter
                            .get(this.store.orderId, {
                            populateWarehouse: true,
                        })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
                            .subscribe(function (o) {
                            _this.selectedOrder = o;
                            _this.store.selectedOrder = o;
                        });
                        return [2];
                }
            });
        });
    };
    ReturnProductPage.prototype.unselectOrder = function () {
        localStorage.removeItem('orderId');
        this.store.selectedOrder = null;
    };
    ReturnProductPage.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    ReturnProductPage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__["ProductLocalesService"] },
        { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__["CarrierRouter"] },
        { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__["OrderRouter"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] }
    ]; };
    ReturnProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-return-product',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./return-product.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/product/return-product/return-product.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_2__["ProductLocalesService"],
            _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__["CarrierRouter"],
            _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__["OrderRouter"],
            services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"]])
    ], ReturnProductPage);
    return ReturnProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=return-product-return-product-module.js.map