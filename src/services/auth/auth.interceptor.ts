import { Inject, Injectable, InjectionToken } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, switchMap, take, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { EnvironmentConfigService } from 'src/libs/environment/environment-config.service';
import { ENVIRONMENT, Environment } from 'src/libs/environment/environment-config.interface';

export interface IAuthConfig {
  getToken: () => Observable<string | null>;
  redirectUrl?: () => string;

  /**
   * @default true
   */
  shouldRedirectToLogin?: (
    request: HttpRequest<any>,
    error: HttpErrorResponse
  ) => boolean;
  /**
   * @default true
   */
  shouldAppendToken?: (request: HttpRequest<any>) => boolean;
}

export const AUTH_CONFIG_TOKEN = new InjectionToken<IAuthConfig>(
  'Auth Config Token'
);

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    @Inject(AUTH_CONFIG_TOKEN) private _config: IAuthConfig,
    protected _authService: AuthService,
    protected _environmentConfig: EnvironmentConfigService,
    @Inject(ENVIRONMENT) private readonly _environment: Environment
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let request;
    if (this._config.shouldAppendToken?.(req) ?? true) {
      request = this._config.getToken().pipe(
        take(1),
        switchMap((token) => {
          const authReq = token ? this._applyTokenToRequest(req, token) : req;
          return next.handle(authReq);
        })
      );
    } else {
      request = next.handle(req);
    }

    return request.pipe(
      catchError((error: HttpErrorResponse) => {
        // If a 401 we care
        if (error.status === 401) {
          if (this._config.shouldRedirectToLogin?.(req, error) ?? true) {
            this._redirectToLogin();
          }
        }

        return throwError(error);
      })
    );
  }

  private _applyTokenToRequest(
    req: HttpRequest<any>,
    token: string
  ): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: `Bearer ${token}`,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
  }

  private _redirectToLogin(): void {
    if (this._config.redirectUrl) {
      const redirectUrl = this._config.redirectUrl();
      // this._authService.redirectToLogin(redirectUrl as string);
    }
  }
}
