import { Injectable } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

interface userState {
  user: User;
}

const initialState: userState = {
  user: {} as User,
} as userState;

const store = createStore({ name: 'user' }, withProps<userState>(initialState));

@Injectable({
  providedIn: 'root',
})
export class UserRepository {
  public UpdateUser(user: User, clearSearchResult = false): void {
    if (clearSearchResult) {
      user = user ?? ({} as User);
      this._shallowUpdate({ user });
    } else {
      this._shallowUpdate({ user });
    }

    this._shallowUpdate({ user });
  }

  public state$: Observable<User> = store.pipe(select((state) => state.user));

  public userId$: Observable<number> = store.pipe(select((state) => state.user.id));

  private _shallowUpdate(newState: Partial<userState>): void {
    store.update((state) => ({ ...state, ...newState }));
  }
}
