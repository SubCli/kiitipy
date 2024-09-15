export declare class AppService {
    FAUCET_URL: string;
    getHello(): string;
    getTokenFromFaucet(account: string, chainId: string): Promise<any>;
}
