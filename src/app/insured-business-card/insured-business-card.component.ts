import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-insured-business-card',
  templateUrl: './insured-business-card.component.html',
  styleUrls: ['./insured-business-card.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class InsuredBusinessCardComponent implements OnInit  {
  @Input() persona: any;
  @Input() idNumber!: number;
  @Input() insuredLength!: number;
  @Input() showRelationship: boolean = false;
  @Input() showName: boolean = false;
  @Input() showLastName: boolean = false;
  @Input() relationshipOptions: any[] = [];
  @Input() removeCardButton: boolean = true;
  @Input() actionButtonText!: string;
  @Input() name: string = '';
  @Input() lastName: string = '';

  @Output() cardDataChange = new EventEmitter<any>();
  @Output() removeCard = new EventEmitter<number>();
  @Output() actionButtonTriggered = new EventEmitter<void>();

  selectedBirthDate: string = '';
  selectedRelationship: string = '';
  selectedName: string = '';
  selectedLastName: string = '';

  constructor() {}

  ngOnInit() {
    this.selectedName = this.persona.name || '';
    this.selectedLastName = this.persona.lastName || '';
    this.selectedBirthDate = this.persona.birthDate || '';
    this.selectedRelationship = this.persona.relationship || '';
  }

  onBirthDateChange(event: any) {
    const selectedDate = event.detail.value;
    const date = new Date(selectedDate);

    this.selectedBirthDate = date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    this.emitCardData();
  }

  viewRelationship(){
    if (this.idNumber > 0) {
      this.showRelationship = true;
    }
  }

  onRelationshipChange(event: any) {
    this.selectedRelationship = event.detail.value;
    this.emitCardData();
  }

  onNameChange(event: any) {
    this.selectedName = event.detail.value;
    this.emitCardData();
  }

  onLastNameChange(event: any) {
    this.selectedLastName = event.detail.value;
    this.emitCardData();
  }

  emitCardData() {
    this.cardDataChange.emit({
      id: this.idNumber,
      birthDate: this.selectedBirthDate,
      relationship: this.selectedRelationship,
      name: this.selectedName,
      lastName: this.selectedLastName
    });
  }

  onRemoveCard(idNumber: number) {
    this.removeCard.emit(idNumber);
  }

  // Método que se llamará al hacer clic en el botón de acción
  triggerAction() {
    this.actionButtonTriggered.emit();
  }
}
