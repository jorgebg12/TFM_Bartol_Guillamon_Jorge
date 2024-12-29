import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as TechniquesActions from '../actions/index';
import { TechniquesService } from '../Services/techniques.service';
@Injectable()
export class TechniquesEffects {
  constructor(
    private actions$: Actions,
    private techniquesService: TechniquesService
  ) {}

  getAllTechniques$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechniquesActions.getAllTechniques),
      switchMap(() =>
        this.techniquesService.getAllTechniques().pipe(
          map((techniques) =>
            TechniquesActions.getAllTechniquesSuccess({
              TechniqueList: techniques,
            })
          ),
          catchError((error) =>
            of(TechniquesActions.getAllTechniquesFailure({ payload: error }))
          )
        )
      )
    )
  );

  getAllAtacks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechniquesActions.getAllAtacks),
      switchMap(() =>
        this.techniquesService.getTechniquesAtack().pipe(
          map((techniques) =>
            TechniquesActions.getAllAtacksSuccess({
              TechniqueList: techniques,
            })
          ),
          catchError((error) =>
            of(TechniquesActions.getAllAtacksFailure({ payload: error }))
          )
        )
      )
    )
  );

  getAllDefenses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechniquesActions.getAllDefenses),
      switchMap(() =>
        this.techniquesService.getTechniquesDefense().pipe(
          map((techniques) =>
            TechniquesActions.getAllDefensesSuccess({
              TechniqueList: techniques,
            })
          ),
          catchError((error) =>
            of(TechniquesActions.getAllDefensesFailure({ payload: error }))
          )
        )
      )
    )
  );

  getAllPositions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechniquesActions.getAllPositions),
      switchMap(() =>
        this.techniquesService.getTechniquesPosition().pipe(
          map((techniques) =>
            TechniquesActions.getAllPositionsSuccess({
              TechniqueList: techniques,
            })
          ),
          catchError((error) =>
            of(TechniquesActions.getAllPositionsFailure({ payload: error }))
          )
        )
      )
    )
  );

  getAllPum$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechniquesActions.getAllPum),
      switchMap(() =>
        this.techniquesService.getTechniquesPum().pipe(
          map((techniques) =>
            TechniquesActions.getAllPumSuccess({
              TechniqueList: techniques,
            })
          ),
          catchError((error) =>
            of(TechniquesActions.getAllPumFailure({ payload: error }))
          )
        )
      )
    )
  );
}
