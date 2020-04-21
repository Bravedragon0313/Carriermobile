(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maintenance-info-maintenance-info-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/info/maintenance-info/maintenance-info.html":
/*!***************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/info/maintenance-info/maintenance-info.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n\t*ngIf=\"message\"\n\tclass=\"maintenance-message-container\"\n\t[innerHTML]=\"message | safe: 'html'\"\n></div>\n");

/***/ }),

/***/ "./src/app/info/maintenance-info/maintenance-info.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/info/maintenance-info/maintenance-info.module.ts ***!
  \******************************************************************/
/*! exports provided: MaintenanceInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceInfoPageModule", function() { return MaintenanceInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maintenance_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maintenance-info */ "./src/app/info/maintenance-info/maintenance-info.ts");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var routes = [
    {
        path: '',
        component: _maintenance_info__WEBPACK_IMPORTED_MODULE_2__["MaintenanceInfoPage"],
    },
];
var MaintenanceInfoPageModule = (function () {
    function MaintenanceInfoPageModule() {
    }
    MaintenanceInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_maintenance_info__WEBPACK_IMPORTED_MODULE_2__["MaintenanceInfoPage"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"]],
            entryComponents: [_maintenance_info__WEBPACK_IMPORTED_MODULE_2__["MaintenanceInfoPage"]],
            exports: [_maintenance_info__WEBPACK_IMPORTED_MODULE_2__["MaintenanceInfoPage"]],
        })
    ], MaintenanceInfoPageModule);
    return MaintenanceInfoPageModule;
}());



/***/ }),

/***/ "./src/app/info/maintenance-info/maintenance-info.ts":
/*!***********************************************************!*\
  !*** ./src/app/info/maintenance-info/maintenance-info.ts ***!
  \***********************************************************/
/*! exports provided: MaintenanceInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceInfoPage", function() { return MaintenanceInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/services/maintenance.service */ "../common-angular/src/services/maintenance.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MaintenanceInfoPage = (function () {
    function MaintenanceInfoPage(maintenanceService, store, router) {
        this.maintenanceService = maintenanceService;
        this.store = store;
        this.router = router;
        this.getMessage();
        this.getStatus();
    }
    MaintenanceInfoPage.prototype.getMessage = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4, this.maintenanceService.getMessage(this.store.maintenanceMode, _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]['SETTINGS_MAINTENANCE_API_URL'])];
                    case 1:
                        _a.message = _b.sent();
                        return [2];
                }
            });
        });
    };
    MaintenanceInfoPage.prototype.getStatus = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.interval = setInterval(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var status;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, this.maintenanceService.getStatus(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]['SETTINGS_APP_TYPE'], _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]['SETTINGS_MAINTENANCE_API_URL'])];
                            case 1:
                                status = _a.sent();
                                console.warn("Maintenance on '" + this.store.maintenanceMode + "': " + status);
                                if (!status) {
                                    clearInterval(this.interval);
                                    this.store.clearMaintenanceMode();
                                    this.router.navigateByUrl('');
                                }
                                return [2];
                        }
                    });
                }); }, 5000);
                return [2];
            });
        });
    };
    MaintenanceInfoPage.prototype.ionViewWillLeave = function () {
        clearInterval(this.interval);
    };
    MaintenanceInfoPage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    MaintenanceInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-maintenance-info',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./maintenance-info.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/info/maintenance-info/maintenance-info.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_services_maintenance_service__WEBPACK_IMPORTED_MODULE_3__["MaintenanceService"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MaintenanceInfoPage);
    return MaintenanceInfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=maintenance-info-maintenance-info-module.js.map