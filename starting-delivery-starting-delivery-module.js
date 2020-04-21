(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["starting-delivery-starting-delivery-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/main/starting-delivery/starting-delivery.html":
/*!*******************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/main/starting-delivery/starting-delivery.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carrier-map #map class=\"map\"></carrier-map>\n\n<div class=\"bottom-container\">\n\t<div class=\"info\">\n\t\t<span class=\"left-info\">{{ selectedOrder?.user.fullAddress }}</span>\n\t\t<span *ngIf=\"carrierUserDistance\" class=\"right-text\"\n\t\t\t>{{ carrierUserDistance + 'km' }}</span\n\t\t>\n\t</div>\n\n\t<div class=\"buttons\">\n\t\t<div class=\"button-bar\">\n\t\t\t<button\n\t\t\t\t*ngIf=\"!selectedOrder?.isCancelled\"\n\t\t\t\t[disabled]=\"disabledButtons\"\n\t\t\t\tclass=\"button button-brand\"\n\t\t\t\t(click)=\"startDelivery()\"\n\t\t\t>\n\t\t\t\t{{ 'STARTING_DELIVERY_VIEW.START' | translate }}\n\t\t\t</button>\n\n\t\t\t<button\n\t\t\t\t[ngSwitch]=\"selectedOrder?.isCancelled\"\n\t\t\t\t[disabled]=\"disabledButtons\"\n\t\t\t\tclass=\"button button-assertive\"\n\t\t\t\t(click)=\"returnProduct()\"\n\t\t\t>\n\t\t\t\t<span *ngSwitchCase=\"false\"\n\t\t\t\t\t>{{ 'STARTING_DELIVERY_VIEW.CANCEL' | translate }}</span\n\t\t\t\t>\n\t\t\t\t<span *ngSwitchCase=\"true\">{{ 'OK' | translate }}</span>\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/pages/main/starting-delivery/starting-delivery.module.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/main/starting-delivery/starting-delivery.module.ts ***!
  \**********************************************************************/
/*! exports provided: StartingDeliveryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartingDeliveryPageModule", function() { return StartingDeliveryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _starting_delivery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./starting-delivery */ "./src/pages/main/starting-delivery/starting-delivery.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_map_map_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/map/map.module */ "./src/pages/main/common/map/map.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var routes = [
    {
        path: '',
        component: _starting_delivery__WEBPACK_IMPORTED_MODULE_2__["StartingDeliveryPage"],
    },
];
var StartingDeliveryPageModule = (function () {
    function StartingDeliveryPageModule() {
    }
    StartingDeliveryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_starting_delivery__WEBPACK_IMPORTED_MODULE_2__["StartingDeliveryPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                _common_map_map_module__WEBPACK_IMPORTED_MODULE_5__["MapModule"],
            ],
        })
    ], StartingDeliveryPageModule);
    return StartingDeliveryPageModule;
}());



/***/ }),

/***/ "./src/pages/main/starting-delivery/starting-delivery.ts":
/*!***************************************************************!*\
  !*** ./src/pages/main/starting-delivery/starting-delivery.ts ***!
  \***************************************************************/
/*! exports provided: StartingDeliveryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartingDeliveryPage", function() { return StartingDeliveryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/map/map.component */ "./src/pages/main/common/map/map.component.ts");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var services_geo_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/geo-location.service */ "./src/services/geo-location.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "../../node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-orders-router.service */ "../common-angular/src/routers/carrier-orders-router.service.ts");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");













var StartingDeliveryPage = (function () {
    function StartingDeliveryPage(orderRouter, carrierOrdersRouter, geoLocationService, geolocation, router, store) {
        this.orderRouter = orderRouter;
        this.carrierOrdersRouter = carrierOrdersRouter;
        this.geoLocationService = geoLocationService;
        this.geolocation = geolocation;
        this.router = router;
        this.store = store;
        this.disabledButtons = true;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    }
    StartingDeliveryPage.prototype.ngAfterViewInit = function () {
        this.loadData();
    };
    StartingDeliveryPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    StartingDeliveryPage.prototype.startDelivery = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disabledButtons = true;
                        return [4, this.carrierOrdersRouter.updateStatus(this.store.carrierId, _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_11__["default"].CarrierStartDelivery)];
                    case 1:
                        _a.sent();
                        this.router.navigateByUrl('/main/delivery', {
                            skipLocationChange: false,
                        });
                        this.disabledButtons = false;
                        return [2];
                }
            });
        });
    };
    StartingDeliveryPage.prototype.returnProduct = function () {
        this.disabledButtons = true;
        this.store.returnProductFrom = 'startingDelivery';
        this.router.navigateByUrl('/product/return', {
            skipLocationChange: false,
        });
        this.disabledButtons = false;
    };
    StartingDeliveryPage.prototype.loadData = function () {
        var _this = this;
        this.orderRouter
            .get(localStorage.getItem('orderId'), { populateWarehouse: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
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
                        userGeo = this.selectedOrder.user['geoLocation'];
                        this.carrierUserDistance = _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_8__["default"].getDistance(userGeo, dbGeoInput).toFixed(2);
                        destination = new google.maps.LatLng(userGeo.loc.coordinates[1], userGeo.loc.coordinates[0]);
                        this.carrierMap.setCenter(origin);
                        this.carrierMap.drawRoute(origin, destination);
                        this.disabledButtons = false;
                        return [2];
                }
            });
        }); });
    };
    StartingDeliveryPage.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    StartingDeliveryPage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_3__["OrderRouter"] },
        { type: _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_9__["CarrierOrdersRouter"] },
        { type: services_geo_location_service__WEBPACK_IMPORTED_MODULE_6__["GeoLocationService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_10__["Store"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _common_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"])
    ], StartingDeliveryPage.prototype, "carrierMap", void 0);
    StartingDeliveryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-starting-delivery',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./starting-delivery.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/main/starting-delivery/starting-delivery.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_3__["OrderRouter"],
            _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_9__["CarrierOrdersRouter"],
            services_geo_location_service__WEBPACK_IMPORTED_MODULE_6__["GeoLocationService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            services_store_service__WEBPACK_IMPORTED_MODULE_10__["Store"]])
    ], StartingDeliveryPage);
    return StartingDeliveryPage;
}());



/***/ })

}]);
//# sourceMappingURL=starting-delivery-starting-delivery-module.js.map