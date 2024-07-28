import { Transaction } from "../transaction/Transaction";

export type Coin = {
  createdAt: Date;
  currency: number | null;
  description: string | null;
  id: string;
  name: string | null;
  symbolField: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
