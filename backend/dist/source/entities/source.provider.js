"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceProviders = void 0;
const source_entity_1 = require("./source.entity");
const link_provider_1 = require("../../link/entities/link.provider");
exports.sourceProviders = [
    {
        provide: 'SOURCE_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(source_entity_1.Source),
        inject: ['DATA_SOURCE'],
    },
    ...link_provider_1.linkProviders,
];
//# sourceMappingURL=source.provider.js.map