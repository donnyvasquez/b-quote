import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bupa-quote-product-summary-price',
  templateUrl: './bupa-quote-product-summary-price.component.html',
  styleUrls: ['./bupa-quote-product-summary-price.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class BupaQuoteProductSummaryPriceComponent {

  @Input() planPrice!: number | undefined;
  @Input() promoPlanPrice!: number | undefined;

}
