import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-mode-toggle',
  templateUrl: './mode-toggle.component.html',
  styleUrls: ['./mode-toggle.component.scss']
})
export class ModeToggleComponent implements OnInit, AfterViewInit {
  @Input() mode: 'dark' | 'light';
  @Output() darkMode = new EventEmitter();
  @Output() lightMode = new EventEmitter();

  @ViewChild('mode') modeElementRef: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.mode === 'dark') {
      this.modeElementRef.nativeElement.checked = true;
    }
  }

  setMode(event) {
    const { checked } = event.target;
    return checked ? this.darkMode.emit(null) : this.lightMode.emit(null);
  }
}
