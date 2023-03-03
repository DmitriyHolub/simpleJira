/* eslint-disable @typescript-eslint/naming-convention */
// NEEDED FOR HEADERS KEY TO PASS ESLINT
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ENVIRONMENT, Environment } from './environment-config.interface';
import { APPLICATION_NAME } from './application-name.token';

// import { APPLICATION_NAME } from './application-name.token';
// import { ENVIRONMENT, Environment } from './environment-config.interface';

@Injectable({ providedIn: 'root' })
export class EnvironmentConfigService {
  private _config: Record<string, any> = {};

  private readonly _configUrl = `/assets/config/config.json`;

  private _configuration$?: Observable<Record<string, any>>;

  private _initialized$ = new BehaviorSubject(false); // что это

  public get initialized$(): Observable<boolean> {
    return this._initialized$.asObservable();
  }

  constructor(
    private _http: HttpClient,
    @Inject(APP_BASE_HREF) private _baseHref: string,
    @Inject(ENVIRONMENT) private readonly _environment: Environment,
    @Optional()
    @Inject(APPLICATION_NAME)
    private _applicationName: string | null
  ) {}

  public load(baseHref?: string): Observable<Record<string, any>> {
    if (!this._configuration$) {
      const configUrl = `${baseHref ?? this._baseHref}${this._configUrl}`;

      this._configuration$ = this._http
        .get<Record<string, any>>(configUrl, {
          headers: new HttpHeaders({
            'Cache-Control':
              'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
            Pragma: 'no-cache',
            Expires: '0'
          })
        })
        .pipe(shareReplay(1));
    }

    return this._configuration$.pipe(
      tap((config) => {
        this._config = config;
        this._initialized$.next(true);
      })
    );
  }

  public has(name: string): boolean {
    return name in this._config;
  }

  public get(name: string): any | null {
    if (this.has(name)) {
      const val = this._config[name];
      return Array.isArray(val) ? val[0] : val;
    }

    return null;
  }

}
