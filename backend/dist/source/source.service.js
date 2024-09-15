"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const source_dto_1 = require("./dto/source.dto");
let SourceService = class SourceService {
    constructor(sourceRepository, linkRepository) {
        this.sourceRepository = sourceRepository;
        this.linkRepository = linkRepository;
    }
    async create(createSourceDto) {
        const isLinkExist = await this.linkRepository.findOne({
            where: { id: createSourceDto.linkId },
        });
        if (!isLinkExist) {
            throw new common_1.NotFoundException(`Link with id ${createSourceDto.linkId} not found`);
        }
        const isSourceExist = await this.sourceRepository.findOne({
            where: {
                linkId: createSourceDto.linkId,
                utmSource: createSourceDto.utmSource,
            },
        });
        if (isSourceExist) {
            return (0, class_transformer_1.plainToInstance)(source_dto_1.SourceDto, isSourceExist, {
                excludeExtraneousValues: true,
            });
        }
        const source = this.sourceRepository.create(createSourceDto);
        const newSource = await this.sourceRepository.save(source);
        return (0, class_transformer_1.plainToInstance)(source_dto_1.SourceDto, newSource, {
            excludeExtraneousValues: true,
        });
    }
    async findAll() {
        const sources = await this.sourceRepository.find();
        return (0, class_transformer_1.plainToInstance)(source_dto_1.SourceDto, sources, {
            excludeExtraneousValues: true,
        });
    }
    async findOne(id) {
        const source = await this.sourceRepository.findOne({ where: { id } });
        if (!source) {
            throw new common_1.NotFoundException(`Source with id ${id} not found`);
        }
        return source;
    }
    async update(id, updateSourceDto) {
        if (updateSourceDto.linkId) {
            const isLinkExist = await this.linkRepository.findOne({
                where: { id: updateSourceDto.linkId },
            });
            if (!isLinkExist) {
                throw new common_1.NotFoundException(`Link with id ${updateSourceDto.linkId} not found`);
            }
        }
        const source = await this.sourceRepository.findOne({ where: { id } });
        if (!source) {
            throw new common_1.NotFoundException(`Source with id ${id} not found`);
        }
        Object.keys(updateSourceDto).forEach((key) => {
            if (updateSourceDto[key] !== null && updateSourceDto[key] !== undefined) {
                source[key] = updateSourceDto[key];
            }
        });
        const updatedSource = await this.sourceRepository.save(source);
        return (0, class_transformer_1.plainToInstance)(source_dto_1.SourceDto, updatedSource, {
            excludeExtraneousValues: true,
        });
    }
    async remove(id) {
        const result = await this.sourceRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Source with id ${id} not found`);
        }
    }
    async getSourcesByLink(linkId) {
        const link = await this.linkRepository.findOne({
            where: { id: linkId },
        });
        if (!link) {
            throw new common_1.NotFoundException(`Link with id ${linkId} not found`);
        }
        const sources = link.sources;
        return (0, class_transformer_1.plainToInstance)(source_dto_1.SourceDto, sources, {
            excludeExtraneousValues: true,
        });
    }
};
exports.SourceService = SourceService;
exports.SourceService = SourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SOURCE_REPOSITORY')),
    __param(1, (0, common_1.Inject)('LINK_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], SourceService);
//# sourceMappingURL=source.service.js.map