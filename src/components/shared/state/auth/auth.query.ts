import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { filter } from 'rxjs/operators';

import { AuthState, AuthStore } from './auth.store';

@Injectable({ providedIn: 'root' })
export class AuthQuery extends Query<AuthState> {
  public token$ = this.select((state) => state.token).pipe(
    filter((token) => !!token)
  );

  constructor(protected _store: AuthStore) {
    super(_store);
  }

  public isLoading(): boolean {
    return this.getValue().loading;
  }

  public hasValidToken(): boolean {
    const authState = this.getValue();
    const thirtySecsFromNow: Date = new Date();
    thirtySecsFromNow.setSeconds(thirtySecsFromNow.getSeconds() + 30);
    // eslint-disable-next-line no-bitwise
    const thirtySecsFromNowEpoch = (thirtySecsFromNow.getTime() / 1000) | 0;
    return (
      !!authState.token ||
      (authState.expiry as number) >= thirtySecsFromNowEpoch
    );
  }

  public getAuthToken(): string {
    const authState = this.getValue();
    return authState.token as string;
  }
}
