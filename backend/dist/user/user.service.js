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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const user_dto_1 = require("./dto/user.dto");
let UserService = class UserService {
    constructor(userRepository, linkRepository) {
        this.userRepository = userRepository;
        this.linkRepository = linkRepository;
    }
    async create(createUserDto) {
        const user = this.userRepository.create(createUserDto);
        const newUser = await this.userRepository.save(user);
        return (0, class_transformer_1.plainToInstance)(user_dto_1.UserDto, newUser, { excludeExtraneousValues: true });
    }
    async findAll() {
        const users = await this.userRepository.find();
        return (0, class_transformer_1.plainToInstance)(user_dto_1.UserDto, users, { excludeExtraneousValues: true });
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        return (0, class_transformer_1.plainToInstance)(user_dto_1.UserDto, user, { excludeExtraneousValues: true });
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        Object.keys(updateUserDto).forEach((key) => {
            if (updateUserDto[key] !== null && updateUserDto[key] !== undefined) {
                user[key] = updateUserDto[key];
            }
        });
        const updatedUser = await this.userRepository.save(user);
        return (0, class_transformer_1.plainToInstance)(user_dto_1.UserDto, updatedUser, {
            excludeExtraneousValues: true,
        });
    }
    async remove(id) {
        const result = await this.userRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
    }
    async getDonationAllTime(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        const links = await this.linkRepository.find({ where: { userId: id } });
        console.log(links);
        const totalDonation = links.reduce((accumulator, { totalDonations }) => {
            console.log(accumulator, totalDonations);
            return accumulator + totalDonations;
        }, 0);
        return totalDonation;
    }
    async getNumDonationAllTime(id) {
        const user = await this.userRepository.findOne({ where: { id } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${id} not found`);
        }
        const links = await this.linkRepository.find({ where: { userId: id } });
        const totalNumberDonation = links.reduce((accumulator, { totalNumberDonations }) => {
            return accumulator + totalNumberDonations;
        }, 0);
        return totalNumberDonation;
    }
    async getUserInfoByWalletAddress(walletAddress) {
        const user = await this.userRepository.findOne({
            where: { walletAddress },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with wallet address ${walletAddress} not found`);
        }
        return (0, class_transformer_1.plainToInstance)(user_dto_1.UserDto, user, { excludeExtraneousValues: true });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __param(1, (0, common_1.Inject)('LINK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map