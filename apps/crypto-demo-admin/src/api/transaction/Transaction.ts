import { Coin } from "../coin/Coin";

export type Transaction = {
  amount: number | null;
  coin?: Coin | null;
  createdAt: Date;
  id: string;
  transactionDate: Date | null;
  transactionType: string | null;
  updatedAt: Date;
};
