import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService extends Redis implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly configService: ConfigService) {
    super(configService.get<string>('REDIS_URL')!);
  }

  onModuleInit() {
    // Connection is established by ioredis constructor
  }

  async onModuleDestroy() {
    await this.quit();
  }
}
