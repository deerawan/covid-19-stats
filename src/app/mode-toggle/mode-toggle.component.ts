import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mode-toggle',
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.scss']
})
export class ModeToggleComponent implements OnInit {
  @Output() darkMode = new EventEmitter();
  @Output() lightMode = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setMode(event) {
    const { checked } = event.target;
    return checked ? this.darkMode.emit(null) : this.lightMode.emit(null);
  }
}
