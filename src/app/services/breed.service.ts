import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Breed } from '../interfaces/breed.interface';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class BreedService {
  private apiUrl = '/api/breeds';
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('x-api-key', environment.apiKey);

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<Breed[]> {
    return this.http.get<Breed[]>(this.apiUrl, {
      headers: this.headers,
    });
  }
}
