import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bupa-ion-radio',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
  templateUrl:'./bupa-ion-radio.component.html',
  styleUrls: ['./bupa-ion-radio.component.scss']
})

export class BupaIonRadioComponent {
  @Output() optionSelected = new EventEmitter<string>();

  @Input() options: { label: string; description: string; value: string }[]  | undefined;
  @Input() groupLabel: string = '';
  @Input() singleLabel: string = 'Opción única';
  @Input() singleDescription: string = 'Descripción única';
  selectedValue: any;

  selectRadio(event: Event, option: any) {
    const target = event.target as HTMLElement;

      // Verifica si el clic fue en un ion-radio o en un ion-item
      if (target.tagName === 'ION-RADIO' || target.tagName === 'ION-ITEM') {
        return;
      }

    // Cambia el valor seleccionado si el clic no fue en un ion-radio
    this.selectedValue = option.value;
    this.optionSelected.emit(this.selectedValue);
  }
}
