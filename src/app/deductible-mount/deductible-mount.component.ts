import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BupaInsuredCarouselComponent } from '../bupa-insured-carousel/bupa-insured-carousel.component';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';

@Component({
  selector: 'app-deductible-mount',
  templateUrl: './deductible-mount.component.html',
  styleUrls: ['./deductible-mount.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, StripHtmlPipe, BupaInsuredCarouselComponent, IonicModule],
})
export class DeductibleMountComponent  {
  @Input() deductibleMount: string[] = [];
  @Input() planId: string = '';
  @Input() planTitle: string = '';
  @Input() deduciblePlans: any[] = [];
  canDismiss = true;

  presentingElement = document.querySelector('ion-router-outlet'); // Ajusta según tu caso

  constructor() {}


}
