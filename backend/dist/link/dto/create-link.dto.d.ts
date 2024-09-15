import { LinkDto } from '../dto/link.dto';
declare const CreateLinkDto_base: import("@nestjs/common").Type<Pick<LinkDto, "name" | "amount" | "userId" | "linkCode" | "receivedAddress" | "config">>;
export declare class CreateLinkDto extends CreateLinkDto_base {
}
export {};
