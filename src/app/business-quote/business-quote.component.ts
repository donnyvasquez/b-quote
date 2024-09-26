import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { InsuranceScenariosService } from '../services/insurance-scenarios.service';
import { BupaInsuredCarouselComponent } from '../bupa-insured-carousel/bupa-insured-carousel.component';
import { InsuredBusinessCardComponent } from '../insured-business-card/insured-business-card.component';

interface InsuredData {
  id: number;
  persona: string;
  birthDate?: string;
  relationship?: string;
}

@Component({
  selector: 'app-business-quote',
  templateUrl: './business-quote.component.html',
  styleUrls: ['./business-quote.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, StripHtmlPipe, IonicModule, BupaInsuredCarouselComponent, InsuredBusinessCardComponent],
})
export class BusinessQuoteComponent implements OnInit {
  @ViewChild(BupaInsuredCarouselComponent) carouselComponent!: BupaInsuredCarouselComponent;
  customSwiperConfig = {}

  public showAddSlideButton = false;
  public insuredData: InsuredData[] = [];
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
    this.insuredData = [{ id: 0, persona: 'Titular' }];
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

    this.insuredData = [{ id: 0, persona: 'Titular' }];

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
    const newId = this.insuredData.length;
    this.insuredData.push({ id: newId, persona: `Asegurado ${newId + 1}` });

    setTimeout(() => {
      this.carouselComponent.focusLastSlide();
    }, 200);
  }

  removeSlide(index: number) {
    this.insuredData = this.insuredData.filter(item => item.id !== index);
  }

  onCardDataChange(data: Partial<InsuredData>) {
    const index = this.insuredData.findIndex(item => item.id === data.id);
    if (index !== -1) {
      this.insuredData[index] = { ...this.insuredData[index], ...data };
    }
  }

  navigateToPlans() {
    this.router.navigate(['/business-plans']);
  }
}
