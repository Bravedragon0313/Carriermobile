(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "../../node_modules/@ionic-native/geolocation/ngx/index.js":
/*!*************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/@ionic-native/geolocation/ngx/index.js ***!
  \*************************************************************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "../../node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");




var Geolocation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Geolocation, _super);
    function Geolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Geolocation.prototype.getCurrentPosition = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    /**
     * Watch the current device's position.  Clear the watch by unsubscribing from
     * Observable changes.
     *
     * ```typescript
     * const subscription = this.geolocation.watchPosition()
     *                               .filter((p) => p.coords !== undefined) //Filter Out Errors
     *                               .subscribe(position => {
     *   console.log(position.coords.longitude + ' ' + position.coords.latitude);
     * });
     *
     * // To stop notifications
     * subscription.unsubscribe();
     * ```
     *
     * @param {GeolocationOptions} options  The [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions).
     * @returns {Observable<Geoposition>} Returns an Observable that notifies with the [position](https://developer.mozilla.org/en-US/docs/Web/API/Position) of the device, or errors.
     */
    Geolocation.prototype.watchPosition = function (options) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var watchId = navigator.geolocation.watchPosition(observer.next.bind(observer), observer.next.bind(observer), options);
            return function () { return navigator.geolocation.clearWatch(watchId); };
        });
    };
    Geolocation.pluginName = "Geolocation";
    Geolocation.plugin = "cordova-plugin-geolocation";
    Geolocation.pluginRef = "navigator.geolocation";
    Geolocation.repo = "https://github.com/apache/cordova-plugin-geolocation";
    Geolocation.install = "ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION=\"To locate you\"";
    Geolocation.installVariables = ["GEOLOCATION_USAGE_DESCRIPTION"];
    Geolocation.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Geolocation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Geolocation);
    return Geolocation;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dlb2xvY2F0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBaUtELCtCQUFpQjs7OztJQVVoRCx3Q0FBa0IsYUFBQyxPQUE0QjtJQUkvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7SUFDSCxtQ0FBYSxHQUFiLFVBQWMsT0FBNEI7UUFDeEMsT0FBTyxJQUFJLFVBQVUsQ0FBYyxVQUFDLFFBQWE7WUFDL0MsSUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDNUIsT0FBTyxDQUNSLENBQUM7WUFDRixPQUFPLGNBQU0sT0FBQSxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBekMsQ0FBeUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7O0lBekNVLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFuS3hCO0VBbUtpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIENvb3JkaW5hdGVzIHtcbiAgLyoqXG4gICAqIGEgZG91YmxlIHJlcHJlc2VudGluZyB0aGUgcG9zaXRpb24ncyBsYXRpdHVkZSBpbiBkZWNpbWFsIGRlZ3JlZXMuXG4gICAqL1xuICBsYXRpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgbG9uZ2l0dWRlIGluIGRlY2ltYWwgZGVncmVlcy5cbiAgICovXG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIGFjY3VyYWN5IG9mIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHByb3BlcnRpZXMsXG4gICAqIGV4cHJlc3NlZCBpbiBtZXRlcnMuXG4gICAqL1xuICBhY2N1cmFjeTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHBvc2l0aW9uJ3MgYWx0aXR1ZGUgaW4gbWV0cmVzLCByZWxhdGl2ZSB0byBzZWFcbiAgICogbGV2ZWwuIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwgaWYgdGhlIGltcGxlbWVudGF0aW9uIGNhbm5vdCBwcm92aWRlIHRoZSBkYXRhLlxuICAgKi9cbiAgYWx0aXR1ZGU6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBhY2N1cmFjeSBvZiB0aGUgYWx0aXR1ZGUgZXhwcmVzc2VkIGluIG1ldGVycy5cbiAgICogVGhpcyB2YWx1ZSBjYW4gYmUgbnVsbC5cbiAgICovXG4gIGFsdGl0dWRlQWNjdXJhY3k6IG51bWJlcjtcblxuICAvKipcbiAgICogQSBkb3VibGUgcmVwcmVzZW50aW5nIHRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggdGhlIGRldmljZSBpcyB0cmF2ZWxpbmcuIFRoaXNcbiAgICogdmFsdWUsIHNwZWNpZmllZCBpbiBkZWdyZWVzLCBpbmRpY2F0ZXMgaG93IGZhciBvZmYgZnJvbSBoZWFkaW5nIHRydWUgbm9ydGhcbiAgICogdGhlIGRldmljZSBpcy4gMCBkZWdyZWVzIHJlcHJlc2VudHMgdHJ1ZSBub3J0aCwgYW5kIHRoZSBkaXJlY3Rpb24gaXNcbiAgICogZGV0ZXJtaW5lZCBjbG9ja3dpc2UgKHdoaWNoIG1lYW5zIHRoYXQgZWFzdCBpcyA5MCBkZWdyZWVzIGFuZCB3ZXN0IGlzIDI3MFxuICAgKiBkZWdyZWVzKS4gSWYgc3BlZWQgaXMgMCwgaGVhZGluZyBpcyBOYU4uIElmIHRoZSBkZXZpY2UgaXMgdW5hYmxlIHRvIHByb3ZpZGVcbiAgICogaGVhZGluZyBpbmZvcm1hdGlvbiwgdGhpcyB2YWx1ZSBpcyBudWxsLlxuICAgKi9cbiAgaGVhZGluZzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIGRvdWJsZSByZXByZXNlbnRpbmcgdGhlIHZlbG9jaXR5IG9mIHRoZSBkZXZpY2UgaW4gbWV0ZXJzIHBlciBzZWNvbmQuXG4gICAqIFRoaXMgdmFsdWUgY2FuIGJlIG51bGwuXG4gICAqL1xuICBzcGVlZDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb3Bvc2l0aW9uIHtcbiAgLyoqXG4gICAqIEEgQ29vcmRpbmF0ZXMgb2JqZWN0IGRlZmluaW5nIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAqL1xuICBjb29yZHM6IENvb3JkaW5hdGVzO1xuXG4gIC8qKlxuICAgKiBBIHRpbWVzdGFtcCByZXByZXNlbnRpbmcgdGhlIHRpbWUgYXQgd2hpY2ggdGhlIGxvY2F0aW9uIHdhcyByZXRyaWV2ZWQuXG4gICAqL1xuICB0aW1lc3RhbXA6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbkVycm9yIHtcbiAgLyoqXG4gICAqIEEgY29kZSB0aGF0IGluZGljYXRlcyB0aGUgZXJyb3IgdGhhdCBvY2N1cnJlZFxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBIG1lc3NhZ2UgdGhhdCBjYW4gZGVzY3JpYmUgdGhlIGVycm9yIHRoYXQgb2NjdXJyZWRcbiAgICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9sb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogSXMgYSBwb3NpdGl2ZSBsb25nIHZhbHVlIGluZGljYXRpbmcgdGhlIG1heGltdW0gYWdlIGluIG1pbGxpc2Vjb25kcyBvZiBhXG4gICAqIHBvc3NpYmxlIGNhY2hlZCBwb3NpdGlvbiB0aGF0IGlzIGFjY2VwdGFibGUgdG8gcmV0dXJuLiBJZiBzZXQgdG8gMCwgaXRcbiAgICogbWVhbnMgdGhhdCB0aGUgZGV2aWNlIGNhbm5vdCB1c2UgYSBjYWNoZWQgcG9zaXRpb24gYW5kIG11c3QgYXR0ZW1wdCB0b1xuICAgKiByZXRyaWV2ZSB0aGUgcmVhbCBjdXJyZW50IHBvc2l0aW9uLiBJZiBzZXQgdG8gSW5maW5pdHkgdGhlIGRldmljZSBtdXN0XG4gICAqIHJldHVybiBhIGNhY2hlZCBwb3NpdGlvbiByZWdhcmRsZXNzIG9mIGl0cyBhZ2UuIERlZmF1bHQ6IDAuXG4gICAqL1xuICBtYXhpbXVtQWdlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBJcyBhIHBvc2l0aXZlIGxvbmcgdmFsdWUgcmVwcmVzZW50aW5nIHRoZSBtYXhpbXVtIGxlbmd0aCBvZiB0aW1lXG4gICAqIChpbiBtaWxsaXNlY29uZHMpIHRoZSBkZXZpY2UgaXMgYWxsb3dlZCB0byB0YWtlIGluIG9yZGVyIHRvIHJldHVybiBhXG4gICAqIHBvc2l0aW9uLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBJbmZpbml0eSwgbWVhbmluZyB0aGF0IGdldEN1cnJlbnRQb3NpdGlvbigpXG4gICAqIHdvbid0IHJldHVybiB1bnRpbCB0aGUgcG9zaXRpb24gaXMgYXZhaWxhYmxlLlxuICAgKi9cbiAgdGltZW91dD86IG51bWJlcjtcblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBhcHBsaWNhdGlvbiB3b3VsZCBsaWtlIHRvIHJlY2VpdmUgdGhlIGJlc3QgcG9zc2libGUgcmVzdWx0cy5cbiAgICogSWYgdHJ1ZSBhbmQgaWYgdGhlIGRldmljZSBpcyBhYmxlIHRvIHByb3ZpZGUgYSBtb3JlIGFjY3VyYXRlIHBvc2l0aW9uLCBpdFxuICAgKiB3aWxsIGRvIHNvLiBOb3RlIHRoYXQgdGhpcyBjYW4gcmVzdWx0IGluIHNsb3dlciByZXNwb25zZSB0aW1lcyBvciBpbmNyZWFzZWRcbiAgICogcG93ZXIgY29uc3VtcHRpb24gKHdpdGggYSBHUFMgY2hpcCBvbiBhIG1vYmlsZSBkZXZpY2UgZm9yIGV4YW1wbGUpLiBPbiB0aGVcbiAgICogb3RoZXIgaGFuZCwgaWYgZmFsc2UsIHRoZSBkZXZpY2UgY2FuIHRha2UgdGhlIGxpYmVydHkgdG8gc2F2ZSByZXNvdXJjZXMgYnlcbiAgICogcmVzcG9uZGluZyBtb3JlIHF1aWNrbHkgYW5kL29yIHVzaW5nIGxlc3MgcG93ZXIuIERlZmF1bHQ6IGZhbHNlLlxuICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICovXG4gIGVuYWJsZUhpZ2hBY2N1cmFjeT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgR2VvbG9jYXRpb25cbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGRldmljZSdzIGxvY2F0aW9uLCBzdWNoIGFzIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUuIENvbW1vbiBzb3VyY2VzIG9mIGxvY2F0aW9uIGluZm9ybWF0aW9uIGluY2x1ZGUgR2xvYmFsIFBvc2l0aW9uaW5nIFN5c3RlbSAoR1BTKSBhbmQgbG9jYXRpb24gaW5mZXJyZWQgZnJvbSBuZXR3b3JrIHNpZ25hbHMgc3VjaCBhcyBJUCBhZGRyZXNzLCBSRklELCBXaUZpIGFuZCBCbHVldG9vdGggTUFDIGFkZHJlc3NlcywgYW5kIEdTTS9DRE1BIGNlbGwgSURzLlxuICpcbiAqICBUaGlzIEFQSSBpcyBiYXNlZCBvbiB0aGUgVzNDIEdlb2xvY2F0aW9uIEFQSSBTcGVjaWZpY2F0aW9uLCBhbmQgb25seSBleGVjdXRlcyBvbiBkZXZpY2VzIHRoYXQgZG9uJ3QgYWxyZWFkeSBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEZvciBpT1MgeW91IGhhdmUgdG8gYWRkIHRoaXMgY29uZmlndXJhdGlvbiB0byB5b3VyIGNvbmZpZ3VyYXRpb24ueG1sIGZpbGVcbiAqIGBgYHhtbFxuICogPGVkaXQtY29uZmlnIGZpbGU9XCIqLUluZm8ucGxpc3RcIiBtb2RlPVwibWVyZ2VcIiB0YXJnZXQ9XCJOU0xvY2F0aW9uV2hlbkluVXNlVXNhZ2VEZXNjcmlwdGlvblwiPlxuICogICAgPHN0cmluZz5XZSB1c2UgeW91ciBsb2NhdGlvbiBmb3IgZnVsbCBmdW5jdGlvbmFsaXR5IG9mIGNlcnRhaW4gYXBwIGZlYXR1cmVzLjwvc3RyaW5nPlxuICogPC9lZGl0LWNvbmZpZz5cbiAqIGBgYFxuICpcbiAqXG4gKiBAdXNhZ2VcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHZW9sb2NhdGlvbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZ2VvbG9jYXRpb24vbmd4JztcbiAqXG4gKiAuLi5cbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdlb2xvY2F0aW9uOiBHZW9sb2NhdGlvbikge31cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHJlc3ApID0+IHtcbiAqICAvLyByZXNwLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIHJlc3AuY29vcmRzLmxvbmdpdHVkZVxuICogfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKCdFcnJvciBnZXR0aW5nIGxvY2F0aW9uJywgZXJyb3IpO1xuICogfSk7XG4gKlxuICogbGV0IHdhdGNoID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKCk7XG4gKiB3YXRjaC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAqICAvLyBkYXRhIGNhbiBiZSBhIHNldCBvZiBjb29yZGluYXRlcywgb3IgYW4gZXJyb3IgKGlmIGFuIGVycm9yIG9jY3VycmVkKS5cbiAqICAvLyBkYXRhLmNvb3Jkcy5sYXRpdHVkZVxuICogIC8vIGRhdGEuY29vcmRzLmxvbmdpdHVkZVxuICogfSk7XG4gKiBgYGBcbiAqIEBpbnRlcmZhY2VzXG4gKiBDb29yZGluYXRlc1xuICogR2VvcG9zaXRpb25cbiAqIFBvc2l0aW9uRXJyb3JcbiAqIEdlb2xvY2F0aW9uT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dlb2xvY2F0aW9uJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ2VvbG9jYXRpb24nLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuZ2VvbG9jYXRpb24nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbicsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZW9sb2NhdGlvbiAtLXZhcmlhYmxlIEdFT0xPQ0FUSU9OX1VTQUdFX0RFU0NSSVBUSU9OPVwiVG8gbG9jYXRlIHlvdVwiJyxcbiAgaW5zdGFsbFZhcmlhYmxlczogWydHRU9MT0NBVElPTl9VU0FHRV9ERVNDUklQVElPTiddLFxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR2VvbG9jYXRpb24gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBHZXQgdGhlIGRldmljZSdzIGN1cnJlbnQgcG9zaXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgW3Bvc2l0aW9uXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUG9zaXRpb24pIG9mIHRoZSBkZXZpY2UsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdhdGNoIHRoZSBjdXJyZW50IGRldmljZSdzIHBvc2l0aW9uLiAgQ2xlYXIgdGhlIHdhdGNoIGJ5IHVuc3Vic2NyaWJpbmcgZnJvbVxuICAgKiBPYnNlcnZhYmxlIGNoYW5nZXMuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKClcbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigocCkgPT4gcC5jb29yZHMgIT09IHVuZGVmaW5lZCkgLy9GaWx0ZXIgT3V0IEVycm9yc1xuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHBvc2l0aW9uID0+IHtcbiAgICogICBjb25zb2xlLmxvZyhwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlICsgJyAnICsgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKTtcbiAgICogfSk7XG4gICAqXG4gICAqIC8vIFRvIHN0b3Agbm90aWZpY2F0aW9uc1xuICAgKiBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7R2VvbG9jYXRpb25PcHRpb25zfSBvcHRpb25zICBUaGUgW2dlb2xvY2F0aW9uIG9wdGlvbnNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Qb3NpdGlvbk9wdGlvbnMpLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxHZW9wb3NpdGlvbj59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIFtwb3NpdGlvbl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1Bvc2l0aW9uKSBvZiB0aGUgZGV2aWNlLCBvciBlcnJvcnMuXG4gICAqL1xuICB3YXRjaFBvc2l0aW9uKG9wdGlvbnM/OiBHZW9sb2NhdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPEdlb3Bvc2l0aW9uPigob2JzZXJ2ZXI6IGFueSkgPT4ge1xuICAgICAgY29uc3Qgd2F0Y2hJZCA9IG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuICgpID0+IG5hdmlnYXRvci5nZW9sb2NhdGlvbi5jbGVhcldhdGNoKHdhdGNoSWQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/main/main.html":
/*!************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/main/main.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"bar-brand bar bar-header disable-user-behavior\">\n\t<h1 class=\"title\" id=\"main-title\">\n\t\t<!--\n\t\t\t<img ng-if=\"sideMenuCtrl.titleImageSrc\" ng-src=\"{{sideMenuCtrl.titleImageSrc}}\" style=\"height: 15px;\"/>\n\t\t-->\n\t\t<span>{{ 'MAIN_VIEW.EVERCO_DRIVER' | translate }}</span>\n\t</h1>\n\t<div class=\"buttons buttons-left header-item\">\n\t\t<span class=\"left-buttons\">\n\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t<ion-menu-toggle class=\"button-icon\">\n\t\t\t\t\t<ion-icon ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n\t\t\t\t</ion-menu-toggle>\n\t\t\t</div>\n\t\t</span>\n\t</div>\n</ion-header>\n\n<ion-content class=\"carrier-view\" scroll=\"false\">\n\t<div *ngIf=\"selectedOrder?.isCancelled\" class=\"money-amount-container\">\n\t\t<div class=\"money-amount\">\n\t\t\t<!-- TODO add translate -->\n\t\t\tThe customer cancel order\n\t\t</div>\n\t</div>\n\t<ion-router-outlet></ion-router-outlet>\n</ion-content>\n");

/***/ }),

/***/ "./src/pages/main/delivery/delivery.module.guard.ts":
/*!**********************************************************!*\
  !*** ./src/pages/main/delivery/delivery.module.guard.ts ***!
  \**********************************************************/
/*! exports provided: DeliveryModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryModuleGuard", function() { return DeliveryModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");




var DeliveryModuleGuard = (function () {
    function DeliveryModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    DeliveryModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var orderId, driveToWarehouseFrom;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.orderId];
                    case 1:
                        orderId = _a.sent();
                        if (!orderId) {
                            this.router.navigateByUrl('/main/home');
                            return [2, false];
                        }
                        return [4, this.store.driveToWarehouseFrom];
                    case 2:
                        driveToWarehouseFrom = _a.sent();
                        if (driveToWarehouseFrom === 'delivery') {
                            this.router.navigateByUrl('/main/drive-to-warehouse');
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    DeliveryModuleGuard.ctorParameters = function () { return [
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DeliveryModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DeliveryModuleGuard);
    return DeliveryModuleGuard;
}());



/***/ }),

/***/ "./src/pages/main/drive-to-warehouse/drive-to-warehouse.module.guard.ts":
/*!******************************************************************************!*\
  !*** ./src/pages/main/drive-to-warehouse/drive-to-warehouse.module.guard.ts ***!
  \******************************************************************************/
/*! exports provided: DriveToWarehouseModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveToWarehouseModuleGuard", function() { return DriveToWarehouseModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");







var DriveToWarehouseModuleGuard = (function () {
    function DriveToWarehouseModuleGuard(store, router, orderRouter) {
        this.store = store;
        this.router = router;
        this.orderRouter = orderRouter;
    }
    DriveToWarehouseModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var orderId, order, driveToWarehouseFrom;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.orderId];
                    case 1:
                        orderId = _a.sent();
                        if (!orderId) return [3, 4];
                        return [4, this.orderRouter
                                .get(orderId, {
                                populateCarrier: false,
                                populateWarehouse: false,
                            })
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                                .toPromise()];
                    case 2:
                        order = _a.sent();
                        return [4, this.store.driveToWarehouseFrom];
                    case 3:
                        driveToWarehouseFrom = _a.sent();
                        if (driveToWarehouseFrom === 'delivery') {
                            return [2, true];
                        }
                        if (order.carrierStatus > _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__["default"].CarrierSelectedOrder) {
                            this.router.navigateByUrl('/main/starting-delivery');
                            return [2, false];
                        }
                        return [3, 5];
                    case 4:
                        this.router.navigateByUrl('/main/home');
                        return [2, false];
                    case 5: return [2, true];
                }
            });
        });
    };
    DriveToWarehouseModuleGuard.ctorParameters = function () { return [
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__["OrderRouter"] }
    ]; };
    DriveToWarehouseModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__["OrderRouter"]])
    ], DriveToWarehouseModuleGuard);
    return DriveToWarehouseModuleGuard;
}());



/***/ }),

/***/ "./src/pages/main/home/home.module.guard.ts":
/*!**************************************************!*\
  !*** ./src/pages/main/home/home.module.guard.ts ***!
  \**************************************************/
/*! exports provided: HomeModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModuleGuard", function() { return HomeModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");




var HomeModuleGuard = (function () {
    function HomeModuleGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    HomeModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var orderId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.orderId];
                    case 1:
                        orderId = _a.sent();
                        if (orderId) {
                            this.router.navigateByUrl('/main/drive-to-warehouse');
                            return [2, false];
                        }
                        return [2, true];
                }
            });
        });
    };
    HomeModuleGuard.ctorParameters = function () { return [
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomeModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeModuleGuard);
    return HomeModuleGuard;
}());



/***/ }),

/***/ "./src/pages/main/main.module.ts":
/*!***************************************!*\
  !*** ./src/pages/main/main.module.ts ***!
  \***************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/pages/main/main.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "../../node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/vibration/ngx */ "../../node_modules/@ionic-native/vibration/ngx/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/local-notifications/ngx */ "../../node_modules/@ionic-native/local-notifications/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/geo-location.service */ "./src/services/geo-location.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _home_home_module_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module.guard */ "./src/pages/main/home/home.module.guard.ts");
/* harmony import */ var _delivery_delivery_module_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delivery/delivery.module.guard */ "./src/pages/main/delivery/delivery.module.guard.ts");
/* harmony import */ var _starting_delivery_starting_delivery_module_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./starting-delivery/starting-delivery.module.guard */ "./src/pages/main/starting-delivery/starting-delivery.module.guard.ts");
/* harmony import */ var _drive_to_warehouse_drive_to_warehouse_module_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./drive-to-warehouse/drive-to-warehouse.module.guard */ "./src/pages/main/drive-to-warehouse/drive-to-warehouse.module.guard.ts");















var routes = [
    {
        path: '',
        component: _main__WEBPACK_IMPORTED_MODULE_2__["MainPage"],
        children: [
            {
                path: 'home',
                loadChildren: function () {
                    return Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/pages/main/home/home.module.ts")).then(function (m) { return m.HomePageModule; });
                },
                canLoad: [_home_home_module_guard__WEBPACK_IMPORTED_MODULE_11__["HomeModuleGuard"]],
            },
            {
                path: 'drive-to-warehouse',
                loadChildren: function () {
                    return Promise.all(/*! import() | drive-to-warehouse-drive-to-warehouse-module */[__webpack_require__.e("common"), __webpack_require__.e("drive-to-warehouse-drive-to-warehouse-module")]).then(__webpack_require__.bind(null, /*! ./drive-to-warehouse/drive-to-warehouse.module */ "./src/pages/main/drive-to-warehouse/drive-to-warehouse.module.ts")).then(function (m) { return m.DriveToWarehousePageModule; });
                },
                canLoad: [_drive_to_warehouse_drive_to_warehouse_module_guard__WEBPACK_IMPORTED_MODULE_14__["DriveToWarehouseModuleGuard"]],
            },
            {
                path: 'starting-delivery',
                loadChildren: function () {
                    return Promise.all(/*! import() | starting-delivery-starting-delivery-module */[__webpack_require__.e("common"), __webpack_require__.e("starting-delivery-starting-delivery-module")]).then(__webpack_require__.bind(null, /*! ./starting-delivery/starting-delivery.module */ "./src/pages/main/starting-delivery/starting-delivery.module.ts")).then(function (m) { return m.StartingDeliveryPageModule; });
                },
                canLoad: [_starting_delivery_starting_delivery_module_guard__WEBPACK_IMPORTED_MODULE_13__["StartingDeliveryModuleGuard"]],
            },
            {
                path: 'delivery',
                loadChildren: function () {
                    return Promise.all(/*! import() | delivery-delivery-module */[__webpack_require__.e("common"), __webpack_require__.e("delivery-delivery-module")]).then(__webpack_require__.bind(null, /*! ./delivery/delivery.module */ "./src/pages/main/delivery/delivery.module.ts")).then(function (m) { return m.DeliveryPageModule; });
                },
                canLoad: [_delivery_delivery_module_guard__WEBPACK_IMPORTED_MODULE_12__["DeliveryModuleGuard"]],
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            },
        ],
    },
];
var MainPageModule = (function () {
    function MainPageModule() {
    }
    MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_main__WEBPACK_IMPORTED_MODULE_2__["MainPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forChild(routes),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild(),
            ],
            entryComponents: [_main__WEBPACK_IMPORTED_MODULE_2__["MainPage"]],
            providers: [
                _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
                _ionic_native_vibration_ngx__WEBPACK_IMPORTED_MODULE_4__["Vibration"],
                _ionic_native_local_notifications_ngx__WEBPACK_IMPORTED_MODULE_6__["LocalNotifications"],
                _services_geo_location_service__WEBPACK_IMPORTED_MODULE_8__["GeoLocationService"],
                _home_home_module_guard__WEBPACK_IMPORTED_MODULE_11__["HomeModuleGuard"],
                _drive_to_warehouse_drive_to_warehouse_module_guard__WEBPACK_IMPORTED_MODULE_14__["DriveToWarehouseModuleGuard"],
                _starting_delivery_starting_delivery_module_guard__WEBPACK_IMPORTED_MODULE_13__["StartingDeliveryModuleGuard"],
                _delivery_delivery_module_guard__WEBPACK_IMPORTED_MODULE_12__["DeliveryModuleGuard"],
            ],
        })
    ], MainPageModule);
    return MainPageModule;
}());



/***/ }),

/***/ "./src/pages/main/main.scss":
/*!**********************************!*\
  !*** ./src/pages/main/main.scss ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-view {\n  padding-top: 42px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvY2Fycmllci1tb2JpbGUtaW9uaWMvc3JjL3BhZ2VzL21haW4vbWFpbi5zY3NzIiwic3JjL3BhZ2VzL21haW4vbWFpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQWlCO0FDQ2xCIiwiZmlsZSI6InNyYy9wYWdlcy9tYWluL21haW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJyaWVyLXZpZXcge1xuXHRwYWRkaW5nLXRvcDogNDJweDtcbn1cbiIsIi5jYXJyaWVyLXZpZXcge1xuICBwYWRkaW5nLXRvcDogNDJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/pages/main/main.ts":
/*!********************************!*\
  !*** ./src/pages/main/main.ts ***!
  \********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "../../node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _modules_server_common_enums_CarrierStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/enums/CarrierStatus */ "../common/src/enums/CarrierStatus.ts");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _services_geo_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/geo-location.service */ "./src/services/geo-location.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");












var MainPage = (function () {
    function MainPage(platform, carrierRouter, geolocation, geoLocationService, store) {
        this.platform = platform;
        this.carrierRouter = carrierRouter;
        this.geolocation = geolocation;
        this.geoLocationService = geoLocationService;
        this.store = store;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    }
    MainPage.prototype.ngOnInit = function () {
        var _this = this;
        this.platform.ready().then(function () {
            console.warn('MainPage Loaded');
            _this.watchLocation();
            _this.watchOrderStatus();
        });
    };
    MainPage.prototype.watchLocation = function () {
        var _this = this;
        setInterval(function () {
            if (_this.isOnline) {
                var carrier$_1 = _this.carrierRouter
                    .get(_this.store.carrierId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this.destroy$))
                    .subscribe(function (carrier) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                    var _this = this;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                        if (carrier.status === _modules_server_common_enums_CarrierStatus__WEBPACK_IMPORTED_MODULE_4__["default"].Online) {
                            this.geolocation
                                .getCurrentPosition()
                                .then(function (position) {
                                var carrierLong = carrier.geoLocation.coordinates.lng;
                                var carrierLat = carrier.geoLocation.coordinates.lat;
                                var currentLong = position.coords.longitude;
                                var currentLat = position.coords.latitude;
                                if (carrierLong !== currentLong ||
                                    carrierLat !== currentLat) {
                                    _this.carrierRouter
                                        .updateGeoLocation(carrier.id, new _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_6__["default"]({
                                        _createdAt: new Date().toString(),
                                        _updatedAt: new Date().toString(),
                                        _id: Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_5__["generateObjectIdString"])(),
                                        city: carrier.geoLocation
                                            .city,
                                        countryId: carrier.geoLocation
                                            .countryId,
                                        streetAddress: carrier.geoLocation
                                            .streetAddress,
                                        house: carrier.geoLocation
                                            .house,
                                        postcode: carrier
                                            .geoLocation.postcode
                                            ? carrier.geoLocation
                                                .postcode
                                            : '',
                                        loc: {
                                            type: 'Point',
                                            coordinates: [
                                                currentLong,
                                                currentLat,
                                            ],
                                        },
                                    }))
                                        .then(function () {
                                        console.log('User location updated.');
                                        carrier$_1.unsubscribe();
                                    });
                                }
                                else {
                                    carrier$_1.unsubscribe();
                                }
                            })
                                .catch(function (error) {
                                console.log('Error getting location', error);
                                carrier$_1.unsubscribe();
                            });
                        }
                        return [2];
                    });
                }); });
            }
        }, 3000);
    };
    MainPage.prototype.watchOrderStatus = function () {
        var _this = this;
        this.store.selectedOrder$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$))
            .subscribe(function (o) { return (_this.selectedOrder = o); });
    };
    MainPage.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    MainPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_2__["CarrierRouter"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
        { type: _services_geo_location_service__WEBPACK_IMPORTED_MODULE_8__["GeoLocationService"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_7__["Store"] }
    ]; };
    MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-main',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/main/main.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.scss */ "./src/pages/main/main.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_2__["CarrierRouter"],
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
            _services_geo_location_service__WEBPACK_IMPORTED_MODULE_8__["GeoLocationService"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], MainPage);
    return MainPage;
}());



/***/ }),

/***/ "./src/pages/main/starting-delivery/starting-delivery.module.guard.ts":
/*!****************************************************************************!*\
  !*** ./src/pages/main/starting-delivery/starting-delivery.module.guard.ts ***!
  \****************************************************************************/
/*! exports provided: StartingDeliveryModuleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartingDeliveryModuleGuard", function() { return StartingDeliveryModuleGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/order-router.service */ "../common-angular/src/routers/order-router.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/enums/OrderCarrierStatus */ "../common/src/enums/OrderCarrierStatus.ts");







var StartingDeliveryModuleGuard = (function () {
    function StartingDeliveryModuleGuard(store, router, orderRouter) {
        this.store = store;
        this.router = router;
        this.orderRouter = orderRouter;
    }
    StartingDeliveryModuleGuard.prototype.canLoad = function (route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var orderId, order;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.store.orderId];
                    case 1:
                        orderId = _a.sent();
                        if (!!orderId) return [3, 2];
                        this.router.navigateByUrl('/main/home');
                        return [2, false];
                    case 2: return [4, this.orderRouter
                            .get(orderId, {
                            populateCarrier: false,
                            populateWarehouse: false,
                        })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                            .toPromise()];
                    case 3:
                        order = _a.sent();
                        if (order.carrierStatus > _modules_server_common_enums_OrderCarrierStatus__WEBPACK_IMPORTED_MODULE_6__["default"].CarrierPickedUpOrder) {
                            this.router.navigateByUrl('/main/delivery');
                            return [2, false];
                        }
                        _a.label = 4;
                    case 4: return [2, true];
                }
            });
        });
    };
    StartingDeliveryModuleGuard.ctorParameters = function () { return [
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__["OrderRouter"] }
    ]; };
    StartingDeliveryModuleGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [services_store_service__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _modules_client_common_angular2_routers_order_router_service__WEBPACK_IMPORTED_MODULE_4__["OrderRouter"]])
    ], StartingDeliveryModuleGuard);
    return StartingDeliveryModuleGuard;
}());



/***/ }),

/***/ "./src/services/geo-location.service.ts":
/*!**********************************************!*\
  !*** ./src/services/geo-location.service.ts ***!
  \**********************************************/
/*! exports provided: GeoLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocationService", function() { return GeoLocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



var GeoLocationService = (function () {
    function GeoLocationService() {
    }
    GeoLocationService.prototype.defaultLocation = function () {
        var longitude = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]['DEFAULT_LONGITUDE'];
        var latitude = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"]['DEFAULT_LATITUDE'];
        if (latitude && longitude) {
            return {
                coords: {
                    longitude: longitude,
                    latitude: latitude,
                },
            };
        }
        return;
    };
    GeoLocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], GeoLocationService);
    return GeoLocationService;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module.js.map