import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Belt, TechniqueDTO } from '../../Models/technique.dto';

export const getAllTechniques = createAction(
  '[Techniques] Get all the techniques'
);
export const getAllTechniquesSuccess = createAction(
  '[Techniques] Get all the techniques success',
  props<{ TechniqueList: TechniqueDTO[] }>()
);
export const getAllTechniquesFailure = createAction(
  '[Techniques] Get all the techniques failure',
  props<{ payload: HttpErrorResponse }>()
);

export const getAllAtacks = createAction('[Techniques] Get all the atacks');
export const getAllAtacksSuccess = createAction(
  '[Techniques] Get all the atacks success',
  props<{ TechniqueList: TechniqueDTO[] }>()
);
export const getAllAtacksFailure = createAction(
  '[Techniques] Get all the atacks failure',
  props<{ payload: HttpErrorResponse }>()
);

export const getAllDefenses = createAction('[Techniques] Get all the defenses');
export const getAllDefensesSuccess = createAction(
  '[Techniques] Get all the defenses success',
  props<{ TechniqueList: TechniqueDTO[] }>()
);
export const getAllDefensesFailure = createAction(
  '[Techniques] Get all the defenses failure',
  props<{ payload: HttpErrorResponse }>()
);

export const getAllPositions = createAction(
  '[Techniques] Get all the positions'
);
export const getAllPositionsSuccess = createAction(
  '[Techniques] Get all the positions success',
  props<{ TechniqueList: TechniqueDTO[] }>()
);
export const getAllPositionsFailure = createAction(
  '[Techniques] Get all the positions failure',
  props<{ payload: HttpErrorResponse }>()
);

export const getAllPum = createAction('[Techniques] Get all the pum');
export const getAllPumSuccess = createAction(
  '[Techniques] Get all the pum success',
  props<{ TechniqueList: TechniqueDTO[] }>()
);
export const getAllPumFailure = createAction(
  '[Techniques] Get all the pum failure',
  props<{ payload: HttpErrorResponse }>()
);

export const filterTechniquesByName = createAction(
  '[Filter] Filter the techniques by name',
  props<{ userInput: string }>()
);
export const filterTechniquesByBelt = createAction(
  '[Filter] Filter the techniques by belt',
  props<{ userBelt: Belt | null }>()
);
export const filterTechniquesSuccess = createAction(
  '[Filter] Filter success',
  props<{ TechniqueList: TechniqueDTO[] }>()
);
export const filterTechniquesFailure = createAction(
  '[Filter] Filter failure',
  props<{ payload: HttpErrorResponse }>()
);
