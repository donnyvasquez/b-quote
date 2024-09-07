import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import * as allIcons from 'ionicons/icons';
import { StripHtmlPipe } from './pipes/strip-html.pipe';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, StripHtmlPipe],
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
