import { ActionReducerMap } from '@ngrx/store';
import { TechniquesEffects } from './Techniques/effects';
import * as TechniquesReducer from './Techniques/reducers';

export interface AppState {
  techniques: TechniquesReducer.TechniqueState;
}
export const appReducers: ActionReducerMap<AppState> = {
  techniques: TechniquesReducer.techniquesReducer,
};

export const EffectsArray: any[] = [TechniquesEffects];
