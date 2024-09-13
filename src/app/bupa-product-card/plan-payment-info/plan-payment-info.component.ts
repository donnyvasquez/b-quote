import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-payment-info',
  templateUrl: './plan-payment-info.component.html',
  styleUrls: ['./plan-payment-info.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PlanPaymentInfoComponent {
  @Input() planPaymentPlan: string = '';
  @Input() planPrice: number = 0;
  @Input() promoPercents: string | undefined = undefined;
  @Input() promoPlanPaymentPlan: string | undefined = undefined;
  @Input() validDate: string | undefined = undefined;
  @Input() promoPlanPrice: number | undefined = undefined;
}
