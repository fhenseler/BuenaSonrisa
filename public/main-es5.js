(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner></app-spinner>\n<app-navbar></app-navbar>\n\n\n<router-outlet></router-outlet>\n\n\n<!-- <app-log></app-log> -->\n<!-- <br><br> -->\n <body *ngIf=\"route.children.length === 0\">\n    <!-- <br>\n    <br>\n    <br>-->\n    <!-- <br>\n    <br>  -->\n    <div class=\"container\">\n        <br><br>\n      <div class=\"jumbotron p-3 p-md-5 text-white rounded bg-dark\">\n        <div class=\"col-md-6 px-0\">\n          <h1 class=\"display-4 font-italic\"><u>Bienvenidos!</u></h1>\n          <p class=\"lead my-3\">Contamos con un excelente nivel de profesionales e infraestructura de vanguardia, que nos permite brindar todas las prestaciones odontológicas a una población cada vez más exigente. Se recogen los datos médicos y odontológicos necesarios, se realiza una exhaustiva exploración bucodental, se toman fotografías (en caso de ser necesarias), modelos e índices de articulación y se hace el estudio radiológico que esté indicado.</p>\n        </div>\n      </div>\n\n      <!-- <div class=\"row mb-2\">\n        <div class=\"col-md-6\">\n          <div class=\"card text-white bg-primary mb-3\">\n            <a class=\"card-header\">Ortodoncia</a>\n            <div class=\"card-body\">\n              <div class=\"card-title\">Descripción:</div>\n              <p class=\"card-text mb-auto\">La ortodoncia es la especialidad de la odontología que se encarga de la corregir la situación de los dientes y huesos incorrectamente posicionados. Los dientes que se encuentran en mala posición y los que no muerden correctamente contra sus antagonistas, son difíciles de mantener limpios.</p>\n            <br></div> -->\n        <!-- </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"card text-white bg-primary mb-3\">\n            <a class=\"card-header\">Prótesis</a>\n            <div class=\"card-body\">\n              <div class=\"card-title\">Descripción:</div>\n              <p class=\"card-text mb-auto\">Las prótesis dentales son los dispositivos artificiales que se emplean para sustituir uno o más dientes y tejidos circundantes que, por distintos motivos se han perdido, devolviendo tanto la funcionalidad como la estética perdida. Su finalidad es permitir que el paciente pueda masticar y expresarse con normalidad, cuestiones que, ante la falta de dientes, no podría realizar sin la prótesis en cuestión.</p>\n            </div>\n        </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"album py-5 bg-light\">\n        <div class=\"container\">\n\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"card text-white bg-primary mb-3\">\n                <img class=\"card-img-top\" src=\"/assets/1.jpeg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">Nuestra Clínica se encuentra habilitada por el ministerio de salud pública de la nación y, los residuos patológicos son retirados por la empresa habilitada para dicha tarea; colaborando con ello a la preservación del medio ambiente.</p>\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"card text-white bg-primary mb-3\">\n                <img class=\"card-img-top\" src=\"/assets/2.jpeg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">En nuestra Clínica buscamos la excelencia en todo lo que hacemos; contamos con un equipo de profesionales altamente capacitados y especializados en cada área.<br><br><br></p>\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"card text-white bg-primary mb-3\">\n                <img class=\"card-img-top\" src=\"/assets/3.jpeg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">El Dr. Andrés Etbul, es especialista en implantologia y técnicas de aumento de volumen, injertos y relleno óseo. Junto a un equipo de profesionales se ocupa día a día de brindar atención odontológica personalizada, moderna e integral.</p>\n                  <div class=\"d-flex justify-content-between align-items-center\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div> -->\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner></app-spinner>\n<app-log></app-log>\n<button type=\"button\" class=\"btn btn-warning mx-auto mb-4\" (click)=\"generarPDF()\" style=\"margin-left: 500px;\">Generar PDF</button>\n\n<div class=\"bg\">\n    <br>\n<div class=\"container\">\n\n    \n    \n    <div class=\"row float-left\">\n        <div class=\"col-sm-8 col-md-6 col-lg-4\">\n\n    <div class=\"card text-white bg-danger mb-4 mx-auto\" style=\"width: 60rem;\">\n    <article class=\"card-body\" style=\"width: 60rem;\">\n\n<table appPanel id=\"tablaPDF\" class=\"table table-sm table-hover table-info table-striped\">\n  <thead>\n    <tr>\n      <th class=\"text-center\" colspan=\"7\"><b>Lista de turnos</b></th>\n    </tr>\n    <tr>\n      <th>Código</th>\n      <th>DNI</th>\n      <th>Fecha</th>\n      <th>Hora</th>\n      <th>Especialista</th>\n      <th>Estado</th>\n    </tr>\n  </thead>\n  <tbody>\n\t<tr *ngFor=\"let dentistShift of dentistShiftList\">\n\t<td>{{dentistShift.id}}</td>\n\t<td>{{dentistShift.data.dni}}</td>\n\t<td>{{dentistShift.data.date}}</td>\n\t<td>{{dentistShift.data.hour}}</td>\n\t<td>{{dentistShift.data.specialist}}</td>\n\t<td>{{dentistShift.data.status}}</td>\n\t<td><button class=\"btn-sm btn-danger\" *appTypeValidator=\"['Recepcionista']\" (click)=\"cancel(dentistShift.id)\">Cancelar turno</button></td>\n\t<td><button class=\"btn-sm btn-danger\" *appTypeValidator=\"['Especialista']\" (click)=\"attend(dentistShift.id, dentistShift.data.dni, dentistShift.data.date, dentistShift.data.hour, dentistShift.data.specialist)\">Atender turno</button></td>\n\t<td><button class=\"btn-sm btn-danger\" *appTypeValidator=\"['Especialista']\" (click)=\"openModal1(dentistShift.id)\">Enviar reseña</button></td>\n\t<td><button class=\"btn-sm btn-danger\" *appTypeValidator=\"['Cliente']\" (click)=\"viewReview(dentistShift.id)\">Ver reseña</button></td>\n\t<td><button class=\"btn-sm btn-danger\" *appTypeValidator=\"['Cliente']\" (click)=\"openModal2(dentistShift.data.dni)\">Realizar encuesta</button></td>\n    </tr>\n  </tbody>\n</table>\n</article>\n</div> <!-- card.// -->\n</div>\n\n\n\n<ng-template #modal1 let-modal class=\"card text-white bg-primary mb-3\">\n\t\n\t<app-spinner></app-spinner>\n\n\t<div class=\"card text-white bg-primary mb-3\">\n\n\t<form [formGroup]=\"form1\" class=\"card text-white bg-primary mb-3\">\n\t\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n            <span>Reseña</span>\n        </h4>\n    \n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal1()\">\n            <span aria-hidden=\"true\" >&times;</span>\n        </button>\n    </div>\n\n\n    <div class=\"modal-body\">\n    \t<p> <span>Código de turno:</span></p>\n    \t<input type=\"text\" class=\"form-control\" formControlName=\"code\" [(ngModel)]=\"id\" readonly>\n    \t<br>\n        <p> <span>Descripción:</span></p>\n       \t<textarea class=\"form-control\" formControlName=\"descReview\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" (click)=\"tryReview()\" class=\"btn btn-warning\">Enviar</button>\n    </div>\n    </form>\n    \n    </div>\n\t\n</ng-template>\n\n<ng-template #review let-modal class=\"card text-white bg-primary mb-3\">\n\t\n\t<app-spinner></app-spinner>\n\n\t<div class=\"card text-white bg-primary mb-3\">\n\n\n\t\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n            <span>Reseña</span>\n        </h4>\n    \n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeReview()\">\n            <span aria-hidden=\"true\" >&times;</span>\n        </button>\n    </div>\n    \n    <div class=\"modal-body\" *ngFor=\"let review of reviews\">\n        <p> <span>Código de turno:</span></p>\n        <p>{{review.data.code}}</p>\n        <br>\n        <p> <span>Descripción:</span></p>\n        <textarea class=\"form-control\" rows=\"3\" readonly>{{review.data.desc}}</textarea>\n    </div>\n \n    </div>\n\t\n</ng-template>\n\n<ng-template #modal2 let-modal class=\"card text-white bg-primary mb-3\">\n\t\n\t<app-spinner></app-spinner>\n\n\t<div class=\"card text-white bg-primary mb-3\">\n\n\t<form [formGroup]=\"form2\" class=\"card text-white bg-primary mb-3\">\n \n    <div class=\"modal-header\">\n        <h4 class=\"modal-title\">\n            <span>Encuesta</span>\n        </h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal2()\">\n            <span aria-hidden=\"true\" >&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n    \t<p> <span>DNI:</span></p>\n    \t<input type=\"text\" class=\"form-control\" formControlName=\"dni\" [(ngModel)]=\"dni\" readonly>\n    \t<br>\n    \t<p> <span>Calificación clínica:</span></p>\n    \t<input type=\"number\" class=\"form-control\" formControlName=\"clinic\">\n    \t<br>\n    \t<p> <span>Calificación especialista:</span></p>\n    \t<input type=\"number\" class=\"form-control\" formControlName=\"specialist\">\n    \t<br>\n        <p> <span>Descripción:</span></p>\n       \t<textarea class=\"form-control\" formControlName=\"descPoll\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"submit\" (click)=\"tryPoll()\" class=\"btn btn-warning\">Enviar</button>\n    </div>\n\t</form>\n    </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/dentist-shift/dentist-shift.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/dentist-shift/dentist-shift.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner></app-spinner>\n\n<div class=\"bg\">\n    <br>\n<div class=\"container\">\n\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-10 col-lg-8 mx-auto\">\n\n<div class=\"card text-white bg-danger mb-4\">\n<article class=\"card-body\">\n\n<form [formGroup]=\"form\">\n   <div class=\"form-group\">\n     <label>DNI</label>\n     <input type=\"text\" formControlName=\"dni\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['dni'].touched && form.controls['dni'].invalid }\" required readonly>\n    <div *ngIf=\"form.controls['dni'].touched && form.controls['dni'].invalid\">Error, debe ingresar un DNI válido!</div>\n   </div>\n   <div class=\"form-group\">\n     <label>Fecha</label>\n     <input type=\"date\" formControlName=\"date\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['date'].touched && form.controls['date'].invalid }\" required>\n     <div *ngIf=\"form.controls['date'].touched && form.controls['date'].invalid\">Error, debe ingresar una fecha válida!</div>\n   </div>\n   <div class=\"form-group\">\n     <label>Hora</label>\n     <input type=\"time\" formControlName=\"hour\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['hour'].touched && form.controls['hour'].invalid }\" required>\n     <div *ngIf=\"form.controls['hour'].touched && form.controls['hour'].invalid\">Error, debe ingresar una hora válida!</div>\n   </div>\n  <div class=\"form-group\">\n     <label>Duracion</label>\n     <input type=\"number\" formControlName=\"duration\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['duration'].touched && form.controls['duration'].invalid }\" required>\n     <div *ngIf=\"form.controls['duration'].touched && form.controls['duration'].invalid\">Error, debe ingresar una duración válida!</div>\n   </div>\n   <div class=\"form-group\">\n    <label>Especialista</label>\n    <select formControlName=\"lastName\" class=\"form-control\">\n    <option *ngFor=\"let dentist of dentistList\" value=\"{{dentist.data.lastName}}\">{{dentist.data.lastName}}</select>\n  </div>\n\n  <small *ngIf=\"error\" class=\"\"><i class=\"fa fa-times\"></i> {{errorMessage}} </small>\n  <!-- <small *ngIf=\"success\" class=\"\"><i class=\"fas fa-check\"></i> Usuario creado con éxito! </small> -->\n  <button type=\"submit\" (click)=\"tryDentistShift()\" class=\"btn btn-warning\" style=\"float:right;\">Confirmar</button>\n</form>\n</article>\n</div> <!-- card.// -->\n</div>\n</div> <!-- card.// -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/log/log.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/log/log.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n\n<div class=\"bg\">\n  <br>\n<div class=\"container\">\n\n  \n  <div class=\"row float-left\">\n      <div class=\"col-sm-8 col-md-6 col-lg-4\">\n\n  <div class=\"card text-white bg-danger mb-4 mx-auto\" style=\"width: 60rem;\">\n  <article class=\"card-body\" style=\"width: 60rem;\">\n\n\n<table appPanel class=\"table table-sm table-hover table-info table-striped\">\n  <thead>\n    <tr>\n      <th class=\"text-center\" colspan=\"7\"><b>Lista de usuarios conectados recientemente</b></th>\n    </tr>\n    <tr>\n      <th>Email</th>\n      <th>DNI</th>\n      <th>Nombre</th>\n      <th>Apellido</th>\n      <th>Fecha & hora</th>\n      <!-- <th>Imagen</th> -->\n    </tr>\n  </thead>\n  <tbody>\n\t<tr *ngFor=\"let log of logs; let i = index\">\n\t<td>{{log.data.email}}</td>\n\t<td>{{log.data.dni}}</td>\n\t<td>{{log.data.firstName}}</td>\n\t<td>{{log.data.lastName}}</td>\n\t<td>{{log.data.date}}</td>\n\t<!-- <td><img src=\"{{imgs[i]}}\"  height=\"75\" width=\"75\"></td>\n    </tr> -->\n  </tbody>\n</table>\n</article>\n</div> <!-- card.// -->\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\n<app-spinner></app-spinner>\n\n<div class=\"bg\">\n    <br>\n<div class=\"container\">\n\n    \n    <div class=\"row\">\n        <div class=\"col-sm-12 col-md-10 col-lg-8 mx-auto\">\n\n    <div class=\"card text-white bg-danger mb-4\">\n    <article class=\"card-body\">\n    <h4 class=\"card-title mb-4 mt-1\"><b>Login</b></h4>\n    \n    <form [formGroup]=\"form\">\n        <div class=\"form-group\">\n          <label><b>E-mail</b></label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['email'].touched && form.controls['email'].invalid }\" required>\n          <div *ngIf=\"form.controls['email'].touched && form.controls['email'].invalid\">Error, debe ingresar un E-mail válido!</div>\n        </div> <!-- form-group// -->\n        <div class=\"form-group\">\n            <label><b>Clave</b></label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': form.controls['password'].touched && form.controls['password'].invalid }\" required>\n            <div *ngIf=\"form.controls['password'].touched && form.controls['password'].invalid\">Error, debe ingresar una clave válida! (mínimo 6 dígitos)</div>\n          </div> \n          <div class=\"form-group\">\n            <label><b>Tipo</b></label>\n            <select formControlName=\"type\" class=\"form-control\" required>\n            <option value=\"Administrador\">Administrador</option>\n            <option value=\"Cliente\">Cliente</option>\n            <option value=\"Especialista\">Especialista</option>\n            <option value=\"Recepcionista\">Recepcionista</option>\n            </select> \n            <!-- <input type=\"text\" formControlName=\"type\" class=\"form-control\" required> -->\n          </div>\n          <div class=\"form-group\">\n          <!-- <label><b>Captcha</b></label> -->\n          <ngx-recaptcha2 formControlName=\"recaptcha\" #captchaElem [siteKey]=\"'6LcLuq8UAAAAAKg-NVY7JNSP7KRRW6ZJMN4siNje'\" [useGlobalDomain]=\"false\"></ngx-recaptcha2>\n          </div>\n          <div class=\"form-group\">\n            <label><b>Acceso rápido:</b></label>\n            <select formControlName=\"loader\" class=\"form-control\" (change)=\"defaultLoader($event.target.value)\" required>\n            <option value=\"Administrador\">Administrador</option>\n            <option value=\"Cliente\">Cliente</option>\n            <option value=\"Especialista\">Especialista</option>\n            <option value=\"Recepcionista\">Recepcionista</option>\n            </select> \n            <!-- <input type=\"text\" formControlName=\"type\" class=\"form-control\" required> -->\n          </div>\n          <small *ngIf=\"error\" class=\"\"><i class=\"fa fa-times\"></i> {{errorMessage}} </small>\n          <button type=\"submit\" (click)=\"tryLogin()\" class=\"btn btn-success\" style=\"float:right;\"><b>Ingresar</b></button>                                                         \n    </form>\n    </article>\n    </div> <!-- card.// -->\n  </div>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Buena Sonrisa</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n   <ul class=\"navbar-nav mr-auto\">\n     <li class=\"nav-item\">\n        <a class=\"nav-link\" *appTypeValidator=\"['Administrador']\" \n          routerLinkActive=\"active\" routerLink=\"Register\">Registrar</a>\n      </li>\n     <li class=\"nav-item\">\n        <a class=\"nav-link\" *appTypeValidator=\"['Recepcionista', 'Cliente']\" \n          routerLinkActive=\"active\" routerLink=\"DentistShift\">Pedir un turno</a>\n      </li>\n     <li class=\"nav-item\">\n        <a class=\"nav-link\" *appTypeValidator=\"['Administrador','Cliente', 'Especialista', 'Recepcionista']\" \n          routerLinkActive=\"active\" routerLink=\"DentistShiftViewer\">Información</a>\n      </li>\n     <li class=\"nav-item\">\n        <a class=\"nav-link\" *appTypeValidator=\"['Administrador']\" \n          routerLinkActive=\"active\" routerLink=\"Statistics\">Estadisticas</a>\n      </li>      \n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <span class=\"navbar-text\" *appTypeValidator=\"['Administrador','Cliente', 'Especialista', 'Recepcionista']\"> <i class=\"far fa-id-card\"></i> {{email}} - {{firstName}} - {{type}}</span>\n      <!--<li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"Login\"><i class=\"fas fa-sign-in-alt\"></i>Loguearse</a></li>-->\n      <li class=\"nav-item\"><a class=\"nav-link\" *appTypeValidator=\"['Administrador','Cliente', 'Especialista', 'Recepcionista']\"  (click)=\"logout()\">Salir</a></li>\n    </ul>\n</div>\n</nav>\n<!-- <br>\n<br> -->    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner></app-spinner>\n\n<div class=\"bg\">\n    <br>\n<div class=\"container\">\n\n\n<div class=\"row\">\n    <div class=\"col-sm-12 col-md-10 col-lg-8 mx-auto\">\n\n<div class=\"card text-white bg-danger mb-4\">\n<article class=\"card-body\">\n<!-- <h4 class=\"card-title mb-4 mt-1\"><b>Registro</b></h4> -->\n\n<form [formGroup]=\"form\">\n   <div class=\"form-group\">\n     <label>DNI</label>\n     <input type=\"text\" formControlName=\"dni\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['dni'].touched && form.controls['dni'].invalid }\" required>\n    <div *ngIf=\"form.controls['dni'].touched && form.controls['dni'].invalid\">Error, debe ingresar un DNI válido!</div>\n   </div>\n   <div class=\"form-group\">\n     <label>E-mail</label>\n     <input type=\"email\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['email'].touched && form.controls['email'].invalid }\" required>\n     <div *ngIf=\"form.controls['email'].touched && form.controls['email'].invalid\">Error, debe ingresar un E-mail válido!</div>\n   </div>\n   <div class=\"form-group\">\n     <label>Clave</label>\n     <input type=\"password\" class=\"form-control\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': form.controls['password'].touched && form.controls['password'].invalid }\" required>\n     <div *ngIf=\"form.controls['password'].touched && form.controls['password'].invalid\">Error, debe ingresar una clave válida! (mínimo 6 dígitos)</div>\n   </div>  \n   <div class=\"form-group\">\n     <label>Nombre</label>\n     <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['firstName'].touched && form.controls['firstName'].invalid }\" required>\n     <div *ngIf=\"form.controls['firstName'].touched && form.controls['firstName'].invalid\">Error, debe ingresar un nombre válido!</div>\n   </div>\n   <div class=\"form-group\">\n     <label>Apellido</label>\n     <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': form.controls['lastName'].touched && form.controls['lastName'].invalid }\" required>\n     <div *ngIf=\"form.controls['lastName'].touched && form.controls['lastName'].invalid\">Error, debe ingresar un apellido válido!</div>\n  </div>\n  <div class=\"form-group\">\n     <label>Tipo</label>\n     <select formControlName=\"type\" class=\"form-control\" required>\n      <!-- <option value=\"Administrador\">Administrador</option> -->\n     <option value=\"Cliente\">Cliente</option>\n     <option value=\"Especialista\">Especialista</option>\n     <option value=\"Recepcionista\">Recepcionista</option>\n     </select> \n     <!-- <input type=\"text\" formControlName=\"type\" class=\"form-control\" required> -->\n  </div>\n  <div class=\"form-group\">\n     <!-- <label>Archivo</label><br> -->\n     <input type=\"file\" formControlName=\"file\" accept=\"image/png\" (change)=\"onFileChange($event)\" required>\n  </div>\n  <div class=\"form-group\">\n   <!-- <label>Captcha</label> -->\n   <ngx-recaptcha2 formControlName=\"recaptcha\" #captchaElem [siteKey]=\"'6LcLuq8UAAAAAKg-NVY7JNSP7KRRW6ZJMN4siNje'\" [useGlobalDomain]=\"false\"></ngx-recaptcha2>\n   </div>\n\n  <small *ngIf=\"error\" class=\"\"><i class=\"fa fa-times\"></i> {{errorMessage}} </small>\n  <!-- <small *ngIf=\"success\" class=\"\"><i class=\"fas fa-check\"></i> Usuario creado con éxito! </small> -->\n  <aside><button type=\"submit\" (click)=\"tryRegister()\" class=\"btn btn-warning\" style=\"float:right;\">Registrar</button></aside>\n</form>\n</article>\n</div> <!-- card.// -->\n</div>\n</div> <!-- card.// -->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/spinner/spinner.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/spinner/spinner.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner\n  bdColor=\"rgba(100,151,171,0.9)\"\n  size=\"medium\"\n  color=\"rgb(40,70,200)\"\n  type=\"square-jelly-box\"\n>\n<!-- <br><br><br> -->\n  <!-- <p style=\"font-size: 20px; color: white; text-align: center\">Bienvenidos a Buena Sonrisa!</p>\n  <p style=\"font-size: 20px; color: white; text-align: center\">Federico Henseler 4º B</p> -->\n</ngx-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/statistics/statistics.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/statistics/statistics.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner></app-spinner>\n<div id=\"chartContainer1\" style=\"height: 370px; width: 100%;\"></div>\n<div id=\"chartContainer2\" style=\"height: 370px; width: 100%; margin-left:auto;margin-right:auto;\"></div>\n<div id=\"chartContainer3\" style=\"height: 370px; width: 100%; margin-left:auto;margin-right:auto;\"></div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-spinner></app-spinner>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* stylelint-disable selector-list-comma-newline-after */\n\n\n/* .container {\n  background-image: url(https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60icharts.net/stage/icharts-images/chartbook-images/Chart1457601371484.png); \n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100%;\n} */\n\n\n/* .blog-header {\n  line-height: 1;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.blog-header-logo {\n  font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\n  font-size: 2.25rem;\n}\n\n.blog-header-logo:hover {\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\n}\n\n.display-4 {\n  font-size: 2.5rem;\n}\n@media (min-width: 768px) {\n  .display-4 {\n    font-size: 3rem;\n  }\n}\n\n.nav-scroller {\n  position: relative;\n  z-index: 2;\n  height: 2.75rem;\n  overflow-y: hidden;\n}\n\n.nav-scroller .nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  padding-bottom: 1rem;\n  margin-top: -1px;\n  overflow-x: auto;\n  text-align: center;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n\n.nav-scroller .nav-link {\n  padding-top: .75rem;\n  padding-bottom: .75rem;\n  font-size: .875rem;\n}\n\n.card-img-right {\n  height: 100%;\n  border-radius: 0 3px 3px 0;\n}\n\n.flex-auto {\n  -ms-flex: 0 0 auto;\n  -webkit-box-flex: 0;\n  flex: 0 0 auto;\n}\n\n.h-250 { height: 250px; }\n@media (min-width: 768px) {\n  .h-md-250 { height: 250px; }\n}\n\n.border-top { border-top: 1px solid #e5e5e5; }\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n\n.box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }\n\n/*\n * Blog name and description\n */\n\n\n/* .blog-title {\n  margin-bottom: 0;\n  font-size: 2rem;\n  font-weight: 400;\n}\n.blog-description {\n  font-size: 1.1rem;\n  color: #999;\n}\n\n@media (min-width: 40em) {\n  .blog-title {\n    font-size: 3.5rem;\n  }\n}\n\n/* Pagination */\n\n\n/* .blog-pagination {\n  margin-bottom: 4rem;\n}\n.blog-pagination > .btn {\n  border-radius: 2rem;\n}\n\n/*\n * Blog posts\n */\n\n\n/* .blog-post {\n  margin-bottom: 4rem;\n}\n.blog-post-title {\n  margin-bottom: .25rem;\n  font-size: 2.5rem;\n}\n.blog-post-meta {\n  margin-bottom: 1.25rem;\n  color: #999;\n} */\n\n\n/*\n * Footer\n */\n\n\n/* .blog-footer {\n  padding: 2.5rem 0;\n  color: #999;\n  text-align: center;\n  background-color: #f9f9f9;\n  border-top: .05rem solid #e5e5e5;\n}\n.blog-footer p:last-child {\n  margin-bottom: 0;\n}\n\n\n.jumbotron {\n  background: url('/assets/jumbotron.jpg') no-repeat center center;\n}  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0RBQXdEOzs7QUFHeEQ7Ozs7O0dBS0c7OztBQUdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTZFRTs7O0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFnQmU7OztBQUNmOzs7Ozs7Ozs7RUFTRTs7O0FBQ0Y7Ozs7Ozs7Ozs7R0FVRzs7O0FBRUg7O0VBRUU7OztBQUNGOzs7Ozs7Ozs7Ozs7OztJQWNJIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1saXN0LWNvbW1hLW5ld2xpbmUtYWZ0ZXIgKi9cblxuXG4vKiAuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTExNzM5MDAxNDg2LTZiZmUxMGNlNzg1Zj9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBpY2hhcnRzLm5ldC9zdGFnZS9pY2hhcnRzLWltYWdlcy9jaGFydGJvb2staW1hZ2VzL0NoYXJ0MTQ1NzYwMTM3MTQ4NC5wbmcpOyBcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0gKi9cblxuXG4vKiAuYmxvZy1oZWFkZXIge1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7XG59XG5cbi5ibG9nLWhlYWRlci1sb2dvIHtcbiAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xufVxuXG4uYmxvZy1oZWFkZXItbG9nbzpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG59XG5cbi5kaXNwbGF5LTQge1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZGlzcGxheS00IHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbn1cblxuLm5hdi1zY3JvbGxlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5uYXYtc2Nyb2xsZXIgLm5hdiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4ubmF2LXNjcm9sbGVyIC5uYXYtbGluayB7XG4gIHBhZGRpbmctdG9wOiAuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XG4gIGZvbnQtc2l6ZTogLjg3NXJlbTtcbn1cblxuLmNhcmQtaW1nLXJpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwIDNweCAzcHggMDtcbn1cblxuLmZsZXgtYXV0byB7XG4gIC1tcy1mbGV4OiAwIDAgYXV0bztcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi5oLTI1MCB7IGhlaWdodDogMjUwcHg7IH1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaC1tZC0yNTAgeyBoZWlnaHQ6IDI1MHB4OyB9XG59XG5cbi5ib3JkZXItdG9wIHsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7IH1cbi5ib3JkZXItYm90dG9tIHsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU1ZTU7IH1cblxuLmJveC1zaGFkb3cgeyBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpOyB9XG5cbi8qXG4gKiBCbG9nIG5hbWUgYW5kIGRlc2NyaXB0aW9uXG4gKi9cbi8qIC5ibG9nLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmJsb2ctZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY29sb3I6ICM5OTk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gIC5ibG9nLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxufVxuXG4vKiBQYWdpbmF0aW9uICovXG4vKiAuYmxvZy1wYWdpbmF0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbn1cbi5ibG9nLXBhZ2luYXRpb24gPiAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbn1cblxuLypcbiAqIEJsb2cgcG9zdHNcbiAqL1xuLyogLmJsb2ctcG9zdCB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG4uYmxvZy1wb3N0LXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cbi5ibG9nLXBvc3QtbWV0YSB7XG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIGNvbG9yOiAjOTk5O1xufSAqL1xuXG4vKlxuICogRm9vdGVyXG4gKi9cbi8qIC5ibG9nLWZvb3RlciB7XG4gIHBhZGRpbmc6IDIuNXJlbSAwO1xuICBjb2xvcjogIzk5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBib3JkZXItdG9wOiAuMDVyZW0gc29saWQgI2U1ZTVlNTtcbn1cbi5ibG9nLWZvb3RlciBwOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5cbi5qdW1ib3Ryb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvanVtYm90cm9uLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xufSAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route) {
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Components/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZGVudGlzdC1zaGlmdC12aWV3ZXIvZGVudGlzdC1zaGlmdC12aWV3ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DentistShiftViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistShiftViewerComponent", function() { return DentistShiftViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_dentist_shift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/dentist-shift.service */ "./src/app/Services/dentist-shift.service.ts");
/* harmony import */ var _Services_review_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/review.service */ "./src/app/Services/review.service.ts");
/* harmony import */ var _Services_poll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/poll.service */ "./src/app/Services/poll.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_10__);











// import * as CanvasJS from './canvasjs.min';
var DentistShiftViewerComponent = /** @class */ (function () {
    function DentistShiftViewerComponent(dentistShift, fireStore, modalService, formBuilder1, formBuilder2, reviewService, pollService, spinner) {
        this.dentistShift = dentistShift;
        this.fireStore = fireStore;
        this.modalService = modalService;
        this.formBuilder1 = formBuilder1;
        this.formBuilder2 = formBuilder2;
        this.reviewService = reviewService;
        this.pollService = pollService;
        this.spinner = spinner;
        this.modalReference1 = null;
        this.modalReference2 = null;
        this.reviewReference = null;
        this.dentistShiftList = [];
        this.reviews = [];
        //public isSpecialist: boolean = false;
        //public open: boolean = false;
        this.show = 0;
        this.user = JSON.parse(localStorage.getItem('token'));
        if (this.user.type == "Especialista") {
            this.dentistShiftList = dentistShift.returnAllBySpecialist(this.user.lastName);
            //this.isSpecialist = true;
        }
        else if (this.user.type == "Cliente") {
            console.log(this.user.dni);
            this.dentistShiftList = dentistShift.returnAllByDNI(this.user.dni);
        }
        else {
            this.dentistShiftList = dentistShift.returnAll();
        }
        this.form1 = this.formBuilder1.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            descReview: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(66)]]
        });
        this.form2 = this.formBuilder2.group({
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            clinic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]],
            specialist: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(10)]],
            descPoll: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(66)]]
        });
    }
    DentistShiftViewerComponent.prototype.ngOnInit = function () {
    };
    DentistShiftViewerComponent.prototype.attend = function (id, dni, date, hour, specialist) {
        this.spinner.show();
        var data = {
            dni: dni,
            date: date,
            hour: hour,
            specialist: specialist,
            status: 'Atendido'
        };
        this.dentistShiftList = [];
        this.fireStore.collection('dentistShifts').doc(id).set(data);
        setTimeout(function () {
            location.reload();
        }, 3000);
    };
    DentistShiftViewerComponent.prototype.cancel = function (id) {
        this.spinner.show();
        this.dentistShiftList = [];
        this.fireStore.collection('dentistShifts').doc(id).delete();
        setTimeout(function () {
            location.reload();
        }, 3000);
    };
    DentistShiftViewerComponent.prototype.openModal1 = function (id) {
        this.modalReference1 = this.modalService.open(this.modal1);
        this.id = id;
    };
    DentistShiftViewerComponent.prototype.closeModal1 = function () {
        this.modalReference1.close();
    };
    DentistShiftViewerComponent.prototype.openModal2 = function (dni) {
        this.modalReference2 = this.modalService.open(this.modal2);
        this.dni = dni;
    };
    DentistShiftViewerComponent.prototype.closeModal2 = function () {
        this.modalReference2.close();
    };
    DentistShiftViewerComponent.prototype.tryReview = function () {
        console.log(this.form1.valid);
        console.log(this.form1.get('code').value);
        console.log(this.form1.get('descReview').value);
        if (this.form1.valid) {
            var code = this.form1.get('code').value;
            var desc = this.form1.get('descReview').value;
            this.reviewService.reviewRegister(code, desc);
        }
    };
    DentistShiftViewerComponent.prototype.viewReview = function (id) {
        this.reviewReference = this.modalService.open(this.review);
        console.log(id);
        this.reviews = this.reviewService.returnById(id);
    };
    DentistShiftViewerComponent.prototype.closeReview = function () {
        this.reviewReference.close();
    };
    DentistShiftViewerComponent.prototype.tryPoll = function () {
        console.log(this.form2.valid);
        if (this.form2.valid) {
            var dni = this.form2.get('dni').value;
            var clinic = this.form2.get('clinic').value;
            var specialist = this.form2.get('specialist').value;
            var desc = this.form2.get('descPoll').value;
            this.pollService.pollRegister(dni, clinic, specialist, desc);
        }
    };
    DentistShiftViewerComponent.prototype.generarPDF = function () {
        var data = document.getElementById('tablaPDF');
        html2canvas__WEBPACK_IMPORTED_MODULE_10___default()(data).then(function (canvas) {
            // Few necessary setting options  
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            var contentDataURL = canvas.toDataURL('image/png');
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_9__('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('PDFTurnos.pdf'); // Generated PDF   
        });
    };
    DentistShiftViewerComponent.ctorParameters = function () { return [
        { type: _Services_dentist_shift_service__WEBPACK_IMPORTED_MODULE_2__["DentistShiftService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _Services_review_service__WEBPACK_IMPORTED_MODULE_3__["ReviewService"] },
        { type: _Services_poll_service__WEBPACK_IMPORTED_MODULE_4__["PollService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal1', { static: true })
    ], DentistShiftViewerComponent.prototype, "modal1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modal2', { static: true })
    ], DentistShiftViewerComponent.prototype, "modal2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('review', { static: true })
    ], DentistShiftViewerComponent.prototype, "review", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DentistShiftViewerComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DentistShiftViewerComponent.prototype, "dni", void 0);
    DentistShiftViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dentist-shift-viewer',
            template: __webpack_require__(/*! raw-loader!./dentist-shift-viewer.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.html"),
            styles: [__webpack_require__(/*! ./dentist-shift-viewer.component.css */ "./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.css")]
        })
    ], DentistShiftViewerComponent);
    return DentistShiftViewerComponent;
}());



/***/ }),

/***/ "./src/app/Components/dentist-shift/dentist-shift.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/Components/dentist-shift/dentist-shift.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZGVudGlzdC1zaGlmdC9kZW50aXN0LXNoaWZ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/dentist-shift/dentist-shift.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/dentist-shift/dentist-shift.component.ts ***!
  \*********************************************************************/
/*! exports provided: DentistShiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistShiftComponent", function() { return DentistShiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_dentist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/dentist.service */ "./src/app/Services/dentist.service.ts");
/* harmony import */ var _Services_dentist_shift_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/dentist-shift.service */ "./src/app/Services/dentist-shift.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var DentistShiftComponent = /** @class */ (function () {
    function DentistShiftComponent(formBuilder, dentist, dentistShift) {
        this.formBuilder = formBuilder;
        this.dentist = dentist;
        this.dentistShift = dentistShift;
        this.dentistList = [];
        var user = JSON.parse(localStorage.getItem('token'));
        this.resetForm(user.dni);
        this.errorMessage = '';
        this.error = false;
        this.success = false;
        this.dentistList = this.dentist.returnAll();
    }
    DentistShiftComponent.prototype.resetForm = function (dni) {
        this.form = this.formBuilder.group({
            dni: [dni, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]],
            date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            hour: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(19)]],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(15), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(60)]],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    DentistShiftComponent.prototype.ngOnInit = function () {
    };
    DentistShiftComponent.prototype.tryDentistShift = function () {
        var _this = this;
        console.log(this.form.valid);
        if (this.form.valid) {
            var dni_1 = this.form.get('dni').value;
            var date = this.form.get('date').value;
            var hour = this.form.get('hour').value;
            var lastName = this.form.get('lastName').value;
            this.dentistShift.dentistShiftRegister(dni_1, date, hour, lastName)
                .then(function (response) {
                _this.success = true;
                _this.resetForm(dni_1);
                location.reload();
            })
                .catch(function (error) {
                _this.error = true;
                _this.errorMessage = error['Mensaje'];
                console.log(error);
            });
        }
        else {
            this.errorMessage = 'Debe completar los campos correctamente.';
            this.error = true;
        }
    };
    DentistShiftComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _Services_dentist_service__WEBPACK_IMPORTED_MODULE_2__["DentistService"] },
        { type: _Services_dentist_shift_service__WEBPACK_IMPORTED_MODULE_3__["DentistShiftService"] }
    ]; };
    DentistShiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dentist-shift',
            template: __webpack_require__(/*! raw-loader!./dentist-shift.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/dentist-shift/dentist-shift.component.html"),
            styles: [__webpack_require__(/*! ./dentist-shift.component.css */ "./src/app/Components/dentist-shift/dentist-shift.component.css")]
        })
    ], DentistShiftComponent);
    return DentistShiftComponent;
}());



/***/ }),

/***/ "./src/app/Components/log/log.component.css":
/*!**************************************************!*\
  !*** ./src/app/Components/log/log.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbG9nL2xvZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/log/log.component.ts":
/*!*************************************************!*\
  !*** ./src/app/Components/log/log.component.ts ***!
  \*************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");





var LogComponent = /** @class */ (function () {
    function LogComponent(fireStore, fireStorage, firebase) {
        this.fireStore = fireStore;
        this.fireStorage = fireStorage;
        this.firebase = firebase;
        this.logs = [];
        this.imgs = [];
        this.logs = this.returnAll();
    }
    LogComponent.prototype.returnAll = function () {
        var _this = this;
        //return this.fireStore.collection('users').snapshotChanges();
        var log;
        this.fireStore.collection('logs').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                log = r.payload.doc.data();
                _this.logs.push({
                    id: r.payload.doc.id,
                    data: r.payload.doc.data()
                });
                _this.returnImg(log["dni"] + ".png");
                console.log(log["dni"]);
            });
        });
        return this.logs;
    };
    LogComponent.prototype.returnImg = function (dni) {
        var _this = this;
        this.fireStorage.ref(dni).getDownloadURL().subscribe(function (r) {
            _this.imgs.push(r.toString());
        });
        var file;
        file = this.fireStorage.ref(dni).getDownloadURL().subscribe(function (r) {
            console.log(r);
        });
    };
    LogComponent.prototype.ngOnInit = function () {
    };
    LogComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] },
        { type: _angular_fire__WEBPACK_IMPORTED_MODULE_4__["FirebaseApp"] }
    ]; };
    LogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log',
            template: __webpack_require__(/*! raw-loader!./log.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/log/log.component.html"),
            styles: [__webpack_require__(/*! ./log.component.css */ "./src/app/Components/log/log.component.css")]
        })
    ], LogComponent);
    return LogComponent;
}());



/***/ }),

/***/ "./src/app/Components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/Components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    width: 45rem;\r\n}\r\n\r\nbody, html {\r\n    height: 100%;\r\n  }\r\n\r\n.bg {\r\n    /* The image used */\r\n    background-image: url('background.jpg');\r\n  \r\n    /* Full height */\r\n    height: 100%;\r\n  \r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFDQTtJQUNFLG1CQUFtQjtJQUNuQix1Q0FBdUQ7O0lBRXZELGdCQUFnQjtJQUNoQixZQUFZOztJQUVaLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2lkdGg6IDQ1cmVtO1xyXG59XHJcblxyXG5ib2R5LCBodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmJnIHtcclxuICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgXHJcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIFxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            type: ['Cliente', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            recaptcha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            loader: ['Cliente', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.errorMessage = '';
        this.error = false;
        this.success = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.defaultLoader = function (type) {
        var user = '';
        switch (type) {
            case 'Administrador':
                user = { email: 'administrador@gmail.com', password: '123456', type: 'Administrador', recaptcha: '', loader: 'Administrador' };
                this.form.setValue(user);
                break;
            case 'Especialista':
                user = { email: 'especialista@gmail.com', password: '123456', type: 'Especialista', recaptcha: '', loader: 'Especialista' };
                this.form.setValue(user);
                break;
            case 'Recepcionista':
                user = { email: 'recepcionista@gmail.com', password: '123456', type: 'Recepcionista', recaptcha: '', loader: 'Recepcionista' };
                this.form.setValue(user);
                break;
            case 'Cliente':
                user = { email: 'cliente@gmail.com', password: '123456', type: 'Cliente', recaptcha: '', loader: 'Cliente' };
                this.form.setValue(user);
                break;
            default:
                user = { email: '', password: '', type: 'Cliente', recaptcha: '', loader: 'Cliente' };
                break;
        }
    };
    LoginComponent.prototype.tryLogin = function () {
        if (this.form.valid) {
            var email = this.form.get('email').value;
            var password = this.form.get('password').value;
            var type = this.form.get('type').value;
            console.log(type);
            this.userService.userLogin(email, password, type);
        }
        else {
            this.errorMessage = 'Debe completar los campos correctamente.';
            this.error = true;
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/Components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        var token = localStorage.getItem('token');
        if (token == null) {
            this.email = '';
            this.type = '';
            this.firstName = '';
        }
        if (token != null) {
            var tokenInfo = JSON.parse(token);
            this.email = tokenInfo['email'];
            this.type = tokenInfo['type'];
            this.firstName = tokenInfo['firstName'];
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        //this.authService.logout();
        this.router.navigate(['/Login']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/Components/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/Components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    width: 45rem;\r\n}\r\n\r\nbody, html {\r\n    height: 100%;\r\n    background-image: url('back.jpg');\r\n    height: 100%; /* You must set a specified height */\r\n    background-position: center; /* Center the image */\r\n    background-repeat: no-repeat; /* Do not repeat the image */\r\n    background-size: cover; /* Resize the background image to cover the entire container */\r\n  }\r\n\r\n/* body, html {\r\n    height: 100%;\r\n  }\r\n  .bg { */\r\n\r\n/* The image used */\r\n\r\n/* background-image: url(\"../../../assets/background.jpg\"); */\r\n\r\n/* Full height */\r\n\r\n/* height: 100%; */\r\n\r\n/* Center and scale the image nicely */\r\n\r\n/* background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBK0M7SUFDL0MsWUFBWSxFQUFFLG9DQUFvQztJQUNsRCwyQkFBMkIsRUFBRSxxQkFBcUI7SUFDbEQsNEJBQTRCLEVBQUUsNEJBQTRCO0lBQzFELHNCQUFzQixFQUFFLDhEQUE4RDtFQUN4Rjs7QUFJRjs7O1NBR1M7O0FBQ0wsbUJBQW1COztBQUNuQiw2REFBNkQ7O0FBRTdELGdCQUFnQjs7QUFDaEIsa0JBQWtCOztBQUVsQixzQ0FBc0M7O0FBQ3RDOzs7R0FHRCIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgd2lkdGg6IDQ1cmVtO1xyXG59XHJcblxyXG5ib2R5LCBodG1sIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFjay5qcGcpO1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBZb3UgbXVzdCBzZXQgYSBzcGVjaWZpZWQgaGVpZ2h0ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IC8qIERvIG5vdCByZXBlYXQgdGhlIGltYWdlICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAvKiBSZXNpemUgdGhlIGJhY2tncm91bmQgaW1hZ2UgdG8gY292ZXIgdGhlIGVudGlyZSBjb250YWluZXIgKi9cclxuICB9XHJcblxyXG5cclxuXHJcbi8qIGJvZHksIGh0bWwge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAuYmcgeyAqL1xyXG4gICAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKTsgKi9cclxuICBcclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgXHJcbiAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICAgIC8qIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/Components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
        this.resetForm();
        this.errorMessage = '';
        this.error = false;
        this.success = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.resetForm = function () {
        this.form = this.formBuilder.group({
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: ['Cliente', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            file: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].nullValidator]],
            recaptcha: ['']
        });
    };
    RegisterComponent.prototype.tryRegister = function () {
        var _this = this;
        if (this.form.valid) {
            var dni = this.form.get('dni').value;
            var email = this.form.get('email').value;
            var password = this.form.get('password').value;
            var firstName = this.form.get('firstName').value;
            var lastName = this.form.get('lastName').value;
            var type = this.form.get('type').value;
            //let file = this.form.get('file');
            var file = this.selectedFiles.item(0);
            this.userService.userRegister(dni, email, password, firstName, lastName, type, file)
                .then(function (response) {
                _this.success = true;
                _this.resetForm();
            })
                .catch(function (error) {
                _this.error = true;
                _this.errorMessage = error['Mensaje'];
                console.log(error);
            });
        }
        else {
            this.errorMessage = 'Debe completar los campos correctamente.';
            this.error = true;
        }
    };
    RegisterComponent.prototype.onFileChange = function (event) {
        if (event.target.files.length > 0) {
            this.selectedFiles = event.target.files;
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _Services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/Components/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/Components/spinner/spinner.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Components/spinner/spinner.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(spinner) {
        this.spinner = spinner;
    }
    SpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 2000);
    };
    SpinnerComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.css */ "./src/app/Components/spinner/spinner.component.css")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/Components/statistics/statistics.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/statistics/statistics.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Components/statistics/statistics.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/statistics/statistics.component.ts ***!
  \***************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_dentist_shift_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/dentist-shift.service */ "./src/app/Services/dentist-shift.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var canvasjs_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! canvasjs/canvasjs.min */ "./node_modules/canvasjs/canvasjs.min.js");
/* harmony import */ var canvasjs_canvasjs_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(canvasjs_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__);





//import * as CanvasJS from 'canvasjs/canvasjs.min';
var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(dentistShift, fireStore) {
        /*this.dentistShiftList = dentistShift.returnAll();
    
        console.log(this.dentistShiftList.length);
    
        //this.count = dentistShift.count();
    
        console.log(this.fireStore.collection('dentistShifts').snapshotChanges.length);
    
        console.log(this.fireStore.collection('dentistShifts').snapshotChanges().subscribe(
            res =>{res.toString()}));
    
    
        this.fireStore.collection('dentistShifts').snapshotChanges().subscribe((res) => {
                res.forEach(r => {
                    this.count++;
                })
            });
    
        console.log(this.count);*/
        this.dentistShift = dentistShift;
        this.fireStore = fireStore;
        this.dentistShiftList = [];
        this.pedidos = 0;
        this.atendidos = 0;
        this.count = 0;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        this.calculate();
        this.create1();
        this.create2();
        this.create3();
    };
    StatisticsComponent.prototype.calculate = function () {
        var _this = this;
        var shift;
        this.fireStore.collection('dentistShifts').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                shift = r.payload.doc.data();
                _this.dentistShiftList.push({
                    id: r.payload.doc.id,
                    data: r.payload.doc.data()
                });
                if (shift["status"] === "Pedido") {
                    _this.pedidos++;
                }
                if (shift["status"] === "Atendido") {
                    _this.atendidos++;
                }
                console.log(shift["date"]);
                console.log(shift["dni"]);
                console.log(shift["hour"]);
                console.log(shift["specialist"]);
                console.log(shift["status"]);
                _this.count++;
            });
        });
    };
    StatisticsComponent.prototype.create1 = function () {
        var dataPoints = [];
        var y = 0;
        for (var i = 0; i < 50; i++) {
            y += Math.round(5 + Math.random() * (-5 - 5));
            dataPoints.push({ y: y });
        }
        var chart1 = new canvasjs_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__["Chart"]("chartContainer1", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Estadisticas de EMPLEADOS"
            },
            data: [{
                    type: "column",
                    dataPoints: [
                        { y: this.fireStore.collection('logs').snapshotChanges.length, label: "Ingresos de usuarios el mes de julio" },
                        { y: this.fireStore.collection('dentistShifts').snapshotChanges.length, label: "Cant turnos p/ especialidad" }
                    ]
                }]
        });
        chart1.render();
    };
    StatisticsComponent.prototype.create2 = function () {
        setTimeout(function () {
        }, 10000);
        var dataPoints = [];
        var dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        var y = 0;
        for (var i = 0; i < 6; i++) {
            y += Math.round(5 + Math.random() * (-5 - 5));
            if (y > 0) {
                dataPoints.push({ y: y, name: 'Turnos del día ' + dias[i] });
            }
        }
        var chart2 = new canvasjs_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__["Chart"]("chartContainer2", {
            theme: "light2",
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Estadisticas de TURNOS"
            },
            data: [{
                    type: "pie",
                    showInLegend: true,
                    toolTipContent: "<b>{name}</b>: {y} (#percent%)",
                    indexLabel: "{name} - #percent%",
                    dataPoints: dataPoints /*[
                        { y: this.fireStore.collection('dentistShifts').snapshotChanges.length, name: "TURNOS TOTALES" },
                        { y: this.pedidos, name: "TURNOS PEDIDOS" },
                        { y: this.atendidos, name: "TURNOS ATENDIDOS" },
                        { y: this.atendidos, name: "Turnos realizados p/ especialidad" },
                        { y: this.atendidos, name: "Turnos cancelados p/ especialidad" },
                        { y: this.atendidos, name: "Turnos cancelados p/ clientes" },
                        { y: this.atendidos, name: "Turnos cancelados p/ recepcionista" }
                    ]*/
                }]
        });
        chart2.render();
    };
    StatisticsComponent.prototype.create3 = function () {
        var dataPoints = [];
        var y = 0;
        for (var i = 0; i < 10; i++) {
            y += Math.round(5 + Math.random() * (-5 - 5));
            if (y > 0) {
                dataPoints.push({ y: y });
            }
        }
        var chart3 = new canvasjs_canvasjs_min__WEBPACK_IMPORTED_MODULE_4__["Chart"]("chartContainer3", {
            zoomEnabled: true,
            animationEnabled: true,
            exportEnabled: true,
            title: {
                text: "Estadisticas de ESPECIALIDADES"
            },
            subtitles: [{
                    text: "Try Zooming and Panning"
                }],
            data: [
                {
                    type: "line",
                    dataPoints: dataPoints
                }
            ]
        });
        chart3.render();
    };
    StatisticsComponent.ctorParameters = function () { return [
        { type: _Services_dentist_shift_service__WEBPACK_IMPORTED_MODULE_2__["DentistShiftService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! raw-loader!./statistics.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.css */ "./src/app/Components/statistics/statistics.component.css")]
        })
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/Directives/type-validator.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/Directives/type-validator.directive.ts ***!
  \********************************************************/
/*! exports provided: TypeValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeValidatorDirective", function() { return TypeValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypeValidatorDirective = /** @class */ (function () {
    function TypeValidatorDirective(element, templateRef, viewContainer) {
        this.element = element;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(TypeValidatorDirective.prototype, "appTypeValidator", {
        set: function (type) {
            this.admittedTypes = type;
        },
        enumerable: true,
        configurable: true
    });
    TypeValidatorDirective.prototype.ngOnInit = function () {
        if (this.checkTypes()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    };
    TypeValidatorDirective.prototype.checkTypes = function () {
        var ret = false;
        var token = localStorage.getItem('token');
        var tokenInfo = JSON.parse(token);
        if (this.admittedTypes && tokenInfo) {
            var type_1 = tokenInfo['type'];
            this.admittedTypes.forEach(function (r) {
                if (type_1 === r) {
                    ret = true;
                }
            });
        }
        return ret;
    };
    TypeValidatorDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TypeValidatorDirective.prototype, "appTypeValidator", null);
    TypeValidatorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTypeValidator]'
        })
    ], TypeValidatorDirective);
    return TypeValidatorDirective;
}());



/***/ }),

/***/ "./src/app/Guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/Guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/auth.service */ "./src/app/Services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        var types = next.data['types'];
        return this.checkLogin(url, types);
    };
    AuthGuard.prototype.checkLogin = function (url, types) {
        var token = localStorage.getItem('token');
        var tokenInfo = JSON.parse(token);
        var check = false;
        if (tokenInfo) {
            var userType_1 = tokenInfo['type'];
            console.log("token: ", tokenInfo);
            console.log(userType_1);
            this.authService.redirectUrl = '/';
            types.forEach(function (element) {
                console.log(element);
            });
            types.forEach(function (element) {
                if (userType_1 === element) {
                    console.log("Entra authguard");
                    check = true;
                    return true;
                }
            });
        }
        else {
            // Store the attempted URL for redirecting
            this.authService.redirectUrl = url;
        }
        if (!check) {
            this.authService.logout();
            // Navigate to the login page with extras
            this.router.navigate(['/Login']);
        }
        return check;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/Services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AuthService = /** @class */ (function () {
    function AuthService(fireAuth, fireStore, router) {
        this.fireAuth = fireAuth;
        this.fireStore = fireStore;
        this.router = router;
        this.email = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.user = fireAuth.authState;
    }
    AuthService.prototype.signIn = function (email, password, type) {
        var _this = this;
        var usuario;
        this.fireAuth.auth.signInWithEmailAndPassword(email, password).then(function (value) {
            _this.fireStore.collection('users').snapshotChanges().subscribe(function (res) {
                res.forEach(function (r) {
                    usuario = r.payload.doc.data();
                    if (usuario["email"] == email && usuario["type"] == type) {
                        localStorage.setItem("token", JSON.stringify(usuario));
                        var now = new Date();
                        var request = {
                            email: email,
                            dni: usuario["dni"],
                            firstName: usuario["firstName"],
                            lastName: usuario["lastName"],
                            type: type,
                            date: now.toString(),
                        };
                        _this.fireStore.collection('logs').add(request);
                        console.log("Entro");
                        //location.reload();
                        _this.router.navigate(['/Dashboard']);
                        //this.router.navigate(['/Dashboard']);
                    }
                });
            });
        })
            .catch(function (e) {
            console.log('Error, algo fallo!', e.message);
        });
    };
    AuthService.prototype.signUp = function (email, password) {
        var _this = this;
        this.fireAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Registro correcto!', value);
            _this.router.navigate(['/Dashboard']);
        })
            .catch(function (err) {
            console.log('Error, algo fallo!', err.message);
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("token");
        this.fireAuth.auth.signOut();
        //location.reload();
        //this.router.navigate(['/Dashboard']);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], AuthService.prototype, "email", void 0);
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/dentist-shift.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/dentist-shift.service.ts ***!
  \***************************************************/
/*! exports provided: DentistShiftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistShiftService", function() { return DentistShiftService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var DentistShiftService = /** @class */ (function () {
    function DentistShiftService(fireStore, authService) {
        this.fireStore = fireStore;
        this.authService = authService;
        this.dentistShifts = [];
    }
    DentistShiftService.prototype.dentistShiftRegister = function (dni, date, hour, specialist) {
        //Validación...
        var request = {
            dni: dni,
            date: date,
            hour: hour,
            specialist: specialist,
            status: 'Pedido'
        };
        return this.fireStore.collection('dentistShifts').add(request);
    };
    DentistShiftService.prototype.returnAll = function () {
        var _this = this;
        var shift;
        this.fireStore.collection('dentistShifts').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                shift = r.payload.doc.data();
                _this.dentistShifts.push({
                    id: r.payload.doc.id,
                    data: r.payload.doc.data()
                });
                console.log(shift["date"]);
            });
        });
        return this.dentistShifts;
    };
    DentistShiftService.prototype.returnAllByDNI = function (dni) {
        var _this = this;
        console.log("Entro");
        var shift;
        this.fireStore.collection('dentistShifts').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                shift = r.payload.doc.data();
                if (shift["dni"] == dni) {
                    console.log("Entro más");
                    console.log(shift["date"]);
                    _this.dentistShifts.push({
                        id: r.payload.doc.id,
                        data: r.payload.doc.data()
                    });
                }
            });
        });
        return this.dentistShifts;
    };
    DentistShiftService.prototype.returnAllBySpecialist = function (specialist) {
        var _this = this;
        var shift;
        this.fireStore.collection('dentistShifts').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                shift = r.payload.doc.data();
                if (shift["specialist"] == specialist) {
                    _this.dentistShifts.push({
                        id: r.payload.doc.id,
                        data: r.payload.doc.data()
                    });
                }
            });
        });
        return this.dentistShifts;
    };
    DentistShiftService.prototype.count = function () {
        var shift;
        var count = 0;
        this.fireStore.collection('dentistShifts').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                shift = r.payload.doc.data();
                count++;
            });
        });
        return count;
    };
    DentistShiftService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    DentistShiftService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DentistShiftService);
    return DentistShiftService;
}());



/***/ }),

/***/ "./src/app/Services/dentist.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/dentist.service.ts ***!
  \*********************************************/
/*! exports provided: DentistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentistService", function() { return DentistService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





var DentistService = /** @class */ (function () {
    function DentistService(fireStore, fireStorage, authService) {
        this.fireStore = fireStore;
        this.fireStorage = fireStorage;
        this.authService = authService;
        this.dentists = [];
    }
    DentistService.prototype.returnAll = function () {
        var _this = this;
        //return this.fireStore.collection('users').snapshotChanges();
        var user;
        this.fireStore.collection('users').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                user = r.payload.doc.data();
                if (user["type"] == "Especialista") {
                    _this.dentists.push({
                        id: r.payload.doc.id,
                        data: r.payload.doc.data()
                    });
                }
            });
        });
        return this.dentists;
    };
    DentistService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    DentistService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DentistService);
    return DentistService;
}());



/***/ }),

/***/ "./src/app/Services/poll.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/poll.service.ts ***!
  \******************************************/
/*! exports provided: PollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollService", function() { return PollService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var PollService = /** @class */ (function () {
    function PollService(fireStore) {
        this.fireStore = fireStore;
        this.polls = [];
    }
    PollService.prototype.pollRegister = function (dni, clinic, specialist, desc) {
        //Validación...
        var request = {
            dni: dni,
            clinic: clinic,
            specialist: specialist,
            desc: desc
        };
        return this.fireStore.collection('polls').add(request);
    };
    PollService.prototype.returnAll = function () {
        var _this = this;
        //return this.fireStore.collection('users').snapshotChanges();
        var poll;
        this.fireStore.collection('polls').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                poll = r.payload.doc.data();
                _this.polls.push({
                    id: r.payload.doc.id,
                    data: r.payload.doc.data()
                });
            });
        });
        return this.polls;
    };
    PollService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    PollService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PollService);
    return PollService;
}());



/***/ }),

/***/ "./src/app/Services/review.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/review.service.ts ***!
  \********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var ReviewService = /** @class */ (function () {
    function ReviewService(fireStore) {
        this.fireStore = fireStore;
        this.reviews = [];
    }
    ReviewService.prototype.reviewRegister = function (code, desc) {
        //Validación...
        var request = {
            code: code,
            desc: desc
        };
        return this.fireStore.collection('reviews').add(request);
    };
    ReviewService.prototype.returnById = function (id) {
        var _this = this;
        //return this.fireStore.collection('users').snapshotChanges();
        var review;
        this.fireStore.collection('reviews').snapshotChanges().subscribe(function (res) {
            res.forEach(function (r) {
                review = r.payload.doc.data();
                if (review["code"] == id) {
                    _this.reviews.push({
                        id: r.payload.doc.id,
                        data: r.payload.doc.data()
                    });
                }
            });
        });
        return this.reviews;
    };
    ReviewService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "./src/app/Services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





var UserService = /** @class */ (function () {
    function UserService(fireStore, fireStorage, authService) {
        this.fireStore = fireStore;
        this.fireStorage = fireStorage;
        this.authService = authService;
    }
    UserService.prototype.userLogin = function (email, password, type) {
        this.authService.signIn(email, password, type);
    };
    UserService.prototype.userRegister = function (dni, email, password, firstName, lastName, type, file) {
        var request = {
            dni: dni,
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            type: type
        };
        this.authService.signUp(email, password);
        console.log(this.fireStorage.upload(dni, file));
        return this.fireStore.collection('users').add(request);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/register/register.component */ "./src/app/Components/register/register.component.ts");
/* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard.component.ts");
/* harmony import */ var _Components_dentist_shift_dentist_shift_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/dentist-shift/dentist-shift.component */ "./src/app/Components/dentist-shift/dentist-shift.component.ts");
/* harmony import */ var _Components_dentist_shift_viewer_dentist_shift_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/dentist-shift-viewer/dentist-shift-viewer.component */ "./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.ts");
/* harmony import */ var _Guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Guards/auth.guard */ "./src/app/Guards/auth.guard.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/statistics/statistics.component */ "./src/app/Components/statistics/statistics.component.ts");











//const routes: Routes = [];
/*const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'DentistShift', component: DentistShiftComponent },
  { path: 'DentistShiftViewer', component: DentistShiftViewerComponent }
];*/
var routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Dashboard', component: _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        data: { types: ['Administrador', 'Cliente', 'Especialista', 'Recepcionista'] },
        children: [
            {
                path: 'Register',
                component: _Components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                canActivate: [_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                data: { types: ['Administrador'] }
            },
            {
                path: 'DentistShift',
                component: _Components_dentist_shift_dentist_shift_component__WEBPACK_IMPORTED_MODULE_6__["DentistShiftComponent"],
                canActivate: [_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                data: { types: ['Recepcionista', 'Cliente'] }
            },
            {
                path: 'DentistShiftViewer',
                component: _Components_dentist_shift_viewer_dentist_shift_viewer_component__WEBPACK_IMPORTED_MODULE_7__["DentistShiftViewerComponent"],
                canActivate: [_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                data: { types: ['Administrador', 'Cliente', 'Especialista', 'Recepcionista'] }
            },
            {
                path: 'Statistics',
                component: _Components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_10__["StatisticsComponent"],
                canActivate: [_Guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                data: { types: ['Administrador'] }
            }
        ]
    },
    { path: 'Login', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '*', redirectTo: 'Login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TPBuenaSonrisa';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/login/login.component */ "./src/app/Components/login/login.component.ts");
/* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard.component.ts");
/* harmony import */ var _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/navbar/navbar.component */ "./src/app/Components/navbar/navbar.component.ts");
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/register/register.component */ "./src/app/Components/register/register.component.ts");
/* harmony import */ var _Components_dentist_shift_dentist_shift_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/dentist-shift/dentist-shift.component */ "./src/app/Components/dentist-shift/dentist-shift.component.ts");
/* harmony import */ var _Components_dentist_shift_viewer_dentist_shift_viewer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/dentist-shift-viewer/dentist-shift-viewer.component */ "./src/app/Components/dentist-shift-viewer/dentist-shift-viewer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _Components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/spinner/spinner.component */ "./src/app/Components/spinner/spinner.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-captcha */ "./node_modules/ngx-captcha/fesm5/ngx-captcha.js");
/* harmony import */ var _Directives_type_validator_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Directives/type-validator.directive */ "./src/app/Directives/type-validator.directive.ts");
/* harmony import */ var _Components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/statistics/statistics.component */ "./src/app/Components/statistics/statistics.component.ts");
/* harmony import */ var _Components_log_log_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/log/log.component */ "./src/app/Components/log/log.component.ts");
/* harmony import */ var angular_pdf_generator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-pdf-generator */ "./node_modules/angular-pdf-generator/angular-pdf-generator.umd.js");
/* harmony import */ var angular_pdf_generator__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(angular_pdf_generator__WEBPACK_IMPORTED_MODULE_24__);










//import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _Components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _Components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _Components_dentist_shift_dentist_shift_component__WEBPACK_IMPORTED_MODULE_15__["DentistShiftComponent"],
                _Components_dentist_shift_viewer_dentist_shift_viewer_component__WEBPACK_IMPORTED_MODULE_16__["DentistShiftViewerComponent"],
                _Components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"],
                _Directives_type_validator_directive__WEBPACK_IMPORTED_MODULE_21__["TypeValidatorDirective"],
                _Components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_22__["StatisticsComponent"],
                _Components_log_log_component__WEBPACK_IMPORTED_MODULE_23__["LogComponent"],
                _Components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_22__["StatisticsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
                // NgbModule.forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"],
                ngx_captcha__WEBPACK_IMPORTED_MODULE_20__["NgxCaptchaModule"],
                angular_pdf_generator__WEBPACK_IMPORTED_MODULE_24__["SampleModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCFNzshYolpLS3YKK7QpA_BxHaSqXm7ulA",
        authDomain: "tp-buena-sonrisa.firebaseapp.com",
        databaseURL: "https://tp-buena-sonrisa.firebaseio.com",
        projectId: "tp-buena-sonrisa",
        storageBucket: "tp-buena-sonrisa.appspot.com",
        messagingSenderId: "670901639924",
        appId: "1:670901639924:web:02ace58fc0459c5c"
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




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

module.exports = __webpack_require__(/*! C:\Users\Fede\Desktop\BuenaSonrisa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map