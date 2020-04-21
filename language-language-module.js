(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["language-language-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/language/language.html":
/*!********************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/language/language.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bar-brand bar bar-header disable-user-behavior\">\n\t<ion-title id=\"languageTitle\">\n\t\t{{ 'LANGUAGE_VIEW.TITLE' | translate }}\n\t</ion-title>\n\t<div class=\"buttons buttons-left header-item\">\n\t\t<span class=\"left-buttons\">\n\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t<ion-menu-toggle class=\"button-icon\">\n\t\t\t\t\t<ion-icon ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</ion-header>\n\n<ion-content scroll=\"false\" padding class=\"language-content\">\n\t<div class=\"content\">\n\t\t<ion-radio-group [(ngModel)]=\"language\" (ionChange)=\"languageChange()\">\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'LANGUAGE_VIEW.ENGLISH' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"en-US\"></ion-radio>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label\n\t\t\t\t\t>{{ 'LANGUAGE_VIEW.BULGARIAN' | translate }}</ion-label\n\t\t\t\t>\n\t\t\t\t<ion-radio value=\"bg-BG\"></ion-radio>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'LANGUAGE_VIEW.HEBREW' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"he-IL\"></ion-radio>\n\t\t\t</ion-item>\n\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'LANGUAGE_VIEW.RUSSIAN' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"ru-RU\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'LANGUAGE_VIEW.SPANISH' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"es-ES\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'LANGUAGE_VIEW.ITALIAN' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"it-IT\"></ion-radio>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>{{ 'LANGUAGE_VIEW.FRENCH' | translate }}</ion-label>\n\t\t\t\t<ion-radio value=\"fr-FR\"></ion-radio>\n\t\t\t</ion-item>\n\t\t</ion-radio-group>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/language/language.module.ts":
/*!***********************************************!*\
  !*** ./src/pages/language/language.module.ts ***!
  \***********************************************/
/*! exports provided: LanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePageModule", function() { return LanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language */ "./src/pages/language/language.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var routes = [
    {
        path: '',
        component: _language__WEBPACK_IMPORTED_MODULE_2__["LanguagePage"],
    },
];
var LanguagePageModule = (function () {
    function LanguagePageModule() {
    }
    LanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_language__WEBPACK_IMPORTED_MODULE_2__["LanguagePage"]],
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
            ],
        })
    ], LanguagePageModule);
    return LanguagePageModule;
}());



/***/ }),

/***/ "./src/pages/language/language.scss":
/*!******************************************!*\
  !*** ./src/pages/language/language.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvbGFuZ3VhZ2UvbGFuZ3VhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/pages/language/language.ts":
/*!****************************************!*\
  !*** ./src/pages/language/language.ts ***!
  \****************************************/
/*! exports provided: LanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePage", function() { return LanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_client_common_angular2_routers_device_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/device-router.service */ "../common-angular/src/routers/device-router.service.ts");




var LanguagePage = (function () {
    function LanguagePage(_langTranslator, _deviceRouter) {
        this._langTranslator = _langTranslator;
        this._deviceRouter = _deviceRouter;
        this.language = localStorage.getItem('_language');
        console.warn('LanguagePage loaded');
    }
    Object.defineProperty(LanguagePage.prototype, "deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId');
        },
        enumerable: true,
        configurable: true
    });
    LanguagePage.prototype.languageChange = function () {
        localStorage.setItem('_language', this.language);
        var langAbbreviation = this.language.substr(0, 2);
        this._langTranslator.use(langAbbreviation);
        if (this.deviceId) {
            this._deviceRouter.updateLanguage(this.deviceId, this.language);
        }
    };
    LanguagePage.ctorParameters = function () { return [
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
        { type: _modules_client_common_angular2_routers_device_router_service__WEBPACK_IMPORTED_MODULE_3__["DeviceRouter"] }
    ]; };
    LanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-language',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./language.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/language/language.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./language.scss */ "./src/pages/language/language.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _modules_client_common_angular2_routers_device_router_service__WEBPACK_IMPORTED_MODULE_3__["DeviceRouter"]])
    ], LanguagePage);
    return LanguagePage;
}());



/***/ })

}]);
//# sourceMappingURL=language-language-module.js.map