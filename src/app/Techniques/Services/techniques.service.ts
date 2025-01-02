import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechniqueDTO } from '../../Models/technique.dto';
import { UserDTO } from '../../Models/user.dto';

@Injectable({
  providedIn: 'root',
})
export class TechniquesService {
  private apiUrl = 'http://localhost:3000/api/techniques';

  constructor(private http: HttpClient) {}

  getAllTechniques(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(this.apiUrl);
  }
  getTechniquesAtack(user: UserDTO | null): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(
      user ? `${this.apiUrl}/atacks/${user.id}` : `${this.apiUrl}/atacks`
    );
  }
  getTechniquesDefense(user: UserDTO | null): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(
      user ? `${this.apiUrl}/defenses/${user.id}` : `${this.apiUrl}/defenses`
    );
  }
  getTechniquesPosition(user: UserDTO | null): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(
      user ? `${this.apiUrl}/positions/${user.id}` : `${this.apiUrl}/positions`
    );
  }
  getTechniquesPum(user: UserDTO | null): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(
      user ? `${this.apiUrl}/pum/${user.id}` : `${this.apiUrl}/pum`
    );
  }
}
