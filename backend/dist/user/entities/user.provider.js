"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProviders = void 0;
const user_entity_1 = require("./user.entity");
const link_entity_1 = require("../../link/entities/link.entity");
exports.UserProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.User),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'LINK_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(link_entity_1.Link),
        inject: ['DATA_SOURCE'],
    },
];
//# sourceMappingURL=user.provider.js.map