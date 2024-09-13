import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StripHtmlPipe } from '../../pipes/strip-html.pipe';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-aditional-coverage-options',
  templateUrl: './aditional-coverage-options.component.html',
  styleUrls: ['./aditional-coverage-options.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, StripHtmlPipe, IonicModule]
})
export class AditionalCoverageOptionsComponent {
  @Input() aditionalCoverageOptions: any[] = [];
  @Output() toggleCheckboxEvent = new EventEmitter<{ event: Event, checkbox: any }>();

  constructor() {}

  /// Método para emitir el evento al padre con el checkbox y el evento
  onOptionClicked(event: Event, checkbox: any) {
    this.toggleCheckboxEvent.emit({ event, checkbox });
  }
}
