import { Component, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { PaymentService } from '../../../core/application/services/payment.service';
import { IonList, IonItem, IonLabel, IonNote, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { star } from 'ionicons/icons';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonNote, IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonIcon, CurrencyPipe, DatePipe],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  public paymentService = inject(PaymentService);

  constructor() {
    addIcons({ star });
  }

  getShopImage(commerceName: string): string {
    const shop = this.paymentService.shops().find(s => s.name === commerceName);
    return shop?.image || '🏪';
  }

  parseDate(dateString: string | Date): Date {
    return new Date(dateString);
  }
}
