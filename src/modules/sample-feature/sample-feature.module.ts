import { Module } from '@nestjs/common';

import { SampleFeatureController } from './controllers/sample-feature.controller';
import { SampleFeatureService } from './services/sample-feature.service';

@Module({
  controllers: [SampleFeatureController],
  providers: [SampleFeatureService],
})
export class SampleFeatureModule {}
