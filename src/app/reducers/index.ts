import {
  ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from '../auth/state/user.reducer';
import {State} from '../state/app.state';
import * as fromApp from '../state/app.reducer';

export const reducers: ActionReducerMap<State> = {
  users: fromAuth.reducer,
  app: fromApp.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
