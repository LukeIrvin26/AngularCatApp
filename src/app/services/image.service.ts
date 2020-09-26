import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../interfaces/image.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = '/api/images/search';
  private headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('x-api-key', environment.apiKey);

  constructor(private http: HttpClient) {}

  getImages(breedId: string): Observable<Image[]> {
    return this.http.get<any>(
      `${this.apiUrl}?breed_id=${breedId}&size=full&limit=100`,
      {
        headers: this.headers,
      }
    );
  }
}
