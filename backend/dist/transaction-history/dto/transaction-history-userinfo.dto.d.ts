import { UserDto } from 'src/user/dto/user.dto';
export declare class TransactionHistoryUserInfoDto {
    id: number;
    sourceId: number;
    sourceName: string;
    senderInfo: UserDto;
    receiverInfo: UserDto;
    amount: number;
    timeStamp: Date;
    note: string;
    name: string;
}
