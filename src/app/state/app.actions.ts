/* NgRx */
import { Action } from '@ngrx/store';

export enum AppActionTypes {
  SetTheme = '[App] Set Theme'
}

export class SetTheme implements Action {
  readonly type = AppActionTypes.SetTheme;
  constructor(public payload: string) { }
}

export type AppActions = SetTheme;
