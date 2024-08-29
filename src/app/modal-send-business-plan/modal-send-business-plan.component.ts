import { Component, Input, Output } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

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

  constructor() {
    this.selectedContactMethod = '';
  }

  ngOnInit() {
    this.elementId = 'police-plan-card-'+this.planId;
    this.presentingElement = document.querySelector(this.elementId);
  }

}
