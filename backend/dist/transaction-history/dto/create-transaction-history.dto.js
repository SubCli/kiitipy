"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransactionHistoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const transaction_history_dto_1 = require("./transaction-history.dto");
class CreateTransactionHistoryDto extends (0, swagger_1.PickType)(transaction_history_dto_1.TransactionHistoryDto, ['sourceId', 'senderWallet', 'receiver', 'amount', 'name', 'note']) {
}
exports.CreateTransactionHistoryDto = CreateTransactionHistoryDto;
//# sourceMappingURL=create-transaction-history.dto.js.map