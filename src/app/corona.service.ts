import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalStat, CountryStat } from './api.model';

const BASE_URL = 'https://corona.lmao.ninja/v2';
@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  constructor(private httpClient: HttpClient) {}

  getGlobalStat(): Observable<GlobalStat> {
    return this.httpClient.get<GlobalStat>(`${BASE_URL}/all`);
  }

  getCountriesStat(): Observable<CountryStat[]> {
    return this.httpClient.get<CountryStat[]>(`${BASE_URL}/countries`);
  }
}
