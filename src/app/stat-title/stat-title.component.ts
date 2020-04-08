import { Component, OnInit, Input } from '@angular/core';
import { StatTitle } from '../corona.model';

@Component({
  selector: 'app-stat-title',
  templateUrl: './stat-title.component.html',
  styleUrls: ['./stat-title.component.scss']
})
export class StatTitleComponent implements OnInit {
  @Input() statTitle: StatTitle;

  constructor() {}

  ngOnInit(): void {}
}
