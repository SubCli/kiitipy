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
exports.Link = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../user/entities/user.entity");
const source_entity_1 = require("../../source/entities/source.entity");
let Link = class Link {
};
exports.Link = Link;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Link.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], Link.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Link.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'link_code' }),
    __metadata("design:type", String)
], Link.prototype, "linkCode", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'received_address' }),
    __metadata("design:type", String)
], Link.prototype, "receivedAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], Link.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Link.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0, name: 'total_number_donations' }),
    __metadata("design:type", Number)
], Link.prototype, "totalNumberDonations", void 0);
__decorate([
    (0, typeorm_1.Column)('double', { default: 0, name: 'total_donations' }),
    __metadata("design:type", Number)
], Link.prototype, "totalDonations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => source_entity_1.Source, (source) => source.link),
    __metadata("design:type", Array)
], Link.prototype, "sources", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Link.prototype, "config", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Link.prototype, "createdAt", void 0);
exports.Link = Link = __decorate([
    (0, typeorm_1.Entity)()
], Link);
//# sourceMappingURL=link.entity.js.map