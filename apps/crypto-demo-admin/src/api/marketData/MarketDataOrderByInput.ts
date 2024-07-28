import { SortOrder } from "../../util/SortOrder";

export type MarketDataOrderByInput = {
  coinId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  marketCap?: SortOrder;
  price?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
