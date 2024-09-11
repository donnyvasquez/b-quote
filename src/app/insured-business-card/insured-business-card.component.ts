import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit, ElementRef } from '@angular/core';
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

  constructor(private el: ElementRef) {}

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

  focus() {
    // Desplaza suavemente el último swiper-slide al área visible
    const lastSwiperSlide = this.el.nativeElement.querySelector('swiper-slide:nth-last-of-type(1) ion-card');

    if (lastSwiperSlide) {
      lastSwiperSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Luego, enfoca el elemento después de desplazarse
      //setTimeout(() => {lastSwiperSlide.focus();}, 250);
    }
  }

}
