import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-benefits-accordion',
  templateUrl: './featured-benefits-accordion.component.html',
  styleUrls: ['./featured-benefits-accordion.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class FeaturedBenefitsAccordionComponent  implements OnInit {
  @Input() isCardContentVisible: boolean = false;
  @Input() featuredBenefits: string[] = [];

  constructor() { }

  ngOnInit() {
    console.log('Estamos en el acordeon')}

}
