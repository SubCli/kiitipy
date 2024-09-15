import { Link } from '../entities/link.entity';
declare const LinkDto_base: import("@nestjs/mapped-types").MappedType<Pick<Link, "name" | "id" | "amount" | "totalNumberDonations" | "totalDonations" | "userId" | "linkCode" | "receivedAddress" | "config" | "createdAt">>;
export declare class LinkDto extends LinkDto_base {
    id: number;
    userId: number;
    linkCode: string;
    receivedAddress: string;
    amount: number;
    name: string;
    totalNumberDonations: number;
    totalDonations: number;
    config: string;
    createdAt: Date;
}
export {};
