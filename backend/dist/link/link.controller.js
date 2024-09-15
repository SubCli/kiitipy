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
exports.LinkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const link_service_1 = require("./link.service");
const link_dto_1 = require("./dto/link.dto");
const create_link_dto_1 = require("./dto/create-link.dto");
const update_link_dto_1 = require("./dto/update-link.dto");
const user_dto_1 = require("../user/dto/user.dto");
let LinkController = class LinkController {
    constructor(linkService) {
        this.linkService = linkService;
    }
    async create(createLinkDto) {
        try {
            return this.linkService.create(createLinkDto);
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
            return this.linkService.findAll();
        }
        catch (error) {
            throw error;
        }
    }
    findOne(id) {
        try {
            return this.linkService.findOne(+id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    async update(id, updateLinkDto) {
        try {
            return this.linkService.update(+id, updateLinkDto);
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
            return this.linkService.remove(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    async get5MostDonated() {
        try {
            return this.linkService.get5MostDonated();
        }
        catch (error) {
            throw error;
        }
    }
    async getUserDonateToLink(id) {
        try {
            return this.linkService.getUserDonateToLink(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    async getLinkByLinkCode(linkCode) {
        try {
            return this.linkService.getLinkByLinkCode(linkCode);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    async getLinkByUser(userId) {
        try {
            return this.linkService.getLinkByUserId(userId);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
};
exports.LinkController = LinkController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create link' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: link_dto_1.LinkDto }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error: Bad Request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_link_dto_1.CreateLinkDto]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all of a link' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: [link_dto_1.LinkDto] }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LinkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get info of a link' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Link ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: link_dto_1.LinkDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LinkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Partially update a link' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Link ID' }),
    (0, swagger_1.ApiBody)({ type: update_link_dto_1.UpdateLinkDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: link_dto_1.LinkDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error: Bad Request.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_link_dto_1.UpdateLinkDto]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a link' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Link ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], LinkController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('most-5-donated'),
    (0, swagger_1.ApiOperation)({ summary: 'Get 5 most donated links' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: [link_dto_1.LinkDto] }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "get5MostDonated", null);
__decorate([
    (0, common_1.Get)('users-donate/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get users who donate to a link' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Link ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: [user_dto_1.UserDto] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getUserDonateToLink", null);
__decorate([
    (0, common_1.Get)('link-by-link-code/:linkCode'),
    (0, swagger_1.ApiOperation)({ summary: 'Get link by link code' }),
    (0, swagger_1.ApiParam)({ name: 'linkCode', type: String, description: 'Link Code' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: link_dto_1.LinkDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('linkCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLinkByLinkCode", null);
__decorate([
    (0, common_1.Get)('link-by-user/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get link by user' }),
    (0, swagger_1.ApiParam)({ name: 'userId', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: link_dto_1.LinkDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], LinkController.prototype, "getLinkByUser", null);
exports.LinkController = LinkController = __decorate([
    (0, swagger_1.ApiTags)('links'),
    (0, common_1.Controller)('api/link'),
    __metadata("design:paramtypes", [link_service_1.LinkService])
], LinkController);
//# sourceMappingURL=link.controller.js.map