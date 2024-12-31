import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import * as AuthActions from '../actions';
import { AuthService } from '../Services/auth.service';
@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      exhaustMap(({ User }) =>
        this.authService.registerUser(User).pipe(
          map((user) => {
            return AuthActions.registerUserSuccess({ User: user });
          }),
          catchError((error) => {
            return of(AuthActions.registerUserFailure({ payload: error }));
          })
        )
      )
    )
  );
  registerUserSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.registerUserSuccess),
        tap(() => this.router.navigateByUrl('/techniques'))
      ),
    { dispatch: false }
  );
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginUser),
      exhaustMap(({ User }) =>
        this.authService.loginUser(User).pipe(
          map((user) => {
            return AuthActions.loginUserSuccess({ User: user });
          }),
          catchError((error) => {
            return of(AuthActions.loginUserFailure({ payload: error }));
          })
        )
      )
    )
  );
  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginUserSuccess),
        tap(() => this.router.navigateByUrl('/techniques'))
      ),
    { dispatch: false }
  );
}
