import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class SampleFeatureGuard implements CanActivate {
  canActivate(_context: ExecutionContext): boolean | Promise<boolean> {
    return true;
  }
}
