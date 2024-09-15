import { User } from 'src/user/entities/user.entity';
import { Source } from 'src/source/entities/source.entity';
export declare class Link {
    id: number;
    userId: number;
    user: User;
    linkCode: string;
    receivedAddress: string;
    amount: number;
    name: string;
    totalNumberDonations: number;
    totalDonations: number;
    sources: Source[];
    config: string;
    createdAt: Date;
}
