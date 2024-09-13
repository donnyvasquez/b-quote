import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ButtonActionsComponent } from "../button-actions/button-actions.component";
import { BupaQuoteProductCardComponent } from '../bupa-product-card/bupa-quote-product-card/bupa-quote-product-card.component';
import { StripHtmlPipe } from '../pipes/strip-html.pipe';
import { InsuranceScenariosService } from '../services/insurance-scenarios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterModule,ButtonActionsComponent, BupaQuoteProductCardComponent, IonicModule, StripHtmlPipe, CommonModule],
})
export class HomePage implements OnInit {

  public selectedCount: number = 0;

  constructor(
    private router: Router,
    readonly insuranceScenariosService: InsuranceScenariosService
  ) {}

  ngOnInit() {
    this.selectedCount = 0;
  }

  onPlanSelected(isChecked: boolean) {
    if (isChecked) {
      this.selectedCount++;
    } else {
      this.selectedCount--;
    }
    console.log('Planes seleccionados '+this.selectedCount);
  }

  navigate(route: string, policeCase: string): void {
    this.insuranceScenariosService.setPoliceCase(policeCase);
    console.log(`Navigating to ${route} with policeCase: ${policeCase}`);
    this.router.navigate([route]);
  }
}
