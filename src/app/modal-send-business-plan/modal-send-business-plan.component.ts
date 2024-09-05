import { Component, Input, Output, ViewChild } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-modal-send-business-plan',
  templateUrl: './modal-send-business-plan.component.html',
  styleUrls: ['./modal-send-business-plan.component.scss'],
  standalone: true,
  imports: [RouterModule, CommonModule, IonicModule]
})
export class ModalSendBusinessPlanComponent   {
  @Input() planId!: string;
  public selectedContactMethod: string;

  canDismiss = true;
  presentingElement: Element | null = null;
  elementId: any
  @ViewChild('contactOptionsRadioGroup') radioGroup: IonRadioGroup | undefined;

  showContactOptions: boolean = false;
  selectedContactOption!: string | undefined;

  constructor() {
    this.selectedContactMethod = '';
  }

  ngOnInit() {
    this.elementId = 'police-plan-card-'+this.planId;
    this.presentingElement = document.querySelector(this.elementId);
  }

  showContactOptionsToogle() {
    this.showContactOptions = !this.showContactOptions;
    if (this.selectedContactOption = 'phone') {
      this.selectedContactOption = '';
    }
  }
  showSelectedContactOptionsChange(event: CustomEvent) {
    this.selectedContactOption = event.detail.value;

  }

}
