(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["no-internet-no-internet-module"],{

/***/ "./src/app/info/no-internet/no-internet.module.ts":
/*!********************************************************!*\
  !*** ./src/app/info/no-internet/no-internet.module.ts ***!
  \********************************************************/
/*! exports provided: NoInternerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoInternerModule", function() { return NoInternerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _no_internet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./no-internet */ "./src/app/info/no-internet/no-internet.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");







var routes = [
    {
        path: '',
        component: _no_internet__WEBPACK_IMPORTED_MODULE_5__["NoInternetPage"],
    },
];
var NoInternerModule = (function () {
    function NoInternerModule() {
    }
    NoInternerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_no_internet__WEBPACK_IMPORTED_MODULE_5__["NoInternetPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ],
            entryComponents: [_no_internet__WEBPACK_IMPORTED_MODULE_5__["NoInternetPage"]],
            exports: [_no_internet__WEBPACK_IMPORTED_MODULE_5__["NoInternetPage"]],
        })
    ], NoInternerModule);
    return NoInternerModule;
}());



/***/ }),

/***/ "./src/app/info/no-internet/no-internet.ts":
/*!*************************************************!*\
  !*** ./src/app/info/no-internet/no-internet.ts ***!
  \*************************************************/
/*! exports provided: NoInternetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoInternetPage", function() { return NoInternetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "../../node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");







var NoInternetPage = (function () {
    function NoInternetPage(network, router, store) {
        this.network = network;
        this.router = router;
        this.store = store;
        this.noInternetLogo = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].NO_INTERNET_LOGO;
        this.networkWatch();
    }
    NoInternetPage.prototype.networkWatch = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.network.onConnect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise()];
                    case 1:
                        _a.sent();
                        this.store.clearNoInternet();
                        this.router.navigateByUrl('');
                        return [2];
                }
            });
        });
    };
    NoInternetPage.ctorParameters = function () { return [
        { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    NoInternetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'no-internet',
            template: "\n\t\t<div class=\"info-page\" scroll=\"false\">\n\t\t\t<div class=\"view-content\">\n\t\t\t\t<div class=\"logo app-hide-on-keyboard-open\">\n\t\t\t\t\t<img src=\"{{ noInternetLogo }}\" />\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"info-massage\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'NO_INTERNET_VIEW.NETWORK_WAS_DISCONNECTED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</h3>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ../information.scss */ "./src/app/info/information.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], NoInternetPage);
    return NoInternetPage;
}());



/***/ })

}]);
//# sourceMappingURL=no-internet-no-internet-module.js.map