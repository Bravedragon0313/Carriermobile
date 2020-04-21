(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-information-module"],{

/***/ "./src/pages/information/information.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/information/information.module.ts ***!
  \*****************************************************/
/*! exports provided: InformationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationModule", function() { return InformationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'about',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "./src/pages/information/about/about.module.ts")).then(function (m) { return m.AboutPageModule; });
        },
    },
    {
        path: 'terms-of-use',
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | terms-of-use-terms-of-use-module */ "terms-of-use-terms-of-use-module").then(__webpack_require__.bind(null, /*! ./terms-of-use/terms-of-use.module */ "./src/pages/information/terms-of-use/terms-of-use.module.ts")).then(function (m) { return m.TermsOfUsePageModule; });
        },
    },
];
var InformationModule = (function () {
    function InformationModule() {
    }
    InformationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InformationModule);
    return InformationModule;
}());



/***/ })

}]);
//# sourceMappingURL=information-information-module.js.map