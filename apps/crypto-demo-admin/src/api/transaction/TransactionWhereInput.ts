import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  transactionType?: StringNullableFilter;
  transactionDate?: DateTimeNullableFilter;
  coin?: CoinWhereUniqueInput;
};
