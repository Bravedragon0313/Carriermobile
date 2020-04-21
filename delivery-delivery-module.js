(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/main/delivery/delivery.html":
/*!*************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/main/delivery/delivery.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n\tclass=\"money-amount-container\"\n\t*ngIf=\"!selectedOrder?.isPaid && !selectedOrder?. isCancelled\"\n>\n\t<div class=\"money-amount\">\n\t\t{{ 'DELIVERY_VIEW.THE_CUSTOMER_HAS_TO_PAY' | translate }} ${{\n\t\tselectedOrder?.totalPrice }}!\n\t</div>\n</div>\n\n<div\n\tclass=\"already-paid-container\"\n\t*ngIf=\"selectedOrder?.isPaid && !selectedOrder?. isCancelled\"\n>\n\t<div class=\"already-paid\">\n\t\t{{ 'DELIVERY_VIEW.CUSTOMER_ALREADY_PAID_WITH_CARD' | translate }}\n\t</div>\n</div>\n\n<carrier-map #map class=\"map\"></carrier-map>\n\n<div class=\"bottom-container\">\n\t<div class=\"info\">\n\t\t<span class=\"left-info\">{{ selectedOrder?.user.fullAddress }}</span>\n\t\t<span *ngIf=\"carrierUserDistance\" class=\"right-text\"\n\t\t\t>{{ carrierUserDistance + 'km' }}</span\n\t\t>\n\t</div>\n\n\t<div class=\"buttons\">\n\t\t<div class=\"button-bar\">\n\t\t\t<button\n\t\t\t\t*ngIf=\"!selectedOrder?.isCancelled\"\n\t\t\t\t[disabled]=\"disabledButtons\"\n\t\t\t\tclass=\"button button-brand\"\n\t\t\t\t(click)=\"delivered()\"\n\t\t\t>\n\t\t\t\t{{ 'DELIVERY_VIEW.DELIVERED' | translate }}\n\t\t\t</button>\n\n\t\t\t<button\n\t\t\t\t[disabled]=\"disabledButtons\"\n\t\t\t\tclass=\"button button-assertive\"\n\t\t\t\t(click)=\"cancel()\"\n\t\t\t>\n\t\t\t\t<span *ngIf=\"!selectedOrder?.isCancelled\"\n\t\t\t\t\t>{{ 'DELIVERY_VIEW.CANCEL' | translate }}</span\n\t\t\t\t>\n\t\t\t\t<span *ngIf=\"selectedOrder?.isCancelled\"\n\t\t\t\t\t>{{ 'OK' | translate }}</span\n\t\t\t\t>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/pages/main/delivery/delivery.module.ts":
/*!****************************************************!*\
  !*** ./src/pages/main/delivery/delivery.module.ts ***!
  \****************************************************/
/*! exports provided: DeliveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPageModule", function() { return DeliveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delivery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery */ "./src/pages/main/delivery/delivery.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "../../node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/geo-location.service */ "./src/services/geo-location.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_map_map_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/map/map.module */ "./src/pages/main/common/map/map.module.ts");









var routes = [
    {
        path: '',
        component: _delivery__WEBPACK_IMPORTED_MODULE_2__["DeliveryPage"],
    },
];
var DeliveryPageModule = (function () {
    function DeliveryPageModule() {
    }
    DeliveryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_delivery__WEBPACK_IMPORTED_MODULE_2__["DeliveryPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _common_map_map_module__WEBPACK_IMPORTED_MODULE_8__["MapModule"],
            ],
            providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _services_geo_location_service__WEBPACK_IMPORTED_MODULE_5__["GeoLocationService"]],
        })
    ], DeliveryPageModule);
    return DeliveryPageModule;
}());



/***/ }),

/***/ "./src/pages/main/delivery/delivery.ts":
/*!*********************************************!*\
  !*** ./src/pages/main/delivery/delivery.ts ***!
  \*********************************************/
/*! exports provided: DeliveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPage", function() { return DeliveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");
/* harmony import */ var _ionic_native_mixpanel_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/mixpanel/ngx */ "../../node_modules/@ionic-native/mixpanel/ngx/index.js");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "../../node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/geo-location.service */ "./src/services/geo-location.service.ts");
/* harmony import */ var _common_map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/map/map.component */ "./src/pages/main/common/map/map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");













var DeliveryPage = (function () {
    function DeliveryPage(orderRouter, mixpanel, geoLocationService, geolocation, router, store) {
        this.orderRouter = orderRouter;
        this.mixpanel = mixpanel;
        this.geoLocationService = geoLocationService;
        this.geolocation = geolocation;
        this.router = router;
        this.store = store;
        this.disabledButtons = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    }
    Object.defineProperty(DeliveryPage.prototype, "fullAddress", {
        get: function () {
            return this.selectedOrder.user.fullAddress;
        },
        enumerable: true,
        configurable: true
    });
    DeliveryPage.prototype.delivered = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disabledButtons = true;
                        if (!this.selectedOrder) return [3, 2];
                        this.router.navigateByUrl('/main/home', {
                            skipLocationChange: false,
                        });
                        this.unselectOrder();
                        return [4, this.orderRouter.updateCarrierStatus(this.selectedOrder['id'], _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_3__["default"].DeliveryCompleted)];
                    case 1:
                        _a.sent();
                        this.mixpanel.track('Order Delivered');
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
    DeliveryPage.prototype.cancel = function () {
        this.disabledButtons = true;
        this.store.driveToWarehouseFrom = 'delivery';
        this.router.navigateByUrl('/main/drive-to-warehouse', {
            skipLocationChange: false,
        });
    };
    DeliveryPage.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    DeliveryPage.prototype.ionViewWillEnter = function () { };
    DeliveryPage.prototype.ionViewWillLeave = function () { };
    DeliveryPage.prototype.unselectOrder = function () {
        localStorage.removeItem('orderId');
        this.store.selectedOrder = null;
    };
    DeliveryPage.prototype.loadData = function () {
        var _this = this;
        this.orderRouter
            .get(localStorage.getItem('orderId'), { populateWarehouse: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$))
            .subscribe(function (order) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var position, _a, dbGeoInput, origin, userGeo, destination;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.selectedOrder = order;
                        this.store.selectedOrder = order;
                        if (!this.geoLocationService.defaultLocation()) return [3, 1];
                        _a = this.geoLocationService.defaultLocation();
                        return [3, 3];
                    case 1: return [4, this.geolocation.getCurrentPosition()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        position = _a;
                        dbGeoInput = {
                            loc: {
                                type: 'Point',
                                coordinates: [
                                    position.coords.longitude,
                                    position.coords.latitude,
                                ],
                            },
                        };
                        origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        userGeo = order.user['geoLocation'];
                        this.carrierUserDistance = _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getDistance(userGeo, dbGeoInput).toFixed(2);
                        destination = new google.maps.LatLng(userGeo.loc.coordinates[1], userGeo.loc.coordinates[0]);
                        this.carrierMap.setCenter(origin);
                        this.carrierMap.drawRoute(origin, destination);
                        this.disabledButtons = false;
                        return [2];
                }
            });
        }); });
    };
    DeliveryPage.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    DeliveryPage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__["OrderRouter"] },
        { type: _ionic_native_mixpanel_ngx__WEBPACK_IMPORTED_MODULE_4__["Mixpanel"] },
        { type: _services_geo_location_service__WEBPACK_IMPORTED_MODULE_7__["GeoLocationService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_10__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _common_map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"])
    ], DeliveryPage.prototype, "carrierMap", void 0);
    DeliveryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-delivery',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delivery.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/main/delivery/delivery.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__["OrderRouter"],
            _ionic_native_mixpanel_ngx__WEBPACK_IMPORTED_MODULE_4__["Mixpanel"],
            _services_geo_location_service__WEBPACK_IMPORTED_MODULE_7__["GeoLocationService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            services_store_service__WEBPACK_IMPORTED_MODULE_10__["Store"]])
    ], DeliveryPage);
    return DeliveryPage;
}());



/***/ })

}]);
//# sourceMappingURL=delivery-delivery-module.js.map