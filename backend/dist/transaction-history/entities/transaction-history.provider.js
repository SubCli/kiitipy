"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionHistoryProviders = void 0;
const transaction_history_entity_1 = require("./transaction-history.entity");
const source_provider_1 = require("../../source/entities/source.provider");
exports.transactionHistoryProviders = [
    {
        provide: 'TRANSACTION_HISTORY_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(transaction_history_entity_1.TransactionHistory),
        inject: ['DATA_SOURCE'],
    },
    ...source_provider_1.sourceProviders,
];
//# sourceMappingURL=transaction-history.provider.js.map