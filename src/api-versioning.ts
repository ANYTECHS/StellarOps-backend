import { INestApplication, VersioningType } from '@nestjs/common';

export const SUPPORTED_API_VERSIONS = ['1', '2'];

export function enableApiVersioning(app: INestApplication): void {
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: SUPPORTED_API_VERSIONS,
  });
}
