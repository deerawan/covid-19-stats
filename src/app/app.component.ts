import { Component, OnInit } from '@angular/core';
import { CoronaService } from './corona.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Stat } from './corona.model';
import { GlobalResponse } from './api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  globalStats$: Observable<Stat[]>;
  lastUpdated$: Observable<number>;

  private globalApiResponse$: Observable<GlobalResponse>;

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {
    this.globalApiResponse$ = this.coronaService.getAll().pipe(shareReplay(1));

    this.globalStats$ = this.globalApiResponse$.pipe(
      map((response: GlobalResponse) => this.buildGlobalStats(response))
    );

    this.lastUpdated$ = this.globalApiResponse$.pipe(
      map(response => response.updated)
    );
  }

  private buildGlobalStats(response: GlobalResponse): Stat[] {
    return [
      {
        title: 'Confirmed',
        total: response.active,
        color: 'warning'
      },
      {
        title: 'Recovered',
        total: response.recovered,
        color: 'success'
      },
      {
        title: 'Deaths',
        total: response.deaths,
        color: 'danger'
      }
    ];
  }
}
