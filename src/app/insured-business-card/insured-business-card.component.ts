import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-insured-business-card',
  templateUrl: './insured-business-card.component.html',
  styleUrls: ['./insured-business-card.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule]
})
export class InsuredBusinessCardComponent {
  @Input() persona: any;
  @Input() idNumber!: number;
  @Input() insuredLength!: number;
  @Input() selectedBirthDate: any;
  @Input() relationshipOptions: any[] = [];
  @Input() removeCard: boolean = true;  // Controla si el botón de eliminar debe mostrarse o no

  @Output() birthDateChange = new EventEmitter<any>();
  @Output() removeSlide = new EventEmitter<number>();

  onBirthDateChange(event: any) {
    this.birthDateChange.emit({ event, index: this.idNumber });
  }

  onRemoveSlide(index: number) {
    this.removeSlide.emit(index);
  }

}
