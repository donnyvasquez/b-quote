import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bupa-quote-product-card-limits',
  templateUrl: './bupa-quote-product-card-limits.component.html',
  styleUrls: ['./bupa-quote-product-card-limits.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class BupaQuoteProductCardLimitsComponent  implements OnInit {
  @Input() planMountLimit!: string;
  @Input() planCoverage!: string
  constructor() { }

  ngOnInit() {
    console.log('Entré al Limits Component');
  }

}
