webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.BASE_URL = "http://comp4976zenithsociety2.azurewebsites.net";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.tokenHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
    }
    AuthService.prototype.login = function (data) {
        return this.http
            .post(this.BASE_URL + "/connect/token", data, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.register = function (data) {
        return this.http
            .post(this.BASE_URL + "/connect/register", data, { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //get all roles
    AuthService.prototype.getRoles = function (username) {
        return this.http.get((this.BASE_URL + "/api/usersapi/") + username, { headers: this.tokenHeaders })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventEditComponent = (function () {
    function EventEditComponent(eventService, route, router, datePipe, location) {
        this.eventService = eventService;
        this.route = route;
        this.router = router;
        this.datePipe = datePipe;
        this.location = location;
    }
    EventEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check if user is admin role
        if (localStorage.getItem('role') != "Admin") {
            this.router.navigate(['./home']);
        }
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        if (localStorage.getItem("adminRole") == "true") {
            this.adminRole = true;
        }
        else {
            this.adminRole = false;
        }
        this.role = localStorage.getItem("role");
        this.username = localStorage.getItem("username");
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
            _this.eventService.getEventById(_this.id)
                .then(function (result) { return _this.event = result; });
        });
    };
    EventEditComponent.prototype.getId = function () {
        return this.event.activityId;
    };
    EventEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    EventEditComponent.prototype.save = function () {
        var _this = this;
        this.event.activityId = this.activityId;
        if (this.event.isActive == true) {
            this.event.isActive = true;
        }
        else {
            this.event.isActive = false;
        }
        var date1 = this.datePipe.transform(this.event.eventFrom, 'dd/MM/yyyy');
        var date2 = this.datePipe.transform(this.event.eventTo, 'dd/MM/yyyy');
        if (date1 != date2) {
            this.setError("Start time and end time must be on the same day.");
            return;
        }
        if (this.event.eventFrom == undefined ||
            this.event.eventTo == undefined) {
            this.setError("Enter a start time and end time.");
            return;
        }
        if (this.event.eventFrom > this.event.eventTo || this.event.eventFrom == this.event.eventTo) {
            this.setError("Start time must be before end time.");
            return;
        }
        this.eventService.update(this.event)
            .then(function () { return _this.goBack(); });
    };
    EventEditComponent.prototype.setError = function (errorMsg) {
        this.error = errorMsg;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__event__["a" /* Event */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__event__["a" /* Event */]) === 'function' && _a) || Object)
    ], EventEditComponent.prototype, "event", void 0);
    EventEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-edit',
            template: __webpack_require__(786),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* DatePipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* DatePipe */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === 'function' && _f) || Object])
    ], EventEditComponent);
    return EventEditComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=event-edit.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityAddComponent = (function () {
    function ActivityAddComponent(activityService, route, location, router, datePipe) {
        this.activityService = activityService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.datePipe = datePipe;
        this.newActivity = new __WEBPACK_IMPORTED_MODULE_4__activity__["a" /* Activity */]();
    }
    ActivityAddComponent.prototype.ngOnInit = function () {
        //check if user is admin role
        if (localStorage.getItem('role') != "Admin") {
            this.router.navigate(['./home']);
        }
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        if (localStorage.getItem("adminRole") == "true") {
            this.adminRole = true;
        }
        else {
            this.adminRole = false;
        }
        this.username = localStorage.getItem("username");
    };
    ActivityAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    ActivityAddComponent.prototype.add = function (newActivity) {
        var _this = this;
        newActivity.creationDate = new Date();
        if (newActivity.description == undefined) {
            this.setError("Description cannot be empty.");
            return;
        }
        newActivity.description = newActivity.description.trim();
        if (!newActivity) {
            return;
        }
        this.activityService.create(newActivity)
            .then(function (newActivity) {
            _this.selected = null;
            _this.router.navigate(['./activities']);
        });
    };
    ActivityAddComponent.prototype.setError = function (errorMsg) {
        this.error = errorMsg;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__activity__["a" /* Activity */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__activity__["a" /* Activity */]) === 'function' && _a) || Object)
    ], ActivityAddComponent.prototype, "activity", void 0);
    ActivityAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activity-add',
            template: __webpack_require__(779),
            styles: [__webpack_require__(742)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__activity_service__["a" /* ActivityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__activity_service__["a" /* ActivityService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* DatePipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* DatePipe */]) === 'function' && _f) || Object])
    ], ActivityAddComponent);
    return ActivityAddComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=activity-add.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivityEditComponent = (function () {
    function ActivityEditComponent(activityService, route, router, location) {
        this.activityService = activityService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    ActivityEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check if user is admin role
        if (localStorage.getItem('role') != "Admin") {
            this.router.navigate(['./home']);
        }
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.activityService.getActivityById(id)
                .then(function (result) { return _this.activity = result; });
        });
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        if (localStorage.getItem("adminRole") == "true") {
            this.adminRole = true;
        }
        else {
            this.adminRole = false;
        }
        this.role = localStorage.getItem("role");
        this.username = localStorage.getItem("username");
    };
    ActivityEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    ActivityEditComponent.prototype.save = function () {
        var _this = this;
        console.log(this.activity.description);
        if (this.activity.description.length == 0) {
            this.setError("Description cannot be empty.");
            return;
        }
        this.activityService.update(this.activity)
            .then(function () { return _this.goBack(); });
    };
    ActivityEditComponent.prototype.setError = function (errorMsg) {
        this.error = errorMsg;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__activity__["a" /* Activity */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__activity__["a" /* Activity */]) === 'function' && _a) || Object)
    ], ActivityEditComponent.prototype, "activity", void 0);
    ActivityEditComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activity-edit',
            template: __webpack_require__(780),
            styles: [__webpack_require__(743)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__activity_service__["a" /* ActivityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__activity_service__["a" /* ActivityService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === 'function' && _e) || Object])
    ], ActivityEditComponent);
    return ActivityEditComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=activity-edit.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
var Activity = (function () {
    function Activity() {
    }
    return Activity;
}());
//# sourceMappingURL=activity.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivityComponent = (function () {
    function ActivityComponent(activityService, router) {
        this.activityService = activityService;
        this.router = router;
    }
    ActivityComponent.prototype.ngOnInit = function () {
        //check if user is admin role
        if (localStorage.getItem('role') != "Admin") {
            this.router.navigate(['./home']);
        }
        this.getActivities();
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        if (localStorage.getItem("adminRole") == "true") {
            this.adminRole = true;
        }
        else {
            this.adminRole = false;
        }
        this.username = localStorage.getItem("username");
    };
    ActivityComponent.prototype.onSelect = function (activity) {
        this.selected = activity;
    };
    ActivityComponent.prototype.getActivities = function () {
        var _this = this;
        this.activityService.getActivities()
            .then(function (activities) { return _this.activities = activities; });
    };
    ActivityComponent.prototype.edit = function (activity) {
        this.router.navigate(['/activity/edit/', activity.activityId]);
    };
    ActivityComponent.prototype.add = function () {
        this.router.navigate(['/activity/add']);
    };
    ActivityComponent.prototype.delete = function (delActivity) {
        var _this = this;
        console.log('deleting activity');
        this.activityService
            .delete(delActivity.activityId)
            .then(function () {
            _this.activities = _this.activities.filter(function (c) { return c !== delActivity; });
            if (_this.selected === delActivity) {
                _this.selected = null;
            }
        });
    };
    ActivityComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'activity-component',
            template: __webpack_require__(781),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__activity_service__["a" /* ActivityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__activity_service__["a" /* ActivityService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ActivityComponent);
    return ActivityComponent;
    var _a, _b;
}());
//# sourceMappingURL=activity.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activity_service__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Zenith Society';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        this.role = localStorage.getItem("role");
        this.username = localStorage.getItem("username");
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(782),
            styles: [__webpack_require__(745)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__activity_service__["a" /* ActivityService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(eventService, authService, datePipe) {
        this.eventService = eventService;
        this.authService = authService;
        this.datePipe = datePipe;
        this.count = 0;
        this.message = false;
        this.eventsKeys = [];
        this.eventsDictionary = {};
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.username = localStorage.getItem("username");
        localStorage.setItem("adminRole", "false");
        localStorage.setItem("memberRole", "false");
        this.getRoles();
        this.getEvents();
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
    };
    DashboardComponent.prototype.getRoles = function () {
        var _this = this;
        this.authService.getRoles(this.username)
            .then(function (roles) {
            _this.checkRoles(roles);
        });
    };
    DashboardComponent.prototype.checkRoles = function (roles) {
        for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
            var role = roles_1[_i];
            if (role == "Admin") {
                console.log("admin");
                localStorage.setItem("adminRole", "true");
                localStorage.setItem("role", "Admin");
                this.adminRole = true;
            }
            else if (role == "Member") {
                console.log("member");
                localStorage.setItem("memberRole", "true");
                this.memberRole = true;
            }
        }
    };
    DashboardComponent.prototype.getWeek = function (num) {
        this.count += num;
        if (this.count == -1) {
            this.getPrevWeek();
        }
        else if (this.count == 1) {
            this.getNextWeek();
        }
        else if (this.count == 0) {
            console.log("getting this week");
            this.getEvents();
        }
        else {
            if (this.count == 2) {
                this.count -= 1;
            }
            else {
                this.count += 1;
            }
            return;
        }
    };
    DashboardComponent.prototype.getNextWeek = function () {
        var _this = this;
        console.log("Get next week");
        this.eventsKeys = [];
        this.eventsDictionary = {};
        this.eventService.getNextWeek()
            .then(function (events) { return _this.reformatData(events); });
    };
    DashboardComponent.prototype.getPrevWeek = function () {
        var _this = this;
        console.log("Get previous week");
        this.eventsKeys = [];
        this.eventsDictionary = {};
        this.eventService.getPrevWeek()
            .then(function (events) { return _this.reformatData(events); });
    };
    DashboardComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventsKeys = [];
        this.eventsDictionary = {};
        this.eventService.getEvents()
            .then(function (results) {
            _this.events = results;
            _this.reformatData(results);
        });
    };
    DashboardComponent.prototype.reformatData = function (data) {
        if (data.length == 0) {
            this.message = true;
        }
        else {
            this.message = false;
        }
        var _loop_1 = function(e) {
            var fromDate = new Date(e.eventFrom);
            var toDate = new Date(e.eventTo);
            var dayKey = this_1.datePipe.transform(fromDate, 'fullDate');
            if (!this_1.eventsKeys.find(function (s) { return s == dayKey; }))
                this_1.eventsKeys.push(dayKey);
            (this_1.eventsDictionary[dayKey] = this_1.eventsDictionary[dayKey] ? this_1.eventsDictionary[dayKey] : []).push(e);
        };
        var this_1 = this;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var e = data_1[_i];
            _loop_1(e);
        }
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(783),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* DatePipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* DatePipe */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event__ = __webpack_require__(349);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventAddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventAddComponent = (function () {
    function EventAddComponent(eventService, route, location, router, datePipe, activityService) {
        this.eventService = eventService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.datePipe = datePipe;
        this.activityService = activityService;
        this.newEvent = new __WEBPACK_IMPORTED_MODULE_5__event__["a" /* Event */]();
    }
    EventAddComponent.prototype.ngOnInit = function () {
        //check if user is admin role
        if (localStorage.getItem('role') != "Admin") {
            this.router.navigate(['./home']);
        }
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        if (localStorage.getItem("adminRole") == "true") {
            this.adminRole = true;
        }
        else {
            this.adminRole = false;
        }
        this.username = localStorage.getItem("username");
        this.getActivities();
        this.currentSelected = 1;
    };
    EventAddComponent.prototype.getActivities = function () {
        var _this = this;
        this.activityService.getActivities()
            .then(function (activities) { return _this.activities = activities; });
    };
    EventAddComponent.prototype.onChange = function (value) {
        console.log(value);
        this.activityId = value;
    };
    EventAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    EventAddComponent.prototype.add = function (newEvent) {
        var _this = this;
        newEvent.enteredBy = localStorage.getItem("username");
        newEvent.activityId = this.currentSelected;
        newEvent.creationDate = new Date();
        newEvent.eventFrom = this.newEvent.eventFrom;
        newEvent.eventTo = this.newEvent.eventTo;
        var date1 = this.datePipe.transform(newEvent.eventFrom, 'dd/MM/yyyy');
        var date2 = this.datePipe.transform(newEvent.eventTo, 'dd/MM/yyyy');
        console.log(newEvent.enteredBy);
        console.log(newEvent.activityId);
        console.log(newEvent.creationDate);
        console.log(newEvent.eventFrom);
        console.log(newEvent.eventTo);
        if (date1 != date2) {
            this.setError("Start time and end time must be on the same day.");
            return;
        }
        if (newEvent.eventFrom == undefined ||
            newEvent.eventTo == undefined) {
            this.setError("Enter a start time and end time.");
            return;
        }
        if (newEvent.eventFrom > newEvent.eventTo || newEvent.eventFrom == newEvent.eventTo) {
            this.setError("Start time must be before end time.");
            return;
        }
        if (newEvent.isActive == true) {
            newEvent.isActive = true;
        }
        else {
            newEvent.isActive = false;
        }
        if (!newEvent) {
            return;
        }
        this.eventService.create(newEvent)
            .then(function (newEvent) {
            _this.router.navigate(['./events']);
        });
    };
    EventAddComponent.prototype.setError = function (errorMsg) {
        this.error = errorMsg;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__event__["a" /* Event */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__event__["a" /* Event */]) === 'function' && _a) || Object)
    ], EventAddComponent.prototype, "event", void 0);
    EventAddComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-add',
            template: __webpack_require__(784),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__event_service__["a" /* EventService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* DatePipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* DatePipe */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__activity_service__["a" /* ActivityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__activity_service__["a" /* ActivityService */]) === 'function' && _g) || Object])
    ], EventAddComponent);
    return EventAddComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=event-add.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
var Event = (function () {
    function Event() {
    }
    return Event;
}());
//# sourceMappingURL=event.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__(70);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventComponent = (function () {
    function EventComponent(eventService, router) {
        this.eventService = eventService;
        this.router = router;
    }
    EventComponent.prototype.ngOnInit = function () {
        //check if user is admin role
        if (localStorage.getItem('role') != "Admin") {
            this.router.navigate(['./home']);
        }
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        if (localStorage.getItem("adminRole") == "true") {
            this.adminRole = true;
        }
        else {
            this.adminRole = false;
        }
        this.role = localStorage.getItem("role");
        this.username = localStorage.getItem("username");
        this.getEvents();
    };
    EventComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getAllEvents()
            .then(function (events) { return _this.events = events; });
    };
    EventComponent.prototype.edit = function (event) {
        this.router.navigate(['/event/edit/', event.eventId]);
    };
    EventComponent.prototype.add = function () {
        this.router.navigate(['/event/add']);
    };
    EventComponent.prototype.delete = function (delEvent) {
        var _this = this;
        console.log('deleting event');
        this.eventService
            .delete(delEvent.eventId)
            .then(function () {
            _this.events = _this.events.filter(function (c) { return c !== delEvent; });
        });
    };
    EventComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'event-component',
            template: __webpack_require__(787),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], EventComponent);
    return EventComponent;
    var _a, _b;
}());
//# sourceMappingURL=event.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__token__ = __webpack_require__(684);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, eventServe, router) {
        this.authService = authService;
        this.eventServe = eventServe;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        if (this.loggedIn != false) {
            this.router.navigate(['./home']);
        }
    };
    LoginComponent.prototype.login = function (login) {
        var _this = this;
        var data = "grant_type=password&username=" + login.username + "&password=" + login.password;
        this.authService.login(data)
            .then(function (result) {
            _this.getToken(result, login.username);
            _this.router.navigate(['./home']);
        })
            .catch(function (error) { return _this.setError(error); });
    };
    LoginComponent.prototype.setError = function (error) {
        var errorMsg = error.json();
        this.error = errorMsg;
    };
    LoginComponent.prototype.getToken = function (result, username) {
        this.result = result;
        var token = this.result.token_type + " " + this.result.access_token;
        localStorage.setItem('token', token);
        localStorage.setItem('loggedIn', "true");
        localStorage.setItem('refresh', "true");
        localStorage.setItem('username', username);
        console.log(localStorage.getItem('token'));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__token__["a" /* Token */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__token__["a" /* Token */]) === 'function' && _a) || Object)
    ], LoginComponent.prototype, "result", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(788),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__event_service__["a" /* EventService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(router, app) {
        this.router = router;
        this.app = app;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        localStorage.setItem('loggedIn', "false");
        this.router.navigate(['./home']);
    };
    LogoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(789),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]) === 'function' && _b) || Object])
    ], LogoutComponent);
    return LogoutComponent;
    var _a, _b;
}());
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.register = new __WEBPACK_IMPORTED_MODULE_1__register__["a" /* Register */]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("loggedIn") == "true") {
            this.loggedIn = true;
        }
        else {
            this.loggedIn = false;
        }
        if (this.loggedIn != false) {
            this.router.navigate(['./home']);
        }
    };
    RegisterComponent.prototype.registerUser = function (register) {
        var _this = this;
        var data = "username=" + register.username +
            "&firstname=" + register.firstname +
            "&lastname=" + register.lastname +
            "&email=" + register.email +
            "&password=" + register.password +
            "&confirmPassword=" + register.confirmPassword;
        var loginData = "grant_type=password&username=" + register.username + "&password=" + register.password;
        this.authService.register(data)
            .then(function (response) {
            _this.setMessage();
            _this.login(loginData, register.username);
        })
            .catch(function (error) { return _this.setError(error); });
    };
    RegisterComponent.prototype.setMessage = function () {
        this.message = "You successfully registered!";
    };
    RegisterComponent.prototype.setError = function (error) {
        var errorMsg = error.json();
        this.error = errorMsg;
    };
    RegisterComponent.prototype.login = function (loginData, username) {
        var _this = this;
        this.authService.login(loginData)
            .then(function (result) {
            _this.getToken(result, username);
            _this.getRole();
            _this.router.navigate(['./home']);
        })
            .catch(function (error) { return _this.setError(error); });
    };
    RegisterComponent.prototype.getToken = function (result, username) {
        var token = result.token_type + " " + result.access_token;
        localStorage.setItem('token', token);
        localStorage.setItem('loggedIn', "true");
        localStorage.setItem('refresh', "true");
        localStorage.setItem('username', username);
        console.log(localStorage.getItem('token'));
    };
    RegisterComponent.prototype.getRole = function () {
        localStorage.setItem('role', "Admin");
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(790),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 562;


/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(685);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_event_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_edit_event_edit_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_add_event_add_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__activity_activity_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activity_edit_activity_edit_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activity_add_activity_add_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__register_register_component__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'event/edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__event_edit_event_edit_component__["a" /* EventEditComponent */] },
    { path: 'activity/edit/:id', component: __WEBPACK_IMPORTED_MODULE_7__activity_edit_activity_edit_component__["a" /* ActivityEditComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_3__event_event_component__["a" /* EventComponent */] },
    { path: 'activities', component: __WEBPACK_IMPORTED_MODULE_6__activity_activity_component__["a" /* ActivityComponent */] },
    { path: 'activity/add', component: __WEBPACK_IMPORTED_MODULE_8__activity_add_activity_add_component__["a" /* ActivityAddComponent */] },
    { path: 'event/add', component: __WEBPACK_IMPORTED_MODULE_5__event_add_event_add_component__["a" /* EventAddComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_10__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__register_register_component__["a" /* RegisterComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event_edit_event_edit_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event_event_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__activity_activity_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__activity_edit_activity_edit_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__activity_add_activity_add_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__event_dropdown_event_dropdown_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__event_add_event_add_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_service__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__logout_logout_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_bootstrap__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__register_register_component__ = __webpack_require__(353);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_5__event_edit_event_edit_component__["a" /* EventEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__event_add_event_add_component__["a" /* EventAddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__activity_activity_component__["a" /* ActivityComponent */],
                __WEBPACK_IMPORTED_MODULE_10__activity_edit_activity_edit_component__["a" /* ActivityEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__activity_add_activity_add_component__["a" /* ActivityAddComponent */],
                __WEBPACK_IMPORTED_MODULE_14__event_dropdown_event_dropdown_component__["a" /* EventDropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__logout_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__register_register_component__["a" /* RegisterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_19_ng2_bootstrap__["a" /* AlertModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__angular_common__["a" /* DatePipe */], __WEBPACK_IMPORTED_MODULE_17__auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_edit_event_edit_component__ = __webpack_require__(210);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDropdownComponent = (function () {
    function EventDropdownComponent(activityService, eventEditComponent) {
        this.activityService = activityService;
        this.eventEditComponent = eventEditComponent;
    }
    EventDropdownComponent.prototype.ngOnInit = function () {
        this.getActivities();
        this.getCurSelActivity();
    };
    EventDropdownComponent.prototype.getActivities = function () {
        var _this = this;
        this.activityService.getActivities()
            .then(function (activities) { return _this.activities = activities; });
    };
    EventDropdownComponent.prototype.getCurSelActivity = function () {
        this.currentSelected = this.eventEditComponent.getId();
        //set activity id in event-edit
        this.eventEditComponent.activityId = this.currentSelected;
    };
    EventDropdownComponent.prototype.onChange = function (value) {
        this.activityId = value;
        //set activity id in event-edit
        this.eventEditComponent.activityId = value;
    };
    EventDropdownComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-event-dropdown',
            template: __webpack_require__(785),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__event_edit_event_edit_component__["a" /* EventEditComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__event_edit_event_edit_component__["a" /* EventEditComponent */]) === 'function' && _b) || Object])
    ], EventDropdownComponent);
    return EventDropdownComponent;
    var _a, _b;
}());
//# sourceMappingURL=event-dropdown.component.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var Register = (function () {
    function Register() {
    }
    return Register;
}());
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Token; });
var Token = (function () {
    function Token() {
    }
    return Token;
}());
//# sourceMappingURL=token.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityService = (function () {
    function ActivityService(http) {
        this.http = http;
        this.BASE_URL = "http://comp4976zenithsociety2.azurewebsites.net/api";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
    }
    //get all events
    ActivityService.prototype.getActivities = function () {
        return this.http.get(this.BASE_URL + "/activitiesapi", { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //get one activity by id
    ActivityService.prototype.getActivityById = function (id) {
        return this.getActivities()
            .then(function (result) { return result.find(function (activity) { return activity.activityId === id; }); });
    };
    //update an activity
    ActivityService.prototype.update = function (activity) {
        var url = this.BASE_URL + "/activitiesapi/" + activity.activityId;
        return this.http
            .put(url, JSON.stringify(activity), { headers: this.headers })
            .toPromise()
            .then(function () { return activity; })
            .catch(this.handleError);
    };
    //add an activity
    ActivityService.prototype.create = function (newActivity) {
        return this.http
            .post(this.BASE_URL + "/activitiesapi", JSON.stringify(newActivity), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    //delete an activity
    ActivityService.prototype.delete = function (id) {
        var url = this.BASE_URL + "/activitiesapi/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ActivityService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ActivityService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], ActivityService);
    return ActivityService;
    var _a;
}());
//# sourceMappingURL=activity.service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.BASE_URL = "http://comp4976zenithsociety2.azurewebsites.net/api";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') });
    }
    //get all events
    EventService.prototype.getAllEvents = function () {
        return this.http.get(this.BASE_URL + "/eventsapi/all", { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //get all events
    EventService.prototype.getEvents = function () {
        return this.http.get(this.BASE_URL + "/eventsapi", { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //get one event by id
    EventService.prototype.getEventById = function (id) {
        return this.getAllEvents()
            .then(function (result) { return result.find(function (event) { return event.eventId === id; }); });
    };
    //update an event
    EventService.prototype.update = function (event) {
        var url = this.BASE_URL + "/eventsapi/" + event.eventId;
        return this.http
            .put(url, JSON.stringify(event), { headers: this.headers })
            .toPromise()
            .then(function () { return event; })
            .catch(this.handleError);
    };
    //add an event
    EventService.prototype.create = function (newEvent) {
        return this.http
            .post(this.BASE_URL + "/eventsapi", JSON.stringify(newEvent), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    //delete an event
    EventService.prototype.delete = function (id) {
        var url = this.BASE_URL + "/eventsapi/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    EventService.prototype.getNextWeek = function () {
        return this.http.get(this.BASE_URL + '/eventsapi/nextweek', { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.getPrevWeek = function () {
        return this.http.get(this.BASE_URL + '/eventsapi/prevweek', { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EventService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    EventService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], EventService);
    return EventService;
    var _a;
}());
//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 375,
	"./af.js": 375,
	"./ar": 382,
	"./ar-dz": 376,
	"./ar-dz.js": 376,
	"./ar-kw": 377,
	"./ar-kw.js": 377,
	"./ar-ly": 378,
	"./ar-ly.js": 378,
	"./ar-ma": 379,
	"./ar-ma.js": 379,
	"./ar-sa": 380,
	"./ar-sa.js": 380,
	"./ar-tn": 381,
	"./ar-tn.js": 381,
	"./ar.js": 382,
	"./az": 383,
	"./az.js": 383,
	"./be": 384,
	"./be.js": 384,
	"./bg": 385,
	"./bg.js": 385,
	"./bn": 386,
	"./bn.js": 386,
	"./bo": 387,
	"./bo.js": 387,
	"./br": 388,
	"./br.js": 388,
	"./bs": 389,
	"./bs.js": 389,
	"./ca": 390,
	"./ca.js": 390,
	"./cs": 391,
	"./cs.js": 391,
	"./cv": 392,
	"./cv.js": 392,
	"./cy": 393,
	"./cy.js": 393,
	"./da": 394,
	"./da.js": 394,
	"./de": 397,
	"./de-at": 395,
	"./de-at.js": 395,
	"./de-ch": 396,
	"./de-ch.js": 396,
	"./de.js": 397,
	"./dv": 398,
	"./dv.js": 398,
	"./el": 399,
	"./el.js": 399,
	"./en-au": 400,
	"./en-au.js": 400,
	"./en-ca": 401,
	"./en-ca.js": 401,
	"./en-gb": 402,
	"./en-gb.js": 402,
	"./en-ie": 403,
	"./en-ie.js": 403,
	"./en-nz": 404,
	"./en-nz.js": 404,
	"./eo": 405,
	"./eo.js": 405,
	"./es": 407,
	"./es-do": 406,
	"./es-do.js": 406,
	"./es.js": 407,
	"./et": 408,
	"./et.js": 408,
	"./eu": 409,
	"./eu.js": 409,
	"./fa": 410,
	"./fa.js": 410,
	"./fi": 411,
	"./fi.js": 411,
	"./fo": 412,
	"./fo.js": 412,
	"./fr": 415,
	"./fr-ca": 413,
	"./fr-ca.js": 413,
	"./fr-ch": 414,
	"./fr-ch.js": 414,
	"./fr.js": 415,
	"./fy": 416,
	"./fy.js": 416,
	"./gd": 417,
	"./gd.js": 417,
	"./gl": 418,
	"./gl.js": 418,
	"./gom-latn": 419,
	"./gom-latn.js": 419,
	"./he": 420,
	"./he.js": 420,
	"./hi": 421,
	"./hi.js": 421,
	"./hr": 422,
	"./hr.js": 422,
	"./hu": 423,
	"./hu.js": 423,
	"./hy-am": 424,
	"./hy-am.js": 424,
	"./id": 425,
	"./id.js": 425,
	"./is": 426,
	"./is.js": 426,
	"./it": 427,
	"./it.js": 427,
	"./ja": 428,
	"./ja.js": 428,
	"./jv": 429,
	"./jv.js": 429,
	"./ka": 430,
	"./ka.js": 430,
	"./kk": 431,
	"./kk.js": 431,
	"./km": 432,
	"./km.js": 432,
	"./kn": 433,
	"./kn.js": 433,
	"./ko": 434,
	"./ko.js": 434,
	"./ky": 435,
	"./ky.js": 435,
	"./lb": 436,
	"./lb.js": 436,
	"./lo": 437,
	"./lo.js": 437,
	"./lt": 438,
	"./lt.js": 438,
	"./lv": 439,
	"./lv.js": 439,
	"./me": 440,
	"./me.js": 440,
	"./mi": 441,
	"./mi.js": 441,
	"./mk": 442,
	"./mk.js": 442,
	"./ml": 443,
	"./ml.js": 443,
	"./mr": 444,
	"./mr.js": 444,
	"./ms": 446,
	"./ms-my": 445,
	"./ms-my.js": 445,
	"./ms.js": 446,
	"./my": 447,
	"./my.js": 447,
	"./nb": 448,
	"./nb.js": 448,
	"./ne": 449,
	"./ne.js": 449,
	"./nl": 451,
	"./nl-be": 450,
	"./nl-be.js": 450,
	"./nl.js": 451,
	"./nn": 452,
	"./nn.js": 452,
	"./pa-in": 453,
	"./pa-in.js": 453,
	"./pl": 454,
	"./pl.js": 454,
	"./pt": 456,
	"./pt-br": 455,
	"./pt-br.js": 455,
	"./pt.js": 456,
	"./ro": 457,
	"./ro.js": 457,
	"./ru": 458,
	"./ru.js": 458,
	"./sd": 459,
	"./sd.js": 459,
	"./se": 460,
	"./se.js": 460,
	"./si": 461,
	"./si.js": 461,
	"./sk": 462,
	"./sk.js": 462,
	"./sl": 463,
	"./sl.js": 463,
	"./sq": 464,
	"./sq.js": 464,
	"./sr": 466,
	"./sr-cyrl": 465,
	"./sr-cyrl.js": 465,
	"./sr.js": 466,
	"./ss": 467,
	"./ss.js": 467,
	"./sv": 468,
	"./sv.js": 468,
	"./sw": 469,
	"./sw.js": 469,
	"./ta": 470,
	"./ta.js": 470,
	"./te": 471,
	"./te.js": 471,
	"./tet": 472,
	"./tet.js": 472,
	"./th": 473,
	"./th.js": 473,
	"./tl-ph": 474,
	"./tl-ph.js": 474,
	"./tlh": 475,
	"./tlh.js": 475,
	"./tr": 476,
	"./tr.js": 476,
	"./tzl": 477,
	"./tzl.js": 477,
	"./tzm": 479,
	"./tzm-latn": 478,
	"./tzm-latn.js": 478,
	"./tzm.js": 479,
	"./uk": 480,
	"./uk.js": 480,
	"./ur": 481,
	"./ur.js": 481,
	"./uz": 483,
	"./uz-latn": 482,
	"./uz-latn.js": 482,
	"./uz.js": 483,
	"./vi": 484,
	"./vi.js": 484,
	"./x-pseudo": 485,
	"./x-pseudo.js": 485,
	"./yo": 486,
	"./yo.js": 486,
	"./zh-cn": 487,
	"./zh-cn.js": 487,
	"./zh-hk": 488,
	"./zh-hk.js": 488,
	"./zh-tw": 489,
	"./zh-tw.js": 489
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 755;


/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/Roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/UserRoles\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div class=\"container container-small\">\n  <div>\n    <h1 class=\"text-center\">Add Activity</h1>\n        <span *ngIf=\"error\" id=\"error\">{{ error }}</span><br/>\n    <div class=\"form-group\">\n      <label>Description: </label>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"newActivity.description\" placeholder=\"Description\">\n    </div>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n    <button class=\"btn btn-success\" (click)=\"add(newActivity)\">Add</button> \n  </div>\n</div>"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/Roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/UserRoles\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div *ngIf=\"activity\" class=\"container container-small\">\n  <div>\n    <h1 class=\"text-center\">Activity Edit</h1>\n        <span *ngIf=\"error\" id=\"error\">{{ error }}</span><br/>\n    <div class=\"form-group\">\n      <label>Description: </label>\n      <input class=\"form-control\" type=\"text\" [(ngModel)]=\"activity.description\" placeholder=\"Description\">\n    </div>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n    <button class=\"btn btn-success\" (click)=\"save()\">Save</button> \n  </div>\n</div>"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/Roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/UserRoles\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <h1 class=\"text-center\">Activities</h1>\n\n  <table *ngIf=\"activities\" class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th class=\"text-center\">Creation Date</th>\n        <th class=\"text-center\">Description</th>\n        <th class=\"text-center\"><button class=\"btn btn-primary\" (click)=\"add(); $event.stopPropagation()\">Add</button></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let a of activities; let i=index;\" (click)=\"onSelect(a)\" [class.selected]=\"a === selected\"> \n        <td><time>{{a.creationDate | amDateFormat: 'YYYY-MM-DD h:mmA'}}</time></td>\n        <td>{{a.description}}</td>\n        <td class=\"text-center\">\n          <button class=\"btn btn-success\" (click)=\"edit(a); $event.stopPropagation()\">Edit</button>\n          <button class=\"btn btn-danger\" (click)=\"delete(a); $event.stopPropagation()\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/Roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/UserRoles\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n      <div class=\"jumbotron\">\n            <h1>Zenith Society</h1>\n            <p>These are the activities happening this week.</p>\n      </div>\n\n\n      <div *ngIf=\"loggedIn == true && memberRole == true\" class=\"text-center\">\n            <button class=\"btn btn-primary\" (click)=\"getWeek(-1)\">Previous Week</button>\n            <button class=\"btn btn-primary\" (click)=\"getWeek(1)\">Next Week</button>\n      </div><br/>\n\n      <h3 *ngIf=\"message == true\" class=\"text-center\">There are no events this week.</h3>\n\n      <table id=\"table\" class=\"table table-striped table-bordered\">\n            <tbody *ngFor=\"let key of eventsKeys;\">\n            <tr>\n            <td class=\"success text-center\" colspan=\"2\">{{key}}</td>\n            </tr>\n            <tr *ngFor=\"let event of eventsDictionary[key];\">\n            <td >{{event.eventFrom+ \"-08:00\" | date: \"h:mm a\" }} - {{event.eventTo + \"-08:00\"| date: \"h:mm a\"}}</td>\n            <td >{{event.activity.description}}</td>\n            </tr>\n            </tbody>\n      </table>\n</div>"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/Roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/UserRoles\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div class=\"container container-small\">\n  <div>\n    <h1 class=\"text-center\">Add Event</h1><br/>\n        <span *ngIf=\"error\" id=\"error\">{{ error }}</span><br/>\n    <div class=\"form-group\">\n      <label>Activity Id: </label>\n      <div *ngIf=\"activities\" style=\"display: inline;\">\n      <select class=\"form-control\" [(ngModel)]=\"currentSelected\" (ngModelChange)=\"onChange($event)\"> \n        <option *ngFor=\"let a of activities; let i=index;\" [ngValue]=\"a.activityId\">{{a.description}}</option>\n      </select>\n    </div>\n    </div>\n    <div class=\"form-group\">\n      <label>Start Date: </label>      \n      <input class=\"form-control\" type=\"datetime-local\" [(ngModel)]=\"newEvent.eventFrom\" placeholder=\"EventFrom\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>End Date: </label>\n      <input class=\"form-control\" type=\"datetime-local\" [(ngModel)]=\"newEvent.eventTo\" placeholder=\"EventTo\" required>\n    </div>\n    <div class=\"form-group\">\n      <label>Is Active: </label>\n      <input style=\"display: inline;\" type=\"checkbox\" [(ngModel)]=\"newEvent.isActive\" placeholder=\"isActive\">\n    </div>\n  </div>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n    <button class=\"btn btn-success\" (click)=\"add(newEvent)\">Add</button> \n  </div>\n</div>"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"activities\" style=\"display: inline;\">\n  <select [(ngModel)]=\"currentSelected\" (ngModelChange)=\"onChange($event)\" class=\"form-control\"> \n    <option *ngFor=\"let a of activities; let i=index;\" [ngValue]=\"a.activityId\">{{a.description}}</option>\n  </select>\n</div>\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/Roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/UserRoles\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div *ngIf=\"event\" class=\"container container-small\">\n  <div>\n    <h1 class=\"text-center\">Event Edit</h1>\n        <span *ngIf=\"error\" id=\"error\">{{ error }}</span><br/>\n    <div class=\"form-group\">\n      <label>Activity Id: </label>\n      <app-event-dropdown></app-event-dropdown>\n    </div>\n    <div class=\"form-group\">\n      <label>Start Date: </label>\n      <input class=\"form-control\" type=\"datetime-local\" [(ngModel)]=\"event.eventFrom\" placeholder=\"EventFrom\">\n    </div>\n    <div class=\"form-group\">\n      <label>End Date: </label>\n      <input class=\"form-control\" type=\"datetime-local\" [(ngModel)]=\"event.eventTo\" placeholder=\"EventTo\">\n    </div>\n    <div class=\"form-group\">\n      <label>Is Active: </label>\n      <input style=\"display: inline;\" type=\"checkbox\" [(ngModel)]=\"event.isActive\" placeholder=\"isActive\">\n    </div>\n  </div>\n  <div class=\"text-center\">\n    <button class=\"btn btn-primary\" (click)=\"goBack()\">Back</button>\n    <button class=\"btn btn-success\" (click)=\"save()\">Save</button> \n  </div>\n</div>"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/Roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a href=\"http://comp4976zenithsociety2.azurewebsites.net/UserRoles\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n  <h1 class=\"text-center\">Events</h1>\n\n  <table id=\"table\" *ngIf=\"events\" class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th class=\"text-center\">Created By</th>\n        <th class=\"text-center\">Creation Date</th>\n        <th class=\"text-center\">Start Date</th>\n        <th class=\"text-center\">End Date</th>\n        <th class=\"text-center\">Activity Description</th>\n        <th class=\"text-center\">Is Active</th>\n        <th class=\"text-center\"><button class=\"btn btn-primary\" (click)=\"add(); $event.stopPropagation()\">Add</button></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let e of events; let i=index;\"> \n        <td>{{e.enteredBy}}</td>\n        <td><time>{{e.creationDate+ \"-08:00\" | amDateFormat: 'YYYY-MM-DD h:mmA'}}</time></td>\n        <td><time>{{e.eventFrom | amDateFormat: 'YYYY-MM-DD h:mmA'}} </time></td>\n        <td><time>{{e.eventTo | amDateFormat: 'YYYY-MM-DD h:mmA'}}</time></td>\n        <td>{{e.activity.description}}</td>\n        <td><input type=\"checkbox\" [disabled]=\"true\" [(ngModel)]=\"e.isActive\" /></td>\n        <td class=\"text-center\">\n          <button class=\"btn btn-success\" (click)=\"edit(e); $event.stopPropagation()\">Edit</button>\n          <button class=\"btn btn-danger\" (click)=\"delete(e); $event.stopPropagation()\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/users\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n    <div class=\"col-md-4 col-md-offset-4\">\n        <span id=\"error\">{{ error?.error_description }}</span><br/>\n\n        <label>Username: </label>\n        <input class=\"form-control\" [(ngModel)]=\"login.username\" placeholder=\"Username\">\n        <label>Password: </label>\n        <input class=\"form-control\" type=\"password\" [(ngModel)]=\"login.password\" placeholder=\"Password\">\n        <br/>\n        <div class=\"text-center\">\n            <button class=\"btn btn-primary\" (click)=\"login(login)\">Login</button> \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"menu\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"home\">Zenith Society</a>\n  </div>\n\n\n  <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\">Home</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/events\">Events</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/activities\">Activities</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/roles\">Roles</a></li>\n    <li *ngIf=\"loggedIn == true && adminRole == true\"><a routerLink=\"/users\">User Roles</a></li>\n  </ul>\n\n  <ul class=\"nav navbar-nav navbar-right\" style=\"margin-right: 2px;\">\n    <li *ngIf=\"loggedIn == true\"><a href=\"#\">Hello {{username}}!</a></li>\n    <li *ngIf=\"loggedIn == true\"><a routerLink=\"/logout\">Logout</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/register\">Register</a></li>\n    <li *ngIf=\"loggedIn == false\"><a routerLink=\"/login\">Login</a></li>\n  </ul>\n</nav>\n\n<div class=\"container\">\n    <div class=\"col-md-4 col-md-offset-4\">\n        <span id=\"error\">{{ error?.error_description }}</span>\n        <span id=\"message\">{{ message?.value }}</span><br/>\n\n        <label>Username: </label>\n        <input class=\"form-control\" [(ngModel)]=\"register.username\" placeholder=\"Username\">\n\n        <label>First Name: </label>\n        <input class=\"form-control\" [(ngModel)]=\"register.firstname\" placeholder=\"First Name\">\n\n        <label>Last Name: </label>\n        <input class=\"form-control\" [(ngModel)]=\"register.lastname\" placeholder=\"Last Name\">\n\n        <label>Email: </label>\n        <input class=\"form-control\" [(ngModel)]=\"register.email\" placeholder=\"Email\">\n\n\n        <label>Password: </label>\n        <input class=\"form-control\" type=\"password\" [(ngModel)]=\"register.password\" placeholder=\"Password\">\n         <label>Confirm Password: </label>\n        <input class=\"form-control\" type=\"password\" [(ngModel)]=\"register.confirmPassword\" placeholder=\"Password\">\n        <br/>\n        <div class=\"text-center\">\n            <button class=\"btn btn-primary\" (click)=\"registerUser(register)\">Register</button> \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(563);


/***/ })

},[822]);
//# sourceMappingURL=main.bundle.js.map