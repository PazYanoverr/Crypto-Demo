import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  transactionType?: string | null;
  transactionDate?: Date | null;
  coin?: CoinWhereUniqueInput | null;
};
