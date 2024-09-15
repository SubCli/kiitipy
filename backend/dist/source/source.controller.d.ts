import { SourceService } from './source.service';
import { SourceDto } from 'src/source/dto/source.dto';
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from 'src/source/dto/update-source.dto';
export declare class SourceController {
    private readonly sourceService;
    constructor(sourceService: SourceService);
    create(createSourceDto: CreateSourceDto): Promise<SourceDto>;
    findAll(): Promise<SourceDto[]>;
    findOne(id: number): Promise<SourceDto>;
    update(id: number, updateSourceDto: UpdateSourceDto): Promise<SourceDto>;
    remove(id: number): Promise<void>;
    getSourcesByLink(id: number): Promise<SourceDto[]>;
}
