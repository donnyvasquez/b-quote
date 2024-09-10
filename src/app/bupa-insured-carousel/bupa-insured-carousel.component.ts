import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, CUSTOM_ELEMENTS_SCHEMA, SimpleChanges, AfterViewInit, OnChanges, ElementRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { InsuredBusinessCardComponent } from '../insured-business-card/insured-business-card.component';
import SwiperCore, { Swiper } from 'swiper';

SwiperCore.use([]);

@Component({
  selector: 'app-bupa-insured-carousel',
  templateUrl: './bupa-insured-carousel.component.html',
  styleUrls: ['./bupa-insured-carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, InsuredBusinessCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BupaInsuredCarouselComponent implements AfterViewInit, OnChanges {
  @ViewChild('swiper', { static: false }) swiperElement!: ElementRef;
  private swiper?: Swiper;

  @Input() insured: string[] = [];
  @Input() selectedBirthDate: any[] = [];
  @Input() relationshipOptions: any[] = [];
  @Input() showRemoveButton: boolean = true;
  @Input() swiperConfig: any = {};

  @Output() addSlide = new EventEmitter<void>();
  @Output() removeSlide = new EventEmitter<number>();
  @Output() birthDateChange = new EventEmitter<any>();

  defaultSwiperConfig = {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    slidesToScroll: 1,
    loop: false,
    spaceBetween: 15
  };

  ngAfterViewInit() {
    console.warn(this.slideConfig);

    this.initSwiper();
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

  onAddSlide() {
    this.addSlide.emit();
    setTimeout(() => {
      if (this.swiper) {
        this.swiper.update();
      }
    });
  }

  onRemoveSlide(index: number) {
    this.removeSlide.emit(index);
    setTimeout(() => {
      if (this.swiper) {
        this.swiper.update();
      }
    });
  }

  onBirthDateChange(event: any) {
    this.birthDateChange.emit(event);
  }
}
