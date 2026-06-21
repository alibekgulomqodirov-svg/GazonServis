import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Gazon Servis API v1 - Welcome!';
  }
}
