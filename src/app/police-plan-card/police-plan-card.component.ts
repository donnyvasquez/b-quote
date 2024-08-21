import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StripHtmlPipe } from "../pipes/strip-html.pipe";

@Component({
  selector: 'app-police-plan-card',
  templateUrl: './police-plan-card.component.html',
  styleUrls: ['./police-plan-card.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, StripHtmlPipe]
})
export class PolicePlanCardComponent {
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

  @Output() planSelected = new EventEmitter<void>();

  showOptions: boolean = false;
  canDismiss = true;
  presentingElement: Element | null = null;
  elementId: any;

  ngOnInit() {
    this.elementId = 'police-plan-card-'+this.planId;
    this.presentingElement = document.querySelector(this.elementId);
  }

  constructor(private modalController: ModalController) {}

  // Si el clic es en el ion-checkbox, no hacemos nada y dejamos que maneje su propio cambio
  toggleCheckbox(event: Event, checkbox: any) {
    if (event.target && ((event.target as HTMLElement).tagName === 'ION-CHECKBOX') || (event.target as HTMLElement).tagName === 'ION-ITEM')  {
      return;
    }
    // Si no fue en el ion-checkbox, cambiamos el estado del checkbox
    checkbox.checked = !checkbox.checked;
  }

  selectPlan() {
    this.planSelected.emit();
  }
}
