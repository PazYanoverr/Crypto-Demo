import { Coin } from "../coin/Coin";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  transactionType: string | null;
  transactionDate: Date | null;
  coin?: Coin | null;
};
