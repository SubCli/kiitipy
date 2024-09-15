import { TransactionHistory } from '../entities/transaction-history.entity';
declare const TransactionHistoryDto_base: import("@nestjs/mapped-types").MappedType<Pick<TransactionHistory, "name" | "id" | "sourceId" | "senderWallet" | "receiver" | "amount" | "note" | "timeStamp">>;
export declare class TransactionHistoryDto extends TransactionHistoryDto_base {
    id: number;
    sourceId: number;
    senderWallet: string;
    sourceName: string;
    receiver: number;
    amount: number;
    note: string;
    name: string;
    timeStamp: Date;
}
export {};
