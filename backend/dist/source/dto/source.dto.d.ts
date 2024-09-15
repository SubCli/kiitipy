import { Source } from '../entities/source.entity';
declare const SourceDto_base: import("@nestjs/mapped-types").MappedType<Pick<Source, "id" | "linkId" | "utmSource">>;
export declare class SourceDto extends SourceDto_base {
    id: number;
    linkId: number;
    utmSource: string;
}
export {};
