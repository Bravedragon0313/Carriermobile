(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-info-module"],{

/***/ "./src/app/info/info.module.ts":
/*!*************************************!*\
  !*** ./src/app/info/info.module.ts ***!
  \*************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _maintenance_info_maintenance_module_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance-info/maintenance.module.guard */ "./src/app/info/maintenance-info/maintenance.module.guard.ts");
/* harmony import */ var _no_server_connection_no_server_module_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-server-connection/no-server.module.guard */ "./src/app/info/no-server-connection/no-server.module.guard.ts");
/* harmony import */ var _no_internet_no_internet_modue_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no-internet/no-internet.modue.guard */ "./src/app/info/no-internet/no-internet.modue.guard.ts");






var routes = [
    {
        path: 'maintenance',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | maintenance-info-maintenance-info-module */ "maintenance-info-maintenance-info-module").then(__webpack_require__.bind(null, /*! ./maintenance-info/maintenance-info.module */ "./src/app/info/maintenance-info/maintenance-info.module.ts")).then(function (m) { return m.MaintenanceInfoPageModule; });
        },
        canLoad: [_maintenance_info_maintenance_module_guard__WEBPACK_IMPORTED_MODULE_3__["MaintenanceModuleGuard"]],
    },
    {
        path: 'server-down',
        loadChildren: function () {
            return Promise.all(/*! import() | no-server-connection-no-server-module */[__webpack_require__.e("default~no-internet-no-internet-module~no-server-connection-no-server-module"), __webpack_require__.e("no-server-connection-no-server-module")]).then(__webpack_require__.bind(null, /*! ./no-server-connection/no-server.module */ "./src/app/info/no-server-connection/no-server.module.ts")).then(function (m) { return m.ServerDownModule; });
        },
        canLoad: [_no_server_connection_no_server_module_guard__WEBPACK_IMPORTED_MODULE_4__["ServerDownModuleGuard"]],
    },
    {
        path: 'no-internet',
        loadChildren: function () {
            return Promise.all(/*! import() | no-internet-no-internet-module */[__webpack_require__.e("default~no-internet-no-internet-module~no-server-connection-no-server-module"), __webpack_require__.e("no-internet-no-internet-module")]).then(__webpack_require__.bind(null, /*! ./no-internet/no-internet.module */ "./src/app/info/no-internet/no-internet.module.ts")).then(function (m) { return m.NoInternerModule; });
        },
        canLoad: [_no_internet_no_internet_modue_guard__WEBPACK_IMPORTED_MODULE_5__["NoInternetModuleGuard"]],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'maintenance',
    },
];
var InfoPageModule = (function () {
    function InfoPageModule() {
    }
    InfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            providers: [
                _maintenance_info_maintenance_module_guard__WEBPACK_IMPORTED_MODULE_3__["MaintenanceModuleGuard"],
                _no_server_connection_no_server_module_guard__WEBPACK_IMPORTED_MODULE_4__["ServerDownModuleGuard"],
                _no_internet_no_internet_modue_guard__WEBPACK_IMPORTED_MODULE_5__["NoInternetModuleGuard"],
            ],
        })
    ], InfoPageModule);
    return InfoPageModule;
}());



/***/ }),

/***/ "./src/app/info/maintenance-info/maintenance.module.guard.ts":
/*!*******************************************************************!*\
  !*** ./src/app/info/maintenance-info/maintenance.module.guard.ts ***!
  \*******************************************************************/
/*! exports provided: MaintenanceModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModuleGuard", function() { return MaintenanceModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");




var MaintenanceModuleGuard = (function () {
    function MaintenanceModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    MaintenanceModuleGuard.prototype.canLoad = function () {
        var maintenanceMode = this.store.maintenanceMode;
        if (!maintenanceMode) {
            this.router.navigateByUrl('info/server-down');
            return false;
        }
        return true;
    };
    MaintenanceModuleGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    MaintenanceModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], MaintenanceModuleGuard);
    return MaintenanceModuleGuard;
}());



/***/ }),

/***/ "./src/app/info/no-internet/no-internet.modue.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/info/no-internet/no-internet.modue.guard.ts ***!
  \*************************************************************/
/*! exports provided: NoInternetModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoInternetModuleGuard", function() { return NoInternetModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");




var NoInternetModuleGuard = (function () {
    function NoInternetModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    NoInternetModuleGuard.prototype.canLoad = function () {
        if (!this.store.noInternet) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    NoInternetModuleGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    NoInternetModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], NoInternetModuleGuard);
    return NoInternetModuleGuard;
}());



/***/ }),

/***/ "./src/app/info/no-server-connection/no-server.module.guard.ts":
/*!*********************************************************************!*\
  !*** ./src/app/info/no-server-connection/no-server.module.guard.ts ***!
  \*********************************************************************/
/*! exports provided: ServerDownModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDownModuleGuard", function() { return ServerDownModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");




var ServerDownModuleGuard = (function () {
    function ServerDownModuleGuard(router, store) {
        this.router = router;
        this.store = store;
    }
    ServerDownModuleGuard.prototype.canLoad = function () {
        var serverDown = Number(this.store.serverConnection) === 0;
        if (!serverDown) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    ServerDownModuleGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    ServerDownModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ServerDownModuleGuard);
    return ServerDownModuleGuard;
}());



/***/ })

}]);
//# sourceMappingURL=info-info-module.js.map