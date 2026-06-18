import { NestFactory } from '@nestjs/core';
import { enableApiVersioning } from './api-versioning';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  enableApiVersioning(app);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
