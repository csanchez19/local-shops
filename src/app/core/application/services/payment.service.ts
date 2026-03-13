import { Injectable, inject } from '@angular/core';
import { PaymentState } from '../state/payment.state';
import { MockPaymentRepository } from '../../infrastructure/adapters/mock-payment.repository';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentState = inject(PaymentState);
  private paymentRepository = inject(MockPaymentRepository); // Dependency Injection points to the concrete adapter for simplicity in this frontend setup. Real-world would use an InjectionToken.

  public transactions = this.paymentState.transactions;
  public totalPoints = this.paymentState.totalPoints;
  public shops = this.paymentState.shops;
  public user = this.paymentState.user;

  public async processPayment(amount: number, commerceName: string): Promise<void> {
    try {
      const transaction = await this.paymentRepository.processPayment(amount, commerceName);
      this.paymentState.addTransaction(transaction);
    } catch (error) {
      console.error('Payment failed', error);
      throw error;
    }
  }
}
