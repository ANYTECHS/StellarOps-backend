import { CanActivate, Injectable } from '@nestjs/common';

@Injectable()
export class SampleFeatureGuard implements CanActivate {
  canActivate(): boolean | Promise<boolean> {
    return true;
  }
}
