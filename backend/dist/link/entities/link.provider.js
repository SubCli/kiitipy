"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkProviders = void 0;
const link_entity_1 = require("./link.entity");
const user_provider_1 = require("../../user/entities/user.provider");
exports.linkProviders = [
    {
        provide: 'LINK_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(link_entity_1.Link),
        inject: ['DATA_SOURCE'],
    },
    ...user_provider_1.UserProviders,
];
//# sourceMappingURL=link.provider.js.map