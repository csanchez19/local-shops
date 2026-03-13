export interface UserProfile {
  name: string;
  totalPoints: number;
}

export interface Shop {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface PaymentTransaction {
  id: string;
  amount: number;
  timestamp: string | Date;
  commerceName: string;
  status: 'pending' | 'completed' | 'failed';
  pointsEarned: number;
}
