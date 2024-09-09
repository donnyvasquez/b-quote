import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StripHtmlPipe } from "../pipes/strip-html.pipe";
import { ModalSendBusinessPlanComponent } from '../modal-send-business-plan/modal-send-business-plan.component';
import { InsuranceScenariosService } from '../services/insurance-scenarios.service';
import { BupaQuoteProductCardLimitsComponent } from '../bupa-quote-product-card-limits/bupa-quote-product-card-limits.component';

@Component({
  selector: 'app-bupa-quote-product-card',
  templateUrl: './bupa-quote-product-card.component.html',
  styleUrls: ['./bupa-quote-product-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, StripHtmlPipe, ModalSendBusinessPlanComponent, BupaQuoteProductCardLimitsComponent]
})
export class BupaQuoteProductCardComponent implements OnInit {
  modalTemplate!: TemplateRef<any>;
  @Input() planId!: string;
  @Input() planTitle: string = '';
  @Input() planSubtitle: string = '';
  @Input() planDescription: string = '';
  @Input() planPrice: number = 0;
  @Input() planMountLimit: string = '';
  @Input() planCoverage: string = '';
  @Input() deductibleMount: string[] = [];
  @Input() aditionalCoverageOptions: { icon: string; label: string }[] = [];
  @Input() planPaymentPlan: string = '';
  @Input() promoPercents: string | undefined= '';
  @Input() promoPlanPaymentPlan: string | undefined = '';
  @Input() validDate: string | undefined = '';
  @Input() promoPlanPrice: number | undefined = 0;
  @Output() planSelected = new EventEmitter<boolean>();

  selectedCount: number = 0;
  showOptions: boolean = false;
  canDismiss = true;
  presentingElement: Element | null = null;
  elementId: any;
  toastMessage: string = '';
  isCardContentVisible = false;

  ngOnInit() {
    this.elementId = 'police-plan-card-'+this.planId;
    this.presentingElement = document.querySelector(this.elementId);
  }

  constructor(
    readonly insuranceScenariosService: InsuranceScenariosService,
    private modalController: ModalController,
    readonly modalSendController: ModalController
  ) {}

  async openModalSendPlan() {
    const modalSend = await this.modalSendController.create({
      component: ModalSendBusinessPlanComponent,
    });
    return await modalSend.present();
  }
  toggleCardContent() {
    this.isCardContentVisible = !this.isCardContentVisible;
  }
  /*
    note
    In past versions of Ionic, ion-item was required for ion-checkbox to function properly.
    Starting in Ionic 7.0, ion-checkbox should only be used in an ion-item when the item
    is placed in an ion-list.
    Additionally, ion-item is no longer required for ion-checkbox to function properly.
  */

  // Si el clic es en el ion-checkbox, no hacemos nada y dejamos que maneje su propio cambio
  toggleCheckbox(event: Event, checkbox: any) {
    if (event.target && ((event.target as HTMLElement).tagName === 'ION-CHECKBOX') || (event.target as HTMLElement).tagName === 'ION-ITEM')  {
      return;
    }
    // Si no fue en el ion-checkbox, cambiamos el estado del checkbox
    checkbox.checked = !checkbox.checked;
  }
  onCheckboxChange(event: any) {
    this.planSelected.emit(event.detail.checked);
  }

  onPlanSelected(isChecked: boolean) {
    this.selectedCount += isChecked ? 1 : -1;
  }

  selectPlan() {
    this.planSelected.emit();
  }
}
