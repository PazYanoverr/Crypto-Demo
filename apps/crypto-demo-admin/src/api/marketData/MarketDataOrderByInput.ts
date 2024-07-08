import { SortOrder } from "../../util/SortOrder";

export type MarketDataOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  marketCap?: SortOrder;
  timestamp?: SortOrder;
  price?: SortOrder;
  volume?: SortOrder;
  coinId?: SortOrder;
};
