import { UserDto } from '../dto/user.dto';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "walletAddress" | "email" | "avatarUrl" | "fullName" | "about">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
