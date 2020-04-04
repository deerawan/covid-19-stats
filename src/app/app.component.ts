import { Component, OnInit } from '@angular/core';
import { CoronaService } from './corona.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Stat } from './corona.model';
import { GlobalStat, CountryStat } from './api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  globalStats$: Observable<Stat[]>;
  lastUpdated$: Observable<number>;
  countryNames$: Observable<CountryStat[]>;

  private globalApiResponse$: Observable<GlobalStat>;

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {
    this.globalApiResponse$ = this.coronaService
      .getGlobalStat()
      .pipe(shareReplay(1));

    this.globalStats$ = this.globalApiResponse$.pipe(
      map((response: GlobalStat) => this.buildGlobalStats(response))
    );

    this.countryNames$ = this.coronaService.getCountriesStat();

    this.lastUpdated$ = this.globalApiResponse$.pipe(
      map(response => response.updated)
    );
  }

  setLightMode() {
    document.body.classList.remove('theme-dark');
  }

  setDarkMode() {
    document.body.classList.add('theme-dark');
  }

  onCountryChange(event) {
    console.log(event);
  }

  private buildGlobalStats(response: GlobalStat): Stat[] {
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
