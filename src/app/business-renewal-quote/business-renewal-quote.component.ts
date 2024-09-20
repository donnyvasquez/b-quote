import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonActionsComponent } from "../button-actions/button-actions.component";
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { RouterModule } from '@angular/router';
import { BupaFieldOutputComponent } from "../bupa-field-output/bupa-field-output.component";
import { InsuredPersonDetails, RenewalInsuredPersonComponent } from "../renewal-insured-person/renewal-insured-person.component";

@Component({
  selector: 'app-business-renewal-quote',
  templateUrl: './business-renewal-quote.component.html',
  styleUrls: ['./business-renewal-quote.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, StripHtmlPipe, ButtonActionsComponent, BupaFieldOutputComponent, RenewalInsuredPersonComponent]
})
export class BusinessRenewalQuoteComponent implements OnInit {

  insuredPeople: InsuredPersonDetails[] = [
    {
      title: 'Titular',
      details: {
        inPolice: true,  // De la póliza
        enabledInQuote: true,  // Activo en la cotización
        typeLabel: 'Titular/Guardián',
        typeValue: 'María Pérez Puertos',
        birthDateLabel: 'Fecha nacimiento',
        birthDateValue: '02-12-1977',
        rateLabel: 'Tarifa',
        rateValue: 'USD 7,235.00',
        extraPremiumLabel: 'Extraprima',
        extraPremiumValue: '10% (USD 7,958.50)'
      }
    },
    {
      title: 'Cónyuge',
      details: {
        inPolice: true,  // De la póliza
        enabledInQuote: true,  // Activo en la cotización
        typeLabel: 'Dependiente',
        typeValue: 'José Adrián Pérez Puertos',
        birthDateLabel: 'Fecha nacimiento',
        birthDateValue: '05-10-1980',
        rateLabel: 'Tarifa',
        rateValue: 'USD 8,950.00',
        extraPremiumLabel: 'Extraprima',
        extraPremiumValue: ''
      }
    },
    {
      title: 'Dependiente 2',
      details: {
        inPolice: true,  // De la póliza
        enabledInQuote: true,  // Activo en la cotización
        typeLabel: 'Dependiente',
        typeValue: 'Sara Adriana Pérez',
        birthDateLabel: 'Fecha nacimiento',
        birthDateValue: '03-03-2010',
        rateLabel: 'Tarifa',
        rateValue: 'USD 1,300.00',
        extraPremiumLabel: 'Extraprima',
        extraPremiumValue: ''
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
  ngOnInit() {
    this.filterInsuredPeople();
  }

  // Método para filtrar los asegurados activos y desactivados
  filterInsuredPeople() {
    this.activeInsuredPeople = this.insuredPeople.filter(person => person.details.enabledInQuote);
    this.disabledInsuredPeople = this.insuredPeople.filter(person => !person.details.enabledInQuote);
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
      alert("Hay cambios pendientes de guardar.");
      this.quoteIsDiffPolice = true;
    } else {
      sessionStorage.removeItem('pendingChanges');
      this.quoteIsDiffPolice = false;
    }
  }

  // Método resetQuote dentro de la clase
  resetQuote(insuredPeople: any[], activeInsuredPeople: any[], disabledInsuredPeople: any[]) {
    activeInsuredPeople.length = 0;
    activeInsuredPeople.push(...insuredPeople);
    disabledInsuredPeople.length = 0;
    sessionStorage.removeItem('pendingChanges');
    alert("La cotización se ha restablecido.");
  }
}
