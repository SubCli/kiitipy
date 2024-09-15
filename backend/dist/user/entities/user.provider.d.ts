import { DataSource } from 'typeorm';
import { User } from './user.entity';
import { Link } from 'src/link/entities/link.entity';
export declare const UserProviders: ({
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<User>;
    inject: string[];
} | {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Link>;
    inject: string[];
})[];
