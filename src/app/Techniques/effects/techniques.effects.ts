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
      withLatestFrom(this.store.select((state) => state.auth.user)),
      switchMap(([_, user]) =>
        this.techniquesService.getTechniquesAtack(user).pipe(
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
      withLatestFrom(this.store.select((state) => state.auth.user)),

      switchMap(([_, user]) =>
        this.techniquesService.getTechniquesDefense(user).pipe(
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
      withLatestFrom(this.store.select((state) => state.auth.user)),
      switchMap(([_, user]) =>
        this.techniquesService.getTechniquesPosition(user).pipe(
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
      withLatestFrom(this.store.select((state) => state.auth.user)),
      switchMap(([_, user]) =>
        this.techniquesService.getTechniquesPum(user).pipe(
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
      withLatestFrom(
        this.store.select((state) => state.techniques.filterName),
        this.store.select((state) => state.techniques.filterBelt)
      ),
      map(([_, filterName]) =>
        TechniquesActions.filterTechniquesByName({ userInput: filterName })
      )
    )
  );

  filterTechniques$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        TechniquesActions.filterTechniquesByName,
        TechniquesActions.filterTechniquesByBelt
      ),
      withLatestFrom(
        this.store.select((state) => state.techniques.filterName),
        this.store.select((state) => state.techniques.filterBelt),
        this.store.select((state) => state.techniques.techniques)
      ),
      map(([_, filterName, filterBelt, techniques]) => {
        const filteredTechniques = techniques.filter((technique) => {
          if (filterBelt !== null) {
            return (
              technique.name.toLowerCase().includes(filterName.toLowerCase()) &&
              technique.belt === filterBelt
            );
          } else {
            return technique.name
              .toLowerCase()
              .includes(filterName.toLowerCase());
          }
        });

        return TechniquesActions.filterTechniquesSuccess({
          TechniqueList: filteredTechniques,
        });
      }),
      catchError((error) =>
        of(TechniquesActions.filterTechniquesFailure({ payload: error }))
      )
    )
  );

  markTechnique$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechniquesActions.markTechnique),
      withLatestFrom(
        this.store.select((state) => state.auth.user),
        this.store.select((state) => state.techniques.techniques),
        this.store.select((state) => state.techniques.filteredTechniques)
      ),
      switchMap(([action, user, techniques, filteredTechniques]) =>
        this.techniquesService.markTechnique(user, action.technique).pipe(
          map((technique) => {
            const TechniqueList = techniques.map((current) =>
              current.id === technique.id ? technique : current
            );
            const FilteredList = filteredTechniques.map((current) =>
              current.id === technique.id ? technique : current
            );
            return TechniquesActions.markTechniqueSuccess({
              technique,
              TechniqueList,
              FilteredList,
            });
          }),
          catchError((error) =>
            of(TechniquesActions.markTechniqueFailure({ payload: error }))
          )
        )
      )
    )
  );

  unmarkTechnique$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechniquesActions.unmarkTechnique),
      withLatestFrom(
        this.store.select((state) => state.auth.user),
        this.store.select((state) => state.techniques.techniques),
        this.store.select((state) => state.techniques.filteredTechniques)
      ),
      switchMap(([action, user, techniques, filteredTechniques]) =>
        this.techniquesService.unmarkTechnique(user, action.technique).pipe(
          map((technique) => {
            const TechniqueList = techniques.map((current) =>
              current.id === technique.id ? technique : current
            );
            const FilteredList = filteredTechniques.map((current) =>
              current.id === technique.id ? technique : current
            );
            return TechniquesActions.unmarkTechniqueSuccess({
              technique,
              TechniqueList,
              FilteredList,
            });
          }),
          catchError((error) =>
            of(TechniquesActions.unmarkTechniqueFailure({ payload: error }))
          )
        )
      )
    )
  );
}
