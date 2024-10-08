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
exports.TransactionHistoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const transaction_history_entity_1 = require("../entities/transaction-history.entity");
const class_transformer_1 = require("class-transformer");
class TransactionHistoryDto extends (0, mapped_types_1.PickType)(transaction_history_entity_1.TransactionHistory, [
    'id',
    'sourceId',
    'senderWallet',
    'receiver',
    'amount',
    'timeStamp',
    'note',
    'name',
]) {
}
exports.TransactionHistoryDto = TransactionHistoryDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TransactionHistoryDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TransactionHistoryDto.prototype, "sourceId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TransactionHistoryDto.prototype, "senderWallet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TransactionHistoryDto.prototype, "sourceName", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TransactionHistoryDto.prototype, "receiver", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], TransactionHistoryDto.prototype, "amount", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TransactionHistoryDto.prototype, "note", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], TransactionHistoryDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], TransactionHistoryDto.prototype, "timeStamp", void 0);
//# sourceMappingURL=transaction-history.dto.js.map