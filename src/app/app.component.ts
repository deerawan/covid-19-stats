import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';
import { CoronaService } from './corona.service';
import { Observable, Subject, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Stat, Theme, StatTitle } from './corona.model';
import { GlobalStat, CountryStat } from './api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  lastUpdated$: Observable<number>;
  countryNames$: Observable<CountryStat[]>;
  stats$: Observable<Stat[]>;
  mode: Theme;
  statTitle: StatTitle;

  private globalApiResponse$: Observable<GlobalStat>;

  private storageTheme = new Subject<Theme>();
  storageTheme$ = this.storageTheme.asObservable();

  constructor(private coronaService: CoronaService) {}

  ngOnInit(): void {
    if (chrome && chrome.storage) {
      chrome.storage.sync.get('theme', ({ theme }) => {
        this.storageTheme.next(theme);
        if (theme === 'dark') {
          this.setDarkMode();
        }
      });
    }

    this.globalApiResponse$ = this.coronaService
      .getGlobalStat()
      .pipe(shareReplay(1));

    this.statTitle = this.getGlobalStatTitle();
    this.stats$ = this.getGlobalStat();
    this.countryNames$ = this.coronaService.getCountriesStat();

    this.lastUpdated$ = this.globalApiResponse$.pipe(
      map(response => response.updated)
    );
  }

  ngAfterViewInit() {}

  setLightMode() {
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({ theme: 'light' });
    }
    document.body.classList.remove('theme-dark');
  }

  setDarkMode() {
    if (chrome && chrome.storage) {
      chrome.storage.sync.set({ theme: 'dark' });
    }
    document.body.classList.add('theme-dark');
  }

  onCountryChange(event: CountryStat) {
    this.stats$ = event ? of(this.buildStat(event)) : this.getGlobalStat();
    this.statTitle = event
      ? { text: event.country, imgUrl: event.countryInfo.flag }
      : this.getGlobalStatTitle();
  }

  private getGlobalStat(): Observable<Stat[]> {
    return this.globalApiResponse$.pipe(
      map((response: GlobalStat) => this.buildStat(response))
    );
  }

  private getGlobalStatTitle(): StatTitle {
    return { text: '🌏 Global' };
  }

  private buildStat(response: {
    active: number;
    recovered: number;
    deaths: number;
    cases: number;
    todayCases: number;
    todayDeaths: number;
  }): Stat[] {
    return [
      {
        title: 'Total cases',
        total: response.cases,
        color: 'regular'
      },
      {
        title: 'New cases',
        total: response.todayCases,
        color: 'regular'
      },
      {
        title: 'Total deaths',
        total: response.deaths,
        color: 'danger'
      },
      {
        title: 'New deaths',
        total: response.todayDeaths,
        color: 'danger'
      },
      {
        title: 'Total recovered',
        total: response.recovered,
        color: 'success'
      }
    ];
  }
}
