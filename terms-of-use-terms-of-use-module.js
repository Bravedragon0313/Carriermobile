(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-of-use-terms-of-use-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/information/terms-of-use/terms-of-use.html":
/*!****************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/information/terms-of-use/terms-of-use.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bar-brand bar bar-header disable-user-behavior\">\n\t<ion-title id=\"aboutTitle\">\n\t\t{{ 'TERMS_OF_USE_VIEW.TITLE' | translate }}\n\t</ion-title>\n\t<div class=\"buttons buttons-left header-item\">\n\t\t<span class=\"left-buttons\">\n\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t<ion-menu-toggle class=\"button-icon\">\n\t\t\t\t\t<ion-icon ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</ion-header>\n\n<ion-content class=\"app-view p-0\">\n\t<div class=\"terms-of-use-content\">\n\t\t<div\n\t\t\t*ngIf=\"useTermsHtml !== null\"\n\t\t\t[innerHTML]=\"useTermsHtml | safe: 'html'\"\n\t\t></div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/information/terms-of-use/terms-of-use.module.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/information/terms-of-use/terms-of-use.module.ts ***!
  \*******************************************************************/
/*! exports provided: TermsOfUsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUsePageModule", function() { return TermsOfUsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _terms_of_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-of-use */ "./src/pages/information/terms-of-use/terms-of-use.ts");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");








var routes = [
    {
        path: '',
        component: _terms_of_use__WEBPACK_IMPORTED_MODULE_2__["TermsOfUsePage"],
    },
];
var TermsOfUsePageModule = (function () {
    function TermsOfUsePageModule() {
    }
    TermsOfUsePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_terms_of_use__WEBPACK_IMPORTED_MODULE_2__["TermsOfUsePage"]],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
            ],
        })
    ], TermsOfUsePageModule);
    return TermsOfUsePageModule;
}());



/***/ }),

/***/ "./src/pages/information/terms-of-use/terms-of-use.scss":
/*!**************************************************************!*\
  !*** ./src/pages/information/terms-of-use/terms-of-use.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".terms-of-use-content {\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvY2Fycmllci1tb2JpbGUtaW9uaWMvc3JjL3BhZ2VzL2luZm9ybWF0aW9uL3Rlcm1zLW9mLXVzZS90ZXJtcy1vZi11c2Uuc2NzcyIsInNyYy9wYWdlcy9pbmZvcm1hdGlvbi90ZXJtcy1vZi11c2UvdGVybXMtb2YtdXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxVQUFVO0FDQ1giLCJmaWxlIjoic3JjL3BhZ2VzL2luZm9ybWF0aW9uL3Rlcm1zLW9mLXVzZS90ZXJtcy1vZi11c2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXJtcy1vZi11c2UtY29udGVudCB7XG5cdHBhZGRpbmc6IDA7XG59XG4iLCIudGVybXMtb2YtdXNlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/information/terms-of-use/terms-of-use.ts":
/*!************************************************************!*\
  !*** ./src/pages/information/terms-of-use/terms-of-use.ts ***!
  \************************************************************/
/*! exports provided: TermsOfUsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfUsePage", function() { return TermsOfUsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/user-router.service */ "../common-angular/src/routers/user-router.service.ts");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");




var TermsOfUsePage = (function () {
    function TermsOfUsePage(userRouter, store) {
        this.userRouter = userRouter;
        this.store = store;
        this.useTermsHtml = '<h1>Loading...</h1>';
    }
    TermsOfUsePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userRouter.getTermsOfUse(this._userId, this._deviceId).subscribe(function (innerHtml) {
            _this.useTermsHtml = innerHtml;
        }, function (err) {
            console.log(err);
        });
    };
    Object.defineProperty(TermsOfUsePage.prototype, "_userId", {
        get: function () {
            return localStorage.getItem('_userId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TermsOfUsePage.prototype, "_deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId');
        },
        enumerable: true,
        configurable: true
    });
    TermsOfUsePage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__["UserRouter"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    TermsOfUsePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-terms-of-use',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./terms-of-use.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/information/terms-of-use/terms-of-use.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./terms-of-use.scss */ "./src/pages/information/terms-of-use/terms-of-use.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__["UserRouter"], services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TermsOfUsePage);
    return TermsOfUsePage;
}());



/***/ })

}]);
//# sourceMappingURL=terms-of-use-terms-of-use-module.js.map