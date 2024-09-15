import { Repository } from 'typeorm';
import { LinkDto } from 'src/link/dto/link.dto';
import { CreateLinkDto } from './dto/create-link.dto';
import { Link } from 'src/link/entities/link.entity';
import { UpdateLinkDto } from 'src/link/dto/update-link.dto';
import { User } from 'src/user/entities/user.entity';
import { Source } from 'src/source/entities/source.entity';
import { UserDto } from 'src/user/dto/user.dto';
export declare class LinkService {
    private linkRepository;
    private userRepository;
    private sourceRepository;
    constructor(linkRepository: Repository<Link>, userRepository: Repository<User>, sourceRepository: Repository<Source>);
    create(createLinkDto: CreateLinkDto): Promise<LinkDto>;
    findAll(): Promise<LinkDto[]>;
    findOne(id: number): Promise<LinkDto>;
    update(id: number, updateLinkDto: UpdateLinkDto): Promise<LinkDto>;
    remove(id: number): Promise<void>;
    get5MostDonated(): Promise<LinkDto[]>;
    getUserDonateToLink(linkId: number): Promise<UserDto[]>;
    getLinkByLinkCode(linkCode: string): Promise<LinkDto>;
    getLinkByUserId(userId: number): Promise<LinkDto[]>;
}
