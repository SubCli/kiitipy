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
exports.RevenueBySourceDto = void 0;
const source_dto_1 = require("../../source/dto/source.dto");
const swagger_1 = require("@nestjs/swagger");
const revenue_by_month_dto_1 = require("./revenue-by-month.dto");
class RevenueBySourceDto {
}
exports.RevenueBySourceDto = RevenueBySourceDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", source_dto_1.SourceDto)
], RevenueBySourceDto.prototype, "source", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [revenue_by_month_dto_1.RevenueByMonth] }),
    __metadata("design:type", Array)
], RevenueBySourceDto.prototype, "totalRevenueByMonthList", void 0);
//# sourceMappingURL=revenue-by-source.dto.js.map