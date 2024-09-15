import { Source } from 'src/source/entities/source.entity';
import { User } from 'src/user/entities/user.entity';
export declare class TransactionHistory {
    id: number;
    sourceId: number;
    source: Source;
    senderWallet: string;
    receiver: number;
    receiveUser: User;
    amount: number;
    name: string;
    note: string;
    timeStamp: Date;
}
