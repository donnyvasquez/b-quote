import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonActionsComponent } from "../button-actions/button-actions.component";
import { PolicePlanCardComponent } from '../police-plan-card/police-plan-card.component';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { BupaIonRadioComponent } from "../bupa-ion-radio/bupa-ion-radio.component";

@Component({
  selector: 'app-international-business-plans',
  templateUrl: './international-business-plans.component.html',
  styleUrls: ['./international-business-plans.component.scss'],
  standalone: true,
  imports: [ButtonActionsComponent, PolicePlanCardComponent, IonicModule, StripHtmlPipe, CommonModule, BupaIonRadioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InternationalBusinessPlansComponent  implements OnInit {
  @ViewChild('moreOptionsAnchor') moreOptionsAnchor: ElementRef | undefined;
  public selectedCount: number = 0;
  public plans = [
    {
      planId: '1',
      planTitle: 'Bupa Flex 1 - Latam, el Caribe y EE.UU',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 120,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 102,
      aditionalCoverageOptions: [
        { icon: 'heart-outline', label: 'Maternidad' },
        { icon: 'airplane-outline', label: 'Piloto' }
      ]
    },
    {
      planId: '2',
      planTitle: 'Plan Básico 2',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 120.00,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 102,
      aditionalCoverageOptions: [
        { icon: 'medkit-outline', label: 'Transplante de órganos' },
        { icon: 'heart-outline', label: 'Maternidad' },
        { icon: 'airplane-outline', label: 'Piloto' }
      ]
    },
    {
      planId: '3',
      planTitle: 'Plan Básico 3',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 360,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 306,
      aditionalCoverageOptions: [
        { icon: 'medkit-outline', label: 'Transplante de órganos' },
        { icon: 'heart-outline', label: 'Maternidad' }
      ]
    }
  ];

  public morePlans1 = [
    {
      planId: '4',
      planTitle: 'Bupa Advantage Care 1',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 120,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 102,
      aditionalCoverageOptions: [
        { icon: 'heart-outline', label: 'Maternidad' },
        { icon: 'airplane-outline', label: 'Piloto' }
      ]
    },
    {
      planId: '5',
      planTitle: 'Bupa Advantage Care 2',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 120.00,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 102,
      aditionalCoverageOptions: [
        { icon: 'medkit-outline', label: 'Transplante de órganos' },
        { icon: 'heart-outline', label: 'Maternidad' },
        { icon: 'airplane-outline', label: 'Piloto' }
      ]
    },
    {
      planId: '6',
      planTitle: 'Bupa Advantage Care 3',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 360,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 306,
      aditionalCoverageOptions: [
        { icon: 'medkit-outline', label: 'Transplante de órganos' },
        { icon: 'heart-outline', label: 'Maternidad' }
      ]
    }
  ];

  public morePlans2 = [
    {
      planId: '7',
      planTitle: '2 Bupa Advantage Care 1',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 120,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 102,
      aditionalCoverageOptions: [
        { icon: 'heart-outline', label: 'Maternidad' },
        { icon: 'airplane-outline', label: 'Piloto' }
      ]
    },
    {
      planId: '8',
      planTitle: '2 Bupa Advantage Care 2',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 120.00,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 102,
      aditionalCoverageOptions: [
        { icon: 'medkit-outline', label: 'Transplante de órganos' },
        { icon: 'heart-outline', label: 'Maternidad' },
        { icon: 'airplane-outline', label: 'Piloto' }
      ]
    },
    {
      planId: '9',
      planTitle: '2 Bupa Advantage Care 3',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 360,
      planMountLimit: 'Limite máximo: 3.5 millones',
      planCoverage: 'Cobertura: Latinoamérica, el Caribe y EE.UU.',
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 500', 'Fuera del País: USD 1,000'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 306,
      aditionalCoverageOptions: [
        { icon: 'medkit-outline', label: 'Transplante de órganos' },
        { icon: 'heart-outline', label: 'Maternidad' }
      ]
    }
  ];
  moreSelectedOption: string | undefined = undefined;

  constructor() {}

  ngOnInit() {
    this.selectedCount = 0;
  }

  onPlanSelected(isChecked: boolean) {
    if (isChecked) {
      this.selectedCount++;
    } else {
      this.selectedCount--;
    }
    console.log('Planes seleccionados '+this.selectedCount);
  }

  onMoreOptionSelected(option: string) {
    this.moreSelectedOption = option;

    // Retardar el scroll para asegurarse de que el contenido esté visible
    setTimeout(() => {
      this.scrollToContent();
    }, 250);  // Puedes ajustar el tiempo si es necesario
  }

  get morePlansShowed() {
    if (!this.moreSelectedOption) {
      return [];  // Retorna un arreglo vacío si no se ha seleccionado ninguna opción
    }
    return this.moreSelectedOption === '1' ? this.morePlans1 : this.morePlans2;
  }

  scrollToContent() {
    if (this.moreOptionsAnchor) {

      this.moreOptionsAnchor.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
