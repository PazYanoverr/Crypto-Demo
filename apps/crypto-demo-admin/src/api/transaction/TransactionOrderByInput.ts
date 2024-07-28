import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  coinId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  transactionDate?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
