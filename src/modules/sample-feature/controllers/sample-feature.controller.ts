import { Controller, Get } from '@nestjs/common';

import { SampleFeatureService } from '../services/sample-feature.service';

@Controller('sample-feature')
export class SampleFeatureController {
  constructor(private readonly sampleFeatureService: SampleFeatureService) {}

  @Get()
  getHello(): string {
    return this.sampleFeatureService.getHello();
  }
}
