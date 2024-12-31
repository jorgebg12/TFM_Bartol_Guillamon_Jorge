import { Action, createReducer, on } from '@ngrx/store';
import { UserDTO } from '../../Models/user.dto';
import * as AuthActions from '../actions';

export interface AuthState {
  user: UserDTO | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  loaded: false,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(AuthActions.loginUser, (state, { User }) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(AuthActions.loginUserSuccess, (state, { User }) => ({
    ...state,
    user: User,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(AuthActions.loginUserFailure, (state, { payload }) => ({
    ...state,
    user: null,
    loading: false,
    loaded: false,
    error: { payload },
  })),
  on(AuthActions.registerUser, (state, { User }) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(AuthActions.registerUserSuccess, (state, { User }) => ({
    ...state,
    user: User,
    loading: false,
    loaded: true,
    error: null,
  })),
  on(AuthActions.registerUserFailure, (state, { payload }) => ({
    ...state,
    user: null,
    loading: false,
    loaded: false,
    error: { payload },
  }))
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return _authReducer(state, action);
}
