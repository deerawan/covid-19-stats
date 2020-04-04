import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CoronaService } from './corona.service';
import { Observable, Subject, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Stat } from './corona.model';
import { GlobalStat, CountryStat } from './api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  lastUpdated$: Observable<number>;
  countryNames$: Observable<CountryStat[]>;
  stats$: Observable<Stat[]>;

  private globalApiResponse$: Observable<GlobalStat>;

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {
    this.globalApiResponse$ = this.coronaService
      .getGlobalStat()
      .pipe(shareReplay(1));

    this.stats$ = this.globalApiResponse$.pipe(
      map((response: GlobalStat) => this.buildStat(response))
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

  onCountryChange(event: CountryStat) {
    this.stats$ = of(this.buildStat(event));
  }

  private buildStat(response: {
    active: number;
    recovered: number;
    deaths: number;
  }): Stat[] {
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
