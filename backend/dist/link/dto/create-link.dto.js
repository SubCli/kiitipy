"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLinkDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const link_dto_1 = require("../dto/link.dto");
class CreateLinkDto extends (0, swagger_1.PickType)(link_dto_1.LinkDto, [
    'userId',
    'linkCode',
    'receivedAddress',
    'amount',
    'name',
    'config',
]) {
}
exports.CreateLinkDto = CreateLinkDto;
//# sourceMappingURL=create-link.dto.js.map