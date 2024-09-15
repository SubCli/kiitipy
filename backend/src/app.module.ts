import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { LinkModule } from './link/link.module';
import { SourceModule } from 'src/source/source.module';
import { TransactionHistoryModule } from 'src/transaction-history/transaction-history.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
    LinkModule,
    SourceModule,
    TransactionHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
