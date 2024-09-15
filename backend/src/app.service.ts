import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  FAUCET_URL = 'https://faucet.kiivalidator.com/api/faucet';
  getHello(): string {
    return 'Hello World!';
  }
  async getTokenFromFaucet(account: string, chainId: string): Promise<any> {
    try {
      // {faucetUrl}?address={address}&chainId=kiichain
      const url = `${this.FAUCET_URL}?address=${account}&chainId=${chainId}`;
      console.log('Url : ', url);
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
      const val = await res.json();
      console.log('Value : ', val);
      return val;
    } catch (error) {
      console.log('faucetTokens : ', error);
      return null;
    }
  }
}
