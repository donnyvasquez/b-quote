import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, SimpleChanges, QueryList, ViewChildren, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { InsuranceScenariosService } from '../services/insurance-scenarios.service';
import { InsuredBusinessCardComponent } from '../insured-business-card/insured-business-card.component';
import Swiper from 'swiper';

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
  imports: [CommonModule, FormsModule, StripHtmlPipe, IonicModule, InsuredBusinessCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BusinessQuoteComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('swiper', { static: false }) swiperElement!: ElementRef;
  @ViewChildren(InsuredBusinessCardComponent) slideComponents!: QueryList<InsuredBusinessCardComponent>;
  private swiper?: Swiper;

  public showAddSlideButton = false;
  public insuredData: InsuredData[] = [];
  whoToInsureOptions = [
    { value: 'individual', label: 'Una persona' },
    { value: 'family', label: 'Una familia' },
  ];

  relationshipOptions = [
    { value: 'spouse', label: 'Spouse' },
    { value: 'child', label: 'Child' },
    { value: 'parent', label: 'Parent' },
    { value: 'sibling', label: 'Sibling' },
    { value: 'other', label: 'Other' }
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

  swiperConfig: any = {
    grabCursor: true,
    centeredSlides: "auto",
    slidesPerView: "auto",
    slidesToScroll: 1,
    loop: false,
    spaceBetween: 15
  };

  defaultSwiperConfig = {
    grabCursor: true,
    centeredSlides: "auto",
    slidesPerView: "auto",
    slidesToScroll: 1,
    loop: false,
    spaceBetween: 15
  };
  centeredSlides: boolean |  'auto' = 'auto';

  constructor(
    private el: ElementRef,
    private router: Router,
    readonly insuranceScenariosService: InsuranceScenariosService
  ) {}

  ngOnInit(): void {
    this.policeCase = this.insuranceScenariosService.getPoliceCase();
    console.log(`International Business Quote component loaded with policeCase: ${this.policeCase}`);
    this.insuredData = [{ id: 0, persona: 'Titular' }];
  }

  ngAfterViewInit() {
    this.initSwiper();
  }
  focus() {
    const lastSwiperSlide = this.el.nativeElement.querySelector('swiper-slide:nth-last-of-type(1) ion-card');

    if (lastSwiperSlide) {
      lastSwiperSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['insured'] && !changes['insured'].firstChange) {
      setTimeout(() => {
        if (this.swiper) {
          this.swiper.update();
        }
      });
    }
  }

  private initSwiper() {
    const config = { ...this.defaultSwiperConfig, ...this.swiperConfig };
    this.swiper = new Swiper(this.swiperElement.nativeElement, config);
  }

  get slideConfig() {
    return { ...this.defaultSwiperConfig, ...this.swiperConfig };
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
      if (this.swiper) {
        this.swiper.slideTo(this.insuredData.length + 1);
        this.focus();
      }
    }, 200);
  }

  removeSlide(index: number) {
    this.insuredData.splice(index, 1);
    setTimeout(() => {
      if (this.swiper) {
        this.swiper.update();
        this.focus();
      }
    });
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
