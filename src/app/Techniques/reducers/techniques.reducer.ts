import { Action, createReducer, on } from '@ngrx/store';
import { Belt, TechniqueDTO } from '../../Models/technique.dto';
import * as TechniquesActions from '../actions';

export interface TechniqueState {
  techniques: TechniqueDTO[];
  techniqe: TechniqueDTO;
  loading: boolean;
  loaded: boolean;
  error: any;
}
export const initialState: TechniqueState = {
  techniques: new Array<TechniqueDTO>(),
  techniqe: new TechniqueDTO(0, '', '', '', Belt.white),
  loading: false,
  loaded: false,
  error: null,
};

const _techniquesReducer = createReducer(
  initialState,
  on(TechniquesActions.getAllTechniques, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(TechniquesActions.getAllTechniquesSuccess, (state, { TechniqueList }) => ({
    ...state,
    techniques: TechniqueList,
    loading: false,
    loaded: true,
  })),
  on(TechniquesActions.getAllTechniquesFailure, (state, { payload }) => ({
    ...state,
    error: { payload },
    loading: false,
    loaded: false,
  })),
  on(TechniquesActions.getAllAtacks, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(TechniquesActions.getAllAtacksSuccess, (state, { TechniqueList }) => ({
    ...state,
    techniques: TechniqueList,
    loading: false,
    loaded: true,
  })),

  on(TechniquesActions.getAllAtacksFailure, (state, { payload }) => ({
    ...state,
    error: { payload },
    loading: false,
    loaded: false,
  })),

  on(TechniquesActions.getAllDefenses, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(TechniquesActions.getAllDefensesSuccess, (state, { TechniqueList }) => ({
    ...state,
    techniques: TechniqueList,
    loading: false,
    loaded: true,
  })),

  on(TechniquesActions.getAllDefensesFailure, (state, { payload }) => ({
    ...state,
    error: { payload },
    loading: false,
    loaded: false,
  })),
  on(TechniquesActions.getAllPositions, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),

  on(TechniquesActions.getAllPositionsSuccess, (state, { TechniqueList }) => ({
    ...state,
    techniques: TechniqueList,
    loading: false,
    loaded: true,
  })),
  on(TechniquesActions.getAllPositionsFailure, (state, { payload }) => ({
    ...state,
    error: { payload },
    loading: false,
    loaded: false,
  })),
  on(TechniquesActions.getAllPum, (state) => ({
    ...state,
    loading: true,
    loaded: false,
  })),
  on(TechniquesActions.getAllPumSuccess, (state, { TechniqueList }) => ({
    ...state,
    techniques: TechniqueList,
    loading: false,
    loaded: true,
  })),
  on(TechniquesActions.getAllPumFailure, (state, { payload }) => ({
    ...state,
    error: { payload },
    loading: false,
    loaded: false,
  }))
);

export function techniquesReducer(
  state: TechniqueState | undefined,
  action: Action
): TechniqueState {
  return _techniquesReducer(state, action);
}
