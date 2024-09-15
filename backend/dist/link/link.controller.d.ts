import { LinkService } from './link.service';
import { LinkDto } from 'src/link/dto/link.dto';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from 'src/link/dto/update-link.dto';
import { UserDto } from 'src/user/dto/user.dto';
export declare class LinkController {
    private readonly linkService;
    constructor(linkService: LinkService);
    create(createLinkDto: CreateLinkDto): Promise<LinkDto>;
    findAll(): Promise<LinkDto[]>;
    findOne(id: number): Promise<LinkDto>;
    update(id: number, updateLinkDto: UpdateLinkDto): Promise<LinkDto>;
    remove(id: number): Promise<void>;
    get5MostDonated(): Promise<LinkDto[]>;
    getUserDonateToLink(id: number): Promise<UserDto[]>;
    getLinkByLinkCode(linkCode: string): Promise<LinkDto>;
    getLinkByUser(userId: number): Promise<LinkDto[]>;
}
