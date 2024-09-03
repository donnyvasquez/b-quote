import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import SwiperCore from 'swiper';

SwiperCore.use([]);

@Component({
  selector: 'app-international-business-quote',
  templateUrl: './international-business-quote.component.html',
  styleUrls: ['./international-business-quote.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, StripHtmlPipe, IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InternationalBusinessQuoteComponent implements OnInit {
  @ViewChild('swiper') swiper: any;

  slideConfig = {
    effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    slidesToScroll: 1,
    loop: false,
    spaceBetween: 30
  };

  public showAddSlideButton = false;
  public insured = ['Titular'];

  whoToInsureOptions = [
    { value: 'individual', label: 'Una persona' },
    { value: 'family', label: 'Una familia' },
  ];

  relationshipOptions = [
    { value: 'spouse', label: 'Spouse' }, // Esposo/a
    { value: 'child', label: 'Child' },   // Hijo/a
    { value: 'parent', label: 'Parent' }, // Padre/Madre
    { value: 'sibling', label: 'Sibling' }, // Hermano/a
    { value: 'other', label: 'Other' }    // Otro
  ];

  countryOptions = [
    { value: 'cl', label: 'Chile' },
    { value: 'ec', label: 'Ecuador' },
    { value: 'gt', label: 'Guatemala' },
    { value: 'pa', label: 'Panamá' },
    { value: 'py', label: 'Paraguay' },
    { value: 'pe', label: 'Perú' },
    { value: 'mx', label: 'México' },
    { value: 'do', label: 'República Dominicana' },
    { value: 'tt', label: 'Trinidad y Tobago' }
  ];

  productTypeOptions = [
    { value: 'international_premium', label: 'International Premium' },
    { value: 'international', label: 'International' }
  ];

  productOptions: Record<string, { value: string; label: string; }[]> = {
    international_premium: [
      { value: 'bupa-global-major', label: 'Global Major Medical Health Plan' },
      { value: 'bupa-global-select', label: 'Global Select Health Plan' },
      { value: 'bupa-global-premiere', label:'Global Premier Health Plan'},
      { value: 'bupa-global-elite', label: 'Global Elite Health Plan'},
      { value: 'bupa-global-ultimate', label: 'Global Ultimate Health Plan'}
    ],
    international: [
      { value: 'bupa-essentiaql-500', label: 'Bupa Essential 500' },
      { value: 'bupa-essentiaql-1000', label: 'Bupa Essential 1000' },
    ],
  };

  selectedBirthDate: string[] = [];
  selectedRelationship: string = 'child';
  availableProducts: { value: string; label: string; }[] = [];
  selectedProductType: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Entrando en InternationalBusinessQuoteComponent');
  }

  onProductTypeChange(event: any) {
    const selectedProductType = event.detail.value;
    if (selectedProductType) {
      this.selectedProductType = selectedProductType;
      this.updateProductOptions(selectedProductType);
    } else {
      this.selectedProductType = null;
      this.availableProducts = [];
    }
  }

  onWhoToInsureChange(event: any) {
    const selectedValue = event.detail.value;

    // Restablece a un solo asegurado (Titular)
    this.insured = ['Titular'];

    // Si el valor seleccionado es "family", agrega una persona adicional
    if (selectedValue === 'family') {
      this.addSlide();
    }

    // Muestra el botón si se selecciona "family"
    this.showAddSlideButton = selectedValue === 'family';
  }

  updateProductOptions(selectedProductType: string) {
    this.availableProducts = this.productOptions[selectedProductType] || [];
  }

  shouldShowProductSelect(): boolean {
    return this.selectedProductType !== null && this.selectedProductType !== '';
  }

  addSlide() {
    const newIndex = this.insured.length;
    this.insured.push(`Asegurado`);

    setTimeout(() => {
      console.log('Entré al setTimeout');

      const newSlideElement = document.querySelector(`swiper-slide:last-child`);
      console.log('Esta es el nuevo slide: '+newSlideElement?.outerHTML);

      if (newSlideElement) {
        (newSlideElement as HTMLElement).focus();
      }
    }, 200);
  }

  removeSlide(index: number) {
    this.insured.splice(index, 1);
  }

  onBirthDateChange(event: any, index: number) {
    // Obtén el valor formateado de la fecha seleccionada
    const selectedDate = event.detail.value;
    const date = new Date(selectedDate);

    // Formatea la fecha como "jueves, 5 de julio de 2024"
    const formattedDate = date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    // Asigna la fecha seleccionada al array en la posición correspondiente
    this.selectedBirthDate[index] = formattedDate;
  }

  navigateToPlans() {
    this.router.navigate(['/international-business-plans']);
  }
}
