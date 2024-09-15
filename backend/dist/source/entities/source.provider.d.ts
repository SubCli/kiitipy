import { DataSource } from 'typeorm';
import { Source } from './source.entity';
export declare const sourceProviders: ({
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("../../user/entities/user.entity").User>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("../../link/entities/link.entity").Link>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Source>;
    inject: string[];
})[];
