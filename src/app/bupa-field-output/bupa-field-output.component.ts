// label: string - Propiedad para el nombre del campo o label
// value: string | number - Propiedad para el valor del campo
// fieldStyle: string[] - Estilos dinamicos
// infoText: string - Texto de informacion para mostrar en el boton

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonPopover } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-bupa-field-output',
  templateUrl: './bupa-field-output.component.html',
  styleUrls: ['./bupa-field-output.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class BupaFieldOutputComponent {
  @Input() label!: string;
  @Input() value: string[] = [];
  @Input() fieldStyle: string[] = [];
  @Input() infoText!: string;
  @ViewChild('popover', { static: true }) popover!: IonPopover;

  constructor(private popoverController: PopoverController) { }
  // Método que maneja los eventos de teclado
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Evita el comportamiento por defecto de la barra espaciadora
      this.showPopover(event);
    }
  }

  get isEmptyValue() {
    return this.value.every(val => !val.trim());
  }
  // M�todo que programa el popover manualmente
  async showPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: BupaFieldOutputComponent,
      event: event,
      trigger: 'hover-trigger', // Usamos el mismo trigger
      mode: 'ios',
      cssClass: 'custom-popover-class'
    });
    await popover.present();
  }

  normalizeLabel(label: string): string {
    return label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }
}
