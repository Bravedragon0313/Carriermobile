(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/pages/auth.guard.ts":
/*!*********************************!*\
  !*** ./src/pages/auth.guard.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");




var AuthGuard = (function () {
    function AuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (!isLogged) {
                            this.router.navigateByUrl('/login');
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    AuthGuard.ctorParameters = function () { return [
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/pages/information/information.module.guard.ts":
/*!***********************************************************!*\
  !*** ./src/pages/information/information.module.guard.ts ***!
  \***********************************************************/
/*! exports provided: InformationModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationModuleGuard", function() { return InformationModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");




var InformationModuleGuard = (function () {
    function InformationModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    InformationModuleGuard.prototype.canLoad = function (route) {
        if (!this.store.deviceId) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    InformationModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    InformationModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InformationModuleGuard);
    return InformationModuleGuard;
}());



/***/ }),

/***/ "./src/pages/login/login.module.guard.ts":
/*!***********************************************!*\
  !*** ./src/pages/login/login.module.guard.ts ***!
  \***********************************************/
/*! exports provided: LoginModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModuleGuard", function() { return LoginModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");




var LoginModuleGuard = (function () {
    function LoginModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    LoginModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var isLogged;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.isLogged()];
                    case 1:
                        isLogged = _a.sent();
                        if (isLogged) {
                            this.router.navigateByUrl('main');
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    LoginModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginModuleGuard);
    return LoginModuleGuard;
}());



/***/ }),

/***/ "./src/pages/main/main.module.guard.ts":
/*!*********************************************!*\
  !*** ./src/pages/main/main.module.guard.ts ***!
  \*********************************************/
/*! exports provided: MainModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModuleGuard", function() { return MainModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");




var MainModuleGuard = (function () {
    function MainModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    MainModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2, true];
            });
        });
    };
    MainModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    MainModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainModuleGuard);
    return MainModuleGuard;
}());



/***/ }),

/***/ "./src/pages/pages.module.ts":
/*!***********************************!*\
  !*** ./src/pages/pages.module.ts ***!
  \***********************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_module_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.module.guard */ "./src/pages/main/main.module.guard.ts");
/* harmony import */ var _login_login_module_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.module.guard */ "./src/pages/login/login.module.guard.ts");
/* harmony import */ var _product_product_module_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/product.module.guard */ "./src/pages/product/product.module.guard.ts");
/* harmony import */ var _information_information_module_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information/information.module.guard */ "./src/pages/information/information.module.guard.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/pages/auth.guard.ts");








var routes = [
    {
        path: 'login',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/pages/login/login.module.ts")).then(function (m) { return m.LoginPageModule; });
        },
        canLoad: [_login_login_module_guard__WEBPACK_IMPORTED_MODULE_4__["LoginModuleGuard"]],
    },
    {
        path: 'main',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | main-main-module */ "main-main-module").then(__webpack_require__.bind(null, /*! ./main/main.module */ "./src/pages/main/main.module.ts")).then(function (m) { return m.MainPageModule; });
        },
        canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _main_main_module_guard__WEBPACK_IMPORTED_MODULE_3__["MainModuleGuard"]],
    },
    {
        path: 'product',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | product-product-module */ "product-product-module").then(__webpack_require__.bind(null, /*! ./product/product.module */ "./src/pages/product/product.module.ts")).then(function (m) { return m.ProductModule; });
        },
        canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _product_product_module_guard__WEBPACK_IMPORTED_MODULE_5__["ProductModuleGuard"]],
    },
    {
        path: 'deliveries',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | deliveries-deliveries-module */ "deliveries-deliveries-module").then(__webpack_require__.bind(null, /*! ./deliveries/deliveries.module */ "./src/pages/deliveries/deliveries.module.ts")).then(function (m) { return m.DeliveriesPageModule; });
        },
        canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: 'language',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | language-language-module */ "language-language-module").then(__webpack_require__.bind(null, /*! ./language/language.module */ "./src/pages/language/language.module.ts")).then(function (m) { return m.LanguagePageModule; });
        },
        canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: 'information',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | information-information-module */ "information-information-module").then(__webpack_require__.bind(null, /*! ./information/information.module */ "./src/pages/information/information.module.ts")).then(function (m) { return m.InformationModule; });
        },
        canLoad: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _information_information_module_guard__WEBPACK_IMPORTED_MODULE_6__["InformationModuleGuard"]],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
];
var PagesModule = (function () {
    function PagesModule() {
    }
    PagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            providers: [
                _main_main_module_guard__WEBPACK_IMPORTED_MODULE_3__["MainModuleGuard"],
                _login_login_module_guard__WEBPACK_IMPORTED_MODULE_4__["LoginModuleGuard"],
                _product_product_module_guard__WEBPACK_IMPORTED_MODULE_5__["ProductModuleGuard"],
                _information_information_module_guard__WEBPACK_IMPORTED_MODULE_6__["InformationModuleGuard"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/pages/product/product.module.guard.ts":
/*!***************************************************!*\
  !*** ./src/pages/product/product.module.guard.ts ***!
  \***************************************************/
/*! exports provided: ProductModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModuleGuard", function() { return ProductModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");




var ProductModuleGuard = (function () {
    function ProductModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    ProductModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (!this.store.orderId) {
                    this.router.navigateByUrl('/main/home');
                    return [2, false];
                }
                return [2, true];
            });
        });
    };
    ProductModuleGuard.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductModuleGuard);
    return ProductModuleGuard;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map