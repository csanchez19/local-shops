import { PaymentTransaction } from '../models/commerce.model';

export interface PaymentRepository {
  processPayment(amount: number, commerceName: string): Promise<PaymentTransaction>;
}
