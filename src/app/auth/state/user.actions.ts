/* NgRx */
import { Action } from '@ngrx/store';
import {User} from '../user';

export enum UserActionTypes {
  ToggleUserStatus = '[User] Toggle User Status',
  SetUserProfile = '[User] Set User Profile'
}

export class ToggleUserStatus implements Action {
  readonly type = UserActionTypes.ToggleUserStatus;
  constructor(public payload: boolean) { }
}
export class SetUserProfile implements Action {
  readonly type = UserActionTypes.SetUserProfile;
  constructor(public payload: User) { }
}

export type UserActions = ToggleUserStatus
  | SetUserProfile;
