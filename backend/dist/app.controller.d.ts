import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getTokenFromFaucet(account: string, chainId: string): Promise<any>;
}
