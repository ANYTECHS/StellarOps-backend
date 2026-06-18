import { CanActivate, ExecutionContext } from '@nestjs/common';

/**
 * Base class for guards.
 * Extend this when creating reusable guard logic.
 */
export abstract class BaseGuard implements CanActivate {
  abstract canActivate(context: ExecutionContext): boolean | Promise<boolean>;
}
