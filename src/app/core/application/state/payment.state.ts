import { Injectable, signal, computed } from '@angular/core';
import { PaymentTransaction, Shop, UserProfile } from '../../domain/models/commerce.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentState {
  private _transactions = signal<PaymentTransaction[]>([]);
  private _shops = signal<Shop[]>([]);
  private _user = signal<UserProfile | null>(null);
  
  public transactions = computed(() => this._transactions());
  public shops = computed(() => this._shops());
  public user = computed(() => this._user());

  public totalPoints = computed(() => 
    this._transactions().reduce((acc, curr) => acc + curr.pointsEarned, 0) + (this._user()?.totalPoints || 0)
  );

  constructor() {
    this.loadInitialData();
  }

  private async loadInitialData() {
    try {
      const response = await fetch('/assets/data.json');
      const data = await response.json();
      
      this._user.set(data.user);
      this._shops.set(data.shops);
      this._transactions.set(data.transactions);
    } catch (error) {
      console.error('Failed to load initial data:', error);
    }
  }

  public addTransaction(transaction: PaymentTransaction): void {
    this._transactions.update(prev => [transaction, ...prev]);
  }
}
