import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-mode-toggle',
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModeToggleComponent implements OnChanges {
  @Input() mode: 'dark' | 'light';
  @Output() darkMode = new EventEmitter();
  @Output() lightMode = new EventEmitter();

  @ViewChild('mode') modeElementRef: ElementRef;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const { mode } = changes;
    if (mode.previousValue === null && mode.currentValue === 'dark') {
      this.modeElementRef.nativeElement.checked = true;
    }
  }

  setMode(event) {
    const { checked } = event.target;
    return checked ? this.darkMode.emit(null) : this.lightMode.emit(null);
  }
}
