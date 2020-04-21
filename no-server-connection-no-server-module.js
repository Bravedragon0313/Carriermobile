(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["no-server-connection-no-server-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/info/no-server-connection/no-server-connection.html":
/*!***********************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/app/info/no-server-connection/no-server-connection.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"info-page\" scroll=\"false\">\n\t<div class=\"view-content\">\n\t\t<div class=\"logo app-hide-on-keyboard-open\">\n\t\t\t<img src=\"{{ noInternetLogo }}\" />\n\t\t</div>\n\n\t\t<div class=\"info-massage\">\n\t\t\t<h3>\n\t\t\t\t{{ 'NO_SERVER_VIEW.NO_SERVER' | translate }}\n\t\t\t</h3>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/app/info/no-server-connection/no-server-connection.ts":
/*!*******************************************************************!*\
  !*** ./src/app/info/no-server-connection/no-server-connection.ts ***!
  \*******************************************************************/
/*! exports provided: NoServerConnectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoServerConnectionComponent", function() { return NoServerConnectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/services/server-connection.service */ "../common-angular/src/services/server-connection.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NoServerConnectionComponent = (function () {
    function NoServerConnectionComponent(store, router, serverConnectionService) {
        this.store = store;
        this.router = router;
        this.serverConnectionService = serverConnectionService;
        this.noInternetLogo = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].NO_INTERNET_LOGO;
        this.testConnection();
    }
    NoServerConnectionComponent.prototype.testConnection = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.interval = setInterval(function () { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, this.serverConnectionService.checkServerConnection(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SERVICES_ENDPOINT, this.store)];
                            case 1:
                                _a.sent();
                                if (!this.store.showInformationPage) {
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
    NoServerConnectionComponent.prototype.ionViewWillLeave = function () {
        clearInterval(this.interval);
    };
    NoServerConnectionComponent.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_4__["ServerConnectionService"] }
    ]; };
    NoServerConnectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'no-server-connection',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./no-server-connection.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/info/no-server-connection/no-server-connection.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../information.scss */ "./src/app/info/information.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _modules_client_common_angular2_services_server_connection_service__WEBPACK_IMPORTED_MODULE_4__["ServerConnectionService"]])
    ], NoServerConnectionComponent);
    return NoServerConnectionComponent;
}());



/***/ }),

/***/ "./src/app/info/no-server-connection/no-server.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/info/no-server-connection/no-server.module.ts ***!
  \***************************************************************/
/*! exports provided: ServerDownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerDownModule", function() { return ServerDownModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _no_server_connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-server-connection */ "./src/app/info/no-server-connection/no-server-connection.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







var routes = [
    {
        path: '',
        component: _no_server_connection__WEBPACK_IMPORTED_MODULE_4__["NoServerConnectionComponent"],
    },
];
var ServerDownModule = (function () {
    function ServerDownModule() {
    }
    ServerDownModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_no_server_connection__WEBPACK_IMPORTED_MODULE_4__["NoServerConnectionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ],
        })
    ], ServerDownModule);
    return ServerDownModule;
}());



/***/ })

}]);
//# sourceMappingURL=no-server-connection-no-server-module.js.map