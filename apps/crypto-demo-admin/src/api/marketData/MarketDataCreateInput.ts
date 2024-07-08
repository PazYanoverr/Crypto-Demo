import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type MarketDataCreateInput = {
  marketCap?: number | null;
  timestamp?: Date | null;
  price?: number | null;
  volume?: number | null;
  coin?: CoinWhereUniqueInput | null;
};
