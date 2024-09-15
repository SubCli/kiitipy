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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const source_service_1 = require("./source.service");
const source_dto_1 = require("./dto/source.dto");
const create_source_dto_1 = require("./dto/create-source.dto");
const update_source_dto_1 = require("./dto/update-source.dto");
let SourceController = class SourceController {
    constructor(sourceService) {
        this.sourceService = sourceService;
    }
    create(createSourceDto) {
        try {
            return this.sourceService.create(createSourceDto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    findAll() {
        try {
            return this.sourceService.findAll();
        }
        catch (error) {
            throw error;
        }
    }
    findOne(id) {
        try {
            return this.sourceService.findOne(+id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    update(id, updateSourceDto) {
        try {
            return this.sourceService.update(+id, updateSourceDto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    remove(id) {
        try {
            return this.sourceService.remove(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getSourcesByLink(id) {
        try {
            return this.sourceService.getSourcesByLink(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
};
exports.SourceController = SourceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create source' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: source_dto_1.SourceDto }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error: Bad Request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_source_dto_1.CreateSourceDto]),
    __metadata("design:returntype", void 0)
], SourceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all of a source' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: [source_dto_1.SourceDto] }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SourceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get info of a source' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Source ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: source_dto_1.SourceDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SourceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Partially update a source' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Source ID' }),
    (0, swagger_1.ApiBody)({ type: update_source_dto_1.UpdateSourceDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: source_dto_1.SourceDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error: Bad Request.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_source_dto_1.UpdateSourceDto]),
    __metadata("design:returntype", void 0)
], SourceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a source' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Source ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SourceController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('sources-of-link/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get sources of link' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Link ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: [source_dto_1.SourceDto] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SourceController.prototype, "getSourcesByLink", null);
exports.SourceController = SourceController = __decorate([
    (0, swagger_1.ApiTags)('sources'),
    (0, common_1.Controller)('api/source'),
    __metadata("design:paramtypes", [source_service_1.SourceService])
], SourceController);
//# sourceMappingURL=source.controller.js.map