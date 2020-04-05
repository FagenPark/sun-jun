import { User } from '../user';

import { UserActions, UserActionTypes } from './user.actions';

// State for this feature (User)
export interface UserState {
  authenticated: boolean;
  currentUser: User;
}

const initialState: UserState = {
  authenticated: false,
  currentUser: null
};

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.ToggleUserStatus:
      return {
        ...state,
        authenticated: action.payload
      };
    case UserActionTypes.SetUserProfile:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}
