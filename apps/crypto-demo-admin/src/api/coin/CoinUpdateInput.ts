import { MarketDataUpdateManyWithoutCoinsInput } from "./MarketDataUpdateManyWithoutCoinsInput";
import { TransactionUpdateManyWithoutCoinsInput } from "./TransactionUpdateManyWithoutCoinsInput";

export type CoinUpdateInput = {
  currency?: number | null;
  description?: string | null;
  marketDataItems?: MarketDataUpdateManyWithoutCoinsInput;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionUpdateManyWithoutCoinsInput;
};
