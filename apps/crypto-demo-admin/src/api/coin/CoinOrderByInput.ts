import { SortOrder } from "../../util/SortOrder";

export type CoinOrderByInput = {
  createdAt?: SortOrder;
  currency?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
