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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dto/user.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        try {
            return this.userService.create(createUserDto);
        }
        catch (error) {
            throw error;
        }
    }
    findAll() {
        try {
            return this.userService.findAll();
        }
        catch (error) {
            throw error;
        }
    }
    findOne(id) {
        try {
            return this.userService.findOne(+id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    update(id, updateUserDto) {
        try {
            return this.userService.update(+id, updateUserDto);
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
            return this.userService.remove(+id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getDonationAllTime(id) {
        try {
            return this.userService.getDonationAllTime(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getNumberDonationAllTime(id) {
        try {
            return this.userService.getNumDonationAllTime(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getUserInfoByWalletAddress(walletAddress) {
        try {
            return this.userService.getUserInfoByWalletAddress(walletAddress);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: user_dto_1.UserDto }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error: Bad Request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all of a user' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: [user_dto_1.UserDto] }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get info of a user' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: user_dto_1.UserDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Partially update a user' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDto }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: user_dto_1.UserDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error: Bad Request.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a user' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('donate-all-time/value/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all-time donation amount of a user' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getDonationAllTime", null);
__decorate([
    (0, common_1.Get)('donate-all-time/num/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all-time number of donation of a user' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getNumberDonationAllTime", null);
__decorate([
    (0, common_1.Get)('wallet/:walletAddress'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user info by wallet address' }),
    (0, swagger_1.ApiParam)({
        name: 'walletAddress',
        type: String,
        description: 'User Wallet Address',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.', type: user_dto_1.UserDto }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('walletAddress')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUserInfoByWalletAddress", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('api/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map