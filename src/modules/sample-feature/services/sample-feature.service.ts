import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleFeatureService {
  getHello(): string {
    return 'Hello from sample-feature';
  }
}
