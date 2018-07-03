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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-nav-bar></app-nav-bar>\n  <router-outlet></router-outlet>\n\n  <app-mas-informacion></app-mas-informacion>\n  <app-footer></app-footer>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _services_slideshow_slideshow_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/slideshow/slideshow.module */ "./src/app/services/slideshow/slideshow.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _mas_informacion_mas_informacion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mas-informacion/mas-informacion.component */ "./src/app/mas-informacion/mas-informacion.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/redirect/redirect.component */ "./src/app/home/redirect/redirect.component.ts");
/* harmony import */ var _somos_somos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./somos/somos.component */ "./src/app/somos/somos.component.ts");
/* harmony import */ var _programas_programas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./programas/programas.component */ "./src/app/programas/programas.component.ts");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./eventos/eventos.component */ "./src/app/eventos/eventos.component.ts");
/* harmony import */ var _talleres_talleres_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./talleres/talleres.component */ "./src/app/talleres/talleres.component.ts");
/* harmony import */ var _talleres_taller_taller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./talleres/taller/taller.component */ "./src/app/talleres/taller/taller.component.ts");
/* harmony import */ var _consultorias_consultorias_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./consultorias/consultorias.component */ "./src/app/consultorias/consultorias.component.ts");
/* harmony import */ var _interes_interes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./interes/interes.component */ "./src/app/interes/interes.component.ts");
/* harmony import */ var _contactanos_contactanos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contactanos/contactanos.component */ "./src/app/contactanos/contactanos.component.ts");
/* harmony import */ var _programas_programa_programa_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./programas/programa/programa.component */ "./src/app/programas/programa/programa.component.ts");
/* harmony import */ var _eventos_evento_evento_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./eventos/evento/evento.component */ "./src/app/eventos/evento/evento.component.ts");
/* harmony import */ var _interes_inter_inter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interes/inter/inter.component */ "./src/app/interes/inter/inter.component.ts");
/* harmony import */ var _consultorias_consultoria_consultoria_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./consultorias/consultoria/consultoria.component */ "./src/app/consultorias/consultoria/consultoria.component.ts");
/* harmony import */ var _facilitador_facilitador_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./facilitador/facilitador.component */ "./src/app/facilitador/facilitador.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _mas_informacion_mas_informacion_component__WEBPACK_IMPORTED_MODULE_11__["MasInformacionComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _home_redirect_redirect_component__WEBPACK_IMPORTED_MODULE_13__["RedirectComponent"],
                _somos_somos_component__WEBPACK_IMPORTED_MODULE_14__["SomosComponent"],
                _programas_programas_component__WEBPACK_IMPORTED_MODULE_15__["ProgramasComponent"],
                _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_16__["EventosComponent"],
                _talleres_talleres_component__WEBPACK_IMPORTED_MODULE_17__["TalleresComponent"],
                _talleres_taller_taller_component__WEBPACK_IMPORTED_MODULE_18__["TallerComponent"],
                _consultorias_consultorias_component__WEBPACK_IMPORTED_MODULE_19__["ConsultoriasComponent"],
                _interes_interes_component__WEBPACK_IMPORTED_MODULE_20__["InteresComponent"],
                _contactanos_contactanos_component__WEBPACK_IMPORTED_MODULE_21__["ContactanosComponent"],
                _programas_programa_programa_component__WEBPACK_IMPORTED_MODULE_22__["ProgramaComponent"],
                _eventos_evento_evento_component__WEBPACK_IMPORTED_MODULE_23__["EventoComponent"],
                _interes_inter_inter_component__WEBPACK_IMPORTED_MODULE_24__["InterComponent"],
                _consultorias_consultoria_consultoria_component__WEBPACK_IMPORTED_MODULE_25__["ConsultoriaComponent"],
                _facilitador_facilitador_component__WEBPACK_IMPORTED_MODULE_26__["FacilitadorComponent"]
            ],
            imports: [
                _services_slideshow_slideshow_module__WEBPACK_IMPORTED_MODULE_7__["SlideshowModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBJEdVHjvmAtnZ-QDJ35AwfwEk0fphDalw'
                })
            ],
            providers: [
                _app_routing__WEBPACK_IMPORTED_MODULE_4__["appRoutingProviders"],
                _services_nav_service__WEBPACK_IMPORTED_MODULE_6__["NavService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingProviders, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingProviders", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _somos_somos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./somos/somos.component */ "./src/app/somos/somos.component.ts");
/* harmony import */ var _talleres_talleres_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talleres/talleres.component */ "./src/app/talleres/talleres.component.ts");
/* harmony import */ var _talleres_taller_taller_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./talleres/taller/taller.component */ "./src/app/talleres/taller/taller.component.ts");
/* harmony import */ var _programas_programas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programas/programas.component */ "./src/app/programas/programas.component.ts");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventos/eventos.component */ "./src/app/eventos/eventos.component.ts");
/* harmony import */ var _consultorias_consultorias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consultorias/consultorias.component */ "./src/app/consultorias/consultorias.component.ts");
/* harmony import */ var _consultorias_consultoria_consultoria_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consultorias/consultoria/consultoria.component */ "./src/app/consultorias/consultoria/consultoria.component.ts");
/* harmony import */ var _interes_interes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interes/interes.component */ "./src/app/interes/interes.component.ts");
/* harmony import */ var _interes_inter_inter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interes/inter/inter.component */ "./src/app/interes/inter/inter.component.ts");
/* harmony import */ var _contactanos_contactanos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contactanos/contactanos.component */ "./src/app/contactanos/contactanos.component.ts");
/* harmony import */ var _programas_programa_programa_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./programas/programa/programa.component */ "./src/app/programas/programa/programa.component.ts");
/* harmony import */ var _eventos_evento_evento_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eventos/evento/evento.component */ "./src/app/eventos/evento/evento.component.ts");
/* harmony import */ var _facilitador_facilitador_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./facilitador/facilitador.component */ "./src/app/facilitador/facilitador.component.ts");

//import components
// import { LoginComponent } from './login/login.component';














// import { Programa } from './modelo/programa';
var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'somos', component: _somos_somos_component__WEBPACK_IMPORTED_MODULE_2__["SomosComponent"] },
    { path: 'talleres', component: _talleres_talleres_component__WEBPACK_IMPORTED_MODULE_3__["TalleresComponent"] },
    { path: 'taller/:id', component: _talleres_taller_taller_component__WEBPACK_IMPORTED_MODULE_4__["TallerComponent"] },
    { path: 'programas', component: _programas_programas_component__WEBPACK_IMPORTED_MODULE_5__["ProgramasComponent"] },
    { path: 'programa/:id', component: _programas_programa_programa_component__WEBPACK_IMPORTED_MODULE_12__["ProgramaComponent"] },
    { path: 'eventos', component: _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_6__["EventosComponent"] },
    { path: 'evento/:id', component: _eventos_evento_evento_component__WEBPACK_IMPORTED_MODULE_13__["EventoComponent"] },
    { path: 'consultorias', component: _consultorias_consultorias_component__WEBPACK_IMPORTED_MODULE_7__["ConsultoriasComponent"] },
    { path: 'consultoria/:id', component: _consultorias_consultoria_consultoria_component__WEBPACK_IMPORTED_MODULE_8__["ConsultoriaComponent"] },
    { path: 'interes', component: _interes_interes_component__WEBPACK_IMPORTED_MODULE_9__["InteresComponent"] },
    { path: 'inter/:id', component: _interes_inter_inter_component__WEBPACK_IMPORTED_MODULE_10__["InterComponent"] },
    { path: 'contactanos', component: _contactanos_contactanos_component__WEBPACK_IMPORTED_MODULE_11__["ContactanosComponent"] },
    { path: 'facilitador/:id', component: _facilitador_facilitador_component__WEBPACK_IMPORTED_MODULE_14__["FacilitadorComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] } //ruta redir
];
var appRoutingProviders = [];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/consultorias/consultoria/consultoria.component.css":
/*!********************************************************************!*\
  !*** ./src/app/consultorias/consultoria/consultoria.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .program {\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.program > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0.3em 4em 3.3em;\r\n    text-align: left;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n} */"

/***/ }),

/***/ "./src/app/consultorias/consultoria/consultoria.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/consultorias/consultoria/consultoria.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class=\"program\" [ngStyle]=\"{'background': 'url('+ consult.photo +') no-repeat center'}\">\n  <div class=\"centered\">\n    <br>\n    <span style=\"font-size: 0.5em; font-weight:bold;\"> {{consult.line1}} </span>\n    <br>\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{consult.name}} </span>\n    <br>\n  </div>\n</div>\n\n<div class='bg1 padding1 center'>\n  <h2 class='sub-title'>Objetivo</h2>\n  <div class=\"padding3\" style=\"max-width: 45em; margin: auto; text-align: justify;\"> {{consult.objective}} </div>\n</div>\n\n<div class=\"cecap-3 padding1\" width=\"4em;\">\n  <h2 class='sub-title' style=\"color: white;\">Alcance</h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 360px; height:auto;' *ngFor=\"let scope of consult.scopes\">\n      <p style=\"text-align:center;\"> {{scope.name}} </p>\n    </div>\n    <!-- <div class='objective' style='width: 360px; height:auto;'>\n      <p style=\"text-align:center;\">Identificación de valores compartidos.\n      </p>\n    </div>\n    <div class='objective' style='width: 360px; height:auto;'>\n      <p style=\"text-align:center;\">Análisis y mapeo de relaciones con grupos de interés.\n      </p>\n    </div>\n    <div class='objective' style='width: 360px; height:auto;'>\n      <p style=\"text-align:center;\">Capacitación y sensibilización al personal clave de la organización sobre aspectos de planificación estratégica con una visión compartida.\n      </p>\n    </div>\n    <div class='objective' style='width: 360px; height:auto;'>\n      <p style=\"text-align:center;\">Elaboración del Plan Estratégico Empresarial con visión compartida.\n      </p>\n    </div>\n    <div class='objective' style='width: 360px; height:auto;'>\n      <p style=\"text-align:center;\">Cuadro de Mando (Balanced Scorecard)\n      </p>\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/consultorias/consultoria/consultoria.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/consultorias/consultoria/consultoria.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConsultoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultoriaComponent", function() { return ConsultoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsultoriaComponent = /** @class */ (function () {
    function ConsultoriaComponent(route, _peticionesService) {
        this.route = route;
        this._peticionesService = _peticionesService;
    }
    ConsultoriaComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this.route.params.subscribe(function (params) {
            _this.consultId = params.id;
            _this.findConsult();
        });
    };
    ConsultoriaComponent.prototype.findConsult = function () {
        var _this = this;
        this._peticionesService.getConsult(this.consultId).subscribe(function (res) {
            _this.consult = res;
            _this.consult.line1 = 'Consultoria en';
            // console.log(this.consult)
        });
    };
    ConsultoriaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultoria',
            template: __webpack_require__(/*! ./consultoria.component.html */ "./src/app/consultorias/consultoria/consultoria.component.html"),
            styles: [__webpack_require__(/*! ./consultoria.component.css */ "./src/app/consultorias/consultoria/consultoria.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], ConsultoriaComponent);
    return ConsultoriaComponent;
}());



/***/ }),

/***/ "./src/app/consultorias/consultorias.component.css":
/*!*********************************************************!*\
  !*** ./src/app/consultorias/consultorias.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/consultorias/consultorias.component.html":
/*!**********************************************************!*\
  !*** ./src/app/consultorias/consultorias.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class='bg2 padding3'>\n      <h2 class='sub-title'> {{home.consultoria.tittle}} </h2>\n      <h4 style=\"text-align: center; max-width: 30em; margin: auto; font-weight: 200; padding: 1em;\"> {{home.consultoria.line}} </h4>\n      <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n            <div class='objective card' style='width: 350px; height:auto; padding: 0% !important;' *ngFor=\"let consult of consulting\">\n                  <img [src]=consult.photo style=\"width: 100%; border-radius: 5px 5px 0 0;\">\n                  <div class=\"padding1\">\n                        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{consult.name}} </p>\n                        <!-- <p style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Planificacion Estrategica Empresarial</p> -->\n                        <div class=\"right padding1\">\n                              <a routerLink=\"/consultoria/{{consult._id}}\" style=\"text-decoration:none;font-size: 0.8em; color: dodgerblue;\">LEER MAS</a>\n                        </div>\n                  </div>\n            </div>\n      </div>\n</div>\n<!-- <app-mas-informacion></app-mas-informacion> -->"

/***/ }),

/***/ "./src/app/consultorias/consultorias.component.ts":
/*!********************************************************!*\
  !*** ./src/app/consultorias/consultorias.component.ts ***!
  \********************************************************/
/*! exports provided: ConsultoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultoriasComponent", function() { return ConsultoriasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConsultoriasComponent = /** @class */ (function () {
    function ConsultoriasComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    ConsultoriasComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
        });
        this._peticionesService.getConsults().subscribe(function (res) {
            _this.consulting = res;
        });
    };
    ConsultoriasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consultorias',
            template: __webpack_require__(/*! ./consultorias.component.html */ "./src/app/consultorias/consultorias.component.html"),
            styles: [__webpack_require__(/*! ./consultorias.component.css */ "./src/app/consultorias/consultorias.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], ConsultoriasComponent);
    return ConsultoriasComponent;
}());



/***/ }),

/***/ "./src/app/contactanos/contactanos.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contactanos/contactanos.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 40em;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n.sub-tittle {\r\n    /* margin: 0 !important; */\r\n}"

/***/ }),

/***/ "./src/app/contactanos/contactanos.component.html":
/*!********************************************************!*\
  !*** ./src/app/contactanos/contactanos.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\">\r\n    <div class='bg1'>\r\n        <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\r\n            <div class='objective' style='width: 250px; height:auto;cursor: pointer;' (click)=\"load(of._id);\" *ngFor=\"let of of offices\">\r\n                <h2 [id]=of.name class='sub-title'> {{of.name}} </h2>\r\n                <span style=\"text-align:center;\"> {{of.ubicacion}}\r\n                    <br>\r\n                    <strong style=\"font-weight: bold;\">Teléfonos:</strong>\r\n                    <br> {{of.phones}}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"16\" [scrollwheel]=\"false\">\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n    </agm-map>\r\n</div>"

/***/ }),

/***/ "./src/app/contactanos/contactanos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contactanos/contactanos.component.ts ***!
  \******************************************************/
/*! exports provided: ContactanosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactanosComponent", function() { return ContactanosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactanosComponent = /** @class */ (function () {
    function ContactanosComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
        // title: string = 'My first AGM project';
        this.lat = -17.752208;
        this.lng = -63.169071;
    }
    ContactanosComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this._peticionesService.getSucursales().subscribe(function (res) {
            _this.offices = res;
            var _loop_1 = function (i) {
                if (_this.offices[i].name == 'Santa Cruz') {
                    setTimeout(function () {
                        document.getElementById(_this.offices[i].name).style.color = '#3eb4b6';
                    }, 0);
                }
            };
            for (var i = 0; i < _this.offices.length; i++) {
                _loop_1(i);
            }
        });
    };
    ContactanosComponent.prototype.load = function (of_id) {
        var _this = this;
        var _loop_2 = function (i) {
            if (this_1.offices[i]._id == of_id) {
                setTimeout(function () {
                    document.getElementById(_this.offices[i].name).style.color = '#3eb4b6';
                    _this.lat = _this.offices[i].lat;
                    _this.lng = _this.offices[i].lng;
                }, 0);
            }
            else {
                setTimeout(function () {
                    document.getElementById(_this.offices[i].name).style.color = '#555';
                }, 0);
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.offices.length; i++) {
            _loop_2(i);
        }
    };
    ContactanosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactanos',
            template: __webpack_require__(/*! ./contactanos.component.html */ "./src/app/contactanos/contactanos.component.html"),
            styles: [__webpack_require__(/*! ./contactanos.component.css */ "./src/app/contactanos/contactanos.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], ContactanosComponent);
    return ContactanosComponent;
}());



/***/ }),

/***/ "./src/app/eventos/evento/Evento.component.css":
/*!*****************************************************!*\
  !*** ./src/app/eventos/evento/Evento.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".event {\r\n    /* background: url(\"../../../assets/eventa-cecap-36.jpg\") no-repeat center;  */\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.event > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0.3em 4em 3.3em;\r\n    text-align: left;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/eventos/evento/Evento.component.html":
/*!******************************************************!*\
  !*** ./src/app/eventos/evento/Evento.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class=\"event\" [ngStyle]=\"{'background': 'url('+ event.photo +') no-repeat center'}\">\n  <div class=\"centered\">\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{event.line2}} </span>\n    <br>\n    <span style=\"font-size: 0.5em; font-weight:bold;\"> {{event.line1}} </span>\n    <br>\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{event.name}} </span>\n    <br>\n    <p style=\"max-width: 35em;\"> {{event.description}} </p>\n  </div>\n</div>\n\n<div class='bg1 padding1 center'>\n  <h2 class='sub-title'>Objetivo</h2>\n  <div class=\"padding3\" style=\"max-width: 45em; margin: auto; text-align: justify;\"> {{event.objective}}\n    <p>Mayor informacion del Programa pinche\n      <a routerLink=\"/programa/{{event.program_id}}\">aqui</a>\n    </p>\n  </div>\n</div>\n\n<div class=\"cecap-3 padding1\" width=\"4em;\">\n  <h2 class='sub-title' style=\"color: white;\"> Facilitadores </h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 250px; height:auto;' *ngFor=\"let facilitator of event.facilitators\">\n      <img class=\"img\" [src]=facilitator.photo />\n       <p style='margin:auto; text-align: center; font-size: 1.2em; font-weight: 700; font-family: Raleway;'><a routerLink=\"/facilitador/{{facilitator._id}}\">{{facilitator.name}}</a></p>\n      <p style=\"text-align:center;\"> {{facilitator.job}} </p>\n     <a [href]=facilitator.social[0]>\n        <i class=\"fa fa-facebook\" style=\"color:white\"></i>\n      </a>\n      <a [href]=facilitator.social[1]>\n        <i class=\"fa fa-linkedin\" style=\"color:white\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"cecap-3 padding1\" width=\"4em;\">\n  <h2 class='sub-title' style=\"color: white;\">Contenido</h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 360px; height:auto;' *ngFor=\"let module of event.modules\">\n      <p style='margin:auto; text-align: center; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{module.name}} </p>\n      <p style=\"text-align:center;\"> {{module.description}} </p>\n    </div>\n  </div>\n</div> -->\n\n<div class='bg1 padding1'>\n  <h2 class='sub-title padding1'>Beneficios</h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 250px; height:auto;' *ngFor=\"let ben of event.benefit\">\n      <img [src]=ben.photo/>\n      <p style='margin:auto; text-align: center; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{ben.name}} </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/eventos/evento/evento.component.ts":
/*!****************************************************!*\
  !*** ./src/app/eventos/evento/evento.component.ts ***!
  \****************************************************/
/*! exports provided: EventoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoComponent", function() { return EventoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventoComponent = /** @class */ (function () {
    function EventoComponent(route, _peticionesService) {
        this.route = route;
        this._peticionesService = _peticionesService;
    }
    EventoComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this.route.params.subscribe(function (params) {
            _this.eventId = params.id;
            _this.findEvent();
        });
    };
    EventoComponent.prototype.findEvent = function () {
        var _this = this;
        this._peticionesService.getEvent(this.eventId).subscribe(function (res) {
            _this.event = res[0];
            _this.event.line1 = 'Entrenamiento de';
            console.log(_this.event);
        });
    };
    EventoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Evento',
            template: __webpack_require__(/*! ./Evento.component.html */ "./src/app/eventos/evento/Evento.component.html"),
            styles: [__webpack_require__(/*! ./Evento.component.css */ "./src/app/eventos/evento/Evento.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EventoComponent);
    return EventoComponent;
}());



/***/ }),

/***/ "./src/app/eventos/eventos.component.css":
/*!***********************************************!*\
  !*** ./src/app/eventos/eventos.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/eventos/eventos.component.html":
/*!************************************************!*\
  !*** ./src/app/eventos/eventos.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='bg2 padding3' id=\"init\">\n      <h2 class='sub-title'> {{home.home.events.line1}} </h2>\n      <h4 style=\"text-align: center; max-width: 30em; margin: auto; font-weight: 200; padding: 1em;\"> {{home.home.events.line2}} </h4>\n      <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n            <div class='objective card' style='width: 350px; height:auto; padding: 0% !important;' *ngFor=\"let event of events\">\n                  <img [src]=event.photo style=\"width: 100%; border-radius: 5px 5px 0 0;\">\n                  <div class=\"padding1\">\n                        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{event.name}} </p>\n                        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1em; font-weight: 700; font-family: Raleway;'> Fecha Inicio: {{event.date_start}} </p>\n                        <div class=\"right padding1\">\n                              <a routerLink=\"/evento/{{event._id}}\" style=\"text-decoration:none;font-size: 0.8em; color: #6120ea;font-weight:700;\">MAS INFORMACION</a>\n                        </div>\n                  </div>\n            </div>\n      </div>\n</div>\n<!-- <app-mas-informacion></app-mas-informacion> -->"

/***/ }),

/***/ "./src/app/eventos/eventos.component.ts":
/*!**********************************************!*\
  !*** ./src/app/eventos/eventos.component.ts ***!
  \**********************************************/
/*! exports provided: EventosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosComponent", function() { return EventosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventosComponent = /** @class */ (function () {
    function EventosComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    EventosComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
        });
        this._peticionesService.getEvents().subscribe(function (res) {
            _this.events = res;
        });
    };
    EventosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eventos',
            template: __webpack_require__(/*! ./eventos.component.html */ "./src/app/eventos/eventos.component.html"),
            styles: [__webpack_require__(/*! ./eventos.component.css */ "./src/app/eventos/eventos.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], EventosComponent);
    return EventosComponent;
}());



/***/ }),

/***/ "./src/app/facilitador/facilitador.component.css":
/*!*******************************************************!*\
  !*** ./src/app/facilitador/facilitador.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".facilitator {\r\n    /* background: url(\"../../../assets/facilitatora-cecap-36.jpg\") no-repeat center;  */\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.facilitator > div{\r\n    display: flex;\r\n}\r\n.facilitator > div > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 4em 0.3em 4em 3.3em;\r\n    text-align: left;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\nimg{\r\n    border-radius: 50%;\r\n}\r\n@media screen and (max-width: 850px) {\r\n    .facilitator >div{\r\n        display: table;\r\n        margin: auto;\r\n    }\r\n    .facilitator > div >div{\r\n        padding: 1.5em;\r\n        width: auto;\r\n    }\r\n    img{\r\n        width: 14em;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/facilitador/facilitador.component.html":
/*!********************************************************!*\
  !*** ./src/app/facilitador/facilitador.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class=\"facilitator\" [ngStyle]=\"{'background': 'url('+ facilitator.background +') no-repeat center'}\">\n  <div>\n    <div class=\"centered\">\n      <span style=\"font-size: 1em; font-weight:bold;\"> {{facilitator.line1}} </span>\n      <br>\n      <span style=\"font-size: 0.5em; font-weight:bold;\"> {{facilitator.job}} </span>\n      <br>\n      <span style=\"font-size: 1em; font-weight:bold;\"> {{facilitator.name}} </span>\n      <br>\n      <p style=\"max-width: 35em;\"> {{facilitator.review}} </p>\n    </div>\n    <div>\n      <img [src]=\"facilitator.photo\">\n    </div>\n  </div>\n</div>\n<div class='bg2 padding1'>\n  <h2 class='sub-title'> Detalles </h2>\n  <div style=\"text-align: left; max-width: 30em; margin: auto;\">\n    <p *ngFor=\"let desc of facilitator.descriptions\">\n      {{desc}}\n    </p>\n  </div>\n</div>\n<div class='bg1 padding1 center'>\n  <h2 class='sub-title'> Experiencia Laboral </h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 270px; height:auto;' *ngFor=\"let enter of facilitator.enterprises\">\n      <img [src]=enter />\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/facilitador/facilitador.component.ts":
/*!******************************************************!*\
  !*** ./src/app/facilitador/facilitador.component.ts ***!
  \******************************************************/
/*! exports provided: FacilitadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitadorComponent", function() { return FacilitadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FacilitadorComponent = /** @class */ (function () {
    function FacilitadorComponent(route, _peticionesService) {
        this.route = route;
        this._peticionesService = _peticionesService;
    }
    FacilitadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this.route.params.subscribe(function (params) {
            _this.facilitatorId = params.id;
            _this.findFacilitator();
        });
    };
    FacilitadorComponent.prototype.findFacilitator = function () {
        var _this = this;
        this._peticionesService.getFacilitator(this.facilitatorId).subscribe(function (res) {
            _this.facilitator = res;
            console.log(_this.facilitator);
            // this.facilitator.line1= 'Facilitador'
        });
    };
    FacilitadorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-facilitador',
            template: __webpack_require__(/*! ./facilitador.component.html */ "./src/app/facilitador/facilitador.component.html"),
            styles: [__webpack_require__(/*! ./facilitador.component.css */ "./src/app/facilitador/facilitador.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_2__["PeticionesService"]])
    ], FacilitadorComponent);
    return FacilitadorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n    cursor: pointer;\r\n}\r\n.cecap-5 { \r\n    background: linear-gradient(-15deg, rgba(26,35,126) 4%, rgb(27,90,248) 96.6%); \r\n    background-size: cover; \r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container cecap-5 center\" style=\"color: white;\" width=\"4em;\">\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:83em;\">\n    <div class='objective' style='width: 250px; height:auto; padding: 0;'>\n      <img style=\"width: 250px;\" src='assets/logo.png' />\n    </div>\n    <div class='objective' style='width: 170px; height:auto; padding: 1em 0;'>\n      <span routerLink='/'>INICIO</span>\n    </div>\n    <div class='objective' style='width: 170px; height:auto; padding: 1em 0;'>\n      <span routerLink='/somos'>QUIENES SOMOS</span>\n    </div>\n    <div class='objective' style='width: 170px; height:auto; padding: 1em 0;'>\n      <span routerLink=\"/programas\">PROGRAMAS</span>\n      <div class=\"fotter\">\n        <span *ngFor=\"let program of programs\" routerLink=\"/programa/{{program._id}}\">\n          {{program.name}}\n        </span>\n      </div>\n    </div>\n    <div class='objective' style='width: 170px; height:auto; padding: 1em 0;'>\n      <span routerLink=\"/programas\">TALLERES</span>\n      <div class=\"fotter\">\n        <span *ngFor=\"let workshop of workshops\" routerLink=\"/taller/{{workshop._id}}\">\n          {{workshop.name}}\n        </span>\n      </div>\n    </div>\n    <div class='objective' style='width: 170px; height:auto; padding: 1em 0;'>\n      <span routerLink=\"/programas\">CONSULTORIAS</span>\n      <div class=\"fotter\">\n        <span *ngFor=\"let consult of consults\" routerLink=\"/consultoria/{{consult._id}}\">\n          {{consult.name}}\n        </span>\n      </div>\n    </div>\n    <div class='objective' style='width: 170px; height:auto; padding: 1em 0;'>\n      <span routerLink=\"/programas\">DE MAXIMO INTERES</span>\n      <div class=\"fotter\">\n        <span *ngFor=\"let interes of home.interes.list\" routerLink=\"/inter/{{interes._id}}\" style=\"display: table;\">\n          {{interes.tittle}}\n        </span>\n      </div>\n    </div>\n    <div class='objective' style='width: 170px; height:auto; padding: 1em 0;'>\n      <span routerLink='/contactanos'>CONTACTANOS</span>\n    </div>\n  </div>\n  <hr style=\"width: 50%\">\n  <div class=\"copyright padding1\">\n    &#169; CECAP Consulting 2018 - Todos los derechos reservados\n    <a href=\"https://www.facebook.com/entrenamientodeconsultores.cecap/\">\n      <i class=\"fa fa-facebook padding1\" style=\"color:white;\"></i>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._peticionesService.getPrograms().subscribe(function (res) {
            _this.programs = res;
        });
        this._peticionesService.getWorkshops().subscribe(function (res) {
            _this.workshops = res;
        });
        this._peticionesService.getConsults().subscribe(function (res) {
            _this.consults = res;
        });
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
            console.log(_this.home);
        });
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".module {\r\n    /* background: url(\"../../assets/fondo.jpg\") no-repeat center;  */\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.module > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0.3em 4em 3.3em;\r\n    text-align: left;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\n.module1 {\r\n    /* background: linear-gradient(-15deg, rgba(0,202,157, 0.6) 3%, rgba(251,255,193,0.6) 33%, transparent 65%), url(\"../../assets/cecap-1.jpg\") no-repeat center;  */\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.module1 > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 7em 0.3em 2em 0.3em;\r\n    text-align: center;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\n.module2 {\r\n    /* background: linear-gradient(-13deg, rgba(187,45,168, 0.6) 0.4%, rgba(197,66,18,0.8) 36.6%, transparent 60%),url(\"../../assets/cecap-2.jpg\") no-repeat center;  */\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.module2 > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 7em 0.3em 2em 0.3em;\r\n    text-align: center;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\n.module3 {\r\n    background: url('somos.jpg') no-repeat center; \r\n    overflow: hidden;\r\n    background-size: cover;\r\n    color: white;\r\n}\r\n.module3 > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0em 4em 0em;\r\n    text-align: center;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\n.module4 {\r\n    background: url('interes.jpg') no-repeat center; \r\n    overflow: hidden;\r\n    background-size: cover;\r\n    color: white;\r\n}\r\n.module4 > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0em 4em 0em;\r\n    text-align: center;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\np.tittle2{\r\n    margin:auto; \r\n    cursor: pointer;\r\n    text-align: center; \r\n    color:#1c3844; \r\n    font-size: 1.2em; \r\n    font-weight: 700; \r\n    font-family: Raleway;\r\n}\r\n.centered > .mainTittle{\r\n    font-size: 1em; font-weight:bold;\r\n}\r\n@media screen and (max-width: 450px) {\r\n    .centered > .mainTittle{\r\n        font-size: 0.7em;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myDIV\">\n  <!-- inicio -->\n  <div id='init' class=\"module\" [ngStyle]=\"{'background': 'url('+ home.home.inicio.photo +') no-repeat center'}\">\n    <div class=\"centered\">\n      <span class=\"mainTittle\">{{home.home.inicio.line1}}</span>\n      <br>\n      <span class=\"mainTittle\">{{home.home.inicio.line2}}</span>\n      <br>\n      <span style=\"line-height: 0em;\">{{home.home.inicio.line3}}</span>\n      <br>\n      <button class=\"btn2 primary mat-raised-button\" (click)=\"info()\" style=\" color: white;\">Contactanos</button>\n    </div>\n  </div>\n  <!-- servicios -->\n  <div class='bg1 padding1'>\n    <h2 class='sub-title'>{{home.home.services.tittle}}</h2>\n    <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n      <div class='objective' style='width: 250px; height:auto;' *ngFor=\"let service of home.home.services.services\">\n        <img [src]=service.photo />\n        <p class=\"tittle2\" (click)=\"send(service.number);\">{{service.tittle}}</p>\n        <p style=\"text-align:center;\">{{service.description}}</p>\n      </div>\n    </div>\n  </div>\n  <!-- lo nuestro -->\n  <div id=\"nuestro\" class=\"module1\" [ngStyle]=\"{'background': 'linear-gradient(-15deg, rgba(0,202,157, 0.6) 3%, rgba(251,255,193,0.6) 33%, transparent 65%), url('+ home.home.our.photo +') no-repeat center'}\">\n    <div class=\"padding1\">\n      {{home.home.our.line1}}\n      <br>\n      <span>{{home.home.our.line2}}</span>\n      <br>\n      <button class=\"btn1 secundary mat-raised-button\" (click)=\"read(1);\">Leer mas</button>\n    </div>\n  </div>\n  <div id=\"uno\" class='bg1 padding1' style=\"display: none;\">\n    <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n      <div class='objective' style='width: 400px; height:auto;' *ngFor=\"let dif of home.home.our.list\">\n        <img [src]=dif.photo />\n        <p style='margin:auto; text-align: center; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'>{{dif.tittle}}</p>\n        <p style=\"text-align:justify;\">{{dif.description}}</p>\n      </div>\n    </div>\n    <a href=\"#nuestro\" style=\"text-decoration: none;\">\n      <button class=\"close\" (click)=\"hide(1);\">X</button>\n    </a>\n  </div>\n  <!-- eventos -->\n  <div *ngIf=\"show\" class=\"silderContainer\">\n    <slideshow [height]=\"height\" [autoPlay]=\"true\" [lazyLoad]=\"imageSources?.length > 1\" [showDots]=\"true\" [showCaptions]=\"true\"\n      [imageUrls]=\"imageUrlArray\" [stopAutoPlayOnSlide]=\"false\"></slideshow>\n  </div>\n  <div *ngIf=\"!show\" class=\"module2\" [ngStyle]=\"{'background': 'linear-gradient(-15deg, rgba(0,202,157, 0.6) 3%, rgba(251,255,193,0.6) 33%, transparent 65%), url('+ home.home.events.photo +') no-repeat center'}\">\n    <div class=\"padding1\">\n      {{home.home.events.line1}}\n      <br>\n      <span>{{home.home.events.line1}}</span>\n      <br>\n      <!-- <button class=\"btn1 secundary mat-raised-button\" onclick=\"read(2);\">Leer mas</button> -->\n    </div>\n  </div>\n  <!-- team -->\n\n  <div class=\"cecap-3 padding1\" width=\"4em;\">\n    <h2 class='sub-title' style=\"color: white;\"> {{home.home.team.tittle}} </h2>\n    <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n      <div class='objective' style='width: 250px; height:auto;' *ngFor=\"let member of home.home.team.member\">\n        <img class=\"img\" [src]=member.photo />\n        <p style='margin:auto; text-align: center; font-size: 1.2em; font-weight: 700; font-family: Raleway;'>{{member.name}}</p>\n        <p style=\"text-align:center;\"> {{member.charge}} </p>\n        <a [href]=member.social[0]>\n          <i class=\"fa fa-facebook\" style=\"color:white\"></i>\n        </a>\n        <a [href]=member.social[1]>\n          <i class=\"fa fa-linkedin\" style=\"color:white\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n  <!-- fotos -->\n  <div class='bg2 padding1'>\n    <h2 class='sub-title'> {{home.home.galery.tittle}} </h2>\n    <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n      <div class='objective' style='width: 250px; height:auto;' *ngFor=\"let photo of home.home.galery.photos\">\n        <img [src]=photo.photo />\n      </div>\n    </div>\n  </div>\n  <!-- clientes -->\n  <div class='bg1 padding1 center'>\n    <h2 class='sub-title'> {{home.home.clients.tittle}} </h2>\n    <div class=\"padding1\">\n      {{home.home.clients.line}}\n    </div>\n    <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n      <div class='objective' style='width: 120px; height:auto;' *ngFor=\"let list of home.home.clients.list\">\n        <img [src]=list.photo />\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div id=\"dos\" class='bg1 padding1' style=\"display: none;\">\n    <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n      <div class='objective card' style='width: 350px; height:auto;'>\n        <p style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Gestion 2018</p>\n        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'>Santa Cruz</p>\n        <div style=\"text-align: left;\">\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>PROGRAMA:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Comercio Exterior</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Inicio:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>25 de Junio</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Horario:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>19:00 a 22:00</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Duracion:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>8 semanas</span>\n          <br>\n          <a href=\"#\" style=\"font-size: 0.8em; color: dodgerblue;\">Mas Informacion</a>\n          <br>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>PROGRAMA:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Proyectos</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Inicio:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>25 de Julio</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Horario:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>19:00 a 22:00</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Duracion:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>8 semanas</span>\n          <br>\n          <a href=\"#\" style=\"font-size: 0.8em; color: dodgerblue;\">Mas Informacion</a>\n        </div>\n      </div>\n      <div class='objective card' style='width: 350px; height:auto;'>\n        <p style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Gestion 2018</p>\n        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'>Cochabamba</p>\n        <div style=\"text-align: left;\">\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>PROGRAMA:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Comercio Exterior</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Inicio:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>25 de Junio</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Horario:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>19:00 a 22:00</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Duracion:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>8 semanas</span>\n          <br>\n          <a href=\"#\" style=\"font-size: 0.8em; color: dodgerblue;\">Mas Informacion</a>\n          <br>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>PROGRAMA:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Proyectos</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Inicio:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>25 de Julio</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Horario:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>19:00 a 22:00</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Duracion:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>8 semanas</span>\n          <br>\n          <a href=\"#\" style=\"font-size: 0.8em; color: dodgerblue;\">Mas Informacion</a>\n        </div>\n      </div>\n      <div class='objective card' style='width: 350px; height:auto;'>\n        <p style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Gestion 2018</p>\n        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'>La Paz</p>\n        <div style=\"text-align: left;\">\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>PROGRAMA:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Comercio Exterior</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Inicio:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>25 de Junio</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Horario:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>19:00 a 22:00</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Duracion:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>8 semanas</span>\n          <br>\n          <a href=\"#\" style=\"font-size: 0.8em; color: dodgerblue;\">Mas Informacion</a>\n          <br>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>PROGRAMA:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Proyectos</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Inicio:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>25 de Julio</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Horario:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>19:00 a 22:00</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Duracion:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>8 semanas</span>\n          <br>\n          <a href=\"#\" style=\"font-size: 0.8em; color: dodgerblue;\">Mas Informacion</a>\n        </div>\n      </div>\n      <div class='objective card' style='width: 350px; height:auto;'>\n        <p style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Gestion 2018</p>\n        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'>Sucre</p>\n        <div style=\"text-align: left;\">\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>PROGRAMA:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Comercio Exterior</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Inicio:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>25 de Junio</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Horario:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>19:00 a 22:00</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Duracion:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>8 semanas</span>\n          <br>\n          <a href=\"#\" style=\"font-size: 0.8em; color: dodgerblue;\">Mas Informacion</a>\n          <br>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>PROGRAMA:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Proyectos</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Inicio:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>25 de Julio</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Horario:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>19:00 a 22:00</span>\n          <br>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 700; font-family: Raleway;'>Duracion:</span>\n          <span style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>8 semanas</span>\n          <br>\n          <a href=\"#\" style=\"font-size: 0.8em; color: dodgerblue;\">Mas Informacion</a>\n        </div>\n      </div>\n    </div>\n\n    <button class=\"close\" onclick=\"hide(2);\">X</button>\n  </div> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/nav.service */ "./src/app/services/nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_peticionesService, navService) {
        this._peticionesService = _peticionesService;
        this.navService = navService;
        this.imageUrlArray = [];
        this.height = '34em';
        this.show = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
            _this._peticionesService.getEvents().subscribe(function (res) {
                _this.events = res;
                if (_this.events.length > 0) {
                    _this.show = true;
                    for (var i = 0; i < _this.events.length; i++) {
                        _this.imageUrlArray.push({ url: _this.events[i].photo, clickAction: _this.test, tittle: _this.events[i].name, caption: _this.events[i].name + ' ' + _this.events[i].date_start });
                    }
                }
            });
        });
    };
    HomeComponent.prototype.test = function () {
        return 1;
    };
    HomeComponent.prototype.send = function (state) {
        this.navService.navUpdated.emit(state);
    };
    HomeComponent.prototype.info = function () {
        window.location.hash = 'info';
    };
    HomeComponent.prototype.read = function (num) {
        switch (num) {
            case 1:
                document.getElementById('uno').style.display = 'inherit';
                break;
            case 2:
                document.getElementById('uno').style.display = 'inherit';
                break;
            default:
                break;
        }
    };
    HomeComponent.prototype.hide = function (num) {
        location.href = '/#uno';
        switch (num) {
            case 1:
                document.getElementById('uno').style.display = 'none';
                break;
            case 2:
                document.getElementById('uno').style.display = 'none';
                break;
            default:
                break;
        }
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"],
            _services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/redirect/redirect.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/redirect/redirect.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n    padding: 0.3em;\r\n}"

/***/ }),

/***/ "./src/app/home/redirect/redirect.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/redirect/redirect.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\">\n  <i class=\"fa fa-facebook\" style=\"color:white\"></i>\n</a>\n<a href=\"#\">\n  <i class=\"fa fa-linkedin\" style=\"color:white\"></i>\n</a>"

/***/ }),

/***/ "./src/app/home/redirect/redirect.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/redirect/redirect.component.ts ***!
  \*****************************************************/
/*! exports provided: RedirectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectComponent", function() { return RedirectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedirectComponent = /** @class */ (function () {
    function RedirectComponent() {
    }
    RedirectComponent.prototype.ngOnInit = function () {
    };
    RedirectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redirect',
            template: __webpack_require__(/*! ./redirect.component.html */ "./src/app/home/redirect/redirect.component.html"),
            styles: [__webpack_require__(/*! ./redirect.component.css */ "./src/app/home/redirect/redirect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RedirectComponent);
    return RedirectComponent;
}());



/***/ }),

/***/ "./src/app/interes/inter/inter.component.css":
/*!***************************************************!*\
  !*** ./src/app/interes/inter/inter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inter {\r\n    /* background: url(\"../../../assets/interes2.jpg\") no-repeat center;  */\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.inter > div {\r\n    left: 0;\r\n    max-width: 15em;\r\n    width: 100%;\r\n    padding: 5em 0.3em 4em 3.3em;\r\n    text-align: left;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}"

/***/ }),

/***/ "./src/app/interes/inter/inter.component.html":
/*!****************************************************!*\
  !*** ./src/app/interes/inter/inter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class=\"inter\" [ngStyle]=\"{'background': 'url('+ interes.photo +') no-repeat center'}\">\n  <div class=\"centered\">\n    <br>\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{interes.tittle}} </span>\n    <br>\n    <p style=\"max-width: 35em;\"> {{interes.description}} </p>\n    <br>\n  </div>\n</div>\n\n<div class='bg1 padding1 center'>\n  <div class=\"padding3\" style=\"max-width: 45em; margin: auto; text-align: justify;\">{{interes.block}}</div>\n</div>\n\n<div class='bg2 padding1'>\n  <h2 class='sub-title'> {{interes.block2.tittle}} </h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 250px; height:auto;' *ngFor=\"let photo of interes.block2.photos\">\n      <img [src]=photo.photo />\n    </div>\n  </div>\n</div>\n<div class='bg2 padding1'>\n  <h2 class='sub-title'> {{interes.block3.tittle}} </h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 250px; height:auto;' *ngFor=\"let photo of interes.block3.photos\">\n      <img [src]=photo.photo />\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/interes/inter/inter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interes/inter/inter.component.ts ***!
  \**************************************************/
/*! exports provided: InterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterComponent", function() { return InterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterComponent = /** @class */ (function () {
    function InterComponent(route, _peticionesService) {
        this.route = route;
        this._peticionesService = _peticionesService;
    }
    InterComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this.route.params.subscribe(function (params) {
            _this.interesId = params.id;
            _this.findInteres();
        });
    };
    InterComponent.prototype.findInteres = function () {
        var _this = this;
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
            for (var i = 0; i < _this.home.interes.list.length; i++) {
                if (_this.home.interes.list[i]._id == _this.interesId) {
                    _this.interes = _this.home.interes.list[i];
                }
            }
        });
    };
    InterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inter',
            template: __webpack_require__(/*! ./inter.component.html */ "./src/app/interes/inter/inter.component.html"),
            styles: [__webpack_require__(/*! ./inter.component.css */ "./src/app/interes/inter/inter.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], InterComponent);
    return InterComponent;
}());



/***/ }),

/***/ "./src/app/interes/interes.component.css":
/*!***********************************************!*\
  !*** ./src/app/interes/interes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.module4 {\r\n    /* background: url(\"./../../assets/interes.jpg\") no-repeat center;  */\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.module4 > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0em 4em 0em;\r\n    text-align: center;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}"

/***/ }),

/***/ "./src/app/interes/interes.component.html":
/*!************************************************!*\
  !*** ./src/app/interes/interes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class=\"module4\" [ngStyle]=\"{'background': 'url('+ home.interes.inicio.photo +') no-repeat center'}\">\r\n    <div class=\"centered\">\r\n        <span style=\"font-size: 1em; font-weight:bold;\">{{home.interes.inicio.line}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class='bg2 padding3'>\r\n    <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\r\n        <div class='objective card' style='width: 350px; height:auto; padding: 0% !important;' *ngFor=\"let list of home.interes.list\">\r\n            <img [src]=list.photo style=\"width: 100%; border-radius: 5px 5px 0 0;\">\r\n            <div class=\"padding1\">\r\n                <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'>{{list.tittle}} </p>\r\n                <div class=\"right padding1\">\r\n                    <a routerLink=\"/inter/{{list._id}}\" style=\"text-decoration:none;font-size: 0.8em; color: #6120ea;font-weight:700;\"> {{list.description}} </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/interes/interes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/interes/interes.component.ts ***!
  \**********************************************/
/*! exports provided: InteresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteresComponent", function() { return InteresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InteresComponent = /** @class */ (function () {
    function InteresComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    InteresComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
        });
    };
    InteresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interes',
            template: __webpack_require__(/*! ./interes.component.html */ "./src/app/interes/interes.component.html"),
            styles: [__webpack_require__(/*! ./interes.component.css */ "./src/app/interes/interes.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], InteresComponent);
    return InteresComponent;
}());



/***/ }),

/***/ "./src/app/mas-informacion/mas-informacion.component.css":
/*!***************************************************************!*\
  !*** ./src/app/mas-informacion/mas-informacion.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cecap-4 { \r\n    height: 750px; \r\n    /* background: linear-gradient(-15deg, rgba(91,39,254, 0.6) 3%, rgba(194,101,221,0.6) 33%, transparent 65%), url(\"../../assets/cecap-4.jpg\") no-repeat center;  */\r\n    background-size: cover !important; \r\n}"

/***/ }),

/***/ "./src/app/mas-informacion/mas-informacion.component.html":
/*!****************************************************************!*\
  !*** ./src/app/mas-informacion/mas-informacion.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"info\" class=\"cecap-4 padding1\" [ngStyle]=\"{'background': 'linear-gradient(-15deg, rgba(91,39,254, 0.6) 3%, rgba(194,101,221,0.6) 33%, transparent 65%), url('+ '../../assets/cecap-4.jpg' +') no-repeat center'}\">\n  <div id=\"form\" class='form'>\n    <h2 class='sub-title' style='padding-top: 2em;'>Quieres saber Mas?</h2>\n    <div style='padding: 2em 0em;'>\n      <form id=\"my-form\">\n        <div class=\"form-group\">\n          <input class=\"mat-input-element\" name='firstname' placeholder='Nombre(s)*' required>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"mat-input-element\" name='lastname' placeholder='Apellidos*' required>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"mat-input-element\" name='phone' placeholder='Celular*' required>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"mat-input-element\" name='email' placeholder='Email*' required>\n        </div>\n        <div class=\"form-group\">\n          <select id=\"selectCity\" name='city' class=\"select\" onchange=\"selecting()\" placeholder='Interes' required>\n            <option value=\"\" disabled selected hidden>Interes *</option>\n            <option value=\"Cochabamba\">Seguridad Industrial</option>\n            <option value=\"SantaCruz\">Recursos Humanos</option>\n            <option value=\"SantaCruz\">Proyectos</option>\n            <option value=\"SantaCruz\">Plan de Negocios</option>\n            <option value=\"SantaCruz\">Marketing y Ventas</option>\n            <option value=\"SantaCruz\">Comercio Exterior</option>\n          </select>\n        </div>\n        <br>\n        <br>\n        <button class='btn2 primary mat-raised-button' type=\"submit\" style='font-family: Raleway; color: white; '>\n          <span class=\"mat-button-wrapper\">\n            <!-- <i class=\"material-icons\">file_download</i> &nbsp;&nbsp;Descargar -->\n            <!-- <i src=\"../../asets/\"></i> -->\n            <i class=\"fa fa-download\"></i> &nbsp;&nbsp;Descargar\n\n          </span>\n        </button>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/mas-informacion/mas-informacion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mas-informacion/mas-informacion.component.ts ***!
  \**************************************************************/
/*! exports provided: MasInformacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasInformacionComponent", function() { return MasInformacionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasInformacionComponent = /** @class */ (function () {
    function MasInformacionComponent() {
    }
    MasInformacionComponent.prototype.ngOnInit = function () {
    };
    MasInformacionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mas-informacion',
            template: __webpack_require__(/*! ./mas-informacion.component.html */ "./src/app/mas-informacion/mas-informacion.component.html"),
            styles: [__webpack_require__(/*! ./mas-informacion.component.css */ "./src/app/mas-informacion/mas-informacion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MasInformacionComponent);
    return MasInformacionComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .topnav .logo{\r\n    height: 3em;\r\n    width: 6em;\r\n    padding: 0 3em;\r\n }\r\n .topnav {\r\n    position: fixed;\r\n  overflow: hidden;\r\n  background-color: #0c0c0c;\r\n  padding: 0.9em 0;\r\n  width: 100%;\r\n}\r\n .topnav a {\r\n  cursor: pointer;\r\n  float: right;\r\n  display: block;\r\n  color: #999;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n .topnav span {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n .topnav a:hover {\r\n  background-color: #999;\r\n  color: white !important;\r\n}\r\n .active {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n}\r\n .topnav .icon {\r\n  display: none;\r\n  padding: 0.8em 3em;\r\n}\r\n @media screen and (max-width: 1220px) {\r\n  .topnav a:not(:first-child) {display: none;}\r\n  .topnav a.icon {\r\n    float: right;\r\n    display: block;\r\n  }\r\n}\r\n @media screen and (max-width: 1220px) {\r\n  /* .topnav.responsive {position: relative;}*/\r\n  .topnav.responsive .icon {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 10px;\r\n  } \r\n  .topnav.responsive a {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n  }\r\n  #cont{\r\n    margin-top: 3em;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\" id=\"myTopnav\" style=\"z-index: 9;\">\n  <span href=\"#home\" class=\"logo\">\n    <img src='../../../assets/logo.png' height=\"100%\" />\n  </span>\n  <!-- <span class=\"height:auto;\"></span> -->\n  <!-- <a href=\"#\"></a>\n  <a href=\"#\"></a> -->\n  <a (click)=\"navColor(7)\" id=\"cont\" [ngStyle]=\"{'color': contactanos}\">CONTACTANOS</a>\n  <a (click)=\"navColor(6)\" [ngStyle]=\"{'color': interes}\">DE MAXIMO INTERES</a>\n  <a (click)=\"navColor(5)\" [ngStyle]=\"{'color': consultorias}\">CONSULTORIAS</a>\n  <a (click)=\"navColor(4)\" [ngStyle]=\"{'color': talleres}\">TALLERES</a>\n  <a (click)=\"navColor(3)\" [ngStyle]=\"{'color': programas}\">PROGRAMAS</a>\n  <a (click)=\"navColor(2)\" [ngStyle]=\"{'color': somos}\">QUIENES SOMOS</a>\n  <a (click)=\"navColor(1)\" [ngStyle]=\"{'color': inicio}\">INICIO</a>\n  <a href=\"javascript:void(0);\" class=\"icon\" (click)=\"myFunction()\">\n    <i class=\"fa fa-bars\"></i>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/nav.service */ "./src/app/services/nav.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(navService, router) {
        var _this = this;
        this.navService = navService;
        this.router = router;
        this.inicio = '#999';
        this.somos = '#999';
        this.programas = '#999';
        this.talleres = '#999';
        this.consultorias = '#999';
        this.interes = '#999';
        this.contactanos = '#999';
        this.navService.navUpdated.subscribe(function (status) {
            _this.navColor(status);
        });
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.inicio = _services_global__WEBPACK_IMPORTED_MODULE_1__["navBar"].inicio;
        this.somos = _services_global__WEBPACK_IMPORTED_MODULE_1__["navBar"].somos;
        this.programas = _services_global__WEBPACK_IMPORTED_MODULE_1__["navBar"].programas;
        this.talleres = _services_global__WEBPACK_IMPORTED_MODULE_1__["navBar"].talleres;
        this.consultorias = _services_global__WEBPACK_IMPORTED_MODULE_1__["navBar"].consultorias;
        this.interes = _services_global__WEBPACK_IMPORTED_MODULE_1__["navBar"].interes;
        this.contactanos = _services_global__WEBPACK_IMPORTED_MODULE_1__["navBar"].contactanos;
    };
    NavBarComponent.prototype.myFunction = function () {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    };
    NavBarComponent.prototype.closeNav = function () {
        var x = document.getElementById("myTopnav");
        x.className === "topnav responsive" ? this.myFunction() : 0;
    };
    NavBarComponent.prototype.navColor = function (val) {
        this.restart();
        switch (val) {
            case 1:
                this.inicio = '#fff';
                this.closeNav();
                this.router.navigate(['']);
                break;
            case 2:
                this.somos = '#fff';
                this.closeNav();
                this.router.navigate(['somos']);
                break;
            case 3:
                this.programas = '#fff';
                this.closeNav();
                this.router.navigate(['programas']);
                break;
            case 4:
                this.talleres = '#fff';
                this.closeNav();
                this.router.navigate(['talleres']);
                break;
            case 5:
                this.consultorias = '#fff';
                this.closeNav();
                this.router.navigate(['consultorias']);
                break;
            case 6:
                this.interes = '#fff';
                this.closeNav();
                this.router.navigate(['interes']);
                break;
            case 7:
                this.contactanos = '#fff';
                this.closeNav();
                this.router.navigate(['contactanos']);
                break;
            default:
                break;
        }
    };
    NavBarComponent.prototype.restart = function () {
        this.inicio = '#999';
        this.somos = '#999';
        this.programas = '#999';
        this.talleres = '#999';
        this.consultorias = '#999';
        this.interes = '#999';
        this.contactanos = '#999';
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/programas/programa/programa.component.css":
/*!***********************************************************!*\
  !*** ./src/app/programas/programa/programa.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .program {\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.program > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0.3em 4em 3.3em;\r\n    text-align: left;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .program > div {\r\n        padding: 3em 0.3em 3em 1.5em;\r\n    }\r\n}\r\n@media screen and (min-width: 451px)and (max-width: 632px) {\r\n    .program > div {\r\n        max-width: 9em;\r\n    }\r\n} */"

/***/ }),

/***/ "./src/app/programas/programa/programa.component.html":
/*!************************************************************!*\
  !*** ./src/app/programas/programa/programa.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class=\"program\" [ngStyle]=\"{'background': 'url('+ program.photo +') no-repeat center'}\">\n  <div class=\"centered\">\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{program.line2}} </span>\n    <br>\n    <span style=\"font-size: 0.5em; font-weight:bold;\"> {{program.line1}} </span>\n    <br>\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{program.name}} </span>\n    <br>\n    <p style=\"max-width: 35em;\"> {{program.description}} </p>\n  </div>\n</div>\n\n<div class='bg1 padding1 center'>\n  <h2 class='sub-title'>Objetivo</h2>\n  <div class=\"padding3\" style=\"max-width: 45em; margin: auto; text-align: justify;\"> {{program.objective}} </div>\n</div>\n\n<div class=\"cecap-3 padding1\" width=\"4em;\">\n  <h2 class='sub-title' style=\"color: white;\">Contenido</h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 360px; height:auto;'  *ngFor=\"let module of program.modules\">\n      <p style='margin:auto; text-align: center; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{module.name}} </p>\n      <p style=\"text-align:center;\"> {{module.description}} </p>\n    </div>\n  </div>\n</div>\n\n<div class='bg1 padding1'>\n  <h2 class='sub-title padding1'>Beneficios</h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 250px; height:auto;'  *ngFor=\"let ben of program.benefit\">\n      <img [src]=ben.photo/>\n      <p style='margin:auto; text-align: center; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{ben.name}} </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/programas/programa/programa.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/programas/programa/programa.component.ts ***!
  \**********************************************************/
/*! exports provided: ProgramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramaComponent", function() { return ProgramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgramaComponent = /** @class */ (function () {
    function ProgramaComponent(route, _peticionesService) {
        this.route = route;
        this._peticionesService = _peticionesService;
    }
    ProgramaComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this.route.params.subscribe(function (params) {
            _this.programId = params.id;
            _this.findProgram();
        });
    };
    ProgramaComponent.prototype.findProgram = function () {
        var _this = this;
        this._peticionesService.getProgram(this.programId).subscribe(function (res) {
            _this.program = res;
            _this.program.line1 = 'Programa de';
        });
    };
    ProgramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-programa',
            template: __webpack_require__(/*! ./programa.component.html */ "./src/app/programas/programa/programa.component.html"),
            styles: [__webpack_require__(/*! ./programa.component.css */ "./src/app/programas/programa/programa.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], ProgramaComponent);
    return ProgramaComponent;
}());



/***/ }),

/***/ "./src/app/programas/programas.component.css":
/*!***************************************************!*\
  !*** ./src/app/programas/programas.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/programas/programas.component.html":
/*!****************************************************!*\
  !*** ./src/app/programas/programas.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='bg2 padding3' id=\"init\">\n      <h2 class='sub-title'> {{home.program.tittle}} </h2>\n      <h4 style=\"text-align: center; max-width: 30em; margin: auto; font-weight: 200; padding: 1em;\"> {{home.program.line}} </h4>\n      <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n            <div class='objective card' style='width: 350px; height:auto; padding: 0% !important;' *ngFor=\"let program of programs\">\n                  <img [src]=program.photo style=\"width: 100%; border-radius: 5px 5px 0 0;\">\n                  <div class=\"padding1\">\n                        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{program.name}} </p>\n                        <!-- <p style='margin:auto; text-align: left; color:#1c3844;font-size: 0.8em; font-weight: 400; font-family: Raleway;'>Habilidades directivas (Coaching)</p> -->\n                        <div class=\"right padding1\">\n                              <a routerLink=\"/programa/{{program._id}}\" style=\"text-decoration:none;font-size: 0.8em; color: #6120ea;font-weight:700;\">MAS INFORMACION</a>\n                        </div>\n                  </div>\n            </div>\n      </div>\n</div>\n<!-- <app-mas-informacion></app-mas-informacion> -->"

/***/ }),

/***/ "./src/app/programas/programas.component.ts":
/*!**************************************************!*\
  !*** ./src/app/programas/programas.component.ts ***!
  \**************************************************/
/*! exports provided: ProgramasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramasComponent", function() { return ProgramasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgramasComponent = /** @class */ (function () {
    function ProgramasComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    ProgramasComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
        });
        this._peticionesService.getPrograms().subscribe(function (res) {
            _this.programs = res;
        });
    };
    ProgramasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-programas',
            template: __webpack_require__(/*! ./programas.component.html */ "./src/app/programas/programas.component.html"),
            styles: [__webpack_require__(/*! ./programas.component.css */ "./src/app/programas/programas.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], ProgramasComponent);
    return ProgramasComponent;
}());



/***/ }),

/***/ "./src/app/services/global.ts":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: GLOBAL, Identity, Roles, navBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identity", function() { return Identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navBar", function() { return navBar; });
var GLOBAL = {
    url: 'http://localhost:3000/'
};
// export var LogIn = {
//    token: ''
// }
var Identity = {
    _id: '',
    name: '',
    active: null,
    password_hash: '',
    rol: '',
};
var Roles = [
    {
        _id: '5aea1b1f60896154cd282fb4',
        name: 'Admin'
    },
    {
        _id: '5aea1b1f60896154cd282fb5',
        name: 'Ejecutivo'
    },
    {
        _id: '5aea36445f00ed76e827868b',
        name: 'Gerente'
    }
];
var navBar = {
    inicio: '#fff',
    somos: '#999',
    programas: '#999',
    talleres: '#999',
    consultorias: '#999',
    interes: '#999',
    contactanos: '#999'
};


/***/ }),

/***/ "./src/app/services/nav.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/nav.service.ts ***!
  \*****************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavService = /** @class */ (function () {
    function NavService() {
        this.navUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
}());



/***/ }),

/***/ "./src/app/services/peticiones.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/peticiones.service.ts ***!
  \************************************************/
/*! exports provided: PeticionesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeticionesService", function() { return PeticionesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/app/services/global.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeticionesService = /** @class */ (function () {
    function PeticionesService(
    // private _httpClient: HttpClient,
    _http) {
        // this.url = "https://jsonplaceholder.typicode.com/users";
        this._http = _http;
        this.url = _global__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].url;
    }
    PeticionesService.prototype.getCatEgresos = function () {
        return this._http.get(this.url + 'categoriaEgresos').subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.getEvents = function () {
        return this._http.get(this.url + 'events');
    };
    PeticionesService.prototype.getEvent = function (id) {
        return this._http.get(this.url + 'events/' + id);
    };
    PeticionesService.prototype.addProgram = function (program) {
        var body = JSON.stringify(program);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'programs/add', body, { headers: headers }).subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.getConsults = function () {
        return this._http.get(this.url + 'consults');
    };
    PeticionesService.prototype.getConsult = function (_id) {
        return this._http.get(this.url + 'consults/' + _id);
    };
    PeticionesService.prototype.getWorkshops = function () {
        return this._http.get(this.url + 'workshop');
    };
    PeticionesService.prototype.getWorkshop = function (_id) {
        return this._http.get(this.url + 'workshop/' + _id);
    };
    PeticionesService.prototype.getPrograms = function () {
        return this._http.get(this.url + 'programs');
    };
    PeticionesService.prototype.getProgram = function (_id) {
        return this._http.get(this.url + 'programs/' + _id);
    };
    PeticionesService.prototype.addModulo = function (modulo) {
        var body = JSON.stringify(modulo);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'modules/add', body, { headers: headers }).subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.getModulos = function (idProgram) {
        console.log(idProgram);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'modules/lista/' + idProgram, { headers: headers }).subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.addEvent = function (event) {
        var body = JSON.stringify(event);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'events', body, { headers: headers }).subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.addPerson = function (person) {
        var body = JSON.stringify(person);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this.url + 'persons', body, { headers: headers }).subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.getPerson = function (_id) {
        return this._http.get(this.url + 'persons/' + _id).subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.getFacilitadores = function () {
        return this._http.get(this.url + 'facilitators').subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.getFacilitator = function (id) {
        return this._http.get(this.url + 'facilitators/' + id);
    };
    PeticionesService.prototype.getRole = function (id) {
        return this._http.get(this.url + 'users/rolName/' + id).subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.getSucursales = function () {
        return this._http.get(this.url + 'offices');
    };
    PeticionesService.prototype.getSucursal = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'offices/' + id, { headers: headers }).subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.getRoles = function () {
        return this._http.get(this.url + 'roles').subscribe(function (res) { return res; });
    };
    PeticionesService.prototype.postFile = function (fileToUpload) {
        var endpoint = this.url + 'persons/upload';
        // const endpoint = this.url + 'importFromExcel/upload';
        var formData = new FormData();
        formData.append('fileKey', fileToUpload, fileToUpload.name);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });
        return this._http.post(endpoint, formData, { headers: headers });
        // .catch((e) => Observable.throw(e))
        // .subscribe();
    };
    PeticionesService.prototype.getPage = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
        return this._http.get(this.url + 'pages', { headers: headers });
    };
    PeticionesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PeticionesService);
    return PeticionesService;
}());



/***/ }),

/***/ "./src/app/services/slideshow/slideshow.component.html":
/*!*************************************************************!*\
  !*** ./src/app/services/slideshow/slideshow.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container\n     (touchstart)=\"onSwipe($event, 'start')\"\n     (touchend)=\"onSwipe($event, 'end')\"\n     class=\"slideshow-container\">\n  <!-- slides -->\n  <a *ngFor=\"let slide of slides; let i = index\"\n     class=\"slides\"\n     href=\"{{slide?.image?.clickAction ? '#' : slide?.image?.href}}\"\n     title=\"{{slide?.image?.title}}\"\n     [ngStyle]=\"getSlideStyle(i)\"\n     [class.selected]=\"slide?.selected\"\n     [class.hide-slide]=\"!slide?.selected && !slide?.leftSide && !slide?.rightSide\"\n     [class.left-side]=\"slide?.leftSide\"\n     [class.right-side]=\"slide?.rightSide\"\n     [class.slide-in-left]=\"slide?.action === 'slideInLeft'\"\n     [class.slide-in-right]=\"slide?.action === 'slideInRight'\"\n     [class.slide-out-left]=\"slide?.action === 'slideOutLeft'\"\n     [class.slide-out-right]=\"slide?.action === 'slideOutRight'\"\n     [class.link]=\"slide?.image?.clickAction ? null : slide?.image?.href\"\n     (click)=\"onClick($event)\">\n    <div class=\"loader\"\n         *ngIf=\"!slide?.loaded\"></div>\n    <div *ngIf=\"showCaptions && slide?.image?.caption\"\n         class=\"caption\"\n         [ngStyle]=\"{\n           'color': captionColor,\n           'background-color': captionBackground\n          }\"\n         [innerHTML]=\"slide?.image?.caption\">\n    </div>\n  </a>\n  <!-- left arrow -->\n  <div [class.display-none]=\"!this.showArrows\"\n       (click)=\"onSlide(-1)\"\n       class=\"arrow-container prev\">\n    <i #prevArrow\n       title=\"Previous\"\n       class=\"arrow prev\">&laquo; previous</i>\n  </div>\n  <!-- right arrow -->\n  <div [class.display-none]=\"!this.showArrows\"\n       (click)=\"onSlide(1)\"\n       class=\"arrow-container next\">\n    <i #nextArrow\n       title=\"Next\"\n       class=\"arrow next\">next &raquo;</i>\n  </div>\n  <!-- dots -->\n  <ul class=\"slick-dots\"\n      *ngIf=\"showDots\">\n    <li *ngFor=\"let slide of slides; let index = index\"\n        (click)=\"goToSlide(index)\"\n        [class.slick-active]=\"slide.selected\">\n      <button type=\"button\"\n              [attr.style]=\"sanitizer.bypassSecurityTrustStyle('--dot-color:' + dotColor)\">\n        {{index}}\n      </button>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/services/slideshow/slideshow.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/services/slideshow/slideshow.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n styles adapted from https://www.w3schools.com/w3css/4/w3.css\n arrow styles adapted from https://codepen.io/minustalent/pen/Frhaw\n */\n.display-none {\n  display: none !important; }\n.slideshow-container {\n  position: relative;\n  display: block;\n  margin: auto;\n  height: 100%;\n  width: 100%;\n  overflow: hidden; }\n.slideshow-container .hide-slide {\n    visibility: hidden;\n    position: absolute;\n    top: -100vw;\n    left: -100vw;\n    opacity: 0; }\n.slideshow-container .slides {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: 100%;\n    visibility: visible;\n    opacity: 1;\n    display: block; }\n.slideshow-container .slides.selected {\n      left: 0; }\n.slideshow-container .slides.left-slide {\n      left: -100%; }\n.slideshow-container .slides.right-slide {\n      left: 100%; }\n.slideshow-container .slides.slide-in-left {\n      left: 0;\n      -webkit-animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n              animation: slideInLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n.slideshow-container .slides.slide-in-right {\n      left: 0;\n      -webkit-animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n              animation: slideInRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n.slideshow-container .slides.slide-out-left {\n      left: -100%;\n      -webkit-animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n              animation: slideOutLeft 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n.slideshow-container .slides.slide-out-right {\n      left: 100%;\n      -webkit-animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1);\n              animation: slideOutRight 0.5s cubic-bezier(0.42, 0, 0.58, 1); }\n.slideshow-container .slides.link {\n      cursor: pointer; }\n.slideshow-container .caption {\n    position: absolute;\n    bottom: 0;\n    padding: 10px;\n    width: 100%; }\n.slideshow-container .arrow-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    top: 0;\n    height: 100%;\n    width: auto;\n    cursor: pointer;\n    background-size: 100%;\n    background-image: linear-gradient(transparent, transparent);\n    z-index: 100;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n.slideshow-container .arrow-container:before {\n      display: block;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n      width: 100%;\n      z-index: -100;\n      transition: opacity 0.45s; }\n.slideshow-container .arrow-container.prev {\n      left: 0; }\n.slideshow-container .arrow-container.prev:before {\n        background-image: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.75));\n        content: ''; }\n.slideshow-container .arrow-container.next {\n      right: 0; }\n.slideshow-container .arrow-container.next:before {\n        background-image: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.75));\n        content: ''; }\n.slideshow-container .arrow-container .arrow {\n      display: block;\n      margin: auto;\n      width: 30px;\n      height: 30px;\n      background: transparent;\n      text-indent: -9999px;\n      border-top: 2px solid #f2f2f2;\n      border-left: 2px solid #f2f2f2;\n      transition: all .3s ease-in-out;\n      text-decoration: none;\n      color: transparent;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n.slideshow-container .arrow-container .arrow:before {\n        display: block;\n        height: 200%;\n        width: 200%;\n        margin-left: -50%;\n        margin-top: -50%;\n        content: \"\";\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n.slideshow-container .arrow-container .arrow.prev {\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        position: relative;\n        left: 20px;\n        margin-right: 10px; }\n.slideshow-container .arrow-container .arrow.next {\n        -webkit-transform: rotate(135deg);\n                transform: rotate(135deg);\n        position: relative;\n        right: 20px;\n        margin-left: 10px; }\n.slideshow-container .slick-dots {\n    display: block;\n    bottom: 15px;\n    z-index: 1;\n    text-align: center;\n    position: absolute;\n    padding: 0;\n    left: 0;\n    right: 0;\n    margin: 0 auto; }\n.slideshow-container .slick-dots li {\n      display: inline;\n      margin: 0;\n      padding: 0; }\n.slideshow-container .slick-dots li button {\n        border: none;\n        background: none;\n        text-indent: -9999px;\n        font-size: 0;\n        width: 20px;\n        height: 20px;\n        outline: none;\n        position: relative;\n        z-index: 1;\n        cursor: pointer; }\n.slideshow-container .slick-dots li button:before {\n          content: '';\n          width: 4px;\n          height: 4px;\n          background: var(--dot-color, #FFF);\n          border-radius: 4px;\n          display: block;\n          position: absolute;\n          top: 50%;\n          left: 50%;\n          -webkit-transform: translate(-50%, -50%);\n                  transform: translate(-50%, -50%);\n          opacity: .7;\n          transition: all .5s ease-out; }\n.slideshow-container .slick-dots li.slick-active button:before {\n        -webkit-transform: translate(-50%, -50%) scale(1.4);\n                transform: translate(-50%, -50%) scale(1.4);\n        opacity: 1; }\n@media screen and (min-width: 768px) {\n  .slideshow-container .arrow-container:hover:before {\n    opacity: 1; }\n  .slideshow-container .arrow-container:hover .arrow {\n    border-width: 4px; }\n  .slideshow-container .arrow-container .arrow:hover {\n    border-width: 4px; } }\n@-webkit-keyframes slideInRight {\n  0% {\n    left: -100%; }\n  100% {\n    left: 0; } }\n@keyframes slideInRight {\n  0% {\n    left: -100%; }\n  100% {\n    left: 0; } }\n@-webkit-keyframes slideInLeft {\n  0% {\n    left: 100%; }\n  100% {\n    left: 0; } }\n@keyframes slideInLeft {\n  0% {\n    left: 100%; }\n  100% {\n    left: 0; } }\n@-webkit-keyframes slideOutRight {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n@keyframes slideOutRight {\n  0% {\n    left: 0; }\n  100% {\n    left: -100%; } }\n@-webkit-keyframes slideOutLeft {\n  0% {\n    left: 0; }\n  100% {\n    left: 100%; } }\n@keyframes slideOutLeft {\n  0% {\n    left: 0; }\n  100% {\n    left: 100%; } }\n.loader {\n  position: absolute;\n  left: 50%;\n  margin-left: -20px;\n  top: 50%;\n  margin-top: -20px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #555;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 1s linear infinite;\n          animation: spin 1s linear infinite; }\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"

/***/ }),

/***/ "./src/app/services/slideshow/slideshow.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/slideshow/slideshow.component.ts ***!
  \***********************************************************/
/*! exports provided: SlideshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowComponent", function() { return SlideshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swipe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swipe.service */ "./src/app/services/slideshow/swipe.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var FIRST_SLIDE_KEY = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["makeStateKey"])('firstSlide');
var SlideshowComponent = /** @class */ (function () {
    function SlideshowComponent(router, swipeService, renderer, transferState, sanitizer, platform_id, document) {
        this.router = router;
        this.swipeService = swipeService;
        this.renderer = renderer;
        this.transferState = transferState;
        this.sanitizer = sanitizer;
        this.platform_id = platform_id;
        this.document = document;
        this.slideIndex = 0;
        this.slides = [];
        this.initial = true;
        this.imageUrls = [];
        this.height = '100%';
        this.showArrows = true;
        this.disableSwiping = false;
        this.autoPlay = false;
        this.autoPlayInterval = 3333;
        this.stopAutoPlayOnSlide = true;
        this.autoPlayWaitForLazyLoad = false;
        this.debug = false;
        this.backgroundSize = 'cover';
        this.backgroundPosition = 'center center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = false;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = false;
        this.onSlideLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSlideRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSwipeLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSwipeRight = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SlideshowComponent.prototype.ngDoCheck = function () {
        if (this.debug === true)
            console.log("ngOnChanges()");
        // if this is the first being called, create a copy of the input
        if (this.initial === true)
            this.urlCache = Array.from(this.imageUrls);
        this.setSlides();
        this.setStyles();
        this.handleAutoPlay();
    };
    /**
     * @param {number} indexDirection
     * @param {boolean} isSwipe
     * @description this is the function that should be called to make the slides change.
     *              indexDirection to move back is -1, to move forward is 1, and to stay in place is 0.
     *              0 is taken into account for failed swipes
     */
    SlideshowComponent.prototype.onSlide = function (indexDirection, isSwipe) {
        if (this.debug === true)
            console.log("onSlide(" + indexDirection + ", " + isSwipe + ")");
        this.handleAutoPlay(this.stopAutoPlayOnSlide);
        this.slide(indexDirection, isSwipe);
    };
    /**
     * @param {TouchEvent} e
     * @param {string} when
     * @description Use the swipe service to detect swipe events from phone and tablets
     */
    SlideshowComponent.prototype.onSwipe = function (e, when) {
        if (this.disableSwiping === true)
            return;
        var indexDirection = this.swipeService.swipe(e, when, this.debug === true);
        // handle a failed swipe
        if (indexDirection === 0)
            return;
        else
            this.onSlide(indexDirection, true);
    };
    /**
     * @param {MouseEvent} e
     * @description Redirect to current slide "href" if defined
     */
    SlideshowComponent.prototype.onClick = function (e) {
        e.preventDefault();
        var currentSlide = this.slides.length > 0 && this.slides[this.slideIndex];
        if (currentSlide && currentSlide.image.clickAction) {
            var x = currentSlide.image.clickAction();
            switch (x) {
                case 1:
                    this.router.navigate(['eventos']);
                    break;
                default:
                    break;
            }
        }
        else if (currentSlide && !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(currentSlide.image.href)) {
            this.document.location.href = currentSlide.image.href;
        }
    };
    /**
     * @param {number} index
     * @description set the index to the desired index - 1 and simulate a right slide
     */
    SlideshowComponent.prototype.goToSlide = function (index) {
        if (this.debug === true)
            console.log("goToSlide(" + index + ")");
        var beforeClickIndex = this.slideIndex;
        this.slideIndex = index - 1;
        this.setSlideIndex(1);
        if (!this.slides[this.slideIndex].loaded)
            this.loadRemainingSlides();
        this.handleAutoPlay(this.stopAutoPlayOnSlide);
        this.slideRight(beforeClickIndex);
        this.slides[beforeClickIndex].selected = false;
        this.slides[this.slideIndex].selected = true;
    };
    /**
     * @param {number} index
     * @description set the index to the desired index - 1 and simulate a right slide
     */
    SlideshowComponent.prototype.getSlideStyle = function (index) {
        if (this.debug === true)
            console.log("getSlideStyle(" + index + ")");
        var slide = this.slides[index];
        if (slide.loaded) {
            return {
                "background-image": 'url(' + slide.image.url + ')',
                "background-size": this.backgroundSize,
                "background-position": this.backgroundPosition,
                "background-repeat": this.backgroundRepeat
            };
        }
        else {
            // doesn't compile correctly if returning an empty object, sooooo.....
            return {
                "background-image": undefined,
                "background-size": undefined,
                "background-position": undefined,
                "background-repeat": undefined
            };
        }
    };
    /**
     * @param {number} indexDirection
     * @param {boolean} isSwipe
     * @description Set the new slide index, then make the transition happen.
     */
    SlideshowComponent.prototype.slide = function (indexDirection, isSwipe) {
        if (this.debug === true)
            console.log("slide(" + indexDirection + ", " + isSwipe + ")");
        var oldIndex = this.slideIndex;
        this.setSlideIndex(indexDirection);
        if (!this.slides[this.slideIndex].loaded)
            this.loadRemainingSlides();
        if (indexDirection === 1)
            this.slideRight(oldIndex, isSwipe);
        else
            this.slideLeft(oldIndex, isSwipe);
        this.slides[oldIndex].selected = false;
        this.slides[this.slideIndex].selected = true;
    };
    /**
     * @param {number} indexDirection
     * @description This is just treating the url array like a circular list.
     */
    SlideshowComponent.prototype.setSlideIndex = function (indexDirection) {
        if (this.debug === true)
            console.log("setSlideIndex(" + this.slideIndex + ")");
        this.slideIndex += indexDirection;
        if (this.slideIndex < 0)
            this.slideIndex = this.slides.length - 1;
        if (this.slideIndex >= this.slides.length)
            this.slideIndex = 0;
    };
    /**
     * @param {number} oldIndex
     * @param {boolean} isSwipe
     * @description This function handles the variables to move the CSS classes around accordingly.
     *              In order to correctly handle animations, the new slide as well as the slides to
     *              the left and right are assigned classes.
     */
    SlideshowComponent.prototype.slideLeft = function (oldIndex, isSwipe) {
        if (this.debug === true)
            console.log("slideLeft(" + oldIndex + ", " + isSwipe + ")");
        if (isSwipe === true)
            this.onSwipeLeft.emit(this.slideIndex);
        else
            this.onSlideLeft.emit(this.slideIndex);
        this.slides[this.getLeftSideIndex(oldIndex)].leftSide = false;
        this.slides[oldIndex].leftSide = true;
        this.slides[oldIndex].action = 'slideOutLeft';
        this.slides[this.slideIndex].rightSide = false;
        this.slides[this.getRightSideIndex()].rightSide = true;
        this.slides[this.slideIndex].action = 'slideInRight';
    };
    /**
     * @param {number} oldIndex
     * @param {boolean} isSwipe
     * @description This function handles the variables to move the CSS classes around accordingly.
     *              In order to correctly handle animations, the new slide as well as the slides to
     *              the left and right are assigned classes.
     */
    SlideshowComponent.prototype.slideRight = function (oldIndex, isSwipe) {
        if (this.debug === true)
            console.log("slideRight(" + oldIndex + ", " + isSwipe + ")");
        if (isSwipe === true)
            this.onSwipeRight.emit(this.slideIndex);
        else
            this.onSlideRight.emit(this.slideIndex);
        this.slides[this.getRightSideIndex(oldIndex)].rightSide = false;
        this.slides[oldIndex].rightSide = true;
        this.slides[oldIndex].action = 'slideOutRight';
        this.slides[this.slideIndex].leftSide = false;
        this.slides[this.getLeftSideIndex()].leftSide = true;
        this.slides[this.slideIndex].action = 'slideInLeft';
    };
    /**
     * @description Check to make sure slide images have been set or haven't changed
     */
    SlideshowComponent.prototype.setSlides = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.imageUrls)) {
            if (this.debug === true)
                console.log("setSlides()");
            if (this.checkCache() || this.initial === true) {
                if (this.debug === true) {
                    console.log("this.checkCache() || this.initial === true");
                    console.log("this.initial: " + this.initial);
                    console.log("this.urlCache: " + this.urlCache);
                    console.log("this.imageUrls: " + this.imageUrls);
                }
                this.initial = false;
                this.urlCache = Array.from(this.imageUrls);
                this.slides = [];
                if (this.lazyLoad === true) {
                    this.buildLazyLoadSlideArray();
                }
                else {
                    this.buildSlideArray();
                }
            }
        }
    };
    /**
     * @description create the slides without background urls, which will be added in
     *              for the "lazy load," then load only the first slide
     */
    SlideshowComponent.prototype.buildLazyLoadSlideArray = function () {
        if (this.debug === true)
            console.log("buildLazyLoadSlideArray()");
        for (var _i = 0, _a = this.imageUrls; _i < _a.length; _i++) {
            var image = _a[_i];
            this.slides.push({
                image: (typeof image === 'string' ? { url: null } : { url: null, href: image.href || '' }),
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: false
            });
        }
        this.slides[this.slideIndex].selected = true;
        this.loadFirstSlide();
    };
    /**
     * @description create the slides with background urls all at once
     */
    SlideshowComponent.prototype.buildSlideArray = function () {
        if (this.debug === true)
            console.log("buildSlideArray()");
        for (var _i = 0, _a = this.imageUrls; _i < _a.length; _i++) {
            var image = _a[_i];
            this.slides.push({
                image: (typeof image === 'string' ? { url: image } : image),
                action: '',
                leftSide: false,
                rightSide: false,
                selected: false,
                loaded: true
            });
        }
        this.slides[this.slideIndex].selected = true;
    };
    /**
     * @description load the first slide image if lazy loading
     *              this takes server side and browser side into account
     */
    SlideshowComponent.prototype.loadFirstSlide = function () {
        var _this = this;
        if (this.debug === true)
            console.log("loadFirstSlide()");
        var tmpIndex = this.slideIndex;
        var tmpImage = this.imageUrls[tmpIndex];
        // if server side, we don't need to worry about the rest of the slides
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platform_id)) {
            this.slides[tmpIndex].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
            this.slides[tmpIndex].loaded = true;
            this.transferState.set(FIRST_SLIDE_KEY, this.slides[tmpIndex]);
        }
        else {
            var firstSlideFromTransferState = this.transferState.get(FIRST_SLIDE_KEY, null);
            // if the first slide didn't finish loading on the server side, we need to load it
            if (firstSlideFromTransferState === null) {
                var loadImage = new Image();
                loadImage.src = (typeof tmpImage === 'string' ? tmpImage : tmpImage.url);
                loadImage.addEventListener('load', function () {
                    _this.slides[tmpIndex].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
                    _this.slides[tmpIndex].loaded = true;
                });
            }
            else {
                this.slides[tmpIndex] = firstSlideFromTransferState;
                this.transferState.remove(FIRST_SLIDE_KEY);
            }
        }
    };
    /**
     * @description if lazy loading in browser, start loading remaining slides
     * @todo: figure out how to not show the spinner if images are loading fast enough
     */
    SlideshowComponent.prototype.loadRemainingSlides = function () {
        var _this = this;
        if (this.debug === true)
            console.log("loadRemainingSlides()");
        var _loop_1 = function (i) {
            if (!this_1.slides[i].loaded) {
                new Promise(function (resolve) {
                    var tmpImage = _this.imageUrls[i];
                    var loadImage = new Image();
                    loadImage.addEventListener('load', function () {
                        _this.slides[i].image = (typeof tmpImage === 'string' ? { url: tmpImage } : tmpImage);
                        _this.slides[i].loaded = true;
                        resolve();
                    });
                    loadImage.src = (typeof tmpImage === 'string' ? tmpImage : tmpImage.url);
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.slides.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * @param {boolean} stopAutoPlay
     * @description Start or stop autoPlay, don't do it at all server side
     */
    SlideshowComponent.prototype.handleAutoPlay = function (stopAutoPlay) {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["isPlatformServer"])(this.platform_id))
            return;
        if (stopAutoPlay === true || this.autoPlay === false) {
            if (this.debug === true)
                console.log("stop autoPlay");
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.autoplayIntervalId))
                clearInterval(this.autoplayIntervalId);
        }
        else if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.autoplayIntervalId)) {
            if (this.debug === true)
                console.log("start autoPlay");
            this.autoplayIntervalId = setInterval(function () {
                if (_this.debug === true)
                    console.log("autoPlay slide event");
                if (!_this.autoPlayWaitForLazyLoad || (_this.autoPlayWaitForLazyLoad && _this.slides[_this.slideIndex].loaded))
                    _this.slide(1);
            }, this.autoPlayInterval);
        }
    };
    /**
     * @description Keep the styles up to date with the input
     */
    SlideshowComponent.prototype.setStyles = function () {
        if (this.debug === true)
            console.log("setStyles()");
        if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.height))
            this.renderer.setStyle(this.container.nativeElement, 'height', this.height);
        if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.minHeight))
            this.renderer.setStyle(this.container.nativeElement, 'min-height', this.minHeight);
        if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.arrowSize)) {
            this.renderer.setStyle(this.prevArrow.nativeElement, 'height', this.arrowSize);
            this.renderer.setStyle(this.prevArrow.nativeElement, 'width', this.arrowSize);
            this.renderer.setStyle(this.nextArrow.nativeElement, 'height', this.arrowSize);
            this.renderer.setStyle(this.nextArrow.nativeElement, 'width', this.arrowSize);
        }
    };
    /**
     * @description compare image array to the cache, returns false if no changes
     */
    SlideshowComponent.prototype.checkCache = function () {
        var _this = this;
        if (this.debug === true)
            console.log("checkCache()");
        return !(this.urlCache.length === this.imageUrls.length && this.urlCache.every(function (cacheElement, i) { return cacheElement === _this.imageUrls[i]; }));
    };
    /**
     * @param {number} i
     * @returns {number}
     * @description get the index for the slide to the left of the new slide
     */
    SlideshowComponent.prototype.getLeftSideIndex = function (i) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(i))
            i = this.slideIndex;
        if (--i < 0)
            i = this.slides.length - 1;
        return i;
    };
    /**
     * @param {number} i
     * @returns {number}
     * @description get the index for the slide to the right of the new slide
     */
    SlideshowComponent.prototype.getRightSideIndex = function (i) {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(i))
            i = this.slideIndex;
        if (++i >= this.slides.length)
            i = 0;
        return i;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SlideshowComponent.prototype, "imageUrls", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "minHeight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "arrowSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "showArrows", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "disableSwiping", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "autoPlay", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SlideshowComponent.prototype, "autoPlayInterval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "stopAutoPlayOnSlide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "autoPlayWaitForLazyLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "debug", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "backgroundSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "backgroundPosition", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "backgroundRepeat", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "showDots", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "dotColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "showCaptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "captionColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SlideshowComponent.prototype, "captionBackground", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SlideshowComponent.prototype, "lazyLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSlideLeft'),
        __metadata("design:type", Object)
    ], SlideshowComponent.prototype, "onSlideLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSlideRight'),
        __metadata("design:type", Object)
    ], SlideshowComponent.prototype, "onSlideRight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSwipeLeft'),
        __metadata("design:type", Object)
    ], SlideshowComponent.prototype, "onSwipeLeft", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onSwipeRight'),
        __metadata("design:type", Object)
    ], SlideshowComponent.prototype, "onSwipeRight", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideshowComponent.prototype, "container", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('prevArrow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideshowComponent.prototype, "prevArrow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nextArrow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SlideshowComponent.prototype, "nextArrow", void 0);
    SlideshowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'slideshow',
            template: __webpack_require__(/*! ./slideshow.component.html */ "./src/app/services/slideshow/slideshow.component.html"),
            styles: [__webpack_require__(/*! ./slideshow.component.scss */ "./src/app/services/slideshow/slideshow.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _swipe_service__WEBPACK_IMPORTED_MODULE_1__["SwipeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["TransferState"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], Object, Object])
    ], SlideshowComponent);
    return SlideshowComponent;
}());



/***/ }),

/***/ "./src/app/services/slideshow/slideshow.module.ts":
/*!********************************************************!*\
  !*** ./src/app/services/slideshow/slideshow.module.ts ***!
  \********************************************************/
/*! exports provided: SlideshowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideshowModule", function() { return SlideshowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slideshow_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slideshow.component */ "./src/app/services/slideshow/slideshow.component.ts");
/* harmony import */ var _swipe_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./swipe.service */ "./src/app/services/slideshow/swipe.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SlideshowModule = /** @class */ (function () {
    function SlideshowModule() {
    }
    SlideshowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserTransferStateModule"]
            ],
            declarations: [
                _slideshow_component__WEBPACK_IMPORTED_MODULE_2__["SlideshowComponent"]
            ],
            exports: [
                _slideshow_component__WEBPACK_IMPORTED_MODULE_2__["SlideshowComponent"]
            ],
            providers: [
                _swipe_service__WEBPACK_IMPORTED_MODULE_3__["SwipeService"]
            ]
        })
    ], SlideshowModule);
    return SlideshowModule;
}());



/***/ }),

/***/ "./src/app/services/slideshow/swipe.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/slideshow/swipe.service.ts ***!
  \*****************************************************/
/*! exports provided: SwipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeService", function() { return SwipeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SwipeService = /** @class */ (function () {
    function SwipeService() {
    }
    /**
     * @param {TouchEvent} e
     * @param {string} when
     * @param {boolean} debug
     * @returns {number}
     * @description detect the direction of the swipe, and return a -1 or 1 if the duration is long enough
     *              else return a 0 to do nothing
     */
    SwipeService.prototype.swipe = function (e, when, debug) {
        if (debug === true)
            console.log("SwipeService::swipe(" + e + ", " + when + ")");
        var coord = [e.changedTouches[0].pageX, e.changedTouches[0].pageY];
        var time = new Date().getTime();
        if (when === 'start') {
            this.swipeCoord = coord;
            this.swipeTime = time;
        }
        else if (when === 'end') {
            var direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
            var duration = time - this.swipeTime;
            if (duration < 1000 // Short enough
                && Math.abs(direction[1]) < Math.abs(direction[0]) // Horizontal enough
                && Math.abs(direction[0]) > 30) {
                return direction[0] < 0 ? 1 : -1;
            }
        }
        return 0;
    };
    SwipeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SwipeService);
    return SwipeService;
}());



/***/ }),

/***/ "./src/app/somos/somos.component.css":
/*!*******************************************!*\
  !*** ./src/app/somos/somos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.module3 {\r\n    /* background: url(\"../../assets/somos.jpg\") no-repeat center;  */\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.module3 > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0em 4em 0em;\r\n    text-align: center;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}"

/***/ }),

/***/ "./src/app/somos/somos.component.html":
/*!********************************************!*\
  !*** ./src/app/somos/somos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class=\"module3\" [ngStyle]=\"{'background': 'url('+ home.somos.inicio.photo +') no-repeat center'}\">\n  <div class=\"centered\">\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{home.somos.inicio.line}} </span>\n  </div>\n</div>\n<div id=\"uno\" class='bg1 padding1'>\n    <h2 class=\"sub-title\"> {{home.somos.version.tittle}} </h2>\n    <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n          <div class='objective' style='width: 400px; height:auto;'>\n                <img [src]=home.somos.version.mision.photo />\n                <p style='margin:auto; text-align: center; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{home.somos.version.mision.name}} </p>\n                <p style=\"text-align:justify;\">{{home.somos.version.mision.description}}</p>\n          </div>\n          <div class='objective' style='width: 400px; height:auto;'>\n                <img [src]=home.somos.version.vision.photo />\n                <p style='margin:auto; text-align: center; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{home.somos.version.vision.name}} </p>\n                <p style=\"text-align:justify;\">{{home.somos.version.vision.description}}</p>\n          </div>\n          <div class='objective' style='width: 400px; height:auto;'>\n                <img [src]=home.somos.version.valores.photo />\n                <p style='margin:auto; text-align: center; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{home.somos.version.valores.name}} </p>\n                <p style=\"text-align:justify;\">{{home.somos.version.valores.description}}</p>\n          </div>\n    </div>\n</div>\n<!-- <app-mas-informacion></app-mas-informacion> -->"

/***/ }),

/***/ "./src/app/somos/somos.component.ts":
/*!******************************************!*\
  !*** ./src/app/somos/somos.component.ts ***!
  \******************************************/
/*! exports provided: SomosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomosComponent", function() { return SomosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SomosComponent = /** @class */ (function () {
    function SomosComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    SomosComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
        });
    };
    SomosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-somos',
            template: __webpack_require__(/*! ./somos.component.html */ "./src/app/somos/somos.component.html"),
            styles: [__webpack_require__(/*! ./somos.component.css */ "./src/app/somos/somos.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], SomosComponent);
    return SomosComponent;
}());



/***/ }),

/***/ "./src/app/talleres/taller/taller.component.css":
/*!******************************************************!*\
  !*** ./src/app/talleres/taller/taller.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .program {\r\n    overflow: hidden;\r\n    background-size: cover !important;\r\n    color: white;\r\n}\r\n.program > div {\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5em 0.3em 4em 3.3em;\r\n    text-align: left;\r\n    background-attachment: fixed;\r\n    font-size: 3em;\r\n}\r\n@media screen and (max-width: 450px) {\r\n    .program > div {\r\n        padding: 3em 0.3em 3em 1.5em;\r\n        max-width: 8em;\r\n    }\r\n}\r\n@media screen and (min-width: 451px)and (max-width: 632px) {\r\n    .program > div {\r\n        max-width: 8em;\r\n    }\r\n}\r\n@media screen and (min-width: 633px)and (max-width: 932px) {\r\n    .program > div {\r\n        max-width: 12em;\r\n    }\r\n} */"

/***/ }),

/***/ "./src/app/talleres/taller/taller.component.html":
/*!*******************************************************!*\
  !*** ./src/app/talleres/taller/taller.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"init\" class=\"program\" [ngStyle]=\"{'background': 'url('+ workshop.photo +') no-repeat center'}\">\n  <div class=\"centered\">\n    <span style=\"font-size: 0.5em; font-weight:bold;\"> {{workshop.line1}} </span>\n    <br>\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{workshop.line2}} </span>\n    <br>\n    <span style=\"font-size: 1em; font-weight:bold;\"> {{workshop.name}} </span>\n    <br>\n    <p style=\"max-width: 35em;\"> {{workshop.description}} </p>\n  </div>\n</div>\n\n<div class='bg1 padding1 center'>\n  <h2 class='sub-title'>Objetivo</h2>\n  <div class=\"padding3\" style=\"max-width: 45em; margin: auto; text-align: justify;\"> {{workshop.objective}} </div>\n</div>\n\n<div class=\"cecap-3 padding1\" width=\"4em;\">\n  <h2 class='sub-title' style=\"color: white;\">Contenido</h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 360px; height:auto;'  *ngFor=\"let cont of workshop.content\">\n      <p style='margin:auto; text-align: center; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{cont.name}} </p>\n      <p style=\"text-align:center;\"> {{cont.description}} </p>\n    </div>\n  </div>\n</div>\n\n<div class='bg1 padding1'>\n  <h2 class='sub-title padding1'>Beneficios</h2>\n  <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n    <div class='objective' style='width: 250px; height:auto;'  *ngFor=\"let ben of workshop.benefit\">\n      <img [src]=ben.photo/>\n      <p style='margin:auto; text-align: center; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{ben.name}} </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/talleres/taller/taller.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/talleres/taller/taller.component.ts ***!
  \*****************************************************/
/*! exports provided: TallerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TallerComponent", function() { return TallerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TallerComponent = /** @class */ (function () {
    function TallerComponent(route, _peticionesService) {
        this.route = route;
        this._peticionesService = _peticionesService;
    }
    TallerComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this.route.params.subscribe(function (params) {
            _this.tallerId = params.id;
            _this.findWorkshop();
        });
    };
    TallerComponent.prototype.findWorkshop = function () {
        var _this = this;
        this._peticionesService.getWorkshop(this.tallerId).subscribe(function (res) {
            console.log(_this.workshop);
            _this.workshop = res;
        });
    };
    TallerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taller',
            template: __webpack_require__(/*! ./taller.component.html */ "./src/app/talleres/taller/taller.component.html"),
            styles: [__webpack_require__(/*! ./taller.component.css */ "./src/app/talleres/taller/taller.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], TallerComponent);
    return TallerComponent;
}());



/***/ }),

/***/ "./src/app/talleres/talleres.component.css":
/*!*************************************************!*\
  !*** ./src/app/talleres/talleres.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/talleres/talleres.component.html":
/*!**************************************************!*\
  !*** ./src/app/talleres/talleres.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='bg2 padding3' id=\"init\">\n      <h2 class='sub-title'> {{home.taller.tittle}} </h2>\n      <h4 style=\"text-align: center; max-width: 30em; margin: auto; font-weight: 200; padding: 1em;\"> {{home.taller.line}} </h4>\n      <div class='main-objectives' style=\"padding-top: 3em; margin-bottom: 0em !important; max-width:none;\">\n            <div class='objective card' style='width: 350px; height:auto; padding: 0% !important;' *ngFor=\"let workshop of workshops\">\n                  <img [src]=workshop.photo style=\"width: 100%; border-radius: 5px 5px 0 0;\">\n                  <div class=\"padding1\">\n                        <p style='margin:auto; text-align: left; color:#1c3844; font-size: 1.2em; font-weight: 700; font-family: Raleway;'> {{workshop.name}} </p>\n                        <div class=\"right padding1\">\n                              <a routerLink=\"/taller/{{workshop._id}}\" style=\"text-decoration:none;font-size: 0.8em; color: #6120ea;font-weight:700;\">MAS INFORMACION</a>\n                        </div>\n                  </div>\n            </div>\n      </div>\n</div>"

/***/ }),

/***/ "./src/app/talleres/talleres.component.ts":
/*!************************************************!*\
  !*** ./src/app/talleres/talleres.component.ts ***!
  \************************************************/
/*! exports provided: TalleresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalleresComponent", function() { return TalleresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/peticiones.service */ "./src/app/services/peticiones.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TalleresComponent = /** @class */ (function () {
    function TalleresComponent(_peticionesService) {
        this._peticionesService = _peticionesService;
    }
    TalleresComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.location.hash = 'init';
        this._peticionesService.getPage().subscribe(function (res) {
            _this.home = res[0];
        });
        this._peticionesService.getWorkshops().subscribe(function (res) {
            _this.workshops = res;
        });
    };
    TalleresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-talleres',
            template: __webpack_require__(/*! ./talleres.component.html */ "./src/app/talleres/talleres.component.html"),
            styles: [__webpack_require__(/*! ./talleres.component.css */ "./src/app/talleres/talleres.component.css")],
            providers: [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]]
        }),
        __metadata("design:paramtypes", [_services_peticiones_service__WEBPACK_IMPORTED_MODULE_1__["PeticionesService"]])
    ], TalleresComponent);
    return TalleresComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\job\cecap\sw\CECAPPAGE\fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map