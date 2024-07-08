import { Coin } from "../coin/Coin";

export type MarketData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  marketCap: number | null;
  timestamp: Date | null;
  price: number | null;
  volume: number | null;
  coin?: Coin | null;
};
