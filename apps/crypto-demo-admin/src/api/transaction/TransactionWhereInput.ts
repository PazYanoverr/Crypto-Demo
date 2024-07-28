import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CoinWhereUniqueInput } from "../coin/CoinWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  coin?: CoinWhereUniqueInput;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  transactionType?: StringNullableFilter;
};
