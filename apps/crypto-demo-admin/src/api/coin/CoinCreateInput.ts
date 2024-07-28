import { TransactionCreateNestedManyWithoutCoinsInput } from "./TransactionCreateNestedManyWithoutCoinsInput";

export type CoinCreateInput = {
  currency?: number | null;
  description?: string | null;
  name?: string | null;
  symbolField?: string | null;
  transactions?: TransactionCreateNestedManyWithoutCoinsInput;
};
