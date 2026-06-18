import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { BaseInterceptor } from './base.interceptor';

@Injectable()
export class RequestTrackerInterceptor extends BaseInterceptor {
  private readonly logger = new Logger('RequestTracker');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (context.getType() !== 'http') {
      return next.handle();
    }

    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    const method = request.method;
    const url = request.url;
    const now = Date.now();

    this.logger.log(`Incoming Request: ${method} ${url}`);

    return next.handle().pipe(
      tap(() => {
        const delay = Date.now() - now;
        const statusCode = response.statusCode;
        this.logger.log(
          `Response: ${method} ${url} ${statusCode} - ${delay}ms`,
        );
      }),
    );
  }
}
