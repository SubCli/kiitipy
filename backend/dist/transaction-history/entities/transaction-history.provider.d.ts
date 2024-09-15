import { DataSource } from 'typeorm';
import { TransactionHistory } from './transaction-history.entity';
export declare const transactionHistoryProviders: ({
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("../../user/entities/user.entity").User>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("../../link/entities/link.entity").Link>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("../../source/entities/source.entity").Source>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<TransactionHistory>;
    inject: string[];
})[];
