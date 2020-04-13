import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { StatItem, StatTitle } from '../corona.model';
import { Stat, CountryStat } from '../api.model';

@Component({
  selector: 'app-stat-list',
  templateUrl: './stat-list.component.html',
  styleUrls: ['./stat-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatListComponent implements OnInit {
  @Input() stat: Stat | CountryStat;

  constructor() {}

  ngOnInit(): void {}

  buildStatTitle(stat?: Stat | CountryStat): StatTitle {
    return this._isCountryStat(stat)
      ? { text: stat.country, imgUrl: stat.countryInfo.flag }
      : { text: '🌏 Global' };
  }

  buildStatItems(stat: Stat): StatItem[] {
    return [
      {
        title: 'Total cases',
        total: stat.cases,
        color: 'regular'
      },
      {
        title: 'New cases',
        total: stat.todayCases,
        color: 'regular'
      },
      {
        title: 'Total deaths',
        total: stat.deaths,
        color: 'danger'
      },
      {
        title: 'New deaths',
        total: stat.todayDeaths,
        color: 'danger'
      },
      {
        title: 'Total recovered',
        total: stat.recovered,
        color: 'success'
      },
      {
        title: 'Critical',
        total: stat.critical,
        color: 'warning'
      },
      {
        title: 'Cases / Million ',
        total: stat.casesPerOneMillion,
        color: 'neutral'
      },
      {
        title: 'Deaths / Million',
        total: stat.deathsPerOneMillion,
        color: 'neutral'
      }
    ];
  }

  private _isCountryStat(stat: Stat | CountryStat): stat is CountryStat {
    return stat && (stat as CountryStat).country !== undefined;
  }
}
