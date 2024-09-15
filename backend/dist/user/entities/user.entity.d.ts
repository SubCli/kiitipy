import { Link } from 'src/link/entities/link.entity';
export declare class User {
    id: number;
    walletAddress: string;
    email: string;
    avatarUrl: string;
    fullName: string;
    about: string;
    links: Link[];
}
