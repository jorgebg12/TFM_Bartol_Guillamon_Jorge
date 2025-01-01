import { Injectable, OnInit } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../../app.reducers';
import { Belt } from '../../Models/technique.dto';
import * as TechniquesActions from '../actions/index';
import { TechniquesService } from '../Services/techniques.service';
@Injectable()
export class TechniquesEffects implements OnInit {
  userInput: string = '';
  userBelt: Belt | null = null;
  constructor(
    private actions$: Actions,
    private techniquesService: TechniquesService,
    private store: Store<AppState>
  ) {}
  ngOnInit(): void {
    this.store.select('techniques').subscribe((state) => {
      this.userInput = state.filterName;
      this.userBelt = state.filterBelt;
    });
  }

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
  intermediateFilterCall$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        TechniquesActions.getAllPumSuccess,
        TechniquesActions.getAllPositionsSuccess,
        TechniquesActions.getAllDefensesSuccess,
        TechniquesActions.getAllAtacksSuccess
      ),
      withLatestFrom(this.store.select((state) => state.techniques.filterName)),
      map(([action, filterName]) =>
        TechniquesActions.filterTechniquesByName({ userInput: filterName })
      )
    )
  );

  filterTechniquesByName$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechniquesActions.filterTechniquesByName),
      withLatestFrom(this.store.select((state) => state.techniques.techniques)),
      map(([{ userInput }, techniques]) => {
        if (userInput === '') {
          return TechniquesActions.filterTechniquesByNameSuccess({
            TechniqueList: techniques,
          });
        }
        const filteredTechniques = techniques.filter((technique) =>
          technique.name.toLowerCase().includes(userInput.toLowerCase())
        );
        return TechniquesActions.filterTechniquesByNameSuccess({
          TechniqueList: filteredTechniques,
        });
      }),
      catchError((error) =>
        of(TechniquesActions.filterTechniquesByNameFailure({ payload: error }))
      )
    )
  );
}
