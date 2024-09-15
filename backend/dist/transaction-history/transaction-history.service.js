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
exports.TransactionHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const transaction_history_dto_1 = require("./dto/transaction-history.dto");
const transaction_history_userinfo_dto_1 = require("./dto/transaction-history-userinfo.dto");
const user_dto_1 = require("../user/dto/user.dto");
const revenue_by_source_dto_1 = require("./dto/revenue-by-source.dto");
const source_dto_1 = require("../source/dto/source.dto");
const revenue_by_month_dto_1 = require("./dto/revenue-by-month.dto");
let TransactionHistoryService = class TransactionHistoryService {
    constructor(transactionHistoryRepository, sourceRepository, linkRepository, userRepository, dataSource) {
        this.transactionHistoryRepository = transactionHistoryRepository;
        this.sourceRepository = sourceRepository;
        this.linkRepository = linkRepository;
        this.userRepository = userRepository;
        this.dataSource = dataSource;
    }
    async create(createTransactionHistoryDto) {
        const isSourceExist = await this.sourceRepository.findOne({
            where: { id: createTransactionHistoryDto.sourceId },
        });
        if (!isSourceExist) {
            throw new common_1.NotFoundException(`Source with id ${createTransactionHistoryDto.sourceId} not found`);
        }
        const isReceiverExist = await this.userRepository.findOne({
            where: { id: createTransactionHistoryDto.receiver },
        });
        if (!isReceiverExist) {
            throw new common_1.NotFoundException(`User with id ${createTransactionHistoryDto.receiver} not found`);
        }
        if (createTransactionHistoryDto.note === undefined) {
            createTransactionHistoryDto.note = '';
        }
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const transactionHistory = this.transactionHistoryRepository.create(createTransactionHistoryDto);
            const newTransactionHistory = await queryRunner.manager.save(transactionHistory);
            const source = isSourceExist;
            source.totalDonations += newTransactionHistory.amount;
            source.totalNumberDonations += 1;
            await queryRunner.manager.save(source);
            const link = await this.linkRepository.findOne({
                where: { id: source.linkId },
            });
            link.totalDonations += newTransactionHistory.amount;
            link.totalNumberDonations += 1;
            await queryRunner.manager.save(link);
            await queryRunner.commitTransaction();
            return (0, class_transformer_1.plainToInstance)(transaction_history_dto_1.TransactionHistoryDto, newTransactionHistory, {
                excludeExtraneousValues: true,
            });
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findAll() {
        const transactionHistories = await this.transactionHistoryRepository.find();
        return (0, class_transformer_1.plainToInstance)(transaction_history_dto_1.TransactionHistoryDto, transactionHistories, {
            excludeExtraneousValues: true,
        });
    }
    async findOne(id) {
        const transactionHistory = await this.transactionHistoryRepository.findOne({
            where: { id },
        });
        if (!transactionHistory) {
            throw new common_1.NotFoundException(`TransactionHistory with id ${id} not found`);
        }
        const transactionHistoryDTO = (0, class_transformer_1.plainToInstance)(transaction_history_dto_1.TransactionHistoryDto, transactionHistory, {
            excludeExtraneousValues: true,
        });
        transactionHistoryDTO.sourceName = transactionHistory.source.utmSource;
        return transactionHistoryDTO;
    }
    async update(id, updateTransactionHistoryDto) {
        if (updateTransactionHistoryDto.sourceId) {
            const isSourceExist = await this.transactionHistoryRepository.findOne({
                where: { id: updateTransactionHistoryDto.sourceId },
            });
            if (isSourceExist) {
                throw new common_1.NotFoundException(`Source with id ${updateTransactionHistoryDto.sourceId} not found`);
            }
        }
        const transactionHistory = await this.transactionHistoryRepository.findOne({
            where: { id },
        });
        if (!transactionHistory) {
            throw new common_1.NotFoundException(`TransactionHistory with id ${id} not found`);
        }
        Object.keys(updateTransactionHistoryDto).forEach((key) => {
            if (updateTransactionHistoryDto[key] !== null &&
                updateTransactionHistoryDto[key] !== undefined) {
                transactionHistory[key] = updateTransactionHistoryDto[key];
            }
        });
        const updatedTransactionHistory = await this.transactionHistoryRepository.save(transactionHistory);
        return (0, class_transformer_1.plainToInstance)(transaction_history_dto_1.TransactionHistoryDto, updatedTransactionHistory, {
            excludeExtraneousValues: true,
        });
    }
    async remove(id) {
        const result = await this.transactionHistoryRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`TransactionHistory with id ${id} not found`);
        }
    }
    async getDonationsToSource(sourceId) {
        const isSourceExist = await this.sourceRepository.findOne({
            where: { id: sourceId },
        });
        if (!isSourceExist) {
            throw new common_1.NotFoundException(`Source with id ${sourceId} not found`);
        }
        let transactionHistories = await this.transactionHistoryRepository.find({
            where: { sourceId: sourceId },
        });
        transactionHistories = transactionHistories.sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime());
        const TransactionHistoryDtos = [];
        for (let i = 0; i < transactionHistories.length; i++) {
            const transactionHistory = transactionHistories[i];
            const transactionHistoryDto = new transaction_history_dto_1.TransactionHistoryDto();
            transactionHistoryDto.id = transactionHistory.id;
            transactionHistoryDto.sourceId = transactionHistory.sourceId;
            transactionHistoryDto.senderWallet = transactionHistory.senderWallet;
            transactionHistoryDto.receiver = transactionHistory.receiver;
            transactionHistoryDto.amount = transactionHistory.amount;
            transactionHistoryDto.timeStamp = transactionHistory.timeStamp;
            transactionHistoryDto.note = transactionHistory.note;
            transactionHistoryDto.name = transactionHistory.name;
            transactionHistoryDto.sourceName = isSourceExist.utmSource;
            TransactionHistoryDtos.push(transactionHistoryDto);
        }
        return TransactionHistoryDtos;
    }
    async getDonationsToLink(linkId) {
        const link = await this.linkRepository.findOne({
            where: { id: linkId },
        });
        if (!link) {
            throw new common_1.NotFoundException(`Link with id ${linkId} not found`);
        }
        const sourceIds = (await this.sourceRepository.find({ where: { linkId } })).map((source) => source.id);
        let transactions = [];
        for (let i = 0; i < sourceIds.length; i++) {
            const transactionsTmp = await this.transactionHistoryRepository.find({
                where: { sourceId: sourceIds[i] },
            });
            transactions.push(...transactionsTmp);
        }
        transactions = transactions.sort((a, b) => b.timeStamp.getTime() - a.timeStamp.getTime());
        for (let i = 0; i < transactions.length; i++) {
            transactions[i].sourceName = link.name;
        }
        const a = (0, class_transformer_1.plainToInstance)(transaction_history_dto_1.TransactionHistoryDto, transactions, {
            excludeExtraneousValues: true,
        });
        for (let i = 0; i < a.length; i++) {
            const source = await this.sourceRepository.findOne({
                where: { id: a[i].sourceId },
            });
            a[i].sourceName = source.utmSource;
        }
        return a;
    }
    async getDonationsToUser(userId) {
        console.log(userId);
        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        console.log(user);
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${userId} not found`);
        }
        const links = await this.linkRepository.find({
            where: { userId: user.id },
        });
        const transactions = [];
        for (let i = 0; i < links.length; i++) {
            const sourceIds = (await this.sourceRepository.find({ where: { linkId: links[i].id } })).map((source) => source.id);
            for (let j = 0; j < sourceIds.length; j++) {
                const transactionsTmp = await this.transactionHistoryRepository.find({
                    where: { sourceId: sourceIds[j] },
                });
                transactions.push(...transactionsTmp);
            }
        }
        const transactionHistoryUserInfoDtos = [];
        for (let i = 0; i < transactions.length; i++) {
            const transaction = transactions[i];
            const transactionUserInfoDTO = new transaction_history_userinfo_dto_1.TransactionHistoryUserInfoDto();
            transactionUserInfoDTO.id = transaction.id;
            transactionUserInfoDTO.sourceId = transaction.sourceId;
            const senderInfo = new user_dto_1.UserDto();
            senderInfo.walletAddress = transaction.senderWallet;
            transactionUserInfoDTO.senderInfo = senderInfo;
            transactionUserInfoDTO.receiverInfo = (0, class_transformer_1.plainToInstance)(user_dto_1.UserDto, transaction.receiveUser, { excludeExtraneousValues: true });
            transactionUserInfoDTO.amount = transaction.amount;
            transactionUserInfoDTO.timeStamp = transaction.timeStamp;
            transactionUserInfoDTO.name = transaction.name;
            transactionUserInfoDTO.note = transaction.note;
            const source = await this.sourceRepository.findOne({
                where: { id: transaction.sourceId },
            });
            transactionUserInfoDTO.sourceName = source.utmSource;
            transactionHistoryUserInfoDtos.push(transactionUserInfoDTO);
        }
        return transactionHistoryUserInfoDtos;
    }
    async getMonthRevenueOfSourceByLinkId(linkId) {
        const link = await this.linkRepository.findOne({ where: { id: linkId } });
        if (!link) {
            throw new common_1.NotFoundException(`Link with id ${linkId} not found`);
        }
        const revenueBySourceDtos = [];
        const sources = await this.sourceRepository.find({ where: { linkId } });
        for (let i = 0; i < sources.length; i++) {
            const source = sources[i];
            const revenueBySourceDto = new revenue_by_source_dto_1.RevenueBySourceDto();
            revenueBySourceDto.source = (0, class_transformer_1.plainToInstance)(source_dto_1.SourceDto, source, {
                excludeExtraneousValues: true,
            });
            const transactionList = await this.transactionHistoryRepository.find({
                where: { sourceId: source.id },
            });
            const transactionPerMonthList = new Map();
            for (let i = 0; i < transactionList.length; i++) {
                const month = transactionList[i].timeStamp.getMonth() + 1;
                const year = transactionList[i].timeStamp.getFullYear();
                const timeStamp = `${year}-${month}`;
                if (transactionPerMonthList.has(timeStamp)) {
                    transactionPerMonthList.set(timeStamp, transactionPerMonthList.get(timeStamp) + transactionList[i].amount);
                }
                else {
                    transactionPerMonthList.set(timeStamp, transactionList[i].amount);
                }
            }
            const revenueByMonthList = [];
            for (const [key, value] of transactionPerMonthList) {
                const revenueByMonth = new revenue_by_month_dto_1.RevenueByMonth();
                const [year, month] = key.split('-');
                revenueByMonth.year = +year;
                revenueByMonth.month = +month;
                revenueByMonth.revenue = value;
                revenueByMonthList.push(revenueByMonth);
            }
            revenueBySourceDto.totalRevenueByMonthList = revenueByMonthList.sort((a, b) => a.year - b.year || a.month - b.month);
            revenueBySourceDtos.push(revenueBySourceDto);
        }
        return revenueBySourceDtos;
    }
    async getMostSenderUsers(userId, num) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${userId} not found`);
        }
        if (num <= 0) {
            throw new common_1.NotFoundException('Number of users must be greater than 0');
        }
        if (num > 10) {
            num = 10;
        }
        const links = await this.linkRepository.find({ where: { userId } });
        const sourceList = [];
        for (let i = 0; i < links.length; i++) {
            const sources = await this.sourceRepository.find({
                where: { linkId: links[i].id },
            });
            sourceList.push(...sources);
        }
        const transactionList = [];
        for (let i = 0; i < sourceList.length; i++) {
            const transactions = await this.transactionHistoryRepository.find({
                where: { sourceId: sourceList[i].id },
            });
            transactionList.push(...transactions);
        }
        const transactionPerUser = new Map();
        for (let i = 0; i < transactionList.length; i++) {
            const sender = transactionList[i].senderWallet;
            if (transactionPerUser.has(sender)) {
                transactionPerUser.set(sender, transactionPerUser.get(sender) + transactionList[i].amount);
            }
            else {
                transactionPerUser.set(sender, transactionList[i].amount);
            }
        }
        const sortedUsers = Array.from(transactionPerUser.entries()).sort((a, b) => b[1] - a[1]);
        const users = [];
        const donations = [];
        for (let i = 0; i < Math.min(num, sortedUsers.length); i++) {
            users.push(sortedUsers[i][0]);
            donations.push(sortedUsers[i][1]);
        }
        const userDtos = [];
        for (let i = 0; i < users.length; i++) {
            const userDto = new user_dto_1.UserDto();
            userDto.walletAddress = users[i];
            userDto.totalDonations = donations[i];
            userDtos.push(userDto);
        }
        return userDtos;
    }
    async getMonthRevenueOfAllSourceByUserId(userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException(`User with id ${userId} not found`);
        }
        const links = await this.linkRepository.find({
            where: { userId: user.id },
        });
        const sourceList = [];
        for (let i = 0; i < links.length; i++) {
            const sources = await this.sourceRepository.find({
                where: { linkId: links[i].id },
            });
            sourceList.push(...sources);
        }
        const revenueBySourceDtos = [];
        for (let i = 0; i < sourceList.length; i++) {
            const source = sourceList[i];
            const revenueBySourceDto = new revenue_by_source_dto_1.RevenueBySourceDto();
            revenueBySourceDto.source = (0, class_transformer_1.plainToInstance)(source_dto_1.SourceDto, source, {
                excludeExtraneousValues: true,
            });
            const transactionList = await this.transactionHistoryRepository.find({
                where: { sourceId: source.id },
            });
            const transactionPerMonthList = new Map();
            for (let i = 0; i < transactionList.length; i++) {
                const month = transactionList[i].timeStamp.getMonth() + 1;
                const year = transactionList[i].timeStamp.getFullYear();
                const timeStamp = `${year}-${month}`;
                if (transactionPerMonthList.has(timeStamp)) {
                    transactionPerMonthList.set(timeStamp, transactionPerMonthList.get(timeStamp) + transactionList[i].amount);
                }
                else {
                    transactionPerMonthList.set(timeStamp, transactionList[i].amount);
                }
            }
            const revenueByMonthList = [];
            for (const [key, value] of transactionPerMonthList) {
                const revenueByMonth = new revenue_by_month_dto_1.RevenueByMonth();
                const [year, month] = key.split('-');
                revenueByMonth.year = +year;
                revenueByMonth.month = +month;
                revenueByMonth.revenue = value;
                revenueByMonthList.push(revenueByMonth);
            }
            revenueBySourceDto.totalRevenueByMonthList = revenueByMonthList.sort((a, b) => a.year - b.year || a.month - b.month);
            revenueBySourceDtos.push(revenueBySourceDto);
        }
        return revenueBySourceDtos;
    }
};
exports.TransactionHistoryService = TransactionHistoryService;
exports.TransactionHistoryService = TransactionHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('TRANSACTION_HISTORY_REPOSITORY')),
    __param(1, (0, common_1.Inject)('SOURCE_REPOSITORY')),
    __param(2, (0, common_1.Inject)('LINK_REPOSITORY')),
    __param(3, (0, common_1.Inject)('USER_REPOSITORY')),
    __param(4, (0, common_1.Inject)('DATA_SOURCE')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.DataSource])
], TransactionHistoryService);
//# sourceMappingURL=transaction-history.service.js.map