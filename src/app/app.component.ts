import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cardOutline, timeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor() {
    addIcons({ cardOutline, timeOutline });
  }
}
