webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_login_component_1 = __webpack_require__("./src/app/user-login/user-login.component.ts");
var user_signup_component_1 = __webpack_require__("./src/app/user-signup/user-signup.component.ts");
var cameriere_component_1 = __webpack_require__("./src/app/cameriere/cameriere.component.ts");
var barista_component_1 = __webpack_require__("./src/app/barista/barista.component.ts");
var pizzaiolo_component_1 = __webpack_require__("./src/app/pizzaiolo/pizzaiolo.component.ts");
var cassiere_component_1 = __webpack_require__("./src/app/cassiere/cassiere.component.ts");
var cameriere_prende_ordinazioni_component_1 = __webpack_require__("./src/app/cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component.ts");
var cameriere_consegna_ordinazioni_component_1 = __webpack_require__("./src/app/cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component.ts");
var cameriere_prende_ordinazioni2_component_1 = __webpack_require__("./src/app/cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component.ts");
var cassiere_incasso_component_1 = __webpack_require__("./src/app/cassiere-incasso/cassiere-incasso.component.ts");
var cassiere_gestione_utenti_component_1 = __webpack_require__("./src/app/cassiere-gestione-utenti/cassiere-gestione-utenti.component.ts");
var routes = [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: user_login_component_1.UserLoginComponent
    },
    {
        path: 'signup',
        component: user_signup_component_1.UserSignupComponent
    },
    {
        path: 'cameriere',
        component: cameriere_component_1.CameriereComponent
    },
    {
        path: 'barista',
        component: barista_component_1.BaristaComponent
    },
    {
        path: 'pizzaiolo',
        component: pizzaiolo_component_1.PizzaioloComponent
    },
    {
        path: 'cassiere',
        component: cassiere_component_1.CassiereComponent
    },
    {
        path: 'cameriereOrd',
        component: cameriere_prende_ordinazioni_component_1.CamerierePrendeOrdinazioniComponent
    },
    {
        path: 'cameriereOrd2',
        component: cameriere_prende_ordinazioni2_component_1.CamerierePrendeOrdinazioni2Component
    },
    {
        path: 'cameriereCons',
        component: cameriere_consegna_ordinazioni_component_1.CameriereConsegnaOrdinazioniComponent
    },
    {
        path: 'incasso',
        component: cassiere_incasso_component_1.CassiereIncassoComponent
    },
    {
        path: 'gestioneutenti',
        component: cassiere_gestione_utenti_component_1.CassiereGestioneUtentiComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, {
                    useHash: true
                })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".bottomfooter {\n    margin-top: 2em;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(us) {
        this.us = us;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
// Services
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var user_login_component_1 = __webpack_require__("./src/app/user-login/user-login.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var user_signup_component_1 = __webpack_require__("./src/app/user-signup/user-signup.component.ts");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var cameriere_component_1 = __webpack_require__("./src/app/cameriere/cameriere.component.ts");
var pizzaiolo_component_1 = __webpack_require__("./src/app/pizzaiolo/pizzaiolo.component.ts");
var barista_component_1 = __webpack_require__("./src/app/barista/barista.component.ts");
var cassiere_component_1 = __webpack_require__("./src/app/cassiere/cassiere.component.ts");
var cameriere_prende_ordinazioni_component_1 = __webpack_require__("./src/app/cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component.ts");
var cameriere_consegna_ordinazioni_component_1 = __webpack_require__("./src/app/cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component.ts");
var cameriere_prende_ordinazioni2_component_1 = __webpack_require__("./src/app/cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component.ts");
var cassiere_incasso_component_1 = __webpack_require__("./src/app/cassiere-incasso/cassiere-incasso.component.ts");
var cassiere_gestione_utenti_component_1 = __webpack_require__("./src/app/cassiere-gestione-utenti/cassiere-gestione-utenti.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_login_component_1.UserLoginComponent,
                user_signup_component_1.UserSignupComponent,
                cameriere_component_1.CameriereComponent,
                pizzaiolo_component_1.PizzaioloComponent,
                barista_component_1.BaristaComponent,
                cassiere_component_1.CassiereComponent,
                cameriere_prende_ordinazioni_component_1.CamerierePrendeOrdinazioniComponent,
                cameriere_consegna_ordinazioni_component_1.CameriereConsegnaOrdinazioniComponent,
                cameriere_prende_ordinazioni2_component_1.CamerierePrendeOrdinazioni2Component,
                cassiere_incasso_component_1.CassiereIncassoComponent,
                cassiere_gestione_utenti_component_1.CassiereGestioneUtentiComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [user_service_1.UserService, socketio_service_1.SocketioService, prodotti_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/barista/barista.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/barista/barista.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row d-flex justify-content-around mt-4\">\n\t<button type=\"button\" class=\"btn btn-danger ml-5 btn-lg \" (click)=\"logout()\">Logout</button>\n\t<h3>{{ time | date: 'hh:mm:ss a' }}</h3>\n\t<h3>Barista: {{us.get_username()}}</h3>\n</div>\n<div *ngIf=\"tavolo\" class=\"row d-flex justify-content-around mt-4\">\n\t<h3>Ora ordine: {{ ora_ordine | date: 'hh:mm:ss a' }}</h3>\n\t<h3>Tavolo: {{tavolo}}</h3>\n</div>\n\n<div class=\"col-12\">\n\t<div *ngIf=\"errmessage\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\tOps: {{errmessage}}\n\t</div>\n</div>\n\n<div class=\"col-12\">\n\t<div *ngIf=\"posmessage\" class=\"alert alert-success mt-4 mb-0\" role=\"alert\">\n\t\t\t{{posmessage}}\n\t</div>\n</div>\n\n<div class=\"list-group mt-4\" id=\"list-tab\" role=\"tablist\">\n\t<div class=\"list-group \">\n\t\t<div *ngFor=\"let message of messages\" class=\"card\" style=\"margin: 5px\" > \n\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t\t<div class=\"ml-1\"> \n\t\t\t\t\t<h3>{{message.nome_prodotto}}</h3> \n\t\t\t\t</div> \n\t\t\t\t<div class=\"mr-1\"> \n\t\t\t\t\t<h5><span *ngFor=\"let aggiunte of message.aggiunte\"class=\"badge badge-success ml-1\">{{aggiunte}}</span></h5>\n\t\t\t\t</div> \n\t\t\t</li>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"row d-flex justify-content-center mt-3\"> \n\t<button type=\"button\" [hidden]=\"messages[0]==undefined\" class=\"btn btn-warning btn-lg\" (click)=\"bibite_pronte()\">Bibite Pronte </button>\n</div>\n\t\n\t"

/***/ }),

/***/ "./src/app/barista/barista.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var BaristaComponent = /** @class */ (function () {
    function BaristaComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.messages = [];
        this.tavolo = undefined;
        this.ora_ordine = undefined;
        this.errmessage = undefined;
        this.posmessage = undefined;
        this.time = new Date();
    }
    BaristaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prossima_ord_barista();
        this.socket = this.sio.connect().subscribe(function (m) {
            if (m.ruolo.includes(_this.us.get_ruolo()))
                if (_this.messages.length == 0) {
                    _this.prossima_ord_barista();
                }
        });
        setInterval(function () {
            _this.time = new Date();
        }, 1000);
    };
    BaristaComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
        if (this.messages[0]) {
            this.ms.abbandona_ordine_bibite(this.messages[0].ordine).subscribe(function (messages) {
                messages;
            }, function (err) {
                console.log(err);
            });
        }
    };
    BaristaComponent.prototype.prossima_ord_barista = function () {
        var _this = this;
        this.ms.prossima_ord_barista().subscribe(function (messages) {
            if (messages.error == true) {
                _this.errmessage = messages.errormessage;
                _this.messages = [];
            }
            else {
                _this.tavolo = messages.tavolo;
                _this.ora_ordine = messages.ora_ordine;
                _this.messages = messages.prodotti;
                _this.errmessage = undefined;
            }
        }, function (err) {
            _this.us.renew().subscribe(function () {
                _this.prossima_ord_barista(); // Succeeded
            }, function (err2) {
                _this.logout(); // Error again, we really need to logout
            });
        });
    };
    BaristaComponent.prototype.bibite_pronte = function () {
        var _this = this;
        this.ms.bibite_pronte(this.messages[0].ordine).subscribe(function (messages) {
            _this.tavolo = undefined;
            _this.ora_ordine = undefined;
            _this.posmessage = "Ordine bibite preparato correttamente";
            _this.prossima_ord_barista();
            setTimeout(function () { return _this.posmessage = undefined; }, 2000);
        }, function (err) {
            console.log(err);
            _this.errmessage = "err";
        });
    };
    BaristaComponent.prototype.logout = function () {
        var _this = this;
        this.socket.unsubscribe();
        if (this.messages[0]) {
            this.ms.abbandona_ordine_bibite(this.messages[0].ordine).subscribe(function (messages) {
                _this.messages[0] = undefined;
                _this.logout2();
            }, function (err) {
                console.log(err);
                _this.errmessage = "err";
                _this.logout2();
            });
        }
        else
            this.logout2();
    };
    BaristaComponent.prototype.logout2 = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    BaristaComponent = __decorate([
        core_1.Component({
            selector: 'app-barista',
            template: __webpack_require__("./src/app/barista/barista.component.html"),
            styles: [__webpack_require__("./src/app/barista/barista.component.css")]
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], BaristaComponent);
    return BaristaComponent;
}());
exports.BaristaComponent = BaristaComponent;


/***/ }),

/***/ "./src/app/cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex justify-content-start mt-5\">\n\t<div class=\"col-2\"> </div>\n\t<div class=\"col-2\">\n\t\t<button type=\"button\" class=\"btn btn-danger\"  (click)=\"indietro()\"> <- Indietro</button>\n\t</div>\n</div>\n<div class=\"row d-flex justify-content-around mt-4\">\n\t<h3>{{ time | date: 'hh:mm:ss a' }}</h3>\n\t<h3>Cameriere: {{us.get_username()}}</h3>\n</div>\n\n\n<div class=\"row d-flex justify-content-start\">\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"list-group mb-4 \" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<p class=\"h3 mt-5 d-flex justify-content-center\">Bibite da consegnare</p>\n\t\t\t\t<div class=\"list-group\">\n\t\t\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t<div *ngIf=\"errmessage2\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t\t\t{{errmessage2}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngFor=\"let message of messages\">\n\t\t\t\t\t\t<li  class=\"list-group-item pl-1 d-flex justify-content-center\">\n\t\t\t\t\t\t\t<div class=\"row\">\t\n\t\t\t\t\t\t\t\t<div class=\"col-6 d-flex justify-content-center\">\n\t\t\t\t\t\t\t\t\t<h5> Tavolo n.{{message.tavolo}} </h5> \n\t\t\t\t\t\t\t\t</div >\n\t\t\t\t\t\t\t\t<div class=\"col-6 d-flex justify-content-center\">\n\t\t\t\t\t\t\t\t\tPersone: {{message.persone_da_servire}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-6 mt-2 d-flex justify-content-center\">\n\t\t\t\t\t\t\t\t\tOra ordinazione: {{message.ora_ordine | date: 'hh:mm:ss a' }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-6 mt-2 d-flex justify-content-center\"> \n\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning px-1 py-0\" (click)=\"btn_bibite_consegnate(message._id)\">Bibite consegnate</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"h3 mt-5 d-flex justify-content-center\">Pizze da consegnare</p>\n\t\t\t\t<div class=\"list-group\">\n\t\t\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t<div *ngIf=\"errmessage3\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t\t\t{{errmessage3}}\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngFor=\"let message of messages2\">\n\t\t\t\t\t\t<li  class=\"list-group-item pl-1 d-flex justify-content-center\">\n\t\t\t\t\t\t\t<div class=\"row\">\t\n\t\t\t\t\t\t\t\t<div class=\"col-6 d-flex justify-content-center\">\n\t\t\t\t\t\t\t\t\t<h5> Tavolo n.{{message.tavolo}} </h5> \n\t\t\t\t\t\t\t\t</div >\n\t\t\t\t\t\t\t\t<div class=\"col-6 d-flex justify-content-center\">\n\t\t\t\t\t\t\t\t\tPersone: {{message.persone_da_servire}}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-6 mt-2 d-flex justify-content-center\">\n\t\t\t\t\t\t\t\t\tOra ordinazione: {{message.ora_ordine | date: 'hh:mm:ss a' }}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-6 mt-2 d-flex justify-content-center\">\n\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"btn_pizze_consegnate(message._id)\" class=\"btn btn-warning px-1 py-0\">Pizze consegnate</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div *ngIf=\"errmessage\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t\t Ops: {{errmessage}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div *ngIf=\"posmessage\" class=\"alert alert-success mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t\t {{posmessage}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\t\t\t</div>\n\t\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var CameriereConsegnaOrdinazioniComponent = /** @class */ (function () {
    function CameriereConsegnaOrdinazioniComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.time = new Date();
        this.messages = [];
        this.messages2 = [];
        this.errmessage = undefined;
        this.errmessage2 = undefined;
        this.errmessage3 = undefined;
        this.posmessage = undefined;
    }
    CameriereConsegnaOrdinazioniComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordini_da_consegnare();
        this.socket = this.sio.connect().subscribe(function (m) {
            if (m.ruolo.includes(_this.us.get_ruolo()) && m.Cameriere == _this.us.get_username()) {
                _this.ordini_da_consegnare();
            }
        });
        setInterval(function () {
            _this.time = new Date();
        }, 1000);
    };
    CameriereConsegnaOrdinazioniComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    CameriereConsegnaOrdinazioniComponent.prototype.btn_bibite_consegnate = function (id) {
        var _this = this;
        this.errmessage = undefined;
        this.ms.bibite_consegnate(id).subscribe(function (messages) {
            _this.posmessage = "Ordine bibite consegnato correttamente";
            _this.ordini_da_consegnare();
            setTimeout(function () { return _this.posmessage = undefined; }, 2000);
        }, function (err) {
            console.log(err);
            _this.errmessage = err;
        });
    };
    CameriereConsegnaOrdinazioniComponent.prototype.btn_pizze_consegnate = function (id) {
        var _this = this;
        this.errmessage = undefined;
        this.ms.pizze_consegnate(id).subscribe(function (messages) {
            _this.posmessage = "Ordine pizze consegnato correttamente";
            _this.ordini_da_consegnare();
            setTimeout(function () { return _this.posmessage = undefined; }, 2000);
        }, function (err) {
            console.log(err);
            _this.errmessage = err;
        });
    };
    CameriereConsegnaOrdinazioniComponent.prototype.ordini_da_consegnare = function () {
        var _this = this;
        this.ms.ordini_da_consegnare().subscribe(function (messages) {
            _this.messages = [];
            _this.messages2 = [];
            _this.errmessage2 = undefined;
            _this.errmessage3 = undefined;
            for (var i = 0; i < messages.length; i++) {
                if (messages[i].stato_bibite == 2 && messages[i].stato_pizze == 1) {
                    _this.messages.push(messages[i]);
                    _this.messages2.push(messages[i]);
                }
                else if (messages[i].stato_bibite == 2)
                    _this.messages.push(messages[i]);
                else
                    _this.messages2.push(messages[i]);
            }
            _this.errmessage2 = _this.messages[0] == undefined ? "Nessuna bibita da consegnare" : undefined;
            _this.errmessage3 = _this.messages2[0] == undefined ? "Nessuna pizza da consegnare" : undefined;
        }, function (err) {
            _this.us.renew().subscribe(function () {
                _this.ordini_da_consegnare(); // Succeeded
            }, function (err2) {
                _this.us.logout(); // Error again, we really need to logout
            });
            console.log(err);
        });
    };
    CameriereConsegnaOrdinazioniComponent.prototype.indietro = function () {
        this.router.navigate(['/cameriere']);
    };
    CameriereConsegnaOrdinazioniComponent = __decorate([
        core_1.Component({
            selector: 'app-cameriere-consegna-ordinazioni',
            template: __webpack_require__("./src/app/cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component.html"),
            styles: [__webpack_require__("./src/app/cameriere-consegna-ordinazioni/cameriere-consegna-ordinazioni.component.css")]
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], CameriereConsegnaOrdinazioniComponent);
    return CameriereConsegnaOrdinazioniComponent;
}());
exports.CameriereConsegnaOrdinazioniComponent = CameriereConsegnaOrdinazioniComponent;


/***/ }),

/***/ "./src/app/cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-5 \">\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<h3>Tavolo N°: {{tavolo.tavolo}}</h3> \n\t\t</div>\n\t\t<div class=\"col\">\n\t\t\t<h3>Numero persone: {{tavolo.persone}} </h3>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<p class=\"h4 mt-4\">Ordinazione bibite</p> \n\t\t</div>\n\t</div>\n\t<div class=\"row mt-2 d-flex justify-content-center\">\n\t\t<div class=\"col-md\">\n\t\t\t<p class=\"h5 mt-3\">Articoli ordinati:</p> \n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group \">\n\t\t\t\t\t<div *ngFor=\"let message of messages3\">\n\t\t\t\t\t\t<li class=\"list-group-item disabled\">\n\t\t\t\t\t\t\t <div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h6>{{message.nome}}</h6>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t Quantità: {{message.quantita}}\n\t\t\t\t\t\t\t    </div>\t\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t     <div class=\"row d-flex justify-content-start\">\n\t\t\t\t\t\t\t\t<div class=\"ml-2\" *ngFor=\"let put of message.aggiunte\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{put}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t<button type=\"button\"  class=\"btn btn-warning mt-4\" \n\t\t\t\t(click)=\"ChiudiOrdinazioneBibite();\">Chiudi ordinazione bibite</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-lg\">\n\t\t\t<p class=\"h5 mt-3\">Listino Articoli :</p> \n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group \">\n\t\t\t\t\t<div *ngFor=\"let message of messages\">\n\t\t\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" \n\t\t\t\t\t\tclass=\"list-group-item list-group-item-action  d-flex justify-content-between align-items-center active\" \n\t\t\t\t\t\t(click)=\"bibite(message.nome);\">{{message.nome}} \n\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{message.prezzo}}€</span> </button>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action \n\t\t\t\t\t\td-flex justify-content-between align-items-center\" \n\t\t\t\t\t\t(click)=\"bibite(message.nome);\">{{message.nome}} \n\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{message.prezzo}}€</span> </button>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"h5 mt-3\">Listino Aggiunte :</p> \n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group \">\n\t\t\t\t\t<div *ngFor=\"let message of messages2\">\n\t\t\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" \n\t\t\t\t\t\tclass=\"list-group-item list-group-item-action  d-flex justify-content-between align-items-center active\" \n\t\t\t\t\t\t(click)=\"aggiunte(message.nome);\">{{message.nome}} \n\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{message.prezzo}}€</span> </button>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action \n\t\t\t\t\t\td-flex justify-content-between align-items-center\" \n\t\t\t\t\t\t(click)=\"aggiunte(message.nome);\">{{message.nome}} \n\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{message.prezzo}}€</span> </button>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</div> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div *ngIf=\"errmessage\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t Ops: {{errmessage}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div *ngIf=\"posmessage\" class=\"alert alert-success mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t {{posmessage}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"row mt-4 mb-5\">\n\t\t\t\t<div class=\"col-6 d-flex justify-content-start pl-5 \">\n\t\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"textValue\" type=\"number\" placeholder=\"Quantità\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6  d-flex justify-content-end pr-5\">\n\t\t\t\t\t <button type=\"button\" (click)=\"AggiungiArt();\" class=\"btn btn-success\">Aggiungi</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var CamerierePrendeOrdinazioniComponent = /** @class */ (function () {
    function CamerierePrendeOrdinazioniComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.messages = [];
        this.messages2 = [];
        this.messages3 = [];
        this.ArticoloSelezionato = "";
        this.AggiunteSelezionate = [];
        this.errmessage = undefined;
        this.posmessage = undefined;
        this.textValue = undefined;
        this.i = 0;
    }
    CamerierePrendeOrdinazioniComponent.prototype.ngOnInit = function () {
        this.tavolo = this.us.leggi_id();
        this.get_bibite();
        this.get_aggiunte();
    };
    CamerierePrendeOrdinazioniComponent.prototype.get_bibite = function () {
        var _this = this;
        this.ms.get_bibite().subscribe(function (messages) {
            _this.messages = messages;
        }, function (err) {
            console.log(err);
        });
    };
    CamerierePrendeOrdinazioniComponent.prototype.bibite = function (nome) {
        this.posmessage = undefined;
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].nome == nome) {
                this.messages[i].booleano = true;
                this.ArticoloSelezionato = nome;
            }
            else
                this.messages[i].booleano = false;
        }
    };
    CamerierePrendeOrdinazioniComponent.prototype.get_aggiunte = function () {
        var _this = this;
        this.ms.get_aggiunte_bibite().subscribe(function (messages) {
            _this.messages2 = messages;
        }, function (err) {
            console.log(err);
        });
    };
    CamerierePrendeOrdinazioniComponent.prototype.aggiunte = function (nome) {
        this.posmessage = undefined;
        for (var i = 0; i < this.messages2.length; i++) {
            if (this.AggiunteSelezionate.includes(this.messages2[i].nome) && (this.messages2[i].nome == nome)) {
                this.messages2[i].booleano = false;
                this.AggiunteSelezionate.splice(this.AggiunteSelezionate.indexOf(this.messages2[i].nome), 1);
            }
            else if (this.messages2[i].nome == nome) {
                this.messages2[i].booleano = true;
                this.AggiunteSelezionate.push(nome);
            }
        }
    };
    CamerierePrendeOrdinazioniComponent.prototype.AggiungiArt = function () {
        var _this = this;
        if (this.ArticoloSelezionato == "" || this.textValue == 0 || this.textValue == undefined) {
            this.errmessage = "Articolo o quantità non selezionata";
            this.posmessage = undefined;
        }
        else {
            for (var appo = 0; appo < this.textValue; appo++) {
                this.errmessage = undefined;
                var body = {
                    "nome_prodotto": this.ArticoloSelezionato,
                    "aggiunte": this.AggiunteSelezionate
                };
                this.ms.aggiungi_prodotto(this.tavolo.id, body).subscribe(function (messages) {
                    messages;
                }, function (err) {
                    console.log(err);
                    if (_this.error == undefined)
                        _this.error = err;
                });
            }
            if (this.error == undefined) {
                this.posmessage = "Prodotto aggiunto correttamente!";
                this.messages3[this.i] = {};
                this.messages3[this.i].nome = this.ArticoloSelezionato;
                this.messages3[this.i].quantita = this.textValue;
                this.messages3[this.i].aggiunte = this.AggiunteSelezionate;
                this.i++;
                this.ArticoloSelezionato = "";
                this.AggiunteSelezionate = [];
                for (var i = 0; i < this.messages2.length; i++) {
                    this.messages2[i].booleano = false;
                }
                for (var i = 0; i < this.messages.length; i++) {
                    this.messages[i].booleano = false;
                }
            }
            else if (this.error != undefined)
                this.errmessage = this.error;
            this.error == undefined;
        }
    };
    CamerierePrendeOrdinazioniComponent.prototype.ChiudiOrdinazioneBibite = function () {
        this.router.navigate(['/cameriereOrd2']);
    };
    CamerierePrendeOrdinazioniComponent = __decorate([
        core_1.Component({
            selector: 'app-cameriere-prende-ordinazioni',
            template: __webpack_require__("./src/app/cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component.html"),
            styles: [__webpack_require__("./src/app/cameriere-prende-ordinazioni/cameriere-prende-ordinazioni.component.css")]
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], CamerierePrendeOrdinazioniComponent);
    return CamerierePrendeOrdinazioniComponent;
}());
exports.CamerierePrendeOrdinazioniComponent = CamerierePrendeOrdinazioniComponent;


/***/ }),

/***/ "./src/app/cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container mt-5 \">\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<h3>Tavolo N°: {{tavolo.tavolo}}</h3> \n\t\t</div>\n\t\t<div class=\"col\">\n\t\t\t<h3>Numero persone: {{tavolo.persone}} </h3>\n\t\t</div>\n\t</div>\n\t<div class=\"row\">\n\t\t<div class=\"col\">\n\t\t\t<p class=\"h4 mt-4\">Ordinazione pizze</p> \n\t\t</div>\n\t</div>\n\t<div class=\"row mt-2 d-flex justify-content-center\">\n\t\t<div class=\"col-md\">\n\t\t\t<p class=\"h5 mt-3\">Articoli ordinati:</p> \n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group \">\n\t\t\t\t\t<div *ngFor=\"let message of messages3\">\n\t\t\t\t\t\t<li class=\"list-group-item disabled\">\n\t\t\t\t\t\t\t <div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h6>{{message.nome}}</h6>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t Quantità: {{message.quantita}}\n\t\t\t\t\t\t\t    </div>\t\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t     <div class=\"row d-flex justify-content-start\">\n\t\t\t\t\t\t\t\t<div class=\"ml-2\" *ngFor=\"let put of message.aggiunte\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{put}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t\t<div *ngIf=\"errmessage2\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t Ops: {{errmessage2}}\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t<div *ngIf=\"posmessage2\" class=\"alert alert-success mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t {{posmessage2}}\n\t\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t <div class=\"row d-flex justify-content-center\">\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning mt-4\" \n\t\t\t\t\t\t(click)=\"ChiudiOrdinazioneTotale();\">Chiudi ordinazione</button>\t\t\t\t\t\n\t\t\t</div>\t\n\t\t</div>\n\t\t<div class=\"col-lg\">\n\t\t\t<p class=\"h5 mt-3\">Listino Articoli :</p> \n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group \">\n\t\t\t\t\t<div *ngFor=\"let message of messages\">\n\t\t\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" \n\t\t\t\t\t\tclass=\"list-group-item list-group-item-action  d-flex justify-content-between align-items-center active\" \n\t\t\t\t\t\t(click)=\"pizze(message.nome);\">{{message.nome}} \n\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{message.prezzo}}€</span> </button>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action \n\t\t\t\t\t\td-flex justify-content-between align-items-center\" \n\t\t\t\t\t\t(click)=\"pizze(message.nome);\">{{message.nome}} \n\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{message.prezzo}}€</span> </button>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<p class=\"h5 mt-3\">Listino Aggiunte :</p> \n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group \">\n\t\t\t\t\t<div *ngFor=\"let message of messages2\">\n\t\t\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" \n\t\t\t\t\t\tclass=\"list-group-item list-group-item-action  d-flex justify-content-between align-items-center active\" \n\t\t\t\t\t\t(click)=\"aggiunte(message.nome);\">{{message.nome}} \n\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{message.prezzo}}€</span> </button>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action \n\t\t\t\t\t\td-flex justify-content-between align-items-center\" \n\t\t\t\t\t\t(click)=\"aggiunte(message.nome);\">{{message.nome}} \n\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{message.prezzo}}€</span> </button>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</div> \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div *ngIf=\"errmessage\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t Ops: {{errmessage}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row d-flex justify-content-center\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div *ngIf=\"posmessage\" class=\"alert alert-success mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t\t {{posmessage}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t<div class=\"row mt-4 mb-5\">\n\t\t\t\t<div class=\"col-6 d-flex justify-content-start pl-5 \">\n\t\t\t\t\t<input class=\"form-control\" [(ngModel)]=\"textValue\" type=\"number\" placeholder=\"Quantità\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-6  d-flex justify-content-end pr-5\">\n\t\t\t\t\t <button type=\"button\" (click)=\"AggiungiArt();\" class=\"btn btn-success\">Aggiungi</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var CamerierePrendeOrdinazioni2Component = /** @class */ (function () {
    function CamerierePrendeOrdinazioni2Component(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.messages = [];
        this.messages2 = [];
        this.messages3 = [];
        this.ArticoloSelezionato = "";
        this.AggiunteSelezionate = [];
        this.errmessage = undefined;
        this.posmessage = undefined;
        this.errmessage2 = undefined;
        this.posmessage2 = undefined;
        this.textValue = undefined;
        this.i = 0;
    }
    CamerierePrendeOrdinazioni2Component.prototype.ngOnInit = function () {
        this.tavolo = this.us.leggi_id();
        this.get_pizze();
        this.get_aggiunte();
    };
    CamerierePrendeOrdinazioni2Component.prototype.get_pizze = function () {
        var _this = this;
        this.ms.get_pizze().subscribe(function (messages) {
            _this.messages = messages;
        }, function (err) {
            console.log(err);
        });
    };
    CamerierePrendeOrdinazioni2Component.prototype.pizze = function (nome) {
        this.posmessage = undefined;
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].nome == nome) {
                this.messages[i].booleano = true;
                this.ArticoloSelezionato = nome;
            }
            else
                this.messages[i].booleano = false;
        }
    };
    CamerierePrendeOrdinazioni2Component.prototype.get_aggiunte = function () {
        var _this = this;
        this.ms.get_aggiunte_pizze().subscribe(function (messages) {
            _this.messages2 = messages;
        }, function (err) {
            console.log(err);
        });
    };
    CamerierePrendeOrdinazioni2Component.prototype.aggiunte = function (nome) {
        this.posmessage = undefined;
        for (var i = 0; i < this.messages2.length; i++) {
            if (this.AggiunteSelezionate.includes(this.messages2[i].nome) && (this.messages2[i].nome == nome)) {
                this.messages2[i].booleano = false;
                this.AggiunteSelezionate.splice(this.AggiunteSelezionate.indexOf(this.messages2[i].nome), 1);
            }
            else if (this.messages2[i].nome == nome) {
                this.messages2[i].booleano = true;
                this.AggiunteSelezionate.push(nome);
            }
        }
    };
    CamerierePrendeOrdinazioni2Component.prototype.AggiungiArt = function () {
        var _this = this;
        if (this.ArticoloSelezionato == "" || this.textValue == 0 || this.textValue == undefined) {
            this.errmessage = "Articolo o quantità non selezionata";
            this.posmessage = undefined;
        }
        else {
            for (var appo = 0; appo < this.textValue; appo++) {
                this.errmessage = undefined;
                var body = {
                    "nome_prodotto": this.ArticoloSelezionato,
                    "aggiunte": this.AggiunteSelezionate
                };
                this.ms.aggiungi_prodotto(this.tavolo.id, body).subscribe(function (messages) {
                    messages;
                }, function (err) {
                    console.log(err);
                    if (_this.error == undefined)
                        _this.error = err;
                });
            }
            if (this.error == undefined) {
                this.posmessage = "Prodotto aggiunto correttamente!";
                this.messages3[this.i] = {};
                this.messages3[this.i].nome = this.ArticoloSelezionato;
                this.messages3[this.i].quantita = this.textValue;
                this.messages3[this.i].aggiunte = this.AggiunteSelezionate;
                this.i++;
                this.ArticoloSelezionato = "";
                this.AggiunteSelezionate = [];
                for (var i = 0; i < this.messages2.length; i++) {
                    this.messages2[i].booleano = false;
                }
                for (var i = 0; i < this.messages.length; i++) {
                    this.messages[i].booleano = false;
                }
            }
            else if (this.error != undefined)
                this.errmessage = this.error;
            this.error == undefined;
        }
    };
    CamerierePrendeOrdinazioni2Component.prototype.ChiudiOrdinazioneTotale = function () {
        var _this = this;
        this.ms.chiudi_ordine(this.tavolo.id).subscribe(function (messages) {
            _this.posmessage2 = "Ordine chiuso correttamente tra pochi istanti" +
                " verrai reindirizzato nella schermata principale";
            setTimeout(function () { return _this.router.navigate(['/cameriere']); }, 2000);
        }, function (err) {
            _this.errmessage2 = "Qualcosa è andato storto: " + err;
            console.log(err);
        });
    };
    CamerierePrendeOrdinazioni2Component = __decorate([
        core_1.Component({
            selector: 'app-cameriere-prende-ordinazioni2',
            template: __webpack_require__("./src/app/cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component.html"),
            styles: [__webpack_require__("./src/app/cameriere-prende-ordinazioni2/cameriere-prende-ordinazioni2.component.css")]
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], CamerierePrendeOrdinazioni2Component);
    return CamerierePrendeOrdinazioni2Component;
}());
exports.CamerierePrendeOrdinazioni2Component = CamerierePrendeOrdinazioni2Component;


/***/ }),

/***/ "./src/app/cameriere/cameriere.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.btn-warning:disabled {\r\n    color: #212529;\r\n    background-color: #dae0e5;\r\n    border-color: #dae0e5;\r\n\t\r\n}\r\n\r\n.btn-warning:not(:disabled):not(.disabled) {\r\n    cursor: pointer;\r\n\tfloat: left; \r\n   \r\n\r\n    -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);\r\n    animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);\r\n}\r\n\r\n#pulse {\r\n    height: 100%; \r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cameriere/cameriere.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex justify-content-around mt-5\">\n\t<button type=\"button\" class=\"btn btn-danger\"  (click)=\"logout()\">Logout</button>\n\t<div id=\"pulse\">\n\t\t<button type=\"button\" class=\"btn btn-warning\" [disabled]=\"numero_consegne == undefined\" (click)=\"consega_ordini()\">Cosegna ordini</button>\n\t</div>\t\n</div>\n<div class=\"row d-flex justify-content-around mt-4\">\n\t<h3>{{ time | date: 'hh:mm:ss a' }}</h3>\n\t<h3>Cameriere: {{us.get_username()}}</h3>\n</div>\n\n<div class=\"row d-flex justify-content-center\">\n\t<p class=\"h3 mt-5 ml-2\">Selezionare il tavolo corrente</p>\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"list-group mb-4\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group \">\n\t\t\t\t\t<div *ngFor=\"let message of messages\">\n\t\t\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" class=\"list-group-item list-group-item-action  d-flex justify-content-between align-items-center active\" (click)=\"tavolo(message.numero);\">Tavolo n.{{message.numero}} <span class=\"badge badge-success badge-pill\">Posti tavolo:{{message.posti}}</span> </button>\n\t\t\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action  d-flex justify-content-between align-items-center\" (click)=\"tavolo(message.numero);\">Tavolo n.{{message.numero}} <span class=\"badge badge-primary badge-pill\">Posti tavolo:{{message.posti}}</span> </button>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t  \n\t\t\t\t<br>\n\t\t\t\t<input class=\"form-control\" #persone [hidden]=\"numero==undefined\" type=\"number\" placeholder=\"Inserire il numero di persone da servire\">\n\t\t\t\t<div *ngIf=\"errmessage\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\t\t\t Ops: {{errmessage}}\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\" [hidden]=\"numero==undefined\" class=\"btn btn-success mt-4\" \n\t\t\t\t(click)=\"crea_ordine(persone.value)\">Inizia acquisizione ordine</button>\n\t\t\t</div>\n\t\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/cameriere/cameriere.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var CameriereComponent = /** @class */ (function () {
    function CameriereComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.messages = [];
        this.errmessage = undefined;
        this.numero = undefined;
        this.time = new Date();
        this.numero_consegne = undefined;
    }
    CameriereComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ordini_da_consegnare();
        this.get_tavoli();
        this.socket = this.sio.connect().subscribe(function (m) {
            if (m.ruolo.includes(_this.us.get_ruolo()) && m.Cameriere == _this.us.get_username()) {
                _this.ordini_da_consegnare();
            }
            else if (m.ruolo.includes(_this.us.get_ruolo())) {
                _this.get_tavoli();
            }
        });
        setInterval(function () {
            _this.time = new Date();
        }, 1000);
    };
    CameriereComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    CameriereComponent.prototype.get_tavoli = function () {
        var _this = this;
        this.ms.get_tavoli().subscribe(function (messages) {
            _this.messages = messages;
        }, function (err) {
        });
    };
    CameriereComponent.prototype.tavolo = function (numero) {
        this.errmessage = undefined;
        this.numero = numero;
        for (var i = 0; i < this.messages.length; i++)
            if (this.messages[i].numero == numero)
                this.messages[i].booleano = true;
            else
                this.messages[i].booleano = false;
    };
    CameriereComponent.prototype.crea_ordine = function (nPersone) {
        var _this = this;
        nPersone = parseInt(nPersone, 10);
        if (nPersone > 0) {
            this.ms.crea_ordine(this.numero, nPersone).subscribe(function (messages) {
                if (messages.error == true)
                    _this.errmessage = messages.errormessage;
                else {
                    _this.us.salva_id(messages.id, _this.numero, nPersone);
                    _this.router.navigate(['/cameriereOrd']);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else
            this.errmessage = "Numero persone non definito";
    };
    CameriereComponent.prototype.ordini_da_consegnare = function () {
        var _this = this;
        this.ms.ordini_da_consegnare().subscribe(function (messages) {
            _this.numero_consegne = messages.length;
        }, function (err) {
            _this.us.renew().subscribe(function () {
                _this.ordini_da_consegnare(); // Succeeded
            }, function (err2) {
                _this.logout(); // Error again, we really need to logout
            });
            console.log(err);
        });
    };
    CameriereComponent.prototype.consega_ordini = function () {
        this.router.navigate(['/cameriereCons']);
    };
    CameriereComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    CameriereComponent = __decorate([
        core_1.Component({
            selector: 'app-cameriere',
            template: __webpack_require__("./src/app/cameriere/cameriere.component.html"),
            styles: [__webpack_require__("./src/app/cameriere/cameriere.component.css")]
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], CameriereComponent);
    return CameriereComponent;
}());
exports.CameriereComponent = CameriereComponent;


/***/ }),

/***/ "./src/app/cassiere-gestione-utenti/cassiere-gestione-utenti.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cassiere-gestione-utenti/cassiere-gestione-utenti.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex justify-content-around mt-5\">\n\t<button type=\"button\" class=\"btn btn-danger\"  (click)=\"indietro()\"> <- Indietro</button>\n\t<button type=\"button\" class=\"btn btn-success\"  (click)=\"router.navigate(['/signup'])\"> Crea nuovo utente</button>\n</div>\n<div class=\"row d-flex justify-content-around mt-4\">\n\t<h3>{{ time | date: 'hh:mm:ss a' }}</h3>\n\t<h3>Cassiere: {{us.get_username()}}</h3>\n</div>\n\n<div class=\"col-12 mt-4\"><h3>Camerieri:</h3>\n\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\"> \n\t\t<div class=\"list-group\" >\n\t\t\t<div *ngFor=\"let message of messages\" >\n\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" class=\"list-group-item list-group-item-action \n\t\t\t\td-flex justify-content-between align-items-center active\" (click)=\"utente_premuto(message._id);\">\n\t\t\t\t\t<span class=\"px-2\"> Username: <span class=\"h6\">{{message.username}}</span> </span>\n\t\t\t\t\t<span class=\"px-2\"> Nome Cognome: <span class=\"h6\">{{message.nome}} {{message.cognome}}</span> </span>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger px-2\"  (click)=\"elimina_utente(message._id); $event.stopPropagation();\"> Elimina</button>\n\t\t\t\t</button> \n\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action d-flex justify-content-between \n\t\t\t\talign-items-center\" (click)=\"utente_premuto(message._id);\">\n\t\t\t\t\t<span class=\"px-2\"> Username: <span class=\"h6\">{{message.username}}</span> </span>\n\t\t\t\t\t<span class=\"px-2\"> Nome Cognome: <span class=\"h6\">{{message.nome}} {{message.cognome}}</span> </span>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger px-2\"  (click)=\"elimina_utente(message._id); $event.stopPropagation();\"> Elimina</button>\n\t\t\t\t</button>\t \n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"col-12 mt-4\"><h3>Pizzaioli:</h3>\n\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t<div class=\"list-group\" >\n\t\t\t<div *ngFor=\"let message of messages2\" >\n\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" class=\"list-group-item list-group-item-action \n\t\t\t\td-flex justify-content-between align-items-center active\" (click)=\"utente_premuto(message._id);\">\n\t\t\t\t\t<span class=\"px-2\"> Username: <span class=\"h6\">{{message.username}}</span> </span>\n\t\t\t\t\t<span class=\"px-2\"> Nome Cognome: <span class=\"h6\">{{message.nome}} {{message.cognome}}</span> </span>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger px-2\"  (click)=\"elimina_utente(message._id); $event.stopPropagation();\"> Elimina</button>\n\t\t\t\t</button>\n\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action d-flex justify-content-between \n\t\t\t\talign-items-center\" (click)=\"utente_premuto(message._id);\">\n\t\t\t\t\t<span class=\"px-2\"> Username: <span class=\"h6\">{{message.username}}</span> </span>\n\t\t\t\t\t<span class=\"px-2\"> Nome Cognome: <span class=\"h6\">{{message.nome}} {{message.cognome}}</span> </span>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger px-2\"  (click)=\"elimina_utente(message._id); $event.stopPropagation();\"> Elimina</button>\n\t\t\t\t</button>\t \n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"col-12 mt-4\"><h3>Baristi:</h3>\n\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t<div class=\"list-group\" >\n\t\t\t<div *ngFor=\"let message of messages3\" >\n\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" class=\"list-group-item list-group-item-action \n\t\t\t\td-flex justify-content-between align-items-center active\" (click)=\"utente_premuto(message._id);\">\n\t\t\t\t\t<span class=\"px-2\"> Username: <span class=\"h6\">{{message.username}}</span> </span>\n\t\t\t\t\t<span class=\"px-2\"> Nome Cognome: <span class=\"h6\">{{message.nome}} {{message.cognome}}</span> </span>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger px-2\"  (click)=\"elimina_utente(message._id); $event.stopPropagation();\"> Elimina</button>\n\t\t\t\t</button>\n\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action d-flex justify-content-between \n\t\t\t\talign-items-center\" (click)=\"utente_premuto(message._id);\">\n\t\t\t\t\t<span class=\"px-2\"> Username: <span class=\"h6\">{{message.username}}</span> </span>\n\t\t\t\t\t<span class=\"px-2\"> Nome Cognome: <span class=\"h6\">{{message.nome}} {{message.cognome}}</span> </span>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger px-2\"  (click)=\"elimina_utente(message._id); $event.stopPropagation();\"> Elimina</button>\n\t\t\t\t</button>\t \n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"col-12 mt-4 mb-4\"><h3>Cassieri:</h3>\n\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t<div class=\"list-group\" >\n\t\t\t<div *ngFor=\"let message of messages4\" >\n\t\t\t\t<button type=\"button\" *ngIf=\"message.booleano ; else loggedOut\" class=\"list-group-item list-group-item-action \n\t\t\t\td-flex justify-content-between align-items-center active\" (click)=\"utente_premuto(message._id);\">\n\t\t\t\t\t<span class=\"px-2\"> Username: <span class=\"h6\">{{message.username}}</span> </span>\n\t\t\t\t\t<span class=\"px-2\"> Nome Cognome: <span class=\"h6\">{{message.nome}} {{message.cognome}}</span> </span>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger px-2\"  (click)=\"elimina_utente(message._id); $event.stopPropagation();\"> Elimina</button>\n\t\t\t\t</button>\n\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t<button type=\"button\" class=\"list-group-item list-group-item-action d-flex justify-content-between \n\t\t\t\talign-items-center\" (click)=\"utente_premuto(message._id);\">\n\t\t\t\t\t<span class=\"px-2\"> Username: <span class=\"h6\">{{message.username}}</span> </span>\n\t\t\t\t\t<span class=\"px-2\"> Nome Cognome: <span class=\"h6\">{{message.nome}} {{message.cognome}}</span> </span>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger px-2\"  (click)=\"elimina_utente(message._id); $event.stopPropagation();\"> Elimina</button>\n\t\t\t\t</button>\t \n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<span class=\"h3 mt-5\">Statistiche</span>\n<div class=\"col-12 mt-2 mb-4\">\n\t<div *ngFor=\"let message of messages5\">\n\t\t<li class=\"h4\">{{message}}</li>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/cassiere-gestione-utenti/cassiere-gestione-utenti.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var CassiereGestioneUtentiComponent = /** @class */ (function () {
    function CassiereGestioneUtentiComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.time = new Date();
        this.messages = [];
        this.messages2 = [];
        this.messages3 = [];
        this.messages4 = [];
        this.messages5 = [];
        this.errmessage = undefined;
        this.posmessage = undefined;
        this.idPremuto = 0;
    }
    CassiereGestioneUtentiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_users();
        this.socket = this.sio.connect().subscribe(function (m) {
            if (m.ruolo.includes(_this.us.get_ruolo()) && m.PaginaCassiere.includes("gestione_utenti")) {
                _this.get_users();
            }
        });
        setInterval(function () {
            _this.time = new Date();
        }, 1000);
    };
    CassiereGestioneUtentiComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    CassiereGestioneUtentiComponent.prototype.get_users = function () {
        var _this = this;
        this.us.get_camerieri().subscribe(function (messages) {
            _this.messages = messages;
            _this.us.get_pizzaioli().subscribe(function (messages2) {
                _this.messages2 = messages2;
                _this.us.get_baristi().subscribe(function (messages3) {
                    _this.messages3 = messages3;
                    _this.us.get_cassieri().subscribe(function (messages4) {
                        _this.messages4 = messages4;
                        _this.utente_premuto(_this.idPremuto);
                    }, function (err) {
                        console.log(err);
                    });
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log("errore");
            _this.us.renew().subscribe(function () {
                _this.get_users(); // Succeeded
            }, function (err2) {
                _this.logout(); // Error again, we really need to logout
            });
            console.log(err);
        });
    };
    CassiereGestioneUtentiComponent.prototype.elimina_utente = function (id) {
        if (confirm("Vuoi davvero eliminare l'utente?")) {
            this.idPremuto = 0;
            this.us.delete_users(id).subscribe(function (messages) {
                messages;
            }, function (err) {
                console.log(err);
            });
        }
    };
    CassiereGestioneUtentiComponent.prototype.utente_premuto = function (id) {
        this.idPremuto = id;
        this.messages5 = [];
        var i;
        for (i = 0; i < this.messages.length; i++)
            if (this.messages[i]._id == id)
                this.messages[i].booleano = true;
            else
                this.messages[i].booleano = false;
        for (i = 0; i < this.messages2.length; i++)
            if (this.messages2[i]._id == id)
                this.messages2[i].booleano = true;
            else
                this.messages2[i].booleano = false;
        for (i = 0; i < this.messages3.length; i++)
            if (this.messages3[i]._id == id)
                this.messages3[i].booleano = true;
            else
                this.messages3[i].booleano = false;
        for (i = 0; i < this.messages4.length; i++)
            if (this.messages4[i]._id == id)
                this.messages4[i].booleano = true;
            else
                this.messages4[i].booleano = false;
        if (id != 0)
            this.get_statistiche(id);
    };
    CassiereGestioneUtentiComponent.prototype.get_statistiche = function (id) {
        var _this = this;
        this.us.statistiche_dipendente(id).subscribe(function (messages) {
            var a = Object.getOwnPropertyNames(messages.risultato);
            for (var b = 0; b < a.length; b++) {
                var appo = a[b];
                a[b] = a[b].replace(/_/g, " ");
                a[b] = a[b].charAt(0).toUpperCase() + a[b].slice(1);
                _this.messages5.push(a[b] + " : " + messages.risultato[appo]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    CassiereGestioneUtentiComponent.prototype.indietro = function () {
        this.router.navigate(['/cassiere']);
    };
    CassiereGestioneUtentiComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    CassiereGestioneUtentiComponent = __decorate([
        core_1.Component({
            selector: 'app-cassiere-gestione-utenti',
            template: __webpack_require__("./src/app/cassiere-gestione-utenti/cassiere-gestione-utenti.component.html"),
            styles: [__webpack_require__("./src/app/cassiere-gestione-utenti/cassiere-gestione-utenti.component.css")]
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], CassiereGestioneUtentiComponent);
    return CassiereGestioneUtentiComponent;
}());
exports.CassiereGestioneUtentiComponent = CassiereGestioneUtentiComponent;


/***/ }),

/***/ "./src/app/cassiere-incasso/cassiere-incasso.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cassiere-incasso/cassiere-incasso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex justify-content-around mt-5\">\n\t<button type=\"button\" class=\"btn btn-danger\"  (click)=\"indietro()\"> <- Indietro</button>\n\t<h3>{{ time | date: 'hh:mm:ss a' }}</h3>\n\t<h3>Cassiere: {{us.get_username()}}</h3>\n</div>\n\n<p  class=\"h2 mt-5  text-center\">Statistiche incasso</p>\n<div class=\"h3 mt-3 text-center\">Incasso giorno : {{giorno.risultato}}</div>\n<div class=\"h3 text-center\">Incasso settimana : {{settimana.risultato}}</div>\n<div class=\"h3 mb-4 text-center\">Incasso mese : {{mese.risultato}}</div>\n\n"

/***/ }),

/***/ "./src/app/cassiere-incasso/cassiere-incasso.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var CassiereIncassoComponent = /** @class */ (function () {
    function CassiereIncassoComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.time = new Date();
        this.giorno = 0;
        this.settimana = 0;
        this.mese = 0;
    }
    CassiereIncassoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get_incasso();
        this.socket = this.sio.connect().subscribe(function (m) {
            if (m.ruolo.includes(_this.us.get_ruolo()) && m.PaginaCassiere.includes("incasso")) {
                _this.get_incasso();
            }
        });
        setInterval(function () {
            _this.time = new Date();
        }, 1000);
    };
    CassiereIncassoComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    CassiereIncassoComponent.prototype.get_incasso = function () {
        var _this = this;
        this.ms.incasso_giorno().subscribe(function (messages) {
            _this.giorno = messages;
            _this.ms.incasso_settimana().subscribe(function (messages) {
                _this.settimana = messages;
                _this.ms.incasso_mese().subscribe(function (messages) {
                    _this.mese = messages;
                }, function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log("errore");
            _this.us.renew().subscribe(function () {
                _this.get_incasso(); // Succeeded
            }, function (err2) {
                _this.logout(); // Error again, we really need to logout
            });
            console.log(err);
        });
    };
    CassiereIncassoComponent.prototype.indietro = function () {
        this.router.navigate(['/cassiere']);
    };
    CassiereIncassoComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    CassiereIncassoComponent = __decorate([
        core_1.Component({
            selector: 'app-cassiere-incasso',
            template: __webpack_require__("./src/app/cassiere-incasso/cassiere-incasso.component.html"),
            styles: [__webpack_require__("./src/app/cassiere-incasso/cassiere-incasso.component.css")]
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], CassiereIncassoComponent);
    return CassiereIncassoComponent;
}());
exports.CassiereIncassoComponent = CassiereIncassoComponent;


/***/ }),

/***/ "./src/app/cassiere/cassiere.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-sq-lg {\r\n  width: 100px !important;\r\n  height: 100px !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/cassiere/cassiere.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\" >\n\t<div class=\"row \">\n\t\t<div class=\"col-md-4 my-2 d-flex justify-content-center\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-lg \" (click)=\"logout()\">Logout</button>\n\t\t</div>\n\t\t<div class=\"col-md-4 my-2 d-flex justify-content-start\">\n\t\t\t\t<h3>{{ time | date: 'hh:mm:ss a' }}</h3>\n\t\t</div>\n\t\t<div class=\"col-md-4 my-2 d-flex justify-content-start\">\n\t\t\t\t<h3>Cassiere: {{us.get_username()}}</h3>\n\t\t</div>\n\t</div>\n\t<div class=\"row mt-3\">\n\t\t<div class=\"col-md-6 my-3 d-flex justify-content-end\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary btn-lg btn-block\"  \n\t\t\t\t(click)=\"incasso()\">Incasso</button>\n\t\t</div>\n\t\t<div class=\"col-md-6 my-3 d-flex justify-content-start\">\n\t\t\t\t <button type=\"button\" class=\"btn btn-primary btn-lg btn-block\" \n\t\t\t\t (click)=\"gestione_utenti()\">Gestione utenti</button>\n\t\t</div>\n\t\t<div class=\"mt-4 \"> <h3>Gestione tavoli:</h3></div>\n\t</div>\n\t<div class=\"row mt-3 d-flex justify-content-center\">\n\t\t\t<div class=\"mt-2 mr-2\"  *ngFor=\"let message of messages\" >\n\t\t\t\t<button type=\"button\" class=\"btn btn-sq-lg btn-warning\" \n\t\t\t\t(click)=\"bottone_tavolo(message.numero)\" *ngIf=\"message.occupato ; else loggedOut\">\n\t\t\t\t<h3>{{message.numero}}</h3></button>\n\t\t\t\t<ng-template #loggedOut>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-sq-lg btn-success\" \n\t\t\t\t\t(click)=\"bottone_tavolo(message.numero)\"><h3>{{message.numero}}</h3></button>     \t\n\t\t\t\t</ng-template>\n\t\t\t</div>\n\t</div>\n\t\n\t<div class=\"col-12\">\n\t\t<div *ngIf=\"errmessage\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\t\tOps: {{errmessage}}\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-12\">\n\t\t<div *ngIf=\"posmessage\" class=\"alert alert-success mt-4 mb-0\" role=\"alert\">\n\t\t\t\t{{posmessage}}\n\t\t</div>\n\t</div>\n\t\n\t<div\n\t*ngIf=\"messages3\" class=\"row mt-5 mb-5 d-flex justify-content-start\">\n\t\t<div class=\"col-12\"><h3>Tavolo: &nbsp;&nbsp;\n\t\t{{messages3.tavolo}}</h3></div>\n\t\t<div class=\"col-12\"><h3>Cameriere assegnato: &nbsp;&nbsp;\n\t\t{{messages3.cameriere}} </h3></div>\n\t\t<div class=\"col-12\"><h3>Barista: &nbsp;&nbsp;\n\t\t{{messages3.barista}} </h3></div>\n\t\t<div class=\"col-12\"><h3>Numero persone:&nbsp;&nbsp; \n\t\t{{messages3.persone_da_servire}} </h3></div>\n\t\t<div class=\"col-12\"><h3>Ora ordine: &nbsp;&nbsp;\n\t\t{{created_date | date: 'hh:mm:ss a'}} </h3></div>\n\t\t<div class=\"col-12\">\n\t\t\t<h3  [ngSwitch]=\"messages3.stato_pizze\">\n\t\t\t\tStato pizze: &nbsp;&nbsp;\n\t\t\t\t<span style=\"color:red\" *ngSwitchCase=\"0\">Pizze non pronte</span>\n\t\t\t\t<span style=\"color:orange\" *ngSwitchCase=\"1\">Pizze pronte ma non consegnate </span>\n\t\t\t\t<span style=\"color:green\" *ngSwitchCase=\"2\">Pizze consegnate </span>\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"col-12\">\n\t\t\t<h3  [ngSwitch]=\"messages3.stato_bibite\">\n\t\t\t\tStato bibite: &nbsp;&nbsp;\n\t\t\t\t<span style=\"color:red\" *ngSwitchCase=\"0\">Bibite non pronte</span>\n\t\t\t\t<span style=\"color:orange\" *ngSwitchCase=\"1\">Bibite in lavorazione </span>\n\t\t\t\t<span style=\"color:orange\" *ngSwitchCase=\"2\">Bibite pronte ma non consegnate</span>\n\t\t\t\t<span style=\"color:green\" *ngSwitchCase=\"3\">Bibite consegnate</span>\n\t\t\t</h3>\n\t\t</div>\n\t\t<div class=\"col-12 mt-4\"><h3>Pizze ordinate:</h3>\n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group\" >\n\t\t\t\t\t<div *ngFor=\"let message of messages4\" >\n\t\t\t\t\t\t<li class=\"list-group-item disabled\" *ngIf=\"!message.bibita_pizza\">\n\t\t\t\t\t\t\t <div class=\"row d-flex mx-1 justify-content-between\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<h6>{{message.nome_prodotto}}</h6>\n\t\t\t\t\t\t\t\t\t{{message.prezzo}}€\n\t\t\t\t\t\t\t\t\t<span  [ngSwitch]=\"message.stato_preparazione\">\n\t\t\t\t\t\t\t\t\t\tStato pizza: &nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:red\" *ngSwitchCase=\"0\">Non in forno</span>\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:orange\" *ngSwitchCase=\"1\">In forno</span>\n\t\t\t\t\t\t\t\t\t\t<span style=\"color:green\" *ngSwitchCase=\"2\">Preparata</span>\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\tPizzaiolo: {{message.pizzaiolo}}\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t\t <div class=\"row d-flex mx-1 justify-content-start\">\n\t\t\t\t\t\t\t\t<div class=\"ml-2\" *ngFor=\"let put of message.aggiunte\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{put}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-12 mt-3 mb-5\"><h3>Bibite ordinate:</h3>\n\t\t\t<div class=\"list-group\" id=\"list-tab\" role=\"tablist\">\n\t\t\t\t<div class=\"list-group\" >\n\t\t\t\t\t<div *ngFor=\"let message of messages4\" >\n\t\t\t\t\t\t<li class=\"list-group-item disabled\" *ngIf=\"message.bibita_pizza\">\n\t\t\t\t\t\t\t <div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t<h6>{{message.nome_prodotto}}</h6>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col\">\n\t\t\t\t\t\t\t\t\t {{message.prezzo}}€\n\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t\t <div class=\"row d-flex justify-content-start\">\n\t\t\t\t\t\t\t\t<div class=\"ml-2\" *ngFor=\"let put of message.aggiunte\">\n\t\t\t\t\t\t\t\t\t<span class=\"badge badge-success badge-pill\">{{put}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-6 d-flex justify-content-start\">\n\t\t\t\t<h2 class=\"ml-5\">Totale: {{messages3.totale}}€</h2>\n\t\t</div>\n\t\t<div class=\"col-md-6 d-flex justify-content-end\"> \n\t\t\t<button  [disabled]=\"!messages3.mostra_paga\" type=\"button\" class=\"btn btn-danger btn-lg btn-block mr-5\" \n\t\t\t(click)=\"paga()\">Crea scontrino e paga</button>\n\t\t</div>\n\t</div>\n\t<div *ngIf=\"tavolo_libero\" class=\"row mt-5 ml-5 d-flex justify-content-center\">\n\t\t<div class=\"col-12\"><h3>Tavolo libero </h3></div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/cassiere/cassiere.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var CassiereComponent = /** @class */ (function () {
    function CassiereComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.messages = [];
        this.messages2 = [];
        this.messages4 = [];
        this.errmessage = undefined;
        this.posmessage = undefined;
        this.tavolo = undefined;
        this.time = new Date();
    }
    CassiereComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.situazione_tavoli();
        this.socket = this.sio.connect().subscribe(function (m) {
            if (m.ruolo.includes(_this.us.get_ruolo()) && m.PaginaCassiere.includes("cassiere")) {
                _this.situazione_tavoli();
                if (_this.tavolo != undefined) {
                    _this.bottone_tavolo(_this.tavolo);
                }
            }
        });
        setInterval(function () {
            _this.time = new Date();
        }, 1000);
    };
    CassiereComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    CassiereComponent.prototype.situazione_tavoli = function () {
        var _this = this;
        this.ms.get_tavoli().subscribe(function (messages) {
            if (messages.error == true)
                _this.errmessage = messages.errormessage;
            else {
                _this.messages = messages;
                _this.errmessage = undefined;
                _this.situazione_tavoli2();
            }
        }, function (err) {
            console.log(err);
        });
    };
    CassiereComponent.prototype.situazione_tavoli2 = function () {
        var _this = this;
        this.ms.get_tavoli_occupati().subscribe(function (messages) {
            if (messages.error == true)
                _this.errmessage = messages.errormessage;
            else {
                _this.messages2 = messages;
                _this.errmessage = undefined;
                for (var i = 0; i < _this.messages.length; i++)
                    for (var j = 0; j < _this.messages2.length; j++)
                        if (_this.messages[i].numero == _this.messages2[j].tavolo)
                            _this.messages[i].occupato = true;
            }
        }, function (err) {
            _this.us.renew().subscribe(function () {
                _this.situazione_tavoli(); // Succeeded
            }, function (err2) {
                _this.logout(); // Error again, we really need to logout
            });
        });
    };
    CassiereComponent.prototype.bottone_tavolo = function (numero) {
        var _this = this;
        this.errmessage = undefined;
        this.ms.get_informazioni_ordine(numero).subscribe(function (messages) {
            if (messages.error == true) {
                _this.tavolo_libero = true;
                _this.messages3 = undefined;
            }
            else {
                _this.tavolo = numero;
                _this.messages3 = messages;
                _this.created_date = new Date(_this.messages3.ora_ordine);
                _this.tavolo_libero = false;
                _this.bottone_tavolo2(_this.messages3._id);
            }
        }, function (err) {
            _this.errmessage = err;
        });
    };
    CassiereComponent.prototype.bottone_tavolo2 = function (id) {
        var _this = this;
        this.ms.get_informazioni_prodotti(id).subscribe(function (messages) {
            _this.messages4 = messages;
            _this.ms.get_totale(_this.messages3.tavolo).subscribe(function (messages2) {
                if (messages2[0] == undefined)
                    _this.messages3.totale = 0;
                else
                    _this.messages3.totale = messages2[0].total;
                if (_this.messages3.stato_bibite == 3 &&
                    _this.messages3.stato_pizze == 2)
                    _this.messages3.mostra_paga = true;
                else
                    _this.messages3.mostra_paga = false;
            }, function (err) {
                _this.errmessage += " " + err;
            });
        }, function (err) {
            _this.errmessage += " " + err;
        });
    };
    CassiereComponent.prototype.paga = function () {
        var _this = this;
        this.ms.pagamento_ordine(this.messages3.tavolo).subscribe(function (messages) {
            _this.posmessage = "Ordine pagato correttamente!";
            setTimeout(function () { return _this.posmessage = undefined; }, 2000);
        }, function (err) {
            console.log(err);
        });
    };
    CassiereComponent.prototype.incasso = function () {
        this.router.navigate(['/incasso']);
    };
    CassiereComponent.prototype.gestione_utenti = function () {
        this.router.navigate(['/gestioneutenti']);
    };
    CassiereComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    CassiereComponent = __decorate([
        core_1.Component({
            selector: 'app-cassiere',
            template: __webpack_require__("./src/app/cassiere/cassiere.component.html"),
            styles: [__webpack_require__("./src/app/cassiere/cassiere.component.css")],
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], CassiereComponent);
    return CassiereComponent;
}());
exports.CassiereComponent = CassiereComponent;


/***/ }),

/***/ "./src/app/pizzaiolo/pizzaiolo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pizzaiolo/pizzaiolo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row d-flex justify-content-around mt-4\">\n\t<button type=\"button\" class=\"btn btn-danger ml-5 btn-lg \" (click)=\"logout()\">Logout</button>\n\t<h3>{{ time | date: 'hh:mm:ss a' }}</h3>\n\t<h3>Cameriere: {{us.get_username()}}</h3>\n</div>\n<div *ngIf=\"tavolo\" class=\"row d-flex justify-content-around mt-4\">\n\t<h3>Ora ordine: {{ ora_ordine | date: 'hh:mm:ss a' }}</h3>\n\t<h3>Tavolo: {{tavolo}}</h3>\n</div>\n\n<div class=\"col-12\">\n\t<div *ngIf=\"errmessage\" class=\"alert alert-danger mt-4 mb-0\" role=\"alert\">\n\t\t\tOps: {{errmessage}}\n\t</div>\n</div>\n\n<div class=\"col-12\">\n\t<div *ngIf=\"posmessage\" class=\"alert alert-success mt-4 mb-0\" role=\"alert\">\n\t\t\t{{posmessage}}\n\t</div>\n</div>\n\n<div class=\"list-group mt-4\" id=\"list-tab\" role=\"tablist\">\n\t<div class=\"list-group \">\n\t\t<div *ngFor=\"let message of messages\" class=\"card\" style=\"margin: 5px\" > \n\t\t\t<li class=\"list-group-item\">\n\t\t\t\t<div class=\"row d-flex justify-content-around\">\n\t\t\t\t\t<p class=\"h3 mx-1 \">{{message.nome_prodotto}}</p>\n\t\t\t\t\t<h4>T.P. <span class=\"badge badge-secondary mx-1\">{{message.tempo_di_preparazione}}</span></h4>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row d-flex justify-content-start\">\n\t\t\t\t\t<h5><span *ngFor=\"let aggiunte of message.aggiunte\"class=\"badge badge-secondary mx-1\">{{aggiunte}}</span></h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row mx-1 d-flex justify-content-end\">\n\t\t\t\t\t<div class=\"d-flex justify-content-end mx-1\" *ngIf=\"message.stato_preparazione == 0 ; else elseBlock\">\n\t\t\t\t\t\t<button type=\"button\"  class=\"btn btn-success btn-lg\" (click)=\"inizio_fine_preparazione(message.stato_preparazione, message._id)\"> \n\t\t\t\t\t\t{{ message.stato_preparazione == 1  ? 'Fine preparazione' : 'Inizio preparazione' }}</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t<button type=\"button\"  class=\"btn btn-warning btn-lg\" (click)=\"inizio_fine_preparazione(message.stato_preparazione, message._id)\"> \n\t\t\t\t\t\t{{ message.stato_preparazione == 1  ? 'Fine preparazione' : 'Inizio preparazione' }}</button>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/pizzaiolo/pizzaiolo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var socketio_service_1 = __webpack_require__("./src/app/socketio.service.ts");
var prodotti_service_1 = __webpack_require__("./src/app/prodotti.service.ts");
var PizzaioloComponent = /** @class */ (function () {
    function PizzaioloComponent(sio, ms, us, router) {
        this.sio = sio;
        this.ms = ms;
        this.us = us;
        this.router = router;
        this.messages = [];
        this.tavolo = undefined;
        this.ora_ordine = undefined;
        this.errmessage = undefined;
        this.posmessage = undefined;
        this.time = new Date();
    }
    PizzaioloComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prossima_ord_pizzaiolo();
        this.socket = this.sio.connect().subscribe(function (m) {
            if (m.ruolo.includes(_this.us.get_ruolo()))
                _this.prossima_ord_pizzaiolo();
        });
        setInterval(function () {
            _this.time = new Date();
        }, 1000);
    };
    PizzaioloComponent.prototype.ngOnDestroy = function () {
        this.socket.unsubscribe();
    };
    PizzaioloComponent.prototype.prossima_ord_pizzaiolo = function () {
        var _this = this;
        this.ms.prossima_ord_pizzaiolo().subscribe(function (messages) {
            if (messages.error == true)
                _this.errmessage = messages.errormessage;
            else {
                _this.tavolo = messages.tavolo;
                _this.ora_ordine = messages.ora_ordine;
                _this.messages = messages.prodotti;
                _this.errmessage = undefined;
            }
        }, function (err) {
            _this.us.renew().subscribe(function () {
                _this.prossima_ord_pizzaiolo(); // Succeeded
            }, function (err2) {
                _this.logout(); // Error again, we really need to logout
            });
        });
    };
    PizzaioloComponent.prototype.inizio_fine_preparazione = function (inizio_fine, id) {
        var _this = this;
        if (inizio_fine == 0) {
            this.ms.pizza_inizio_preparazione(id).subscribe(function (messages) {
                messages;
            }, function (err) {
                console.log(err);
                _this.errmessage = err;
            });
        }
        else {
            this.ms.pizza_fine_preparazione(id).subscribe(function (messages) {
                if (_this.messages[1] == undefined) {
                    _this.ms.pizze_pronte(_this.messages[0].ordine).subscribe(function (messages) {
                        _this.tavolo = undefined;
                        _this.ora_ordine = undefined;
                        _this.posmessage = "Tutte le pizze dell'ordine sono state preparate correttamente";
                    }, function (err) {
                        console.log(err);
                        _this.errmessage = err;
                    });
                    setTimeout(function () { return _this.posmessage = undefined; }, 2000);
                }
            }, function (err) {
                console.log(err);
                _this.errmessage = err;
            });
        }
    };
    PizzaioloComponent.prototype.logout = function () {
        this.us.logout();
        this.router.navigate(['/']);
    };
    PizzaioloComponent = __decorate([
        core_1.Component({
            selector: 'app-pizzaiolo',
            template: __webpack_require__("./src/app/pizzaiolo/pizzaiolo.component.html"),
            styles: [__webpack_require__("./src/app/pizzaiolo/pizzaiolo.component.css")]
        }),
        __metadata("design:paramtypes", [socketio_service_1.SocketioService, prodotti_service_1.ProductService, user_service_1.UserService, router_1.Router])
    ], PizzaioloComponent);
    return PizzaioloComponent;
}());
exports.PizzaioloComponent = PizzaioloComponent;


/***/ }),

/***/ "./src/app/prodotti.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ErrorObservable_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var ProductService = /** @class */ (function () {
    function ProductService(http, us) {
        this.http = http;
        this.us = us;
    }
    ProductService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                'body was: ' + JSON.stringify(error.error));
        }
        // return an ErrorObservable with a user-facing error message
        return new ErrorObservable_1.ErrorObservable('Something bad happened; please try again later.');
    };
    ProductService.prototype.create_options = function () {
        return {
            headers: new http_1.HttpHeaders({
                authorization: 'Bearer ' + this.us.get_token()
            })
        };
    };
    //           PIZZAIOLO
    ProductService.prototype.prossima_ord_pizzaiolo = function () {
        console.log("%c GET %c /prossima_ord_pizzaiolo", "color: red", "color: black");
        return this.http.get(this.us.url + '/prossima_ord_pizzaiolo', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.pizza_inizio_preparazione = function (id) {
        console.log("%c POST %c /pizza_inizio_preparazione/" + id, "color: red", "color: black");
        return this.http.post(this.us.url + '/pizza_inizio_preparazione/' + id, null, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    ProductService.prototype.pizza_fine_preparazione = function (id) {
        console.log("%c POST %c /pizza_fine_preparazione/" + id, "color: red", "color: black");
        return this.http.post(this.us.url + '/pizza_fine_preparazione/' + id, null, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    ProductService.prototype.pizze_pronte = function (id) {
        console.log("%c POST %c /pizze_pronte/" + id, "color: red", "color: black");
        return this.http.post(this.us.url + '/pizze_pronte/' + id, null, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    //            BARISTA
    ProductService.prototype.prossima_ord_barista = function () {
        console.log("%c GET %c /prossima_ord_barista", "color: red", "color: black");
        return this.http.get(this.us.url + '/prossima_ord_barista', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.bibite_pronte = function (id) {
        console.log("%c POST %c /bibite_pronte/" + id, "color: red", "color: black");
        return this.http.post(this.us.url + '/bibite_pronte/' + id, null, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    ProductService.prototype.abbandona_ordine_bibite = function (id) {
        console.log("%c POST %c /abbandona_ordine_bibite/" + id, "color: red", "color: black");
        console.log(id);
        return this.http.post(this.us.url + '/abbandona_ordine_bibite/' + id, null, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    //            CAMERIERE 
    ProductService.prototype.crea_ordine = function (tavolo, persone) {
        var body = {
            "tavolo": tavolo,
            "persone_da_servire": persone
        };
        console.log("%c POST %c /crea_ordine " + "%c body: " + JSON.stringify(body), "color: red", "color: black", "color: blue");
        return this.http.post(this.us.url + '/crea_ordine', body, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    ProductService.prototype.chiudi_ordine = function (id) {
        console.log("%c POST %c /chiudi_ordine/" + id, "color: red", "color: black");
        return this.http.post(this.us.url + '/chiudi_ordine/' + id, null, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    ProductService.prototype.aggiungi_prodotto = function (id, body) {
        console.log("%c POST %c /aggiungi_prodotto " + "%c body: " + JSON.stringify(body), "color: red", "color: black", "color: blue");
        return this.http.post(this.us.url + '/aggiungi_prodotto/' + id, body, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    ProductService.prototype.ordini_da_consegnare = function () {
        console.log("%c GET %c /ordini_da_consegnare", "color: red", "color: black");
        return this.http.get(this.us.url + '/ordini_da_consegnare', this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    ProductService.prototype.bibite_consegnate = function (id) {
        console.log("%c POST %c /bibite_consegnate/" + id, "color: red", "color: black");
        return this.http.post(this.us.url + '/bibite_consegnate/' + id, null, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    ProductService.prototype.pizze_consegnate = function (id) {
        console.log("%c POST %c /pizze_consegnate/" + id, "color: red", "color: black");
        return this.http.post(this.us.url + '/pizze_consegnate/' + id, null, this.create_options()).pipe(operators_1.catchError(this.handleError));
    };
    //            CASSIERE
    ProductService.prototype.get_tavoli_occupati = function () {
        console.log("%c GET %c /tavoli_occupati", "color: red", "color: black");
        return this.http.get(this.us.url + '/tavoli_occupati', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_informazioni_ordine = function (numero) {
        console.log("%c GET %c /informazioni_ordine/" + numero, "color: red", "color: black");
        return this.http.get(this.us.url + '/informazioni_ordine/' + numero, this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_informazioni_prodotti = function (id) {
        console.log("%c GET %c /informazioni_prodotti/" + id, "color: red", "color: black");
        return this.http.get(this.us.url + '/informazioni_prodotti/' + id, this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_totale = function (tavolo) {
        console.log("%c GET %c /calcolo_totale/" + tavolo, "color: red", "color: black");
        return this.http.get(this.us.url + '/calcolo_totale/' + tavolo, this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.pagamento_ordine = function (tavolo) {
        console.log("%c POST %c /pagamento_ordine/" + tavolo, "color: red", "color: black");
        return this.http.post(this.us.url + '/pagamento_ordine/' + tavolo, null, this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_camerieri = function () {
        console.log("%c GET %c /users_camerieri", "color: red", "color: black");
        return this.http.get(this.us.url + '/users_camerieri', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_pizzaioli = function () {
        console.log("%c GET %c /users_pizzaioli", "color: red", "color: black");
        return this.http.get(this.us.url + '/users_pizzaioli', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_baristi = function () {
        console.log("%c GET %c /users_baristi", "color: red", "color: black");
        return this.http.get(this.us.url + '/users_baristi', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_cassieri = function () {
        console.log("%c GET %c /users_cassieri", "color: red", "color: black");
        return this.http.get(this.us.url + '/users_cassieri', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.incasso_giorno = function () {
        console.log("%c GET %c /incasso_giorno", "color: red", "color: black");
        return this.http.get(this.us.url + '/incasso_giorno', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.incasso_settimana = function () {
        console.log("%c GET %c /incasso_settimana", "color: red", "color: black");
        return this.http.get(this.us.url + '/incasso_settimana', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.incasso_mese = function () {
        console.log("%c GET %c /incasso_mese", "color: red", "color: black");
        return this.http.get(this.us.url + '/incasso_mese', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    //             TUTTI
    ProductService.prototype.get_tavoli = function () {
        console.log("%c GET %c /Elenco_tavoli", "color: red", "color: black");
        return this.http.get(this.us.url + '/Elenco_tavoli', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_bibite = function () {
        console.log("%c GET %c /listino_bibite", "color: red", "color: black");
        return this.http.get(this.us.url + '/listino_bibite', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_pizze = function () {
        console.log("%c GET %c /listino_pizze", "color: red", "color: black");
        return this.http.get(this.us.url + '/listino_pizze', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_aggiunte_bibite = function () {
        console.log("%c GET %c /listino_aggiunte_bibite", "color: red", "color: black");
        return this.http.get(this.us.url + '/listino_aggiunte_bibite', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService.prototype.get_aggiunte_pizze = function () {
        console.log("%c GET %c /listino_aggiunte_pizze", "color: red", "color: black");
        return this.http.get(this.us.url + '/listino_aggiunte_pizze', this.create_options()).pipe(operators_1.tap(function (data) { return data; }), operators_1.catchError(this.handleError));
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, user_service_1.UserService])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/app/socketio.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var Observable_1 = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var io = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
var SocketioService = /** @class */ (function () {
    function SocketioService(us) {
        this.us = us;
    }
    SocketioService.prototype.connect = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            // The observer object must have two functions: next and error.
            // the first is invoked by our observable when new data is available. The
            // second is invoked if an error occurred
            _this.socket = io(_this.us.url);
            _this.socket.on('broadcast', function (m) {
                observer.next(m);
            });
            _this.socket.on('error', function (err) {
                console.log('Socket.io error: ' + err);
                observer.error(err);
            });
            // When the consumer unsubscribes, clean up data ready for next subscription.
            return function () {
                _this.socket.disconnect();
            };
        });
    };
    SocketioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], SocketioService);
    return SocketioService;
}());
exports.SocketioService = SocketioService;


/***/ }),

/***/ "./src/app/user-login/user-login.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n.loginlogo {\n    width: 80px;\n    height: 80px;\n}"

/***/ }),

/***/ "./src/app/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 400px; margin-top: 20px;\" >\n  <div class=\"form-signin text-center loginform \">\n    <img src=\"assets/img/pizza-slice-solid.svg\" class=\"loginlogo\"/>\n\n    <h1 class=\"h3 mb-3 font-weight-normal\">Per favore, inserisci le tue credenziali:</h1>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Username</label>\n    <input type=\"email\" #mailtxt id=\"inputEmail\" class=\"form-control\" placeholder=\"Username\" required autofocus>\n    \n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" #passwdtxt id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n    \n    <div class=\"checkbox mb-3\">\n      <label>\n        <input type=\"checkbox\" #checkr value=\"remember-me\"> Ricordami\n      </label>\n    </div>\n    \n    <div *ngIf=\"errmessage\" class=\"alert alert-danger\" role=\"alert\">\n      Errore di login: {{errmessage}}\n    </div>\n    \n    <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"login( mailtxt.value, passwdtxt.value, checkr.checked );\" >Accedi</button>\n    \n    \n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2019</p>\n\t<p class=\" mb-3 text-muted\">Nicolas Pietro Martignon & Thomas Visentin</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(us, router) {
        this.us = us;
        this.router = router;
        this.errmessage = undefined;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.renew().subscribe(function (d) {
            _this.router.navigate(['/' + _this.us.get_ruolo().toLowerCase()]);
        }, function (err) {
            err;
        });
    };
    UserLoginComponent.prototype.login = function (mail, password, remember) {
        var _this = this;
        this.us.login(mail, password, remember).subscribe(function (d) {
            console.log('Login avvenuto correttamente come: ' + _this.us.get_username().toLowerCase());
            _this.errmessage = undefined;
            _this.router.navigate(['/' + _this.us.get_ruolo().toLowerCase()]);
        }, function (err) {
            console.log('Login error: ' + JSON.stringify(err.error.errormessage));
            _this.errmessage = err.error.errormessage;
        });
    };
    UserLoginComponent = __decorate([
        core_1.Component({
            selector: 'app-user-login',
            template: __webpack_require__("./src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__("./src/app/user-login/user-login.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserLoginComponent);
    return UserLoginComponent;
}());
exports.UserLoginComponent = UserLoginComponent;


/***/ }),

/***/ "./src/app/user-signup/user-signup.component.css":
/***/ (function(module, exports) {

module.exports = "\n.loginlogo {\n    width: 80px;\n    height: 80px;\n}\n\n.ng-valid[required], .ng-valid.required  {\n    border-left: 5px solid #42A948; /* green */\n  }\n\n.ng-invalid:not(form)  {\nborder-left: 5px solid #a94442; /* red */\n}"

/***/ }),

/***/ "./src/app/user-signup/user-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 400px; margin-top: 20px;\" >\n\n<form class=\"form-signin\"  >\n  \n  <div class=\"text-center\">  \n    <img src=\"assets/img/pizza-slice-solid.svg\" class=\"loginlogo\"/>\n    <h1 class=\"h3 mb-3 font-weight-normal\">Registrazione nuovo utente</h1>\n  </div>\n\n <div class=\"form-group\">\n    <label for=\"inputUsername\">Username</label>\n    <input type=\"text\" #username=\"ngModel\" required name=\"username\" [(ngModel)]=\"user.username\" class=\"form-control\" id=\"inputUsername\" placeholder=\"Enter username\">\n  </div>\n\n  <div [hidden]=\"username.valid || username.pristine\"\n      class=\"alert alert-danger\">\n      Username mancante\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputCognome\">Cognome</label>\n    <input type=\"text\" #cognome=\"ngModel\" name=\"cognome\" [(ngModel)]=\"user.cognome\"  class=\"form-control\" required id=\"inputCognome\" aria-describedby=\"cognomeHelp\" placeholder=\"Inserisci cognome\">\n    <small id=\"cognomeHelp\" class=\"form-text text-muted\">I tuoi dati personali non verranno condivisi con nessuno.</small>\n  </div>\n\n  <div [hidden]=\"cognome.valid || cognome.pristine\"\n      class=\"alert alert-danger\">\n      Cognome mancante\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"imputNome\">Nome</label>\n    <input type=\"text\" #nome=\"ngModel\" name=\"nome\" [(ngModel)]=\"user.nome\"  class=\"form-control\" required id=\"inputNome\" aria-describedby=\"nomeHelp\" placeholder=\"Inserisci nome\">\n    <small id=\"nomeHelp\" class=\"form-text text-muted\">I tuoi dati personali non verranno condivisi con nessuno.</small>\n  </div>\n\n  <div [hidden]=\"nome.valid || nome.pristine\"\n      class=\"alert alert-danger\">\n      Nome mancante\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"inputRuolo\">Ruolo</label>\n    <select type=\"text\" #ruolo=\"ngModel\" required name=\"ruolo\" [(ngModel)]=\"user.ruolo\" class=\"form-control\" id=\"inputRuolo\" >\n\t\t<option value=\"Cameriere\">Cameriere</option>\n\t\t<option value=\"Pizzaiolo\">Pizzaiolo</option>\n\t\t<option value=\"Barista\">Barista</option>\n\t\t<option value=\"Cassiere\">Cassiere</option>\n\t</select>\n  </div>\n  \n  <div [hidden]=\"ruolo.valid || ruolo.pristine\"\n      class=\"alert alert-danger\">\n    Ruolo mancante\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"inputPassword\">Password</label>\n    <input type=\"password\" #password=\"ngModel\" required name=\"password\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"inputPassword\" placeholder=\"Password\">\n  </div>\n\n  <div [hidden]=\"password.valid || password.pristine\"\n      class=\"alert alert-danger\">\n    Password mancante\n  </div>\n  \n  \n  <div *ngIf=\"errmessage\" class=\"alert alert-danger\" role=\"alert\">\n    Ops: {{errmessage}}\n  </div>\n  <div *ngIf=\"posmessage\" class=\"alert alert-success\" role=\"alert\">\n     {{posmessage}}\n  </div>\n\n  <button class=\"btn btn-lg btn-primary btn-block mb-4\" [disabled]=\" !cognome.valid || !password.valid || !username.valid || \n  !nome.valid || !ruolo.valid\" (click)=\"signup();\" >Registrati!</button>\n</form>\n</div>"

/***/ }),

/***/ "./src/app/user-signup/user-signup.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UserSignupComponent = /** @class */ (function () {
    function UserSignupComponent(us, router) {
        this.us = us;
        this.router = router;
        this.errmessage = undefined;
        this.posmessage = undefined;
        this.user = {
            username: '',
            cognome: '',
            nome: '',
            ruolo: '',
            password: ''
        };
    }
    UserSignupComponent.prototype.ngOnInit = function () { };
    UserSignupComponent.prototype.signup = function () {
        var _this = this;
        this.us.register(this.user).subscribe(function (d) {
            _this.errmessage = undefined;
            _this.posmessage = "Registrazione andata a buon fine... Tra poco verrai reindirizato alla pagina precedente";
            setTimeout(function () { return _this.router.navigate(['/gestioneutenti']); }, 2000);
        }, function (err) {
            console.log('Signup error: ' + JSON.stringify(err.error.errormessage));
            _this.errmessage = err.error.errormessage || err.error.message;
        });
    };
    UserSignupComponent = __decorate([
        core_1.Component({
            selector: 'app-user-signup',
            template: __webpack_require__("./src/app/user-signup/user-signup.component.html"),
            styles: [__webpack_require__("./src/app/user-signup/user-signup.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], UserSignupComponent);
    return UserSignupComponent;
}());
exports.UserSignupComponent = UserSignupComponent;


/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var operators_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var jwtdecode = __webpack_require__("./node_modules/jwt-decode/lib/index.js");
var ErrorObservable_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.token = '';
        this.url = 'http://80.211.139.226';
    }
    UserService.prototype.create_options = function () {
        return {
            headers: new http_1.HttpHeaders({
                authorization: 'Bearer ' + this.get_token()
            })
        };
    };
    UserService.prototype.login = function (mail, password, remember) {
        var _this = this;
        var options = {
            headers: new http_1.HttpHeaders({
                authorization: 'Basic ' + btoa(mail + ':' + password),
                'cache-control': 'no-cache',
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        return this.http.get(this.url + '/login', options).pipe(operators_1.tap(function (data) {
            _this.token = data.token;
            if (remember) {
                localStorage.setItem('postmessages_token', _this.token);
            }
        }));
    };
    UserService.prototype.renew = function () {
        var _this = this;
        var tk = localStorage.getItem('postmessages_token');
        if (!tk || tk.length < 1) {
            return new ErrorObservable_1.ErrorObservable({
                error: {
                    errormessage: 'No token found in local storage'
                }
            });
        }
        var options = {
            headers: new http_1.HttpHeaders({
                Authorization: 'Bearer ' + tk,
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
            })
        };
        console.log('Renewing token');
        return this.http.get(this.url + '/renew', options).pipe(operators_1.tap(function (data) {
            console.log(JSON.stringify(data));
            _this.token = data.token;
            localStorage.setItem('postmessages_token', _this.token);
        }));
    };
    UserService.prototype.logout = function () {
        console.log('Logging out');
        this.token = '';
        localStorage.setItem('postmessages_token', this.token);
    };
    UserService.prototype.register = function (user) {
        console.log("%c POST %c /utente " + "%c body: " + JSON.stringify(user), "color: red", "color: black", "color: blue");
        return this.http.post(this.url + '/utente', user, this.create_options()).pipe(operators_1.tap(function (data) {
            data;
        }));
    };
    UserService.prototype.get_camerieri = function () {
        console.log("%c GET %c /users_camerieri", "color: red", "color: black");
        return this.http.get(this.url + '/users_camerieri', this.create_options()).pipe(operators_1.tap(function (data) { return data; }));
    };
    UserService.prototype.get_pizzaioli = function () {
        console.log("%c GET %c /users_pizzaioli", "color: red", "color: black");
        return this.http.get(this.url + '/users_pizzaioli', this.create_options()).pipe(operators_1.tap(function (data) { return data; }));
    };
    UserService.prototype.get_baristi = function () {
        console.log("%c GET %c /users_baristi", "color: red", "color: black");
        return this.http.get(this.url + '/users_baristi', this.create_options()).pipe(operators_1.tap(function (data) { return data; }));
    };
    UserService.prototype.get_cassieri = function () {
        console.log("%c GET %c /users_cassieri", "color: red", "color: black");
        return this.http.get(this.url + '/users_cassieri', this.create_options()).pipe(operators_1.tap(function (data) { return data; }));
    };
    UserService.prototype.statistiche_dipendente = function (id) {
        console.log("%c POST %c /statistiche_dipendente/" + id, "color: red", "color: black");
        return this.http.get(this.url + '/statistiche_dipendente/' + id, this.create_options()).pipe(operators_1.tap(function (data) { return data; }));
    };
    UserService.prototype.delete_users = function (id) {
        console.log("%c DELETE %c /utente/" + id, "color: red", "color: black");
        return this.http.delete(this.url + '/utente/' + id, this.create_options()).pipe(operators_1.tap(function (data) {
            data;
        }));
    };
    UserService.prototype.leggi_id = function () {
        var appo = {
            id: this.id,
            tavolo: this.tavolo,
            persone: this.persone
        };
        return appo;
    };
    UserService.prototype.salva_id = function (id, tavolo, persone) {
        this.id = id;
        this.tavolo = tavolo;
        this.persone = persone;
    };
    UserService.prototype.get_token = function () {
        return this.token;
    };
    UserService.prototype.get_username = function () {
        return jwtdecode(this.token).username;
    };
    UserService.prototype.get_name = function () {
        return jwtdecode(this.token).nome;
    };
    UserService.prototype.get_surname = function () {
        return jwtdecode(this.token).cognome;
    };
    UserService.prototype.get_mail = function () {
        return jwtdecode(this.token).mail;
    };
    UserService.prototype.get_id = function () {
        return jwtdecode(this.token).id;
    };
    UserService.prototype.get_ruolo = function () {
        return jwtdecode(this.token).ruolo;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
// Device bootstrap
document.addEventListener('deviceready', function () {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).catch(function (err) {
        return console.log(err);
    });
}, false);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map