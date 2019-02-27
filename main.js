(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2 */ "../../node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/database */ "../../node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _field_field_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./field/field.component */ "./src/app/field/field.component.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _multigame_multigame_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./multigame/multigame.component */ "./src/app/multigame/multigame.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _user_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user.guard */ "./src/app/user.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"],
                _field_field_component__WEBPACK_IMPORTED_MODULE_11__["FieldComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_13__["GameComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _multigame_multigame_component__WEBPACK_IMPORTED_MODULE_15__["MultigameComponent"],
                _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_16__["SideBarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _room_room_component__WEBPACK_IMPORTED_MODULE_20__["RoomComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]),
                angularfire2__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase, 'my-pro-baba'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabaseModule"]
            ],
            providers: [
                _services_db_service__WEBPACK_IMPORTED_MODULE_9__["DbService"],
                _services_game_service__WEBPACK_IMPORTED_MODULE_12__["GameService"],
                _user_guard__WEBPACK_IMPORTED_MODULE_17__["UserGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _multigame_multigame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multigame/multigame.component */ "./src/app/multigame/multigame.component.ts");
/* harmony import */ var _user_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.guard */ "./src/app/user.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _room_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room/room.component */ "./src/app/room/room.component.ts");







var appRoutes = [
    {
        path: '',
        redirectTo: 'menu',
        pathMatch: 'full'
    },
    {
        path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__["MenuComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'game/:id',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"],
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_4__["UserGuard"]]
    },
    {
        path: 'multigame',
        component: _multigame_multigame_component__WEBPACK_IMPORTED_MODULE_3__["MultigameComponent"],
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_4__["UserGuard"]]
    },
    {
        path: 'multigame/room/:id',
        component: _room_room_component__WEBPACK_IMPORTED_MODULE_6__["RoomComponent"],
    },
    {
        path: '**',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]
    }
];


/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    color: brown;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7O0NBRWhCIiwiZmlsZSI6InNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgICBjb2xvcjogYnJvd247XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  error\n</h1>\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/field/field.component.css":
/*!*******************************************!*\
  !*** ./src/app/field/field.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    padding: 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n\n.player-0-panel,\n.player-1-panel {\n    width: 40%;\n    float: right;\n    height: 600px;\n    padding: 20px;\n}\n\n.player-name {\n    font-size: 30px;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-weight: 100;\n    margin-top: 20px;\n    margin-bottom: 150px;\n}\n\n.player-hand {\n    display: inline-block;    \n}\n\nimg {\n\twidth: 90px;\n    height: 130px;\n    margin: -15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmllbGQvZmllbGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7Q0FDQyxZQUFZO0lBQ1QsY0FBYztJQUNkLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9maWVsZC9maWVsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBsYXllci0wLXBhbmVsLFxuLnBsYXllci0xLXBhbmVsIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5wbGF5ZXItbmFtZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4ucGxheWVyLWhhbmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgICAgXG59XG5cbmltZyB7XG5cdHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgbWFyZ2luOiAtMTVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/field/field.component.html":
/*!********************************************!*\
  !*** ./src/app/field/field.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"player-1-panel\">\n\t<div class=\"player-name\">\n\t\tDealer\n\t</div>\n\t<div *ngIf=\"room && room.players[1]\">\n\t<div  *ngFor=\"let card of room?.players[1].playerHand\"\n\t\t\tclass=\"player-hand\">\n\t\t<img *ngIf=\"!room.result.isShownCards\" [src]=\"card.cardBack\"/>\n\t\t<img *ngIf=\"room.result.isShownCards\" [src]=\"card.imageSource\"/>\n\t</div>\n</div>\n</div>\n\n<div class=\"player-0-panel \">\n\t<div class=\"player-name\">\n\t\tYou\n\t</div>\n\t<div *ngIf=\"room && room.players[0]\">\n\t<div *ngFor=\"let card of room?.players[0].playerHand\" \n\t\t\tclass=\"player-hand\">\n\t\t<img [src]=\"card.imageSource\"/>\n\t</div> \n\t</div>   \n</div>"

/***/ }),

/***/ "./src/app/field/field.component.ts":
/*!******************************************!*\
  !*** ./src/app/field/field.component.ts ***!
  \******************************************/
/*! exports provided: FieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldComponent", function() { return FieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldComponent = /** @class */ (function () {
    function FieldComponent() {
        this.onStandClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FieldComponent.prototype, "playerHand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FieldComponent.prototype, "room", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FieldComponent.prototype, "onStandClicked", void 0);
    FieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'field',
            template: __webpack_require__(/*! ./field.component.html */ "./src/app/field/field.component.html"),
            styles: [__webpack_require__(/*! ./field.component.css */ "./src/app/field/field.component.css")],
            host: { class: 'game-field' },
        })
    ], FieldComponent);
    return FieldComponent;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4));\n    background-size: cover;\n    background-position: center;\n    font-family: 'Casino';\n    font-weight: 300;\n    position: relative;\n    height: 100vh;\n    color: rgb(23, 189, 31);\n}\n\n.wrapper {\n    width: 1000px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background-color: #fff;\n    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnRkFBZ0Y7SUFDaEYsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QyxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDYyLCAyMCwgMjAsIDAuNCksIHJnYmEoNjIsIDIwLCAyMCwgMC40KSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDYXNpbm8nO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6IHJnYigyMywgMTg5LCAzMSk7XG59XG5cbi53cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<a routerLink=\"../../menu\" \n\t\trouterLinkActive=\"active\">\n\t\tBack to menu\n\t</a>\n</div>\n\n<div class=\"wrapper clearfix\">\n\t<field \n\t\t[playerHand]=\"playerHand\"\n\t\t[result]=\"room?.result\"\n\t\t[room]=\"room\">\n\t</field>\n    \n\t<side-bar [result]=\"result\"\n\t\t\t\t[room]=\"room\"\n\t\t\t\t(newGameClicked)=\"newGame()\"\n\t\t\t\t(onHitClicked)=\"onHit()\"\n\t\t\t\t(onStandClicked)=\"onStand()\">\n\t</side-bar>\t\t\n</div>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameComponent = /** @class */ (function () {
    function GameComponent(_dbService, _gameService, _route, _userService) {
        this._dbService = _dbService;
        this._gameService = _gameService;
        this._route = _route;
        this._userService = _userService;
        this.room = {
            players: [],
            id: null,
            deck: [],
            result: null
        };
        this.result = {
            isShownButtons: false,
            winner: '',
            score: [],
            isShownCards: false
        };
        this.dealer = {
            id: 0,
            userName: 'Dealer',
            playerHand: [],
            userScore: 0
        };
        this._WIN_SCORE = 21;
        this._ENOUGH_SCORE = 15;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])('id'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            return _this._dbService.getRoom(id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$))
            .subscribe(function (room) {
            console.log(room);
            _this.room = room;
            if (!room.players) {
                room.players = [];
                room.players.push(_this._userService.getAllUser(), _this.dealer);
                ;
            }
            room.players.forEach(function (player) {
                if (!player.playerHand) {
                    player.playerHand = [];
                    player.userScore = 0;
                }
            });
            if (!room.result.score) {
                room.result.score = [];
            }
        });
    };
    GameComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    GameComponent.prototype.newGame = function () {
        var _this = this;
        this.room.result.isShownButtons = true;
        this.room.result.winner = '';
        this.room.result.score = [{ userName: 'You', userScore: 0 }, { userName: 'Dealer', userScore: 0 }];
        this.room.result.isShownCards = false;
        this.room.players.forEach(function (player) {
            var _a;
            if (player.playerHand) {
                _this.room.deck = (_a = _this.room.deck).concat.apply(_a, player.playerHand);
                player.playerHand = [];
                player.userScore = 0;
            }
        });
        this.room.players.forEach(function (player) {
            player.playerHand.push(_this.room.deck.pop());
            player.userScore += player.playerHand[player.playerHand.length - 1].value;
        });
        this.room.result.isShownButtons = true;
        this._dbService.addRoom(this.room);
    };
    GameComponent.prototype.onHit = function () {
        while (this.room.players[0].userScore <= this._WIN_SCORE) {
            this.room.players[0].playerHand.push(this.room.deck.pop());
            this.room.players[0].userScore += this.room.players[0].playerHand[this.room.players[0].playerHand.length - 1].value;
            if (this.room.players[0].userScore >= this._WIN_SCORE) {
                this.room.result.winner = this._gameService.getWinner(this.room.players[0].userScore, this.room.players[1].userScore);
                this.room.result.isShownButtons = false;
                this.room.result.isShownCards = true;
            }
            if (this.room.players[1].userScore <= this._ENOUGH_SCORE) {
                this.room.players[1].playerHand.push(this.room.deck.pop());
                this.room.players[1].userScore += this.room.players[1].playerHand[this.room.players[1].playerHand.length - 1].value;
            }
            return;
        }
        this._dbService.addRoom(this.room);
    };
    GameComponent.prototype.onStand = function () {
        this.room.result.isShownButtons = false;
        this.room.result.isShownCards = true;
        while (this.room.players[1].userScore < this._ENOUGH_SCORE) {
            this.room.players[1].playerHand.push(this.room.deck.pop());
            this.room.players[1].userScore += this.room.players[1].playerHand[this.room.players[1].playerHand.length - 1].value;
        }
        this.room.result.winner = this._gameService.getWinner(this.room.players[0].userScore, this.room.players[1].userScore);
        this._dbService.addRoom(this.room);
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    display: flex;\n    flex-direction: column;\n    padding-top: 24px;\n}\n  \nlabel {\n    display: block;\n    width: 6em;\n    margin: .5em 0;\n    color: #607D8B;\n    font-weight: bold;\n}\n  \ninput {\n    height: 2em;\n    font-size: 1em;\n    padding-left: .4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG59XG4gIFxubGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA2ZW07XG4gICAgbWFyZ2luOiAuNWVtIDA7XG4gICAgY29sb3I6ICM2MDdEOEI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4gIFxuaW5wdXQge1xuICAgIGhlaWdodDogMmVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmctbGVmdDogLjRlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n<label>\n  Name:\n  <input type=\"text\" [(ngModel)]=\"_user.userName\">\n</label>\n\n<p>\n  Value: {{ _user.userName }}\n</p>\n\n<p>\n  <button (click)=\"setUser()\">Submit</button>\n</p>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this._user = {
            userName: '',
            id: 0,
            playerHand: [],
            userScore: 0,
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.setUser = function () {
        this._user.id = Number(new Date());
        this._user.userName;
        this._userService.setUser(this._user.userName);
        this._router.navigate(['/menu']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n    margin-bottom: 30px;\n}\n\n.active {\n    color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5hY3RpdmUge1xuICAgIGNvbG9yOiByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"Greeting\">\n\t<h1>\n\t\tHello, dear player {{ this.user?.userName }}!\n\t</h1>\n\t<h2>\n\t\tWelcome to Black Jack game!\n\t</h2>\n<br>\n</div>\n<div class=\"container\">\n\t<button (click)=\"addRoom()\">\n\t\tSingle game\n\t</button>\n\n\t<button (click)=\"enterMultiGame()\">\n\t\tMultiplayer game\n\t</button>\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable */





var MenuComponent = /** @class */ (function () {
    function MenuComponent(_dbService, _gameService, _userService, _router) {
        this._dbService = _dbService;
        this._gameService = _gameService;
        this._userService = _userService;
        this._router = _router;
        this.user = {
            userName: String(this._userService.getUser())
        };
        this._ROOM = {
            id: 0,
            deck: this._gameService.getDeck(),
            players: [],
            result: {
                isShownButtons: false,
                winner: '',
                score: [],
                isShownCards: false
            },
        };
    }
    MenuComponent.prototype.addRoom = function () {
        this._ROOM.deck = this._gameService.shuffleDeck(this._ROOM.deck);
        this._ROOM.id = Number(new Date());
        this._dbService.addRoom(this._ROOM);
        this._router.navigate(["/game/" + this._ROOM.id]);
    };
    MenuComponent.prototype.enterMultiGame = function () {
        this._router.navigate(["/multigame"]);
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_1__["GameService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/multigame/multigame.component.css":
/*!***************************************************!*\
  !*** ./src/app/multigame/multigame.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    padding: 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n\nimg {\n    width: 250px;\n    height: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVsdGlnYW1lL211bHRpZ2FtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL211bHRpZ2FtZS9tdWx0aWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/multigame/multigame.component.html":
/*!****************************************************!*\
  !*** ./src/app/multigame/multigame.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  multigame works!\n</p>\n<div>\n\t<a routerLink=\"../menu\" \n\t\trouterLinkActive=\"active\">\n\t\tBack to menu\n\t</a>\n\t<br><br>\n\t\n\t\n\t<label>\n\t\tNumber of players:\n\t\t<input type=\"number\" [(ngModel)]=\"this.room.maxPlayers\">\n\t\t<button (click)=\"addMultiRoom()\">Add New Room</button>\n\t</label>\n\t<br>\n\t\t<div>\n\t\t<div *ngFor=\"let room of rooms\">\n\t\t\t<br>\n\t\t\t<span>\n\t\t\t<img (click)=\"enterRoom(room)\"\n\t\t\tsrc=\"./assets/blackjack-table.jpg\" \n\t\t   />\n\t\t\t</span>\n\t\t\t<div>\n\t\t\t<p>Room is open for {{ room.maxPlayers }} players</p>\n\t\t\t<button (click)=\"deleteRoom(room.id)\">Delete Room</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/multigame/multigame.component.ts":
/*!**************************************************!*\
  !*** ./src/app/multigame/multigame.component.ts ***!
  \**************************************************/
/*! exports provided: MultigameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultigameComponent", function() { return MultigameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MultigameComponent = /** @class */ (function () {
    function MultigameComponent(_dbService, _gameService, _route, _router, _userService) {
        this._dbService = _dbService;
        this._gameService = _gameService;
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this.room = {
            id: 0,
            deck: this._gameService.getDeck(),
            players: [],
            maxPlayers: 0,
            result: {
                isShownButtons: false,
                winner: '',
                score: [],
                isShownCards: false
            },
        };
        this.rooms = [];
        //private _destroy$ = new Subject();
        this.roomId = null;
    }
    MultigameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dbService.getRooms().subscribe(function (rooms) {
            _this.rooms = rooms;
            _this.rooms.forEach(function (room) {
                if (room.players) {
                    room.players = Object.values(room.players);
                }
            });
        });
    };
    MultigameComponent.prototype.addMultiRoom = function () {
        debugger;
        this.room.maxPlayers;
        this.room.deck = this._gameService.shuffleDeck(this.room.deck);
        this.room.id = Number(new Date());
        this._dbService.addMultiRoom(this.room);
    };
    MultigameComponent.prototype.enterRoom = function (room) {
        debugger;
        room.players = [];
        room.players.push(this._userService.getAllUser());
        this._dbService.enterMultiRoom(room);
        this._router.navigate(["/multigame/room/" + room.id]);
    };
    MultigameComponent.prototype.deleteRoom = function (id) {
        this._dbService.deleteRoom(id);
    };
    MultigameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multigame',
            template: __webpack_require__(/*! ./multigame.component.html */ "./src/app/multigame/multigame.component.html"),
            styles: [__webpack_require__(/*! ./multigame.component.css */ "./src/app/multigame/multigame.component.css")]
        }),
        __metadata("design:paramtypes", [_services_db_service__WEBPACK_IMPORTED_MODULE_1__["DbService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], MultigameComponent);
    return MultigameComponent;
}());



/***/ }),

/***/ "./src/app/room/room.component.css":
/*!*****************************************!*\
  !*** ./src/app/room/room.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4));\n    background-size: cover;\n    background-position: center;\n    font-family: 'Casino';\n    font-weight: 300;\n    position: relative;\n    height: 100vh;\n    color: rgb(23, 189, 31);\n}\n\n.wrapper {\n    width: 1000px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    background-color: #fff;\n    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);\n    overflow: hidden;\n}\n\n* {\n    padding: 0;\n    box-sizing: border-box;\n    text-align: center;\n}\n\n.player-0-panel {\n    width: 40%;\n    float: right;\n    height: 600px;\n    padding: 20px;\n}\n\n.player-name {\n    font-size: 30px;\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    font-weight: 100;\n    margin-top: 20px;\n    margin-bottom: 150px;\n}\n\n.player-hand {\n    display: inline-block;    \n}\n\nimg {\n\twidth: 90px;\n    height: 130px;\n    margin: -15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vbS9yb29tLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnRkFBZ0Y7SUFDaEYsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsVUFBVTtJQUNWLHlDQUFpQztZQUFqQyxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QyxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7Q0FDeEI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7Q0FDQyxZQUFZO0lBQ1QsY0FBYztJQUNkLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9yb29tL3Jvb20uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDYyLCAyMCwgMjAsIDAuNCksIHJnYmEoNjIsIDIwLCAyMCwgMC40KSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdDYXNpbm8nO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6IHJnYigyMywgMTg5LCAzMSk7XG59XG5cbi53cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4qIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGxheWVyLTAtcGFuZWwge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnBsYXllci1uYW1lIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5wbGF5ZXItaGFuZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICBcbn1cblxuaW1nIHtcblx0d2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBtYXJnaW46IC0xNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/room/room.component.html":
/*!******************************************!*\
  !*** ./src/app/room/room.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  room works!\n</p>\n<div>\n    <a routerLink=\"/multigame\" \n      routerLinkActive=\"active\">\n      Back to multigame\n    </a>\n</div>\n<button (click)=\"addBot()\">AddBot</button>\n  \n<div class=\"wrapper clearfix\">\n  <div *ngIf=\"room && room?.players\">\n    <div *ngFor=\"let player of players\">\n      <div class=\"player-0-panel \">\n          <div class=\"player-name\">\n            {{ user.userName }}\n          </div>\n          \n          <div *ngFor=\"let card of playerHand\" \n              class=\"player-hand\">\n            <img [src]=\"card.imageSource\"/>\n          </div> \n        </div>   \n  </div>\t\n</div>\n"

/***/ }),

/***/ "./src/app/room/room.component.ts":
/*!****************************************!*\
  !*** ./src/app/room/room.component.ts ***!
  \****************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RoomComponent = /** @class */ (function () {
    function RoomComponent(_dbService, _gameService, _route, _router) {
        this._dbService = _dbService;
        this._gameService = _gameService;
        this._route = _route;
        this._router = _router;
        // = {
        //   players: [],
        //   maxPlayers: null,
        //   id: null,
        //   deck: [],
        //   result: null  
        // }
        this.result = {
            isShownButtons: false,
            winner: '',
            score: [],
            isShownCards: false
        };
        this.bot = {
            id: 0,
            userName: '',
            playerHand: [],
            userScore: 0
        };
        this._WIN_SCORE = 21;
        this._ENOUGH_SCORE = 15;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    RoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["pluck"])('id'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (id) {
            return _this._dbService.getMultiRoom(id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this._destroy$))
            .subscribe(function (room) {
            console.log(room);
            debugger;
            _this.room = room;
            if (!_this.room) {
                _this.room.players = [];
            }
            //this.players = Object.values(this.room.players);
        });
    };
    RoomComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._dbService.updateRoom();
        //this.myId = Object.values(this.room.players).findIndex((player)=> player.userName === localStorage.getItem('userNameBJ')); 
        this._dbService.removeUser(this.myId, this.room.id);
        this._destroy$.complete();
        this._router.navigate(["/multigame"]);
    };
    RoomComponent.prototype.addBot = function () {
        this.bot.id = Number(new Date());
        this.bot.userName = 'Bottik';
        //this.room.players.push(this.bot);
        this._dbService.getMultiRoom(this.room.players.push(this.bot));
        this._dbService.updateRoom();
        return this.room;
    };
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.css */ "./src/app/room/room.component.css")]
        }),
        __metadata("design:paramtypes", [_services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"],
            _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/services/db.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/db.service.ts ***!
  \****************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "../../node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DbService = /** @class */ (function () {
    function DbService(_db) {
        this._db = _db;
    }
    DbService.prototype.addRoom = function (room) {
        var _a;
        this._db.object('/').set((_a = {}, _a[room.id] = room, _a));
    };
    DbService.prototype.getRoom = function (id) {
        return this._db.object("/" + id).valueChanges();
    };
    DbService.prototype.closedRoom = function (id) {
        return this._db.object("/" + id).valueChanges();
    };
    DbService.prototype.getRooms = function () {
        return this._db.list("/rooms").valueChanges();
    };
    DbService.prototype.addMultiRoom = function (room) {
        this._db.object("rooms/" + room.id).update(room);
    };
    DbService.prototype.enterMultiRoom = function (room) {
        this._db.object("rooms/" + room.id).update(room);
    };
    DbService.prototype.getMultiRoom = function (id) {
        return this._db.object("rooms/" + id).valueChanges();
    };
    DbService.prototype.deleteRoom = function (id) {
        return this._db.list("rooms/" + id).remove();
    };
    DbService.prototype.updateRoom = function () {
        return this._db.list("rooms/").stateChanges();
    };
    DbService.prototype.addUser = function (user) {
        var _a;
        this._db.object("/players/").set((_a = {}, _a[user.id] = user, _a));
    };
    DbService.prototype.getUser = function (user) {
        return this._db.object("players/" + user.id).valueChanges();
    };
    DbService.prototype.removeUser = function (userIndex, roomId) {
        this._db.list("rooms/" + roomId + "/players").remove(userIndex);
        return this._db.list;
    };
    DbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], DbService);
    return DbService;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GameService = /** @class */ (function () {
    function GameService() {
        this._SWAP_TIMES = 36;
        this._WIN_SCORE = 21;
    }
    GameService.prototype.getWinner = function (humanScore, computerScore) {
        if (computerScore === humanScore) {
            return 'Nobody wins. Equal scores';
        }
        if (humanScore === this._WIN_SCORE) {
            return 'Winner: You';
        }
        if (computerScore === this._WIN_SCORE || humanScore > this._WIN_SCORE) {
            return 'Winner: Dealer';
        }
        if (computerScore > this._WIN_SCORE && humanScore < computerScore) {
            return 'Winner: You';
        }
        if (humanScore < this._WIN_SCORE && computerScore > humanScore) {
            return 'Winner: Dealer';
        }
        if (humanScore < this._WIN_SCORE && computerScore < humanScore) {
            return 'Winner: You';
        }
        return;
    };
    GameService.prototype.shuffleDeck = function (deck) {
        for (var indexSwap = 0; indexSwap < this._SWAP_TIMES; indexSwap++) {
            var firstIndex = Math.floor(Math.random() * (deck.length));
            var secondIndex = Math.floor(Math.random() * (deck.length));
            if (firstIndex === secondIndex) {
                indexSwap--;
                continue;
            }
            var temp = deck[firstIndex];
            deck[firstIndex] = deck[secondIndex];
            deck[secondIndex] = temp;
        }
        return deck;
    };
    GameService.prototype.getDeck = function () {
        var _this = this;
        var deck = [];
        var cardNameCollection = ['Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace'];
        var suitsNameCollection = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        var valueCollection = [6, 7, 8, 9, 10, 2, 3, 4, 11];
        suitsNameCollection.forEach(function (cardSuit) {
            cardNameCollection.forEach(function (cardName, index) {
                deck.push(_this._getCard(cardName, cardSuit, valueCollection[index]));
            });
        });
        return deck;
    };
    GameService.prototype._getCard = function (name, suit, value) {
        return {
            name: name,
            suit: suit,
            value: value,
            imageSource: "./assets/cards/" + suit + "/" + name + ".jpg",
            cardBack: './assets/cards/card.jpg'
        };
    };
    GameService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
        this._user = {
            userName: '',
            id: 0,
            playerHand: [],
            userScore: 0,
        };
    }
    UserService.prototype.getUser = function () {
        var userName = localStorage.getItem('userNameBJ');
        return userName;
    };
    UserService.prototype.setUser = function (userName) {
        localStorage.setItem('userNameBJ', userName);
    };
    UserService.prototype.getAllUser = function () {
        this._user.id = Number(new Date());
        this._user.userName = this.getUser();
        this._user.playerHand = [];
        this._user.userScore = 0;
        return this._user;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/side-bar/side-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n    position: absolute;\n    left: 30px;\n    top: 200px;\n    font-family: 'Casino';\n    text-align: center;\n    font-size: 20px;\n    padding: 10px;\n    width: 160px;\n    line-height: 2;\n}\n\n* {\n    margin: 0px;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbutton {\n    position: absolute;\n    width: 200px;\n    left: 20px;\n    color: rgb(80, 100, 64);\n    background: none;\n    border: none;\n    font-family: 'Casino';\n    font-size: 20px;\n    text-transform: uppercase;\n    cursor: pointer;\n    font-weight: 300;\n    transition: background-color 0.3s, color 0.3s;\n}\n\nimg {\n\twidth: 90px;\n    height: 130px;\n}\n\n.btn-hit { top: 403px; }\n\n.btn-stand { top: 467px; }\n\n.btn-new { top: 45px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiw4Q0FBOEM7Q0FDakQ7O0FBRUQ7Q0FDQyxZQUFZO0lBQ1QsY0FBYztDQUNqQjs7QUFFRCxXQUFXLFdBQVcsRUFBRTs7QUFFeEIsYUFBYSxXQUFXLEVBQUU7O0FBRTFCLFdBQVcsVUFBVSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzBweDtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ2FzaW5vJztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4qIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoODAsIDEwMCwgNjQpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiAnQ2FzaW5vJztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG59XG5cbmltZyB7XG5cdHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG59XG5cbi5idG4taGl0IHsgdG9wOiA0MDNweDsgfVxuXG4uYnRuLXN0YW5kIHsgdG9wOiA0NjdweDsgfVxuXG4uYnRuLW5ldyB7IHRvcDogNDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn-new\" \n        (click)=\"newGameClicked.emit()\">\n  New game\n</button>\n\n<button *ngIf=\"room?.result?.isShownButtons\"\n\t\tclass=\"btn-hit\"\n\t\t(click)=\"onHitClicked.emit()\">\n\tHit\n</button>\n\n<button *ngIf=\"room?.result?.isShownButtons\" \n\t\tclass=\"btn-stand\" \n\t\t(click)=\"onStandClicked.emit()\">\n\tStand\n</button> \n\n<div class=\"message\"> \n    <p>Human score: {{ room?.players[0]?.userScore }}</p>\n    <p *ngIf=\"room?.result?.isShownCards\"> Dealer score: {{ room?.players[1]?.userScore }}</p>\n    <p>{{ room.result?.winner }}</p>\n</div>\n\n"

/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
        this.newGameClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHitClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onStandClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SideBarComponent.prototype, "result", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SideBarComponent.prototype, "room", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SideBarComponent.prototype, "newGameClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SideBarComponent.prototype, "onHitClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SideBarComponent.prototype, "onStandClicked", void 0);
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/side-bar/side-bar.component.css")],
            host: { class: 'side-bar' },
        })
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/user.guard.ts":
/*!*******************************!*\
  !*** ./src/app/user.guard.ts ***!
  \*******************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuard = /** @class */ (function () {
    function UserGuard(_userServive, _router) {
        this._userServive = _userServive;
        this._router = _router;
    }
    UserGuard.prototype.canActivate = function (route, state) {
        if (this._userServive.getUser()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    UserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/* tslint:disable */
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCnbC_wlNtaQfVNGMGd1FUvJ2a2w3rWu38",
        authDomain: "my-pro-baba.firebaseapp.com",
        databaseURL: "https://my-pro-baba.firebaseio.com",
        projectId: "my-pro-baba",
        storageBucket: "my-pro-baba.appspot.com",
        messagingSenderId: "678614463019"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* tslint:disable */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/OlgaProjects/BJ-Ang/gh-pages/BJ/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map