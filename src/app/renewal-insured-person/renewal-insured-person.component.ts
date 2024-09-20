import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonActionsComponent } from "../button-actions/button-actions.component";
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { RouterModule } from '@angular/router';
import { BupaFieldOutputComponent } from "../bupa-field-output/bupa-field-output.component";

export interface InsuredPersonDetails {
  title: string;
  details: {
    inPolice: boolean; // Indica si proviene de la póliza
    enabledInQuote: boolean; // Indica si está habilitado en la cotización
    typeLabel: string;
    typeValue: string;
    birthDateLabel: string;
    birthDateValue: string;
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

  onToggleStatus() {
    this.togglePersonStatus.emit(this.insuredPersonData);
  }

  isTitular(): boolean {
    return this.insuredPersonData.title == 'Titular';
  }
}
