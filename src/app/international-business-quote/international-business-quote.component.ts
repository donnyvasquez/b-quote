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
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true
    },
    slidesToScroll: 1,
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30
  };

  public showAddSlideButton = false;
  public insured = ['Titular'];

  whoToInsureOptions = [
    { value: 'individual', label: 'Individual' },
    { value: 'family', label: 'Familia' },
    { value: 'business', label: 'Negocio' }
  ];

  relationshipOptions = [
    { value: 'spouse', label: 'Spouse' }, // Esposo/a
    { value: 'child', label: 'Child' },   // Hijo/a
    { value: 'parent', label: 'Parent' }, // Padre/Madre
    { value: 'sibling', label: 'Sibling' }, // Hermano/a
    { value: 'other', label: 'Other' }    // Otro
  ];

  countryOptions = [
    { value: 'us', label: 'Estados Unidos' },
    { value: 'mx', label: 'México' },
    { value: 'ca', label: 'Canadá' }
  ];

  productTypeOptions = [
    { value: 'health', label: 'Seguro de Salud' },
    { value: 'life', label: 'Seguro de Vida' },
    { value: 'auto', label: 'Seguro de Auto' }
  ];

  productOptions: Record<string, { value: string; label: string; }[]> = {
    health: [
      { value: 'health-basic', label: 'Basic Health' },
      { value: 'health-premium', label: 'Premium Health' },
    ],
    life: [
      { value: 'life-basic', label: 'Basic Life' },
      { value: 'life-premium', label: 'Premium Life' },
    ],
    auto: [
      { value: 'auto-basic', label: 'Basic Auto' },
      { value: 'auto-premium', label: 'Premium Auto' },
    ],
  };

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

      const newSlideElement = document.querySelector(`swiper-slide:nth-child(${newIndex + 1}) input`);
      console.log('Esta es el nuevo slide: '+newSlideElement);

      if (newSlideElement) {
        (newSlideElement as HTMLElement).focus();
      }
    }, 200);
  }


  removeSlide(index: number) {
    this.insured.splice(index, 1);
  }

  navigateToPlans() {
    this.router.navigate(['/international-business-plans']);
  }
}
