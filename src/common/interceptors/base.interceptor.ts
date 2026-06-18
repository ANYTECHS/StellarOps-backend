import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

/**
 * Base class for interceptors.
 * Extend this when creating reusable interceptor logic.
 */
export abstract class BaseInterceptor implements NestInterceptor<any, any> {
  abstract intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any>;
}
