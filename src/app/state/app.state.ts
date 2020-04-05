import { UserState } from '../auth/state/user.reducer';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface State {
  users: UserState;
}
