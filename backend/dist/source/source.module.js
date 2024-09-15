"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceModule = void 0;
const common_1 = require("@nestjs/common");
const source_service_1 = require("./source.service");
const source_controller_1 = require("./source.controller");
const source_provider_1 = require("./entities/source.provider");
const database_module_1 = require("../database.module");
let SourceModule = class SourceModule {
};
exports.SourceModule = SourceModule;
exports.SourceModule = SourceModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [source_controller_1.SourceController],
        providers: [...source_provider_1.sourceProviders, source_service_1.SourceService],
    })
], SourceModule);
//# sourceMappingURL=source.module.js.map