import {AppActions, AppActionTypes} from './app.actions';


export interface AppState {
  currentTheme: string;
}
const initialState: AppState = {
  currentTheme: 'dark'
};

export function reducer(state = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionTypes.SetTheme:
      return {
        ...state,
        currentTheme: action.payload
      };
    default:
      return state;
  }
}
