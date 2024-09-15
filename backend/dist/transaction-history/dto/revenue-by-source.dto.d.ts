import { SourceDto } from 'src/source/dto/source.dto';
import { RevenueByMonth } from './revenue-by-month.dto';
export declare class RevenueBySourceDto {
    source: SourceDto;
    totalRevenueByMonthList: RevenueByMonth[];
}
