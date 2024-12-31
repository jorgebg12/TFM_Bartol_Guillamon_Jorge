import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO, UserLoginDTO, UserRegisterDTO } from '../../Models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  registerUser(user: UserRegisterDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.apiUrl + '/register', {
      email: user.email,
      username: user.username,
      password: user.password,
    });
  }

  loginUser(user: UserLoginDTO): Observable<UserDTO> {
    return this.http.post<UserDTO>(this.apiUrl + '/login', {
      email: user.email,
      password: user.password,
    });
  }
}
