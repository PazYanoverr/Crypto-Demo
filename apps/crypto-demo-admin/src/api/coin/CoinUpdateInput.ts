import { TransactionUpdateManyWithoutCoinsInput } from "./TransactionUpdateManyWithoutCoinsInput";

export type CoinUpdateInput = {
  currency?: number | null;
  description?: string | null;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionUpdateManyWithoutCoinsInput;
};
