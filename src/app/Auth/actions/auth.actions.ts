import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { UserDTO, UserLoginDTO, UserRegisterDTO } from '../../Models/user.dto';

// export const getAllUsers = createAction('[Users] Get all the users');
// export const getAllUsersSuccess = createAction(
//   '[Users] Get all the users success',
//   props<{ UserList: UserDTO[] }>()
// );
// export const getAllUsersFailure = createAction(
//   '[Users] Get all the users failure',
//   props<{ payload: HttpErrorResponse }>()
// );

export const loginUser = createAction(
  '[Login] Login user',
  props<{ User: UserLoginDTO }>()
);
export const loginUserSuccess = createAction(
  '[Login] Login user success',
  props<{ User: UserDTO }>()
);
export const loginUserFailure = createAction(
  '[Login] Login user failure',
  props<{ payload: HttpErrorResponse }>()
);

export const registerUser = createAction(
  '[Register] Register user',
  props<{ User: UserRegisterDTO }>()
);
export const registerUserSuccess = createAction(
  '[Register] Register user success',
  props<{ User: UserDTO }>()
);
export const registerUserFailure = createAction(
  '[Register] Register user failure',
  props<{ payload: HttpErrorResponse }>()
);

export const closeSession = createAction('[Session] Close session');
