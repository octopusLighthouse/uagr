import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  test(): any {
    const {
      rss,
      heapTotal,
      heapUsed,
      external,
      arrayBuffers,
    } 
    = process.memoryUsage();
    return {
      rss,
      heapTotal: heapTotal / 1000000,
      heapUsed: heapUsed / 1000000,
      external,
      arrayBuffers,
    };
  }
}
