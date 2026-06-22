import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getHealthCheck() {
    const databaseHealthy = await this.prismaService.checkHealth();

    return {
      status: databaseHealthy ? 'healthy' : 'unhealthy',
      database: databaseHealthy ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString(),
    };
  }
}
