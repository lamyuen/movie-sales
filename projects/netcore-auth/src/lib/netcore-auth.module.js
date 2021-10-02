"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NetcoreAuthModule = void 0;
var core_1 = require("@angular/core");
var netcore_auth_component_1 = require("./netcore-auth.component");
var NetcoreAuthModule = /** @class */ (function () {
    function NetcoreAuthModule() {
    }
    NetcoreAuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                netcore_auth_component_1.NetcoreAuthComponent
            ],
            imports: [],
            exports: [
                netcore_auth_component_1.NetcoreAuthComponent
            ]
        })
    ], NetcoreAuthModule);
    return NetcoreAuthModule;
}());
exports.NetcoreAuthModule = NetcoreAuthModule;
