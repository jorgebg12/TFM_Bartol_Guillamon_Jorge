import { ActionReducerMap } from '@ngrx/store';
import { AuthEffects } from './Auth/effects';
import * as AuthReducer from './Auth/reducers';
import { TechniquesEffects } from './Techniques/effects';
import * as TechniquesReducer from './Techniques/reducers';

export interface AppState {
  techniques: TechniquesReducer.TechniqueState;
  auth: AuthReducer.AuthState;
}
export const appReducers: ActionReducerMap<AppState> = {
  techniques: TechniquesReducer.techniquesReducer,
  auth: AuthReducer.authReducer,
};

export const EffectsArray: any[] = [TechniquesEffects, AuthEffects];
