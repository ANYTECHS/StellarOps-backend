import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestTrackerInterceptor } from './common';
import { SampleFeatureModule } from './modules/sample-feature/sample-feature.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().uri().required(),
        PORT: Joi.number().default(3000),
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
      }),
    }),
    SampleFeatureModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestTrackerInterceptor,
    },
  ],
  exports: [PrismaService],
})
export class AppModule {}
