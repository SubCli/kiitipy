import { Repository } from 'typeorm';
import { SourceDto } from 'src/source/dto/source.dto';
import { CreateSourceDto } from './dto/create-source.dto';
import { Source } from 'src/source/entities/source.entity';
import { UpdateSourceDto } from 'src/source/dto/update-source.dto';
import { Link } from 'src/link/entities/link.entity';
export declare class SourceService {
    private sourceRepository;
    private linkRepository;
    constructor(sourceRepository: Repository<Source>, linkRepository: Repository<Link>);
    create(createSourceDto: CreateSourceDto): Promise<SourceDto>;
    findAll(): Promise<SourceDto[]>;
    findOne(id: number): Promise<SourceDto>;
    update(id: number, updateSourceDto: UpdateSourceDto): Promise<SourceDto>;
    remove(id: number): Promise<void>;
    getSourcesByLink(linkId: number): Promise<SourceDto[]>;
}
