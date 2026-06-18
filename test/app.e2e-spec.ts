import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { enableApiVersioning } from '../src/api-versioning';
import { PrismaService } from '../src/prisma/prisma.service';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue({ $connect: jest.fn(), $disconnect: jest.fn() })
      .compile();

    app = moduleFixture.createNestApplication();
    enableApiVersioning(app);
    await app.init();
  });

  afterEach(async () => {
    await app?.close();
  });

  it('/v1 (GET)', () => {
    return request(app.getHttpServer())
      .get('/v1')
      .expect(200)
      .expect('Hello World!');
  });

  it('/v2 (GET)', () => {
    return request(app.getHttpServer())
      .get('/v2')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ (GET) requires an API version', () => {
    return request(app.getHttpServer()).get('/').expect(404);
  });
});
