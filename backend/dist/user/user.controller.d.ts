import { UserService } from './user.service';
import { UserDto } from 'src/user/dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<UserDto>;
    findAll(): Promise<UserDto[]>;
    findOne(id: string): Promise<UserDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserDto>;
    remove(id: string): Promise<void>;
    getDonationAllTime(id: number): Promise<number>;
    getNumberDonationAllTime(id: number): Promise<number>;
    getUserInfoByWalletAddress(walletAddress: string): Promise<UserDto>;
}
