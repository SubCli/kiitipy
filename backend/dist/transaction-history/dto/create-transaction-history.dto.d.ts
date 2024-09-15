import { TransactionHistoryDto } from './transaction-history.dto';
declare const CreateTransactionHistoryDto_base: import("@nestjs/common").Type<Pick<TransactionHistoryDto, "name" | "sourceId" | "senderWallet" | "receiver" | "amount" | "note">>;
export declare class CreateTransactionHistoryDto extends CreateTransactionHistoryDto_base {
}
export {};
