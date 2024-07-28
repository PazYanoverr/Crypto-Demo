import { Coin } from "../coin/Coin";

export type MarketData = {
  coin?: Coin | null;
  createdAt: Date;
  id: string;
  marketCap: number | null;
  price: number | null;
  timestamp: Date | null;
  updatedAt: Date;
  volume: number | null;
};
