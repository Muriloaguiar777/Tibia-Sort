export interface Participant {
  id: string;
  name: string;
}

export type Currency = 'TC' | 'BRL';

export interface RaffleItem {
  id: string;
  name: string;
  imageUrl: string;
  ticketPrice: number;
  ticketCurrency: Currency;
  totalTickets: number;
  minTickets: number;
  endDate: string; // ISO 8601 string
  participants: Participant[];
  winner?: Participant;
}

export interface PendingPurchase {
  id: string;
  raffleId: string;
  raffleName: string;
  characterName: string;
  currency: Currency;
  amount: number;
}
