import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechniqueDTO } from '../../Models/technique.dto';

@Injectable({
  providedIn: 'root',
})
export class TechniquesService {
  private apiUrl = 'http://localhost:3000/api/techniques';

  constructor(private http: HttpClient) {}

  getAllTechniques(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(this.apiUrl);
  }
  getTechniquesAtack(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(this.apiUrl + '/atacks');
  }

  getTechniquesDefense(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(this.apiUrl + '/defenses');
  }

  getTechniquesPosition(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(this.apiUrl + '/positions');
  }

  getTechniquesPum(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>(this.apiUrl + '/pum');
  }
}
