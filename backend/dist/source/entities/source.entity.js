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
exports.Source = void 0;
const typeorm_1 = require("typeorm");
const link_entity_1 = require("../../link/entities/link.entity");
const transaction_history_entity_1 = require("../../transaction-history/entities/transaction-history.entity");
let Source = class Source {
};
exports.Source = Source;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Source.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'link_id' }),
    __metadata("design:type", Number)
], Source.prototype, "linkId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => link_entity_1.Link, (link) => link.id),
    (0, typeorm_1.JoinColumn)({ name: 'link_id' }),
    __metadata("design:type", link_entity_1.Link)
], Source.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'utm_source' }),
    __metadata("design:type", String)
], Source.prototype, "utmSource", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0, name: 'total_number_donations' }),
    __metadata("design:type", Number)
], Source.prototype, "totalNumberDonations", void 0);
__decorate([
    (0, typeorm_1.Column)('double', { default: 0, name: 'total_donations' }),
    __metadata("design:type", Number)
], Source.prototype, "totalDonations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => transaction_history_entity_1.TransactionHistory, (transactionHistory) => transactionHistory.source),
    __metadata("design:type", Array)
], Source.prototype, "transactionHistories", void 0);
exports.Source = Source = __decorate([
    (0, typeorm_1.Entity)()
], Source);
//# sourceMappingURL=source.entity.js.map