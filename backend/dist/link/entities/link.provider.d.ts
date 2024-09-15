import { DataSource } from 'typeorm';
import { Link } from './link.entity';
export declare const linkProviders: ({
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<import("../../user/entities/user.entity").User>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Link>;
    inject: string[];
})[];
