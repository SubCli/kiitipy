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
exports.TransactionHistory = void 0;
const typeorm_1 = require("typeorm");
const source_entity_1 = require("../../source/entities/source.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let TransactionHistory = class TransactionHistory {
};
exports.TransactionHistory = TransactionHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TransactionHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'source_id' }),
    __metadata("design:type", Number)
], TransactionHistory.prototype, "sourceId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => source_entity_1.Source, (source) => source.id),
    (0, typeorm_1.JoinColumn)({ name: 'source_id' }),
    __metadata("design:type", source_entity_1.Source)
], TransactionHistory.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'sender_wallet' }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "senderWallet", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'receiver' }),
    __metadata("design:type", Number)
], TransactionHistory.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'receiver' }),
    __metadata("design:type", user_entity_1.User)
], TransactionHistory.prototype, "receiveUser", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], TransactionHistory.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'name' }),
    __metadata("design:type", String)
], TransactionHistory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], TransactionHistory.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TransactionHistory.prototype, "timeStamp", void 0);
exports.TransactionHistory = TransactionHistory = __decorate([
    (0, typeorm_1.Entity)()
], TransactionHistory);
//# sourceMappingURL=transaction-history.entity.js.map