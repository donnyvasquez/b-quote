import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonActionsComponent } from "../button-actions/button-actions.component";
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { Router, RouterModule } from '@angular/router';
import { BupaFieldOutputComponent } from "../bupa-field-output/bupa-field-output.component";
import { InsuranceScenariosService } from '../services/insurance-scenarios.service';

export interface InsuredPersonDetails {
  title: string;
  details: {
    insuredType: string;
    inPolice: boolean; // Indica si proviene de la póliza
    enabledInQuote: boolean; // Indica si está habilitado en la cotización
    typeLabel: string;
    typeValue: string;
    birthDateLabel: string;
    birthDateValue: string;
    isOverDate: boolean | undefined; // Indica si sobrepasó la edad
    rateLabel: string;
    rateValue: string;
    extraPremiumLabel: string;
    extraPremiumValue: string;
  };
}

@Component({
  selector: 'app-renewal-insured-person',
  templateUrl: './renewal-insured-person.component.html',
  styleUrls: ['./renewal-insured-person.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, StripHtmlPipe, ButtonActionsComponent, BupaFieldOutputComponent]
})
export class RenewalInsuredPersonComponent {
  @Input() insuredPersonData!: InsuredPersonDetails;
  @Input() index!: number | string;
  @Output() togglePersonStatus = new EventEmitter<InsuredPersonDetails>();

  constructor(
    readonly insuranceScenariosService: InsuranceScenariosService,
    private router: Router,
  ){}

  onToggleStatus() {
    this.togglePersonStatus.emit(this.insuredPersonData);
  }

  navigate(route: string, policeCase: string): void {
    this.insuranceScenariosService.setPoliceCase(policeCase);
    console.log(`Navigating to ${route} with policeCase: ${policeCase}`);
    this.router.navigate([route]);
  }

  isTitular(): boolean {
    return this.insuredPersonData.details.insuredType == 'titular';
  }
}
