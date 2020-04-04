import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalResponse, CountriesResponse } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GlobalResponse> {
    return this.httpClient.get<GlobalResponse>('https://corona.lmao.ninja/all');
  }

  getCountries(): Observable<CountriesResponse[]> {
    return this.httpClient.get<CountriesResponse[]>(
      'https://corona.lmao.ninja/countries'
    );
  }
}
