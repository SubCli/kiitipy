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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const link_dto_1 = require("./dto/link.dto");
const user_dto_1 = require("../user/dto/user.dto");
let LinkService = class LinkService {
    constructor(linkRepository, userRepository, sourceRepository) {
        this.linkRepository = linkRepository;
        this.userRepository = userRepository;
        this.sourceRepository = sourceRepository;
    }
    async create(createLinkDto) {
        const isUserExist = await this.userRepository.findOne({
            where: { id: createLinkDto.userId },
        });
        if (!isUserExist) {
            throw new common_1.NotFoundException(`User with id ${createLinkDto.userId} not found`);
        }
        const link = this.linkRepository.create(createLinkDto);
        const newLink = await this.linkRepository.save(link);
        const defaultSource = this.sourceRepository.create({
            linkId: newLink.id,
            utmSource: 'default',
        });
        await this.sourceRepository.save(defaultSource);
        return (0, class_transformer_1.plainToInstance)(link_dto_1.LinkDto, newLink, { excludeExtraneousValues: true });
    }
    async findAll() {
        const links = await this.linkRepository.find();
        return (0, class_transformer_1.plainToInstance)(link_dto_1.LinkDto, links, { excludeExtraneousValues: true });
    }
    async findOne(id) {
        const link = await this.linkRepository.findOne({ where: { id } });
        if (!link) {
            throw new common_1.NotFoundException(`Link with id ${id} not found`);
        }
        return link;
    }
    async update(id, updateLinkDto) {
        if (updateLinkDto.userId) {
            const isUserExist = await this.userRepository.findOne({
                where: { id: updateLinkDto.userId },
            });
            if (!isUserExist) {
                throw new common_1.NotFoundException(`User with id ${updateLinkDto.userId} not found`);
            }
        }
        const link = await this.linkRepository.findOne({ where: { id } });
        if (!link) {
            throw new common_1.NotFoundException(`Link with id ${id} not found`);
        }
        Object.keys(updateLinkDto).forEach((key) => {
            if (updateLinkDto[key] !== null && updateLinkDto[key] !== undefined) {
                link[key] = updateLinkDto[key];
            }
        });
        const updatedLink = await this.linkRepository.save(link);
        return (0, class_transformer_1.plainToInstance)(link_dto_1.LinkDto, updatedLink, {
            excludeExtraneousValues: true,
        });
    }
    async remove(id) {
        const result = await this.linkRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Link with id ${id} not found`);
        }
    }
    async get5MostDonated() {
        const links = await this.linkRepository
            .createQueryBuilder('link')
            .orderBy('link.totalDonations', 'DESC')
            .limit(5)
            .getMany();
        return (0, class_transformer_1.plainToInstance)(link_dto_1.LinkDto, links, { excludeExtraneousValues: true });
    }
    async getUserDonateToLink(linkId) {
        const link = await this.linkRepository.findOne({
            where: { id: linkId },
        });
        if (!link) {
            throw new common_1.NotFoundException(`Link with id ${linkId} not found`);
        }
        const sources = link.sources || [];
        const transactions = [];
        for (const source of sources) {
            transactions.push(...(source.transactionHistories || []));
        }
        const userDtos = transactions.map((transaction) => {
            const userDto = new user_dto_1.UserDto();
            userDto.walletAddress = transaction.senderWallet;
            return userDto;
        });
        return userDtos;
    }
    async getLinkByLinkCode(linkCode) {
        const link = await this.linkRepository.findOne({
            where: { linkCode },
        });
        if (!link) {
            throw new common_1.NotFoundException(`Link with link code ${linkCode} not found`);
        }
        return (0, class_transformer_1.plainToInstance)(link_dto_1.LinkDto, link, { excludeExtraneousValues: true });
    }
    async getLinkByUserId(userId) {
        const links = await this.linkRepository.find({
            where: { userId },
        });
        return (0, class_transformer_1.plainToInstance)(link_dto_1.LinkDto, links, { excludeExtraneousValues: true });
    }
};
exports.LinkService = LinkService;
exports.LinkService = LinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('LINK_REPOSITORY')),
    __param(1, (0, common_1.Inject)('USER_REPOSITORY')),
    __param(2, (0, common_1.Inject)('SOURCE_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], LinkService);
//# sourceMappingURL=link.service.js.map