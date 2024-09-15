"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSourceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const source_dto_1 = require("./source.dto");
class CreateSourceDto extends (0, swagger_1.PickType)(source_dto_1.SourceDto, [
    'linkId',
    'utmSource',
]) {
}
exports.CreateSourceDto = CreateSourceDto;
//# sourceMappingURL=create-source.dto.js.map