import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-insured-business-card',
  templateUrl: './insured-business-card.component.html',
  styleUrls: ['./insured-business-card.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule]
})
export class InsuredBusinessCardComponent implements OnInit  {
  @Input() persona: any;
  @Input() idNumber!: number;
  @Input() insuredLength!: number;
  @Input() selectedBirthDate: any;
  @Input() relationshipOptions: any[] = [];
  @Input() removeCardButton: boolean = true;  // Controla si el botón de eliminar debe mostrarse o no

  @Output() birthDateChange = new EventEmitter<any>();
  @Output() removeCard = new EventEmitter<number>();
  ngOnInit() {
    console.log(JSON.stringify(this.idNumber));
    console.warn(JSON.stringify(this.persona));
  }
  onBirthDateChange(event: any) {
    this.birthDateChange.emit({ event, index: this.idNumber });
  }

  onRemoveCard(index: number) {
    this.removeCard.emit(index);
  }

}
