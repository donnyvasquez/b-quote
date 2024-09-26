import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonModal } from '@ionic/angular';
import { IonToast } from '@ionic/angular';
import { ButtonActionsComponent } from "../button-actions/button-actions.component";
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { RouterModule } from '@angular/router';
import { BupaFieldOutputComponent } from "../bupa-field-output/bupa-field-output.component";
import { InsuredPersonDetails, RenewalInsuredPersonComponent } from "../renewal-insured-person/renewal-insured-person.component";
import { InsuredBusinessCardComponent } from "../insured-business-card/insured-business-card.component";

@Component({
  selector: 'app-business-renewal-quote',
  templateUrl: './business-renewal-quote.component.html',
  styleUrls: ['./business-renewal-quote.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, StripHtmlPipe, ButtonActionsComponent, BupaFieldOutputComponent, RenewalInsuredPersonComponent, InsuredBusinessCardComponent]
})
export class BusinessRenewalQuoteComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: IonModal;
  @ViewChild('toast', { static: false }) toast!: IonToast;
  relationshipOptions = [
    { value: 'spouse', label: 'Spouse' }, // Esposo/a
    { value: 'child', label: 'Child' },   // Hijo/a
    { value: 'parent', label: 'Parent' }, // Padre/Madre
    { value: 'sibling', label: 'Sibling' }, // Hermano/a
    { value: 'other', label: 'Other' }    // Otro
  ];
  insuredPeople: InsuredPersonDetails[] = [
    {
      title: 'Titular',
      details: {
        inPolice: true, // De la póliza o nuevo en la cotizacion
        enabledInQuote: true, // Activo en la cotización
        typeLabel: 'Titular/Guardián',
        typeValue: 'María Pérez Puertos',
        birthDateLabel: 'Fecha nacimiento',
        birthDateValue: '02-12-1977',
        rateLabel: 'Tarifa',
        rateValue: 'USD 7,235.00',
        extraPremiumLabel: 'Extraprima',
        extraPremiumValue: '10% (USD 7,958.50)',
        isOverDate: undefined,
        insuredType: 'titular'
      }
    },
    {
      title: 'Cónyuge',
      details: {
        inPolice: true, // De la póliza
        enabledInQuote: true, // Activo en la cotización
        typeLabel: 'Dependiente',
        typeValue: 'José Adrián Pérez Puertos',
        birthDateLabel: 'Fecha nacimiento',
        birthDateValue: '05-10-1980',
        rateLabel: 'Tarifa',
        rateValue: 'USD 8,950.00',
        extraPremiumLabel: 'Extraprima',
        extraPremiumValue: '',
        isOverDate: undefined,
        insuredType: 'spouse'
      }
    },
    {
      title: 'Dependiente 2',
      details: {
        insuredType: 'dependent',
        inPolice: true, // De la póliza
        enabledInQuote: true, // Activo en la cotización
        typeLabel: 'Dependiente',
        typeValue: 'Sara Adriana Pérez',
        birthDateLabel: 'Fecha nacimiento',
        birthDateValue: '03-03-2000',
        rateLabel: 'Tarifa',
        rateValue: 'USD 1,300.00',
        extraPremiumLabel: 'Extraprima',
        extraPremiumValue: '',
        isOverDate: true
      }
    },
    {
      title: 'Dependiente 3',
      details: {
        insuredType: 'dependent',
        inPolice: true, // De la póliza
        enabledInQuote: true, // Activo en la cotización
        typeLabel: 'Dependiente',
        typeValue: 'Eilier Vásquez Paternina',
        birthDateLabel: 'Fecha nacimiento',
        birthDateValue: '03-03-2021',
        rateLabel: 'Tarifa',
        rateValue: 'USD 1,300.00',
        extraPremiumLabel: 'Extraprima',
        extraPremiumValue: '',
        isOverDate: false
      }
    }
  ];
  public plans = [
    {
      planId: '1',
      planTitle: 'Bupa Flex 1 - Latam, el Caribe y EE.UU',
      planSubtitle: 'Cobertura mínima',
      planDescription: 'Este plan ofrece una cobertura básica para tu vehículo.',
      planPrice: 120,
      planMountLimit: ['Limite máximo: 3.5 millones'],
      planCoverage: ['Cobertura: Latinoamérica, el Caribe y EE.UU.'],
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 600', 'Fuera del País: USD 1,200'],
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
      planPrice: 240,
      planMountLimit: ['Limite máximo: 3.5 millones','Cobertura: Latinoamérica, el Caribe y EE.UU.'],
      planCoverage: [],
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 700', 'Fuera del País: USD 1,400'],
      promoPercents: '15%',
      promoPlanPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      validDate: 'Válido: febrero  1 - abril 30',
      promoPlanPrice: 204,
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
      planMountLimit: ['Limite máximo: 3.5 millones'],
      planCoverage: ['Cobertura: Latinoamérica, el Caribe y EE.UU.'],
      planPaymentPlan: 'Primer pago USD 120 <br>12 pagos adicionales  USD 52',
      deductibleMount: ['Dentro del País: USD 800', 'Fuera del País: USD 1,600'],
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
  renewalData = {
    annualPremium: 'USD 15,582.00', // Próxima prima anual
    deductibles: {
      outsideCountry: 'Fuera del país: USD 12,000.00', // Fuera del País
      insideCountry: 'Dentro del país: USD 12,000.00',  // Dentro del País
    },
    agent: 'Bupa Global Latin America - 10780', // Agente
    nextPlan: 'Advantage WW4: Plan AW54', // Próximo plan
    country: 'Ecuador', // País
  }

  activeInsuredPeople: InsuredPersonDetails[] = [];
  disabledInsuredPeople: InsuredPersonDetails[] = [];
  quoteIsDiffPolice: boolean = false;

  costosCTAsData = {
    titulo: "Costo",
    columnas: {
      subtotal: [
        { label: "Subtotal", valor: "USD 18,208.50" },
        { label: "Costo administrativo Anual", valor: "USD 86" },
        { label: "IVA (14.94%)", valor: "USD 2,584.33" }
      ],
      discounts: [
        { label: "Descuento por póliza (5%)", valor: "USD 300" },
        { label: "Extraprima (10%)", valor: "USD 2,350" },
        { label: "Descuento ONA (4%)", valor: "USD 435" }
      ],
      totals: {
        items: [
          { label: "Total", valor: "USD 19,968.40" },
          { label: "Primer pago", valor: "USD 143.60" },
          { label: "Pagos 2-12", valor: "USD 68.60" }
        ],
        nota: "Costo no incluye dependiente mayor de 24 años, quién debe obtener su propia póliza."
      }
    }
  };

  presentingElement = document.querySelector('.main-content-renewal');

  ngOnInit() {
    this.filterInsuredPeople();
  }



  calculateAge(birthDate: string): number {
    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }


  // Método para filtrar los asegurados activos y desactivados
  filterInsuredPeople() {
    this.insuredPeople.forEach(person => {
      const age = this.calculateAge(person.details.birthDateValue);
      console.log(`Person: ${person.details.typeValue}, Age: ${age}`); // Para verificar la edad calculada

      // Desactivar si la edad es 24 o más
      if (age >= 24 && person.details.insuredType === 'dependent') {
        person.details.enabledInQuote = false;
        person.details.isOverDate = true;
      }
    });

    // Filtrar asegurados activos y desactivados
    this.activeInsuredPeople = this.insuredPeople.filter(person => person.details.enabledInQuote);
    this.disabledInsuredPeople = this.insuredPeople.filter(person => !person.details.enabledInQuote);

    // Ordeno disabledInsuredPeople colocando los de 24 años o más al final
    this.disabledInsuredPeople.sort((a, b) => {
      const ageA = this.calculateAge(a.details.birthDateValue);
      const ageB = this.calculateAge(b.details.birthDateValue);

      // Si la edad es 24 o más, se coloca al final
      if (ageA >= 24 && ageB < 24) return 1;
      if (ageA < 24 && ageB >= 24) return -1;
      return 0; // Mantener el orden relativo de los otros elementos
    });

    console.log('Active insured:', this.activeInsuredPeople); // Para verificar el filtrado de asegurados activos
    console.log('Disabled insured:', this.disabledInsuredPeople); // Para verificar el filtrado de asegurados desactivados
  }



  comparePoliceQuote():boolean{
    return this.activeInsuredPeople == this.insuredPeople;
  }

  toggleInsuredPerson(person: InsuredPersonDetails) {
    if (person && person.details) {
      person.details.enabledInQuote = !person.details.enabledInQuote;
      this.filterInsuredPeople();  // Actualiza las listas activas y desactivadas
      this.checkForChangesAndSave(this.activeInsuredPeople,this.insuredPeople)
    } else {
      console.error('Invalid person object:', person);
    }
  }

  /*
  Ejercicio de comparación de póliza y cotización
  */

  // Método deepEqual dentro de la clase
  deepEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
      return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
      if (!keys2.includes(key) || !this.deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  // Método checkForChangesAndSave dentro de la clase
  checkForChangesAndSave(insuredPeople: any[], activeInsuredPeople: any[]) {
    const hasChanges = !this.deepEqual(insuredPeople, activeInsuredPeople);

    if (hasChanges) {
      sessionStorage.setItem('pendingChanges', JSON.stringify(activeInsuredPeople));
      this.presentToast();
      this.quoteIsDiffPolice = true;
    } else {
      sessionStorage.removeItem('pendingChanges');
      this.quoteIsDiffPolice = false;
    }
  }

  async presentToast() {
    await this.toast.present();
  }

  addNewInsured() {
    this.insuredPeople.push({
      title: 'Dependiente '+this.insuredPeople.length,
      details: {
        insuredType: 'dependent',
        inPolice: false,
        enabledInQuote: true, // Activo en la cotización
        typeLabel: 'Dependiente',
        typeValue: 'Darleen Vásquez Paternina',
        birthDateLabel: 'Fecha nacimiento',
        birthDateValue: '02-22-2001',
        rateLabel: 'Tarifa',
        rateValue: 'USD 1,400.00',
        extraPremiumLabel: 'Extraprima',
        extraPremiumValue: '10% (USD 7,958.50)',
        isOverDate: undefined
      }
    });
    this.filterInsuredPeople()
    //this.disabledInsuredPeople = this.insuredPeople.filter(person => !person.details.enabledInQuote);
    this.checkForChangesAndSave(this.insuredPeople,this.activeInsuredPeople)
    this.modal.dismiss()
  };
  // Método resetQuote dentro de la clase
  resetQuote(insuredPeople: any[], activeInsuredPeople: any[], disabledInsuredPeople: any[]) {
    activeInsuredPeople.length = 0;
    activeInsuredPeople.push(...insuredPeople);
    disabledInsuredPeople.length = 0;
    sessionStorage.removeItem('pendingChanges');
    alert("La cotización se ha restablecido.");
  }
}
