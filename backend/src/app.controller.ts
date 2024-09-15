import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('tokens')
  @ApiQuery({ name: 'account', type: String, description: 'Wallet address' })
  @ApiQuery({ name: 'chainId', type: String, description: 'Chain Id' })
  @ApiResponse({
    status: 200,
    description: 'Success.',
  })
  @ApiResponse({ status: 404, description: 'Not Found' })
  @ApiResponse({ status: 500, description: 'Error.' })
  getTokenFromFaucet(
    @Query('account') account: string,
    @Query('chainId') chainId: string,
  ): Promise<any> {
    return this.appService.getTokenFromFaucet(account, chainId);
  }
}
