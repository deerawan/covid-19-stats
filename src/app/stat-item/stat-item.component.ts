import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { StatType } from '../corona.model';

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatItemComponent implements OnInit {
  @Input() title: string;
  @Input() total: number;
  @Input() color: StatType;

  constructor() { }

  ngOnInit(): void {
  }

}
