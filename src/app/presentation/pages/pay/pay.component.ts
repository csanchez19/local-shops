import { Component, signal, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { IonContent, IonButton, IonCard, IonHeader, IonToolbar, IonTitle, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonFabButton } from '@ionic/angular/standalone';
import { PaymentService } from '../../../core/application/services/payment.service';
import { addIcons } from 'ionicons';
import { walletOutline, qrCodeOutline, storefrontOutline, scanOutline, star, closeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-pay',
  standalone: true,
  imports: [IonContent, IonButton, IonCard, IonHeader, IonToolbar, IonTitle, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonText, IonFabButton, CurrencyPipe],
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.css'
})
export class PayComponent {
  public qrGenerated = signal(false);
  public isScanning = signal(false);
  public paymentService = inject(PaymentService);

  constructor() {
    addIcons({ walletOutline, qrCodeOutline, storefrontOutline, scanOutline, star, closeOutline });
  }

  showMyQR() {
    this.qrGenerated.set(true);
    
    // Simulate a successful scan by a random merchant after 4 seconds
    const shops = this.paymentService.shops();
    const randomShop = shops[Math.floor(Math.random() * shops.length)];
    
    this.isScanning.set(true);
    
    setTimeout(async () => {
      if (!this.qrGenerated()) return; // User closed before scan
      try {
        await this.paymentService.processPayment(Math.floor(Math.random() * 50) + 5, randomShop.name);
        alert(`¡Completado! Has pagado en ${randomShop.name} y ganado puntos.`);
      } catch (e) {
        // Handle error silently or alert
      } finally {
        this.qrGenerated.set(false);
        this.isScanning.set(false);
      }
    }, 4000);
  }

  closeQR() {
    this.qrGenerated.set(false);
    this.isScanning.set(false);
  }
}

