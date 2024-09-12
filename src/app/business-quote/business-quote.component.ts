import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { InsuranceScenariosService } from '../services/insurance-scenarios.service';
import { BupaInsuredCarouselComponent } from '../bupa-insured-carousel/bupa-insured-carousel.component';

@Component({
  selector: 'app-business-quote',
  templateUrl: './business-quote.component.html',
  styleUrls: ['./business-quote.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, StripHtmlPipe, IonicModule, BupaInsuredCarouselComponent],
})
export class BusinessQuoteComponent implements OnInit {
  @ViewChild(BupaInsuredCarouselComponent) carouselComponent!: BupaInsuredCarouselComponent;

  customSwiperConfig = {}

  public showAddSlideButton = false;
  public insured!:string[];

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
  selectedBirthDate: any[] = [];
  showRemoveButton: boolean = true;
  selectedRelationship: string = 'child';
  availableProducts: { value: string; label: string; }[] = [];
  selectedProductType: string | null = null;
  policeCase!: string | undefined;

  constructor(private router: Router,
   readonly insuranceScenariosService: InsuranceScenariosService) {}

  ngOnInit(): void {
    this.policeCase = this.insuranceScenariosService.getPoliceCase();
    console.log(`International Business Quote component loaded with policeCase: ${this.policeCase}`);
    this.insured = ['Titular'];
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

    this.insured = ['Titular'];

    if (selectedValue === 'family') {
      this.addSlide();
    }

    this.showAddSlideButton = selectedValue === 'family';
  }

  updateProductOptions(selectedProductType: string) {
    this.availableProducts = this.productOptions[selectedProductType] || [];
  }

  shouldShowProductSelect(): boolean {
    return this.selectedProductType !== null && this.selectedProductType !== '';
  }

  addSlide() {
    this.insured.push(`Asegurado`);

    setTimeout(() => {
      //console.log('Entré al setTimeout');
      this.carouselComponent.focusLastSlide();

    }, 200);
  }

  removeSlide(index: number) {
    this.insured.splice(index, 1);
  }

  onBirthDateChange(event: any) {
    const { event: dateEvent, index } = event;
    const selectedDate = dateEvent.detail.value;
    const date = new Date(selectedDate);

    const formattedDate = date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    this.selectedBirthDate[index] = formattedDate;
  }

  navigateToPlans() {
    this.router.navigate(['/business-plans']);
  }
}
