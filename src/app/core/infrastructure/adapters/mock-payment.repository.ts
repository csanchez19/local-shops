import { Injectable } from '@angular/core';
import { PaymentRepository } from '../../domain/repositories/payment.repository';
import { PaymentTransaction } from '../../domain/models/commerce.model';

@Injectable({
  providedIn: 'root'
})
export class MockPaymentRepository implements PaymentRepository {
  async processPayment(amount: number, commerceName: string): Promise<PaymentTransaction> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTransaction: PaymentTransaction = {
          id: `TX-${Math.random().toString(36).substring(2, 11)}`,
          amount,
          commerceName,
          timestamp: new Date(),
          status: 'completed',
          pointsEarned: Math.floor(amount * 0.1)
        };
        resolve(newTransaction);
      }, 3000);
    });
  }
}
