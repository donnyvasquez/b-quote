import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonRow, IonGrid, IonCol } from '@ionic/angular/standalone';
import { ButtonActionsComponent } from "../button-actions/button-actions.component";
import { PolicePlanCardComponent } from '../police-plan-card/police-plan-card.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ButtonActionsComponent, PolicePlanCardComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonRow, IonGrid, IonCol],
})
export class HomePage {
  constructor() {}

  onPlanSelected() {
    console.log('Plan seleccionado');
    // Lógica adicional aquí
  }
}
