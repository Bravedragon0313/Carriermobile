(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-product-get-product-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/product/get-product/get-product.html":
/*!**********************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/product/get-product/get-product.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"selectedOrder?.isCancelled\" class=\"money-amount-container\">\n\t<div class=\"money-amount\">\n\t\t<!-- TODO add translate -->\n\t\tThe customer cancel order\n\t</div>\n</div>\n\n<div class=\"carrier-view\">\n\t<img\n\t\tclass=\"product-image\"\n\t\tsrc=\"{{ (selectedOrder?.products)[0].product.images[0].url }}\"\n\t/>\n\t<div class=\"bottom-container\">\n\t\t<div class=\"info\">\n\t\t\t<span class=\"left-info\"\n\t\t\t\t>{{\n\t\t\t\tlocaleTranslate((selectedOrder?.products)[0]?.product?.title)\n\t\t\t\t}}</span\n\t\t\t>\n\t\t\t<span class=\"right-text\">#{{ selectedOrder?.orderNumber }}</span>\n\t\t</div>\n\t\t<div class=\"buttons\">\n\t\t\t<div *ngIf=\"!selectedOrder?.isCancelled\" class=\"button-bar\">\n\t\t\t\t<button\n\t\t\t\t\t*ngIf=\"!selectedOrder?.isCancelled\"\n\t\t\t\t\t[disabled]=\"disabledButtons\"\n\t\t\t\t\tclass=\"button button-brand\"\n\t\t\t\t\t(click)=\"gotProduct()\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'GET_PRODUCT_VIEW.GOT_IT' | translate }}\n\t\t\t\t</button>\n\n\t\t\t\t<button\n\t\t\t\t\t[disabled]=\"disabledButtons\"\n\t\t\t\t\tclass=\"button button-assertive\"\n\t\t\t\t\t(click)=\"cancelWork()\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'GET_PRODUCT_VIEW.CANCEL' | translate }}\n\t\t\t\t</button>\n\t\t\t</div>\n\n\t\t\t<div class=\"button-bar\" *ngIf=\"selectedOrder?.isCancelled\">\n\t\t\t\t<button\n\t\t\t\t\tclass=\"button button-assertive\"\n\t\t\t\t\t(click)=\"unselectOrder()\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'OK' | translate }}\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/pages/product/get-product/get-product.module.ts":
/*!*************************************************************!*\
  !*** ./src/pages/product/get-product/get-product.module.ts ***!
  \*************************************************************/
/*! exports provided: GetProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductPageModule", function() { return GetProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-product */ "./src/pages/product/get-product/get-product.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var routes = [
    {
        path: '',
        component: _get_product__WEBPACK_IMPORTED_MODULE_2__["GetProductPage"],
    },
];
var GetProductPageModule = (function () {
    function GetProductPageModule() {
    }
    GetProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_get_product__WEBPACK_IMPORTED_MODULE_2__["GetProductPage"]],
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ],
        })
    ], GetProductPageModule);
    return GetProductPageModule;
}());



/***/ }),

/***/ "./src/pages/product/get-product/get-product.ts":
/*!******************************************************!*\
  !*** ./src/pages/product/get-product/get-product.ts ***!
  \******************************************************/
/*! exports provided: GetProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetProductPage", function() { return GetProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-orders-router.service */ "../common-angular/src/routers/carrier-orders-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/locale/product-locales.service */ "../common-angular/src/locale/product-locales.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");











var GetProductPage = (function () {
    function GetProductPage(orderRouter, carrierRouter, carrierOrdersRouter, _translateProductLocales, store, navCtrl) {
        this.orderRouter = orderRouter;
        this.carrierRouter = carrierRouter;
        this.carrierOrdersRouter = carrierOrdersRouter;
        this._translateProductLocales = _translateProductLocales;
        this.store = store;
        this.navCtrl = navCtrl;
        this.disabledButtons = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    GetProductPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    GetProductPage.prototype.gotProduct = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disabledButtons = true;
                        if (!(this.carrier && this.selectedOrder)) return [3, 2];
                        return [4, this.carrierOrdersRouter.updateStatus(this.carrier['id'], _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_4__["default"].CarrierPickedUpOrder)];
                    case 1:
                        _a.sent();
                        this.navCtrl.navigateRoot('/main/starting-delivery');
                        return [3, 3];
                    case 2:
                        alert('Try again!');
                        _a.label = 3;
                    case 3:
                        this.disabledButtons = false;
                        return [2];
                }
            });
        });
    };
    GetProductPage.prototype.cancelWork = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disabledButtons = true;
                        if (!(this.carrier && this.selectedOrder)) return [3, 2];
                        return [4, this.carrierOrdersRouter.cancelDelivery(this.carrier['id'], [
                                this.selectedOrder['id'],
                            ])];
                    case 1:
                        _a.sent();
                        this.unselectOrder();
                        return [3, 3];
                    case 2:
                        alert('Try again!');
                        _a.label = 3;
                    case 3:
                        this.disabledButtons = false;
                        return [2];
                }
            });
        });
    };
    GetProductPage.prototype.localeTranslate = function (member) {
        return this._translateProductLocales.getTranslate(member);
    };
    GetProductPage.prototype.loadData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.carrierRouter
                                .get(this.store.carrierId)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])())
                                .toPromise()];
                    case 1:
                        _a.carrier = _b.sent();
                        this.orderRouter
                            .get(this.store.orderId, {
                            populateWarehouse: true,
                        })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["takeUntil"])(this.destroy$))
                            .subscribe(function (o) {
                            _this.selectedOrder = o;
                            _this.store.selectedOrder = o;
                            _this.disabledButtons = false;
                        });
                        return [2];
                }
            });
        });
    };
    GetProductPage.prototype.unselectOrder = function () {
        this.store.selectedOrder = null;
        localStorage.removeItem('orderId');
        this.navCtrl.navigateRoot('/main/home');
    };
    GetProductPage.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    GetProductPage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__["OrderRouter"] },
        { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__["CarrierRouter"] },
        { type: _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__["CarrierOrdersRouter"] },
        { type: _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_6__["ProductLocalesService"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"] }
    ]; };
    GetProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-get-product',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./get-product.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/product/get-product/get-product.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__["OrderRouter"],
            _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__["CarrierRouter"],
            _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_5__["CarrierOrdersRouter"],
            _modules_client_common_angular2_locale_product_locales_service__WEBPACK_IMPORTED_MODULE_6__["ProductLocalesService"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"]])
    ], GetProductPage);
    return GetProductPage;
}());



/***/ })

}]);
//# sourceMappingURL=get-product-get-product-module.js.map