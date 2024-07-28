import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  coin?: CoinWhereUniqueInput | null;
  transactionDate?: Date | null;
  transactionType?: string | null;
};
