"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const path_1 = require("path");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            console.log(process.env);
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: process.env.DATABASE_HOST || 'localhost',
                port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
                username: process.env.DATABASE_USER || 'root',
                password: process.env.DATABASE_PASSWORD || 'suIp@y2024',
                database: process.env.DATABASE_NAME || 'suidona',
                entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map