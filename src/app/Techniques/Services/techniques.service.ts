import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TechniqueDTO } from '../../Models/technique.dto';

@Injectable({
  providedIn: 'root',
})
export class TechniquesService {
  constructor(private http: HttpClient) {}

  getTechniquesAtack(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>('/assets/mocks/ataques.json');
  }

  getTechniquesDefense(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>('/assets/mocks/defensas.json');
  }

  getTechniquesPosition(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>('/assets/mocks/posiciones.json');
  }

  getTechniquesPum(): Observable<TechniqueDTO[]> {
    return this.http.get<TechniqueDTO[]>('/assets/mocks/pum.json');
  }
}
