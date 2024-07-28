import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  transactionDate?: SortOrder;
  transactionType?: SortOrder;
  updatedAt?: SortOrder;
};
