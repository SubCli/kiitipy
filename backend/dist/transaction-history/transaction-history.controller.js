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
exports.TransactionHistoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transaction_history_service_1 = require("./transaction-history.service");
const transaction_history_dto_1 = require("./dto/transaction-history.dto");
const create_transaction_history_dto_1 = require("./dto/create-transaction-history.dto");
const update_transaction_history_dto_1 = require("./dto/update-transaction-history.dto");
const transaction_history_userinfo_dto_1 = require("./dto/transaction-history-userinfo.dto");
const revenue_by_source_dto_1 = require("./dto/revenue-by-source.dto");
const user_dto_1 = require("../user/dto/user.dto");
let TransactionHistoryController = class TransactionHistoryController {
    constructor(transactionHistoryService) {
        this.transactionHistoryService = transactionHistoryService;
    }
    create(createTransactionHistoryDto) {
        try {
            return this.transactionHistoryService.create(createTransactionHistoryDto);
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
            return this.transactionHistoryService.findAll();
        }
        catch (error) {
            throw error;
        }
    }
    findOne(id) {
        try {
            return this.transactionHistoryService.findOne(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    update(id, updateTransactionHistoryDto) {
        try {
            return this.transactionHistoryService.update(+id, updateTransactionHistoryDto);
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
            return this.transactionHistoryService.remove(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getAllTransactionHistoriesByLinkId(linkId) {
        try {
            return this.transactionHistoryService.getDonationsToLink(linkId);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getAllTransactionHistoriesBySourceId(sourceId) {
        try {
            return this.transactionHistoryService.getDonationsToSource(sourceId);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getAllTransactionHistoriesByUserId(userId) {
        try {
            console.log(userId);
            return this.transactionHistoryService.getDonationsToUser(userId);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getMonthRevenueOfSource(linkId) {
        try {
            return this.transactionHistoryService.getMonthRevenueOfSourceByLinkId(linkId);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getUsersWithMostDonations(userId, num) {
        try {
            return this.transactionHistoryService.getMostSenderUsers(userId, num);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
    getMonthRevenueOfSourceOfUser(userId) {
        try {
            return this.transactionHistoryService.getMonthRevenueOfAllSourceByUserId(userId);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            throw error;
        }
    }
};
exports.TransactionHistoryController = TransactionHistoryController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create transactionHistory' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: transaction_history_dto_1.TransactionHistoryDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error: Bad Request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_transaction_history_dto_1.CreateTransactionHistoryDto]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all of a transactionHistory' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: [transaction_history_dto_1.TransactionHistoryDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get info of a transactionHistory' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'TransactionHistory ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: transaction_history_dto_1.TransactionHistoryDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Partially update a transactionHistory' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'TransactionHistory ID' }),
    (0, swagger_1.ApiBody)({ type: update_transaction_history_dto_1.UpdateTransactionHistoryDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: transaction_history_dto_1.TransactionHistoryDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error: Bad Request.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_transaction_history_dto_1.UpdateTransactionHistoryDto]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a transactionHistory' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'TransactionHistory ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Success.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('transactions-by-link/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all transaction histories by link ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Link ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: [transaction_history_dto_1.TransactionHistoryDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "getAllTransactionHistoriesByLinkId", null);
__decorate([
    (0, common_1.Get)('transactions-by-source/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all transaction histories by source ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'source ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: [transaction_history_dto_1.TransactionHistoryDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "getAllTransactionHistoriesBySourceId", null);
__decorate([
    (0, common_1.Get)('transactions-by-user/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all transaction histories by user ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'user ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: [transaction_history_userinfo_dto_1.TransactionHistoryUserInfoDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "getAllTransactionHistoriesByUserId", null);
__decorate([
    (0, common_1.Get)('month-revenue-of-source/:linkId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get month revenue of a source' }),
    (0, swagger_1.ApiParam)({ name: 'linkId', type: Number, description: 'Link ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: [revenue_by_source_dto_1.RevenueBySourceDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('linkId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "getMonthRevenueOfSource", null);
__decorate([
    (0, common_1.Get)('most-donations-user/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get n users with the most donations (max 10)' }),
    (0, swagger_1.ApiParam)({ name: 'userId', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiQuery)({
        name: 'num',
        type: Number,
        description: 'Number of users to get',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: [user_dto_1.UserDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('num')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "getUsersWithMostDonations", null);
__decorate([
    (0, common_1.Get)('month-revenue-of-source-user/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get month revenue of a source of user' }),
    (0, swagger_1.ApiParam)({ name: 'userId', type: Number, description: 'User ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Success.',
        type: [revenue_by_source_dto_1.RevenueBySourceDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not Found' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error.' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionHistoryController.prototype, "getMonthRevenueOfSourceOfUser", null);
exports.TransactionHistoryController = TransactionHistoryController = __decorate([
    (0, swagger_1.ApiTags)('transaction-historys'),
    (0, common_1.Controller)('api/transaction-history'),
    __metadata("design:paramtypes", [transaction_history_service_1.TransactionHistoryService])
], TransactionHistoryController);
//# sourceMappingURL=transaction-history.controller.js.map