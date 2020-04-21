(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drive-to-warehouse-drive-to-warehouse-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/main/drive-to-warehouse/drive-to-warehouse.html":
/*!*********************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/main/drive-to-warehouse/drive-to-warehouse.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<carrier-map #map class=\"map\"></carrier-map>\n\n<div class=\"bottom-container\">\n\t<div class=\"info\">\n\t\t<span class=\"left-info\">To: {{ selectedOrder?.user.fullAddress }}</span>\n\t\t<span class=\"right-text\">{{ carrierUserDistance + 'km' }}</span>\n\t</div>\n\t<div class=\"buttons\">\n\t\t<div\n\t\t\tclass=\"button-bar\"\n\t\t\t*ngIf=\"!workTaken && !selectedOrder?.isCancelled\"\n\t\t>\n\t\t\t<button class=\"button button-brand\" (click)=\"takeWork()\">\n\t\t\t\t{{ 'DRIVE_TO_WAREHOUSE_VIEW.TAKE_WORK' | translate }}\n\t\t\t</button>\n\n\t\t\t<button class=\"button button-assertive\" (click)=\"skipWork()\">\n\t\t\t\t{{ 'DRIVE_TO_WAREHOUSE_VIEW.SKIP_WORK' | translate }}\n\t\t\t</button>\n\t\t</div>\n\t\t<div\n\t\t\tclass=\"button-bar\"\n\t\t\t*ngIf=\"workTaken && (!selectedOrder?.isCancelled || fromDelivery)\"\n\t\t>\n\t\t\t<button class=\"button button-brand\" (click)=\"carrierInWarehouse()\">\n\t\t\t\t{{ \"DRIVE_TO_WAREHOUSE_VIEW.I'M_THERE\" | translate }}\n\t\t\t</button>\n\n\t\t\t<button\n\t\t\t\tclass=\"button button-assertive\"\n\t\t\t\t*ngIf=\"!selectedOrder.isCancelled\"\n\t\t\t\t(click)=\"cancelWork()\"\n\t\t\t>\n\t\t\t\t{{ 'DRIVE_TO_WAREHOUSE_VIEW.CANCEL' | translate }}\n\t\t\t</button>\n\t\t</div>\n\t\t<div\n\t\t\tclass=\"button-bar\"\n\t\t\t*ngIf=\"selectedOrder?.isCancelled && !fromDelivery\"\n\t\t>\n\t\t\t<button class=\"button button-assertive\" (click)=\"unselectOrder()\">\n\t\t\t\t{{ 'OK' | translate }}\n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/pages/main/drive-to-warehouse/drive-to-warehouse.module.ts":
/*!************************************************************************!*\
  !*** ./src/pages/main/drive-to-warehouse/drive-to-warehouse.module.ts ***!
  \************************************************************************/
/*! exports provided: DriveToWarehousePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveToWarehousePageModule", function() { return DriveToWarehousePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drive_to_warehouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drive-to-warehouse */ "./src/pages/main/drive-to-warehouse/drive-to-warehouse.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "../../node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/geo-location.service */ "./src/services/geo-location.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_map_map_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/map/map.module */ "./src/pages/main/common/map/map.module.ts");










var routes = [
    {
        path: '',
        component: _drive_to_warehouse__WEBPACK_IMPORTED_MODULE_2__["DriveToWarehousePage"],
    },
];
var DriveToWarehousePageModule = (function () {
    function DriveToWarehousePageModule() {
    }
    DriveToWarehousePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_drive_to_warehouse__WEBPACK_IMPORTED_MODULE_2__["DriveToWarehousePage"]],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
                _common_map_map_module__WEBPACK_IMPORTED_MODULE_9__["MapModule"],
            ],
            providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"], _services_geo_location_service__WEBPACK_IMPORTED_MODULE_5__["GeoLocationService"]],
        })
    ], DriveToWarehousePageModule);
    return DriveToWarehousePageModule;
}());



/***/ }),

/***/ "./src/pages/main/drive-to-warehouse/drive-to-warehouse.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/main/drive-to-warehouse/drive-to-warehouse.ts ***!
  \*****************************************************************/
/*! exports provided: DriveToWarehousePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveToWarehousePage", function() { return DriveToWarehousePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-orders-router.service */ "../common-angular/src/routers/carrier-orders-router.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "../../node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/geo-location.service */ "./src/services/geo-location.service.ts");
/* harmony import */ var _common_map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/map/map.component */ "./src/pages/main/common/map/map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");













var DriveToWarehousePage = (function () {
    function DriveToWarehousePage(orderRouter, carrierRouter, carrierOrdersRouter, store, geoLocationService, geolocation, router, navCtrl) {
        this.orderRouter = orderRouter;
        this.carrierRouter = carrierRouter;
        this.carrierOrdersRouter = carrierOrdersRouter;
        this.store = store;
        this.geoLocationService = geoLocationService;
        this.geolocation = geolocation;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    DriveToWarehousePage.prototype.ngOnInit = function () {
        this.fromDelivery = this.store.driveToWarehouseFrom === 'delivery';
    };
    DriveToWarehousePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.carrier$ = this.carrierRouter
            .get(this.store.carrierId)
            .subscribe(function (c) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var position, _a, dbGeoInput, orderId;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.carrier = c;
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
                        if (!this.order$) return [3, 5];
                        return [4, this.order$.unsubscribe()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        orderId = localStorage.getItem('orderId');
                        if (orderId) {
                            this.order$ = this.orderRouter
                                .get(orderId, {
                                populateWarehouse: true,
                            })
                                .subscribe(function (order) {
                                _this.selectedOrder = order;
                                _this.store.selectedOrder = order;
                                _this.workTaken =
                                    order.carrierStatus !==
                                        _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_5__["default"].NoCarrier;
                                var origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                                var merchantGeo = order.warehouse['geoLocation'];
                                _this.carrierUserDistance = _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getDistance(merchantGeo, dbGeoInput).toFixed(2);
                                var destination = new google.maps.LatLng(merchantGeo.loc.coordinates[1], merchantGeo.loc.coordinates[0]);
                                _this.carrierMap.setCenter(origin);
                                _this.carrierMap.drawRoute(origin, destination);
                            });
                        }
                        return [2];
                }
            });
        }); });
    };
    DriveToWarehousePage.prototype.takeWork = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.carrier && this.selectedOrder)) return [3, 2];
                        return [4, this.carrierOrdersRouter.selectedForDelivery(this.carrier['id'], [this.selectedOrder['id']])];
                    case 1: return [2, _a.sent()];
                    case 2:
                        alert('Try again!');
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    DriveToWarehousePage.prototype.skipWork = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.carrier && this.selectedOrder)) return [3, 2];
                        return [4, this.carrierOrdersRouter.skipOrders(this.carrier['id'], [
                                this.selectedOrder['id'],
                            ])];
                    case 1:
                        _a.sent();
                        this.unselectOrder();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    DriveToWarehousePage.prototype.carrierInWarehouse = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this.fromDelivery) {
                    this.store.returnProductFrom = 'driveToWarehouse';
                    this.router.navigate(['/product/return'], {
                        skipLocationChange: false,
                    });
                }
                else {
                    this.router.navigateByUrl('/product/get', {
                        skipLocationChange: false,
                    });
                }
                this.unselectDriveToWarehouseFrom();
                this.unsubscribeAll();
                return [2];
            });
        });
    };
    DriveToWarehousePage.prototype.cancelWork = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.fromDelivery) return [3, 1];
                        this.unselectDriveToWarehouseFrom();
                        this.router.navigateByUrl('/main/delivery', {
                            skipLocationChange: true,
                        });
                        return [3, 3];
                    case 1:
                        if (!(this.carrier && this.selectedOrder)) return [3, 3];
                        return [4, this.carrierOrdersRouter.cancelDelivery(this.carrier['id'], [this.selectedOrder['id']])];
                    case 2:
                        _a.sent();
                        this.unselectOrder();
                        _a.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    DriveToWarehousePage.prototype.ionViewWillLeave = function () {
        this.unselectDriveToWarehouseFrom();
        this.unsubscribeAll();
    };
    DriveToWarehousePage.prototype.unselectOrder = function () {
        this.store.selectedOrder = null;
        localStorage.removeItem('orderId');
        this.navCtrl.navigateRoot('/main/home');
    };
    DriveToWarehousePage.prototype.unsubscribeAll = function () {
        if (this.carrier$) {
            this.carrier$.unsubscribe();
        }
        if (this.order$) {
            this.order$.unsubscribe();
        }
    };
    DriveToWarehousePage.prototype.unselectDriveToWarehouseFrom = function () {
        localStorage.removeItem('driveToWarehouseFrom');
    };
    DriveToWarehousePage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__["OrderRouter"] },
        { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"] },
        { type: _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_6__["CarrierOrdersRouter"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _services_geo_location_service__WEBPACK_IMPORTED_MODULE_9__["GeoLocationService"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _common_map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"])
    ], DriveToWarehousePage.prototype, "carrierMap", void 0);
    DriveToWarehousePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-drive-to-warehouse',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./drive-to-warehouse.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/main/drive-to-warehouse/drive-to-warehouse.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_2__["OrderRouter"],
            _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"],
            _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_6__["CarrierOrdersRouter"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _services_geo_location_service__WEBPACK_IMPORTED_MODULE_9__["GeoLocationService"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavController"]])
    ], DriveToWarehousePage);
    return DriveToWarehousePage;
}());



/***/ })

}]);
//# sourceMappingURL=drive-to-warehouse-drive-to-warehouse-module.js.map