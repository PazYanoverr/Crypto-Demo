import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type MarketDataCreateInput = {
  coin?: CoinWhereUniqueInput | null;
  marketCap?: number | null;
  price?: number | null;
  timestamp?: Date | null;
  volume?: number | null;
};
