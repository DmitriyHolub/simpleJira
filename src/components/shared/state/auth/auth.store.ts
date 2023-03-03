import { Injectable } from '@angular/core';

export interface AuthState {
  token: string | null;
  expiry: number | null;
  issued: number | null;
  loading: boolean;
  teamsSession: boolean;
}

export const initialAuthState: AuthState = {
  token: null,
  expiry: null,
  issued: null,
  loading: false,
  teamsSession: false
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth', resettable: true })
export class AuthStore extends Store<AuthState> {
  constructor() {
    super(initialAuthState);
  }
}
