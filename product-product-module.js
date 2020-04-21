(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"],{

/***/ "./src/pages/product/product.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/product/product.module.ts ***!
  \*********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: 'get',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | get-product-get-product-module */ "get-product-get-product-module").then(__webpack_require__.bind(null, /*! ./get-product/get-product.module */ "./src/pages/product/get-product/get-product.module.ts")).then(function (m) { return m.GetProductPageModule; });
        },
    },
    {
        path: 'return',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | return-product-return-product-module */ "return-product-return-product-module").then(__webpack_require__.bind(null, /*! ./return-product/return-product.module */ "./src/pages/product/return-product/return-product.module.ts")).then(function (m) { return m.ReturnProductPageModule; });
        },
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'get',
    },
];
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"].forChild(), _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=product-product-module.js.map