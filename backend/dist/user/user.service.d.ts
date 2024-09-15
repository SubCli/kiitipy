import { Repository } from 'typeorm';
import { UserDto } from 'src/user/dto/user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UpdateUserDto } from 'src/user/dto/update-user.dto';
import { Link } from 'src/link/entities/link.entity';
export declare class UserService {
    private userRepository;
    private linkRepository;
    constructor(userRepository: Repository<User>, linkRepository: Repository<Link>);
    create(createUserDto: CreateUserDto): Promise<UserDto>;
    findAll(): Promise<UserDto[]>;
    findOne(id: number): Promise<UserDto>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<UserDto>;
    remove(id: number): Promise<void>;
    getDonationAllTime(id: number): Promise<number>;
    getNumDonationAllTime(id: number): Promise<number>;
    getUserInfoByWalletAddress(walletAddress: string): Promise<UserDto>;
}
