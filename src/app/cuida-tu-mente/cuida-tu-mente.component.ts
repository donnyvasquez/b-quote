import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import Swiper from 'swiper';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-cuida-tu-mente',
  templateUrl: './cuida-tu-mente.component.html',
  styleUrls: ['./cuida-tu-mente.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, CommonModule]
})
export class CuidaTuMenteComponent  implements OnInit {
  swiperConfig: any = {
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',  // Ajuste automático del ancho de los slides
    loop: false,
    spaceBetween: 0,  // Espacio entre los slides
    navigation: true
  };

  data = [
    {
      categoria: 'Categoría 1',
      tarjetas: ['Tarjeta 1', 'Tarjeta 2']
    },
    {
      categoria: 'Categoría 2',
      tarjetas: ['Tarjeta 1', 'Tarjeta 2', 'Tarjeta 3', 'Tarjeta 4', 'Tarjeta 5', 'Tarjeta 6']
    },
    {
      categoria: 'Categoría 3',
      tarjetas: ['Tarjeta 6']
    }
  ];


  constructor(readonly router: Router) { }

  ngOnInit() {
    console.log('iniciando');

  }

  navigateToAudioList() {
    this.router.navigate(['/audio-list']);
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.navigateToAudioList();
    }
  }

}
