(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/components/loading/loading.html":
/*!***********************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/components/loading/loading.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-loading-container\">\n\t<ion-spinner icon=\"android\"></ion-spinner>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/information/about/about.html":
/*!**************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/information/about/about.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bar-brand bar bar-header disable-user-behavior\">\n\t<ion-title id=\"aboutTitle\">\n\t\t{{ 'ABOUT_VIEW.TITLE' | translate }}\n\t</ion-title>\n\t<div class=\"buttons buttons-left header-item\">\n\t\t<span class=\"left-buttons\">\n\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t<ion-menu-toggle class=\"button-icon\">\n\t\t\t\t\t<ion-icon ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</ion-header>\n\n<ion-content scroll=\"true\" class=\"app-view has-header\">\n\t<div class=\"about-content\">\n\t\t<loading [hidden]=\"aboutHtml != null\"></loading>\n\t\t<div\n\t\t\t*ngIf=\"aboutHtml != null\"\n\t\t\t[innerHTML]=\"aboutHtml | safe: 'html'\"\n\t\t></div>\n\t\t<h5 style=\"padding-left: 10px; color: #888;\" *ngIf=\"aboutHtml != null\">\n\t\t\tApp Version: {{ appVersion }}\n\t\t</h5>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/components/components.module.ts":
/*!*********************************************!*\
  !*** ./src/components/components.module.ts ***!
  \*********************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading/loading */ "./src/components/loading/loading.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_loading_loading__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
            imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
            exports: [_loading_loading__WEBPACK_IMPORTED_MODULE_2__["LoadingComponent"]],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/components/loading/loading.ts":
/*!*******************************************!*\
  !*** ./src/components/loading/loading.ts ***!
  \*******************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = (function () {
    function LoadingComponent() {
        console.log('Hello LoadingComponent Component');
        this.text = 'Hello World';
    }
    LoadingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loading',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loading.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/components/loading/loading.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/pages/information/about/about.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/information/about/about.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/pages/information/about/about.ts");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/components.module */ "./src/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_2__["AboutPage"],
    },
];
var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about__WEBPACK_IMPORTED_MODULE_2__["AboutPage"]],
            imports: [
                _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__["PipesModule"],
                components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/pages/information/about/about.scss":
/*!************************************************!*\
  !*** ./src/pages/information/about/about.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".about-content {\n  padding: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvY2Fycmllci1tb2JpbGUtaW9uaWMvc3JjL3BhZ2VzL2luZm9ybWF0aW9uL2Fib3V0L2Fib3V0LnNjc3MiLCJzcmMvcGFnZXMvaW5mb3JtYXRpb24vYWJvdXQvYWJvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQVU7QUNDWCIsImZpbGUiOiJzcmMvcGFnZXMvaW5mb3JtYXRpb24vYWJvdXQvYWJvdXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jb250ZW50IHtcblx0cGFkZGluZzogMDtcbn1cbiIsIi5hYm91dC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/pages/information/about/about.ts":
/*!**********************************************!*\
  !*** ./src/pages/information/about/about.ts ***!
  \**********************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/user-router.service */ "../common-angular/src/routers/user-router.service.ts");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");





var AboutPage = (function () {
    function AboutPage(userRouter, store) {
        this.userRouter = userRouter;
        this.store = store;
        this._pageSubscriptions = [];
        this._getAboutHtml();
        this.appVersion = environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].APP_VERSION;
    }
    Object.defineProperty(AboutPage.prototype, "userId", {
        get: function () {
            return this.store.carrierId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AboutPage.prototype, "deviceId", {
        get: function () {
            return this.store.deviceId;
        },
        enumerable: true,
        configurable: true
    });
    AboutPage.prototype._getAboutHtml = function () {
        var _this = this;
        if (this.userId && this.deviceId) {
            var aboutSubscription = this.userRouter
                .getAboutUs(this.userId, this.deviceId)
                .subscribe(function (html) { return (_this.aboutHtml = html); });
            this._pageSubscriptions.push(aboutSubscription);
        }
    };
    AboutPage.prototype.ionViewWillLeave = function () {
        this._pageSubscriptions.forEach(function (s) { return s.unsubscribe; });
    };
    AboutPage.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__["UserRouter"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-about',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/information/about/about.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.scss */ "./src/pages/information/about/about.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_user_router_service__WEBPACK_IMPORTED_MODULE_2__["UserRouter"], services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map