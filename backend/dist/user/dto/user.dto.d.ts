import { User } from '../entities/user.entity';
declare const UserDto_base: import("@nestjs/mapped-types").MappedType<Pick<User, "id" | "walletAddress" | "email" | "avatarUrl" | "fullName" | "about">>;
export declare class UserDto extends UserDto_base {
    id: number;
    walletAddress: string;
    email: string;
    avatarUrl: string;
    totalDonations: number;
    fullName: string;
    about: string;
}
export {};
