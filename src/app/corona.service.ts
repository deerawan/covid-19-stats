import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalStat, CountryStat } from './api.model';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
  constructor(private httpClient: HttpClient) {}

  getGlobalStat(): Observable<GlobalStat> {
    return this.httpClient.get<GlobalStat>('https://corona.lmao.ninja/all');
  }

  getCountriesStat(): Observable<CountryStat[]> {
    return this.httpClient.get<CountryStat[]>(
      'https://corona.lmao.ninja/countries'
    );
  }
}
