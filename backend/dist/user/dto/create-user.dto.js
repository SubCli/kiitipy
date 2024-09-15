"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../dto/user.dto");
class CreateUserDto extends (0, swagger_1.PickType)(user_dto_1.UserDto, [
    'walletAddress',
    'email',
    'avatarUrl',
    'fullName',
    'about',
]) {
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map