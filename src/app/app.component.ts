import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // Registrar todos los íconos disponibles
    const icons = Object.keys(allIcons).reduce((iconsObj, iconName) => {
      iconsObj[iconName] = (allIcons as any)[iconName];
      return iconsObj;
    }, {} as { [key: string]: string });

    addIcons(icons);
  }
}
