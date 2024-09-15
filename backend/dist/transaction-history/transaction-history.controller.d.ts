import { TransactionHistoryService } from './transaction-history.service';
import { TransactionHistoryDto } from './dto/transaction-history.dto';
import { CreateTransactionHistoryDto } from './dto/create-transaction-history.dto';
import { UpdateTransactionHistoryDto } from './dto/update-transaction-history.dto';
import { TransactionHistoryUserInfoDto } from './dto/transaction-history-userinfo.dto';
import { RevenueBySourceDto } from 'src/transaction-history/dto/revenue-by-source.dto';
import { UserDto } from 'src/user/dto/user.dto';
export declare class TransactionHistoryController {
    private readonly transactionHistoryService;
    constructor(transactionHistoryService: TransactionHistoryService);
    create(createTransactionHistoryDto: CreateTransactionHistoryDto): Promise<TransactionHistoryDto>;
    findAll(): Promise<TransactionHistoryDto[]>;
    findOne(id: number): Promise<TransactionHistoryDto>;
    update(id: number, updateTransactionHistoryDto: UpdateTransactionHistoryDto): Promise<TransactionHistoryDto>;
    remove(id: number): Promise<void>;
    getAllTransactionHistoriesByLinkId(linkId: number): Promise<TransactionHistoryDto[]>;
    getAllTransactionHistoriesBySourceId(sourceId: number): Promise<TransactionHistoryDto[]>;
    getAllTransactionHistoriesByUserId(userId: number): Promise<TransactionHistoryUserInfoDto[]>;
    getMonthRevenueOfSource(linkId: number): Promise<RevenueBySourceDto[]>;
    getUsersWithMostDonations(userId: number, num: number): Promise<UserDto[]>;
    getMonthRevenueOfSourceOfUser(userId: number): Promise<RevenueBySourceDto[]>;
}
