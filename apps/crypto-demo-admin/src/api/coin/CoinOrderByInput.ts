import { SortOrder } from "../../util/SortOrder";

export type CoinOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  symbolField?: SortOrder;
  description?: SortOrder;
  currency?: SortOrder;
};
