import { Link } from 'src/link/entities/link.entity';
import { TransactionHistory } from 'src/transaction-history/entities/transaction-history.entity';
export declare class Source {
    id: number;
    linkId: number;
    link: Link;
    utmSource: string;
    totalNumberDonations: number;
    totalDonations: number;
    transactionHistories: TransactionHistory[];
}
