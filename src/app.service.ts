import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { status: string; application: string } {
    return {
      status: 'ok',
      application: 'booking-api',
    };
  }
}
